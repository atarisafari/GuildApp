<?php
include("establishConn.php");
include("validateToken.php");
include("helpers.php");

$input = getRequestInfo();
$userInfo = processToken($input, $key);
$userID = $userInfo["user_id"];
$ret = array();

//User grabbing their own posts
if($input["username"] == "")
{
        $sql = $conn->prepare("SELECT * FROM posts WHERE user_id = ? ORDER BY time_created DESC");
        $sql->bind_param("i", $userID);
        $sql->execute();
        $result = $sql->get_result();


        while($row = $result->fetch_assoc())
        {
                $ret[]  = array('post_id' => $row["post_id"], 'content' => $row["content"], 'image_url' => $row["image_url"], 'time_created' => $row["time_created"], 'num_likes' => $row["num_likes"], 'num_comments' => $row["num_comments"]);
        }

}

else
{
        $sql = $conn->prepare("SELECT user_id FROM user_info WHERE username = ?");
        $sql->bind_param("s", $username);
        $username = $input["username"];
        $sql->execute();

        $result = $sql->get_result();

        if($result->num_rows == 0)
        {
                returnError("User not found");
        }

        else
        {
                $data = $result->fetch_all();
                $secondUser = $data[0][0];

                $sql = $conn->prepare("SELECT * FROM posts WHERE user_id = ? ORDER BY time_created DESC");
                $sql->bind_param("i", $secondUser);
                $sql->execute();
                $result = $sql->get_result();


                while($row = $result->fetch_assoc())
                {
                        $ret[]  = array('post_id' => $row["post_id"], 'content' => $row["content"], 'image_url' => $row["image_url"], 'time_created' => $row["time_created"], 'num_likes' => $row["num_likes"], 'num_comments' => $row["num_comments"]);
                }

        }
}

echo json_encode($ret);
