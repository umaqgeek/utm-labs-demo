<?php
require 'vendor/autoload.php';
require './config.php';

// Connect to the database
$conn = getDbConnection();

$app = new \Slim\App;

$app->get('/', function ($request, $response, $args) {
    return $response->write("Backend API");
});

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

$app->run();
