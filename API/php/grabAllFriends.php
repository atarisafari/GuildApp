<?php

include("establishConn.php");
include("validateToken.php");
include("helpers.php");

$input = getRequestInfo();
$userInfo = processToken($input, $key);

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

$ret = array();

foreach ($friendIDs as $obj)
{
        $userData = $conn->query("SELECT * FROM user_info WHERE user_id = ".$obj."");
        $uData = $userData->fetch_assoc();

        $preview = $conn->query("SELECT preview FROM posts WHERE user_id = ".$obj." ORDER BY time_created DESC LIMIT 1");
        $result = $preview->fetch_assoc();
        if($preview->num_rows == 0)
                $prev = 'null';
        else
                $prev = $result["preview"];
        
        $ret[]  = array('username' => $uData["username"], 'display_name' => $uData["display_name"], 'profile_pic_url' => $uData["profile_pic_url"], 'preview' => $prev);
}



echo json_encode($ret); 

