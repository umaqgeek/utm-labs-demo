<?php
header('Access-Control-Allow-Origin: *');

//lets create a json object - user
class User
{
    public $id = "";
    public $name = "";
    public $email = "";
}

$users = array();
$user = new User();
$user->id = "id10111";
$user->name = "AHMAD MAHMADI";
$user->email = "ammdi@gmail.com";
array_push($users, $user);
$user = new User();
$user->id = "id20222";
$user->name = "PHUA";
$user->email = "phua@gmail.com";
array_push($users, $user);
$user = new User();
$user->id = "id20333";
$user->name = "ZACK";
$user->email = "zack@gmail.com";
array_push($users, $user);

echo json_encode($users);
?>