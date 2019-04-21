<?php

include("establishConn.php");
include("validateToken.php");
include("helpers.php");

$sql = $conn->prepare("DELETE FROM comments WHERE comment_id = ?");
$test = $conn->prepare("SELECT user_id FROM comments WHERE comment_id = ?");

$sql->bind_param("i", $commentID);
$test->bind_param("i", $commentID);

$input = getRequestInfo();

$commentID = $input["comment_id"];

$userInfo = processToken($input, $key);
$userID = $userInfo["user_id"];

$test->execute();
$result = $test->get_result();
$data = $result->fetch_all();

if($userID != $data[0][0])
{
        //You don't have access to delete this
        $payload = returnError("Invalid user");
        sendJSON($payload);
        exit();
}

$sql->execute();

//Check if comment was deleted
$test->execute();
$result = $test->get_result();

if($result->num_rows > 0)
        returnError("Couldn't delete comment. Try again");

else
        returnError("");
