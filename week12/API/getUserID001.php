<?php
header("Access-Control-Allow-Origin: *");

class User {
    public $id = "";
    public $name = "";
    public $email = "";
}

$user = new User();
$user->id = "ID001";
$user->name = "Umar Mukhtar";
$user->email = "umaq@gmail.com";

echo json_encode($user);
?>