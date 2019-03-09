<?php

include("establishConn.php");

$sql = $conn->prepare("SELECT * FROM user_info WHERE username=? and password=?");
$sql->bind_param("ss", $username, $password);

$input = json_decode(file_get_contents('php://input'), true);

$username = $input["username"];
$password = $input["password"];

$sql->execute();
$response = $sql->get_result();

//Username or Password Incorrect
if($response->num_rows == 0)
{
        $payload = '{"error": "login failed"}';
        sendJson($payload);
}

else
{
        $data = $response->fetch_all();
        returnWithInfo($data[0][0], $data[0][1], $data[0][2]);  
}


function sendJson($obj)
{
        header('Content-type: application/json');
        echo $obj;
}

function returnWithInfo($id, $username, $password)
{
        $payload = '{"user_id":' . $id . ',"username":"' . $username . '","password":"' . $password . '"}';
        sendJson($payload);
}







