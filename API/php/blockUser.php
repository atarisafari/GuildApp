  GNU nano 2.9.3                                                                                                                                                                                          blockUser.php                                                                                                                                                                                                    

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

$test = $conn->prepare("SELECT * FROM user_relationship where user_first_id = ? AND user_second_id = ?");

if($userID < $secondUser)
{
        $test->bind_param("ii", $userID, $secondUser);
        $test->execute();
        $result = $test->get_result();

        if($result->num_rows == 0)
        {
                $sql = "INSERT INTO user_relationship (user_first_id, user_second_id, type) VALUES ($userID, $secondUser, 'block_first_second')";

                if($conn->query($sql) == TRUE)
                        returnError("");
        }


        //Else change the relationship
        else
        {
                //$data = $result->fetch_all();
                $sql = $conn->prepare("UPDATE user_relationship SET type = ?  WHERE user_first_id = ? AND user_second_id = ?");
                $sql->bind_param("sii", $str,  $userID, $secondUser);
                $str = 'block_first_second';
                $sql->execute();

                returnError("");
        }
}

else
{
        $test->bind_param("ii", $secondUser, $userID);
        $test->execute();
        $result = $test->get_result();

        if($result->num_rows == 0)
        {
                $sql = "INSERT INTO user_relationship (user_first_id, user_second_id, type) VALUES ($secondUser, $userID, 'block_second_first')";

                if($conn->query($sql) == TRUE)
                        returnError("");
        }

        //Else change relationship to block
        else
        {
                //$data = $result->fetch_all();
                $sql = $conn->prepare("UPDATE user_relationship SET type = ?  WHERE user_first_id = ? AND user_second_id = ?");
                $sql->bind_param("sii", $str,  $secondUser, $userID);
                $str = 'block_second_first';
                $sql->execute();

                returnError("");
        }


}
