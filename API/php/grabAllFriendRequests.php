<?php
include("establishConn.php");
include("validateToken.php");
include("helpers.php");
$input = getRequestInfo();
$userInfo = processToken($input, $key);
$userID = $userInfo["user_id"];

$sql = $conn->prepare("SELECT * FROM user_relationship WHERE (user_first_id = ? AND type = ?) OR (user_second_id = ? AND type = ?)");
$sql->bind_param("isis",$userID,$str2,$userID,$str1);
$str1 = 'pending_first_second';
$str2 = 'pending_second_first';
$sql->execute();
$result = $sql->get_result();

if($result->num_rows == 0)
{
        returnError("No friend requests");
        die();
}

$IDs = array();

while($row = $result->fetch_assoc())
{
        if($row["user_first_id"] == $userID)
                array_push($IDs,$row["user_second_id"]);
        else
                array_push($IDs,$row["user_first_id"]);
}

$sql = $conn->query("SELECT * FROM user_info WHERE user_id IN(".implode(',',$IDs).")");
$ret = array();

//print_r($IDs);
if(!$sql)
{
        returnError($sql->error);
        die();
}

while($row = $sql->fetch_assoc())
{
        $ret[] = array('username' => $row["username"], 'display_name' => $row["display_name"], 'profile_pic_url' => $row["profile_pic_url"]);
}

echo json_encode($ret);
