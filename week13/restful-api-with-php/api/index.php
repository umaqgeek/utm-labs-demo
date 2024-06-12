<?php
header('Content-Type: application/json');
require_once '../config.php';


// Helper function to get input data
function get_input_data()
{
    return json_decode(file_get_contents('php://input'), true);
}


// Connect to the database
$conn = getDbConnection();


// Parse the request URL to determine the resource and ID
$request_uri = explode('?', $_SERVER['REQUEST_URI'], 2);
$path = trim($request_uri[0], '/');
$segments = explode('/', $path);
$resource = $segments[1] ?? null;
$id = $segments[2] ?? null;

// GET http://localhost/api
if ($_SERVER['REQUEST_METHOD'] == 'GET' && $resource == '') {
    echo "Nothing to see here.";
}

// GET http://localhost/api/users
// Fetch all users
if ($_SERVER['REQUEST_METHOD'] == 'GET' && $resource == 'users' && !$id) {
    $sql = "SELECT * FROM user";
    $result = $conn->query($sql);
    $users = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $users[] = $row;
        }
    }
    echo json_encode($users);
}

// GET http://localhost/api/users/<id>
// Fetch a specific user
if ($_SERVER['REQUEST_METHOD'] == 'GET' && $resource == 'users' && $id) {
    $id = intval($id);
    $sql = "SELECT * FROM user WHERE id = $id";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        echo json_encode($result->fetch_assoc());
    } else {
        echo json_encode(["message" => "User not found"]);
    }
}

// POST http://localhost/api/users
// Insert a new user
if ($_SERVER['REQUEST_METHOD'] == 'POST' && $resource == 'users') {
    $id = $conn->real_escape_string($_POST['id']);
    $name = $conn->real_escape_string($_POST['name']);
    $email = $conn->real_escape_string($_POST['email']);
    $sql = "INSERT INTO user (id, name, email) VALUES ('$id', '$name', '$email')";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "User created successfully", "id" => $conn->insert_id]);
    } else {
        echo json_encode(["message" => "Error: " . $conn->error]);
    }
}


// PUT http://localhost/api/user/<id>
// Update a user
if ($_SERVER['REQUEST_METHOD'] == 'POST' && $resource == 'user' && $id) {
    $name = $conn->real_escape_string($_POST['name']);
    $email = $conn->real_escape_string($_POST['email']);
    $sql = "SELECT * FROM user WHERE id = '$id'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $sql = "UPDATE user SET name = '$name', email = '$email' WHERE id = '$id'";
        if ($conn->query($sql) === TRUE) {
            echo json_encode(["message" => "User updated successfully", "id" => $id]);
        } else {
            echo json_encode(["message" => "Error: " . $conn->error]);
        }
    } else {
        echo json_encode(["message" => "User not found"]);
    }
}


// patch a user
//complete the code here


// Delete a user
// DELETE http://localhost/api/user/<id>
if ($_SERVER['REQUEST_METHOD'] == 'DELETE' && $resource == 'user' && $id) {
    $sql = "SELECT * FROM user WHERE id = '$id'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $sql = "DELETE FROM user WHERE id = '$id'";
        if ($conn->query($sql) === TRUE) {
            echo json_encode(["message" => "User deleted successfully", "id" => $id]);
        } else {
            echo json_encode(["message" => "Error: " . $conn->error]);
        }
    } else {
        echo json_encode(["message" => "User not found"]);
    }
}


$conn->close();
