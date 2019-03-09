<?php

include("establishConn.php");

//Prepare and bind for insertion
$sql = $conn->prepare("INSERT INTO user_info (username, password) VALUES(?, ?)");
$test = $conn->prepare("SELECT user_id  FROM user_info WHERE username = ?");

$test->bind_param("s",$username);
$sql->bind_param("ss", $username, $password);

//Get data from the JSON post
$input = json_decode(file_get_contents('php://input'), true);

$username = $input["username"];
$password = $input["password"];

$test->execute();
$result = $test->get_result();

if($result->num_rows > 0)
{
        $payload = '{"error": "Username taken"}';

}

else
{
        $sql->execute();
        $payload = '{"error": ""}';
}


header('Content-type: application/json');
echo $payload;
                    
