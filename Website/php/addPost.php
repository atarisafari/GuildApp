<?php

include("establishConn.php"); 

$sql = $conn->prepare("INSERT INTO posts (user_id,content,image_url,date_created,time_created) VALUES(?,?,?,?,?)");
$sql->bind_param("issss", $userID, $content, $imageURL, $date, $time);

$input = json_decode(file_get_contents('php://input'), true);

$userID = $input["user_id"];
$content = $input["content"];
$date = $input["date_created"];
$time = $input["time_created"];
$imageURL = decodeImage($input["image_url"]);

$sql->execute();

function decodeImage($image)
{
        $folderPath = "/var/images/";
        $imageURL = $folderPath . uniqid() . '.png';
        $ifp = fopen($image_url, 'wb') or die("Couldn't open file");

        $data = explode(',', $image);
        fwrite($ifp, base64_decode($data[1]));

        fclose($ifp);   

        echo $imageURL;
        return $imageURL;
}

$sql->close();
