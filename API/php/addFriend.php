  GNU nano 2.9.3                                                                                                                                                                                                                                                                 addFriend.php                                                                                                                                                                                                                                                                            

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
$test = $conn->prepare("SELECT * FROM user_relationship WHERE user_first_id = ? AND user_second_id = ?");

if($userID < $secondUser)
{
        $test->bind_param("ii", $userID, $secondUser);
        $test->execute();
        $result = $test->get_result();

        if($result->num_rows == 0)
        {
                //Send Friend Request
                $sql = "INSERT INTO user_relationship (user_first_id, user_second_id, type) VALUES ($userID, $secondUser, 'pending_first_second')"; 
                if($conn->query($sql) == TRUE)
                {
                        returnError("");
                }

                //Test if it worked
        }

        else
        {
                $data = $result->fetch_all();
                $obj = $data[0][2];

                if($obj == "block_second_first")
                {
                        returnError("User not found");
                }

                else if($obj == "friends")
                {
                        returnError("You're already friends");
                }

                else if($obj == "pending_first_second")
                {
                        returnError("Friend request already pending");
                }

                else if($obj == "pending_second_first")
                {
                        //Make them friends
                        $sql = "UPDATE user_relationship SET type = 'friends' WHERE user_first_id = " .  $userID . " AND user_second_id = " . $secondUser;

                        if($conn->query($sql) == TRUE)
                        {
                                returnError("");
                        }
                }
        }
}

else if($userID == $secondUser)
{
        returnError("You can't send a friend request to yourself");
}

else
{
        $test->bind_param("ii",$secondUser, $userID);
        $test->execute();
        $result = $test->get_result();
        if($result->num_rows == 0)
        {
                //Send Friend Request
                $sql = "INSERT INTO user_relationship (user_first_id, user_second_id, type) VALUES ($secondUser, $userID, 'pending_second_first')";
                if($conn->query($sql) == TRUE)
                {
                        returnError("");
                }
                //Test if it worked
        }
        //Check what relationship is
        else
        {
                $data = $result->fetch_all();
                $obj = $data[0][2];

                if($obj == "block_first_second")
                {
                        returnError("User not found");
                }

                else if($obj == "friends")
                {
                        returnError("You're already friends");
                }

                else if($obj == "pending_second_first")
                {
                        returnError("Friend request already pending");
                }

                else if($obj == "pending_first_second")
                {
                        //Make them friends
                        $sql = "UPDATE user_relationship SET type = 'friends' WHERE user_first_id = " .  $secondUser . " AND user_second_id = " . $userID;

                        if($conn->query($sql) == TRUE)
                        {
                                returnError("");
                        }

                }
        }

}




