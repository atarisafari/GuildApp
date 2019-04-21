<?php

include("establishConn.php");
include("validateToken.php");
include("helpers.php");

$input = getRequestInfo();
$userInfo = processToken($input, $key);
$text = $input["search_text"];

$userID = $userInfo["user_id"];
$sql = $conn->prepare("SELECT * FROM user_relationship where (user_first_id = ? OR user_second_id = ?) AND type = 'friends'");
$sql->bind_param("ii", $userID, $userID);

$sql->execute();
$result = $sql->get_result();

$friendIDs = array();

while($row = $result->fetch_assoc())
{
        if($row["user_first_id"] == $userID)
                array_push($friendIDs, $row["user_second_id"]);
        else
                array_push($friendIDs, $row["user_first_id"]);
}

//print_r($friendIDs);

$ret = array();


$result = $conn->query("SELECT * FROM user_info WHERE user_id IN (".implode(',',$friendIDs).") AND username LIKE '$text%'");

$ret = array();

if($result->num_rows == 0)
{
        returnError("User not found");
        die();
}

while($row = $result->fetch_assoc())
{
       $ret[] = array('username' => $row["username"], 'display_name' => $row["display_name"], 'profile_pic_url' => $row["profile_pic_url"]);
}

echo json_encode($ret);

