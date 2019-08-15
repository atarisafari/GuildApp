<?php

include("establishConn.php");
include("validateToken.php");
include("helpers.php");

$input = getRequestInfo();
$userInfo = processToken($input, $key);
$userID = $userInfo["user_id"];

$postID = $input["post_id"];
$content = $input["content"];

$test = $conn->prepare("SELECT user_id FROM posts WHERE post_id = ?");
$test->bind_param("i",$postID);
$test->execute();

$result = $test->get_result();

if($result->num_rows == 0)
{
        returnError("Post not found");
}

else
{
        $data = $result->fetch_all();
        $secondUser = $data[0][0];

        $test = $conn->prepare("SELECT type FROM user_relationship WHERE user_first_id = ? AND user_second_id = ? AND type = ?");

        $type = 'friends';

        if($secondUser < $userID)
                $test->bind_param("iis",$secondUser,$userID,$type);
        else
                $test->bind_param("iis",$userID,$secondUser,$type);
        $test->execute();
        $result = $test->get_result();

        if($result->num_rows == 0)
        {
                returnError("You aren't friends");
                die();
        }

        $sql = $conn->prepare("INSERT INTO comments (user_id, post_id, content) VALUES (?, ?, ?)");
        $sql->bind_param("iis",$userID,$postID,$content);
        $sql->execute();

        $update = $conn->query("UPDATE posts SET num_comments = (num_comments + 1) WHERE post_id = ".$postID."");

        if($update)
                returnError("");
}
