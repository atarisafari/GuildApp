<?php

include("establishConn.php");
include("validateToken.php");
include("helpers.php");

$input = getRequestInfo();

$userInfo = processToken($input, $key);
$userID = $userInfo["user_id"];

$sql = $conn->prepare("SELECT * FROM user_info WHERE username = ?");
$sql->bind_param("s", $username);

$username = $input["username"];
$sql->execute();

$result = $sql->get_result();

if($result->num_rows == 0)
{
        returnError("User not found");
}

$data = $result->fetch_all();
$secondUser = $data[0][0];

$test = "SELECT * FROM user_relationship WHERE user_first_id = ? AND user_second_id = ?";

if($userID < $secondUser)
{
        $test->bind_param("ii",$userID, $secondUser);
        
        $test->execute();
        $result = $test->get_result();
        
        if($result->num_rows == 0)
        {
                //Send Friend Request
                $sql = "INSERT INTO user_relationship (user_first_id, user_second_id, type)
                VALUES ($userID, $secondUser, 'pending_first_second')"
                        
                $sql->execute();
                
                //Test if it worked
        }
}

else
        $test->bind_param("ii",$secondUser, $userID);

        $test->execute();
        $result = $test->get_result();
        
        if($result->num_rows == 0)
        {
                //Send Friend Request
                $sql = "INSERT INTO user_relationship (user_first_id, user_second_id, type)
                VALUES ($secondUser, $userID, 'pending_second_first')"
                        
                $sql->execute();
                
                //Test if it worked
        }






//Else
        //Check what relationship is


