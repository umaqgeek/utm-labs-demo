<?php
require 'vendor/autoload.php';
require './config.php';
require 'corsMiddleware.php';

// Connect to the database
$conn = getDbConnection();

$app = new \Slim\App;

// Add CORS middleware
$app->add('corsMiddleware');

// GET /
$app->get('/', function ($request, $response, $args) {
    return $response->write("<h2>Backend Server</h2>");
});

// GET /users
$app->get('/users', function ($request, $response, $args) use ($conn) {
    $sql = "SELECT * FROM user";
    $result = $conn->query($sql);
    $users = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $users[] = $row;
        }
    }
    return $response
        ->withJson($users)
        ->withHeader('Access-Control-Allow-Origin', '*');
});

// GET /user/{id}
$app->get('/user/{id}', function ($request, $response, $args) use ($conn) {
    if (isset($args['id']) && !empty($args['id'])) {
        $user_id = $args['id'];
        $sql = "SELECT * FROM user WHERE id = '$user_id'";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $user = $result->fetch_assoc();
            return $response
                ->withJson($user)
                ->withHeader('Access-Control-Allow-Origin', '*');
        } else {
            return $response
                ->withJson(["message" => "User not found!"])
                ->withHeader('Access-Control-Allow-Origin', '*')
                ->withStatus(404);
        }
    } else {
        return $response
            ->withJson(["message" => "User ID is not defined!"])
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withStatus(401);
    }
});

// POST /user
$app->post('/user', function ($request, $response, $args) use ($conn) {
    $data = $request->getParsedBody();
    if (isset($data['name']) && !empty($data['name']) && isset($data['email']) && !empty($data['email'])) {
        $name = $conn->real_escape_string($data['name']);
        $email = $conn->real_escape_string($data['email']);
        $sql = "INSERT INTO user(name, email) VALUES ('$name', '$email')";
        $result = $conn->query($sql);
        if ($result === TRUE) {
            return $response
                ->withJson(["message" => "User created successfully", "id" => $conn->insert_id])
                ->withHeader('Access-Control-Allow-Origin', '*');
        } else {
            return $response
                ->withJson(["message" => $conn->error])
                ->withHeader('Access-Control-Allow-Origin', '*')
                ->withStatus(500);
        }
    } else {
        return $response
            ->withJson(["message" => "Name and email is empty!"])
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withStatus(401);
    }
});

// PUT /user/{id}
$app->put('/user/{id}', function ($request, $response, $args) use ($conn) {
    if (isset($args['id']) && !empty($args['id'])) {
        $user_id = $args['id'];
        $sql = "SELECT * FROM user WHERE id = '$user_id'";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $user = $result->fetch_assoc();
            $data = $request->getParsedBody();
            $name = isset($data['name']) && !empty($data['name']) ? $conn->real_escape_string($data['name']) : $user['name'];
            $email = isset($data['email']) && !empty($data['email']) ? $conn->real_escape_string($data['email']) : $user['email'];
            $sql = "UPDATE user SET name = '$name', email = '$email' WHERE id = '$user_id'";
            $result = $conn->query($sql);
            if ($result === TRUE) {
                return $response
                    ->withJson(["message" => "User updated successfully"])
                    ->withHeader('Access-Control-Allow-Origin', '*');
            } else {
                return $response
                    ->withJson(["message" => $conn->error])
                    ->withHeader('Access-Control-Allow-Origin', '*')
                    ->withStatus(500);
            }
        } else {
            return $response
                ->withJson(["message" => "User not found!"])
                ->withHeader('Access-Control-Allow-Origin', '*')
                ->withStatus(404);
        }
    } else {
        return $response
            ->withJson(["message" => "User ID is not defined!"])
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withStatus(401);
    }
});

// DELETE /user/{id}
$app->delete('/user/{id}', function ($request, $response, $args) use ($conn) {
    if (isset($args['id']) && !empty($args['id'])) {
        $user_id = $args['id'];
        $sql = "SELECT * FROM user WHERE id = '$user_id'";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $sql = "DELETE FROM user WHERE id = '$user_id'";
            $result = $conn->query($sql);
            if ($result === TRUE) {
                return $response
                    ->withJson(["message" => "User deleted successfully"])
                    ->withHeader('Access-Control-Allow-Origin', '*');
            } else {
                return $response
                    ->withJson(["message" => $conn->error])
                    ->withHeader('Access-Control-Allow-Origin', '*')
                    ->withStatus(500);
            }
        } else {
            return $response
                ->withJson(["message" => "User not found!"])
                ->withHeader('Access-Control-Allow-Origin', '*')
                ->withStatus(404);
        }
    } else {
        return $response
            ->withJson(["message" => "User ID is not defined!"])
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withStatus(401);
    }
});

$app->run();
