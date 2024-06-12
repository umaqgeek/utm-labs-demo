<?php
require 'vendor/autoload.php';

$app = new \Slim\App;

// http://localhost/api/
$app->get('/', function ($request, $response, $args) {
    return $response->write("Hello, World!");
});

$helloNothing = function($request, $response, $args) {
    return "Hello Nothing.";
};

// http://localhost/api/hello
$app->get('/hello', $helloNothing);

// http://localhost/api/hello/
$app->get('/hello/', $helloNothing);

// http://localhost/api/hello/<name>
$app->get('/hello/{name}', function ($request, $response, $args) {
    $name = $args['name'];
    return $response->write("Selamat datang ..., $name");
});

// http://localhost/api/users
$app->get('/users', function ($request, $response, $args) {
    $userObject = [
        'id' => 1,
        'name' => 'John Doe',
        'email' => 'john@example.com',
        // Add other user attributes here
    ];
    return $response->withJson($userObject);
});

$app->run();
