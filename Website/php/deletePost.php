  GNU nano 2.9.3                                                                                                      deletePost.php                                                                                                                

<?php

include("establishConn.php");
include("validateToken.php");

$sql = $conn->prepare("DELETE FROM posts WHERE post_id = ?");
$test = $conn->prepare("SELECT user_id FROM posts WHERE post_id = ?");

$sql->bind_param("i", $postID);
$test->bind_param("i", $postID);

$input = json_decode(file_get_contents('php://input'), true);

$token = $input["token"];
$postID = $input["post_id"];

$retVal = validateToken($token, $key);

//If validation fails, exit and return an error
if(!$retVal)
{
        $payload = '{"error": "Invalid token"}';
        sendJSON($payload);
        exit();
}

$userInfo = json_decode($retVal, true);
$userID = $userInfo["user_id"];

$test->execute();
$result = $test->get_result();
$data = $result->fetch_all();

if($userID != $data[0][0])
{
        echo $userID;
        //You don't have access to delete this
        $payload = '{"error": "Invalid user"}';
        //sendJSON($payload);
        exit();
}

$sql->execute();

function sendJSON($obj)
{
        header('Content-type: application/json');
        echo $obj;
}



