<?php

include("establishConn.php");
include("validateToken.php");

$sql = $conn->prepare("INSERT INTO posts (user_id,content,image_url,date_created,time_created,preview) VALUES(?,?,?,?,?,LEFT(?,32))");
$sql->bind_param("isssss", $userID, $content, $imageURL, $date, $time, $preview);

$input = json_decode(file_get_contents('php://input'), true);

//Assigning key variables
$token = $input["token"];
$content = $input["content"];
$date = $input["date_created"];
$time = $input["time_created"];
$imageURL = decodeImage($input["image_url"]);
$preview = $content;

//Grab return value from token validation function
$retVal = validateToken($token, $key);

//If validation fails, exit and return an error
if(!$retVal)
{
        echo '{"error": "Invalid token"}';
        exit(); 
}

//Else proceed
$data = json_decode($retVal, true);
$userID = $data["user_id"];

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

