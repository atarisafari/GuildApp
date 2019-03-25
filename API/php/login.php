
<?php

include("establishConn.php");
require_once 'vendor/autoload.php';
use \Firebase\JWT\JWT;

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
        $error = "Incorrect Username or Password";
        $token = "";
        returnWithInfo($token,$error);
}

else
{
        $data = $response->fetch_all();
        $username = $data[0][1];
        $displayname = $data[0][3];
        $id = $data[0][0];
        $key = "asahh bromeegs";

        $token = array(
        "username" => $username,
        "displayname" => $displayName,
        "user_id" => $id
        );

        $jwt = JWT::encode($token, $key);
        $error = "";
        returnWithInfo($jwt,$error);
}


function sendJson($obj)
{
        header('Content-type: application/json');
        echo $obj;
}

function returnWithInfo($token, $error)
{
        $payload = array('token' => $token, 'error' => $error);
        sendJson(json_encode($payload));
}






