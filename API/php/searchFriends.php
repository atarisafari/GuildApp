<?php

include("establishConn.php");
include("validateToken.php");
include("helpers.php");

$input = getRequestInfo();

$userInfo = processToken($input, $key);

$sql = $conn->prepare("SELECT * FROM user_info WHERE username = ?");
$sql->bind_param("s", $username);

$username = $input["username"];
$sql->execute();

$result = $sql->get_result();

if($result->num_rows == 0)
{
        returnError("User not found");
}
