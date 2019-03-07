<?php

include("establishConn.php");

//Prepare and bind for insertion
$sql = $conn->prepare("INSERT INTO user_info (username, password) VALUES(?, ?)"$
$sql->bind_param("ss", $username, $password);

//Get data from the JSON post
$input = json_decode(file_get_contents('php://input'), true);

//Need to add a check to see if username is taken

$username = $input["username"];
$password = $input["password"];

$sql->execute();
