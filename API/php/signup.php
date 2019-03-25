<?php

include("establishConn.php");
include("helpers.php");

//Prepare and bind for insertion
$sql = $conn->prepare("INSERT INTO user_info (username, password) VALUES(?, ?)");
$test = $conn->prepare("SELECT user_id  FROM user_info WHERE username = ?");

$test->bind_param("s",$username);
$sql->bind_param("ss", $username, $password);

//Get data from the JSON post
$input = getRequestInfo();

$username = $input["username"];
$password = $input["password"];

if($username == "" || $password == "")
{
        $payload = '{"error": "Username/Password cannot be blank"}';
        sendJson($payload);
        exit();
}

$test->execute();
$result = $test->get_result();

if($result->num_rows > 0)
{
        $payload = '{"error": "Username taken"}';
        sendJson($payload);
}

else
{
        $sql->execute();
        $payload = '{"error": ""}';
        sendJson($payload);
}

function sendJson($obj)
{
        header('Content-type: application/json');
        echo $obj;
}

$sql->close();
$test->close();
$conn->close();
