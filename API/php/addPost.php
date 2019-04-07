
<?php

include("establishConn.php");
include("validateToken.php");
include("helpers.php");

$sql = $conn->prepare("INSERT INTO posts (user_id,content,image_url,time_created,preview) VALUES(?,?,?,?,LEFT(?,32))");
$sql->bind_param("issss", $userID, $content, $imageURL, $timestamp, $preview);

$input = getRequestInfo();

//Assigning key variables
$token = $input["token"];
$content = $input["content"];
$timestamp = $input["timestamp"];
$imageURL = decodeImage($input["image_url"]);
$preview = $content;

//Grab return value from token validation function
$userInfo = processToken($input, $key);

$userID = $userInfo["user_id"];

$sql->execute();

function decodeImage($image)
{
        $folderPath = "/var/images/";
        $imageURL = $folderPath . uniqid() . '.png';
        $ifp = fopen($image_url, 'wb'); //or die("Couldn't open file");

        $data = explode(',', $image);
        fwrite($ifp, base64_decode($data[1]));

        fclose($ifp);
        echo $imageURL;
        return $imageURL;
}

$sql->close();

