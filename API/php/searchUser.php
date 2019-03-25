
<?php 

include("establishConn.php");
include("validateToken.php");
include("helpers.php");

$inout = getRequestInfo();
//Exits if token validation fails 
$userInfo = processToken($input, $key);

