<?php

include("establishConn.php");
include("helpers.php");

//Prepare and bind for insertion
$sql = $conn->prepare("INSERT INTO user_info (username, password) VALUES(LEFT(?,20), ?)");
$test = $conn->prepare("SELECT user_id  FROM user_info WHERE username = ?");

$test->bind_param("s",$username);
$sql->bind_param("ss", $username, $password);

//Get data from the JSON post
$input = getRequestInfo();

$username = $input["username"];
$password = $input["password"];

if($username == "" || $password == "")
{
        $payload = returnError("Username/Password cannot be blank");
        sendJSON($payload);
        exit();
}

$test->execute();
$result = $test->get_result();

if($result->num_rows > 0)
{
        $payload = returnError("Username taken");
        sendJSON($payload);
}

else
{
        $sql->execute();
        $payload = returnError("");
        sendJSON($payload);
}

$sql->close();
$test->close();
$conn->close();
