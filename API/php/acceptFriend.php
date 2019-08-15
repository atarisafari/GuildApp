<?php

include("establishConn.php");
include("validateToken.php");
include("helpers.php");

$input = getRequestInfo();
$userInfo = processToken($input, $key);
$userID = $userInfo["user_id"];

$username = $input["username"];

$test = $conn->prepare("SELECT user_id FROM user_info WHERE username = ?");
$test->bind_param("s",$username);
$test->execute();
$result = $test->get_result();

if($result->num_rows == 0)
{
        returnError("User not found");
        die();
}

$data = $result->fetch_all();
$secondUser = $data[0][0];

$sql = $conn->prepare("SELECT type FROM user_relationship WHERE user_first_id = ? AND user_second_id = ? AND type = ?");

if($userID < $secondUser)
{
        $sql->bind_param("iis",$userID,$secondUser,$type);
        $type = 'pending_second_first';
}

else
{
        $sql->bind_param("iis",$secondUser,$userID,$type);
        $type = 'pending_first_second';
}

$sql->execute();
$result = $sql->get_result();

if($result->num_rows == 0)
{
        returnError("Request not found");
        die();
}

$sql = $conn->prepare("UPDATE user_relationship SET type = ? WHERE user_first_id = ? AND user_second_id = ?");

if($userID < $secondUser)
{
        $sql->bind_param("sii",$type,$userID,$secondUser);
}

else
{
        $sql->bind_param("sii",$type,$secondUser,$userID);
}

$type = 'friends';

$sql->execute();

returnError("");
