<?php

include("establishConn.php");
include("validateToken.php");
include("helpers.php");

$sql = $conn->prepare("DELETE FROM posts WHERE post_id = ?");
$test = $conn->prepare("SELECT user_id FROM posts WHERE post_id = ?");

$sql->bind_param("i", $postID);
$test->bind_param("i", $postID);

$input = getRequestInfo();

$postID = $input["post_id"];

$userInfo = processToken($input, $key);
$userID = $userInfo["user_id"];

$test->execute();
$result = $test->get_result();
$data = $result->fetch_all();

if($userID != $data[0][0])
{
        //You don't have access to delete this
        $payload = '{"error": "Invalid user"}';
        sendJSON($payload);
        exit();
}

$sql->execute();



