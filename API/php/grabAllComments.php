<?php

include("establishConn.php");
include("validateToken.php");
include("helpers.php");

$input = getRequestInfo();
$userInfo = processToken($input, $key);
$userID = $userInfo["user_id"];

$postID = $input["post_id"];

$test = $conn->prepare("SELECT user_id FROM posts WHERE post_id = ?");
$test->bind_param("i",$postID);
$test->execute();
$result = $test->get_result();

if($result->num_rows == 0)
{
        returnError("Post not found");
        die();
}

$data = $result->fetch_all();
$secondUser = $data[0][0];

$test = $conn->prepare("SELECT type FROM user_relationship WHERE user_first_id = ? AND user_second_id = ? AND type = ?");

if($userID < $secondUser)
{
        $test->bind_param("iis", $userID, $secondUser, $str);
}

else
{
        $test->bind_param("iis", $secondUser, $userID, $str);
}

$str = 'friends';

$test->execute();
$result = $test->get_result();

if($result->num_rows == 0)
{
        returnError("You don't have access to this post");
        die();
}


$sql = $conn->prepare("SELECT * FROM comments WHERE post_id = ? ORDER BY time_created DESC");
$sql->bind_param("i", $postID);
$sql->execute();
$result = $sql->get_result();

while($row = $result->fetch_assoc())
{
        $commenter = $row["user_id"];
        $fetch = $conn->prepare("SELECT * FROM user_info WHERE user_id = ?");
        $fetch->bind_param("i",$commenter);
        $fetch->execute();
        $retval = $fetch->get_result();
        $data = $retval->fetch_assoc();

        $ret[]  = array('comment_id' => $row["comment_id"], 'content' => $row["content"], 'username' => $data["username"], 'time_created' => $row["time_created"], 'display_name' => $data["display_name"], 'profile_pic_url' => $data["profile_pic_url"]);

}

echo json_encode($ret);

