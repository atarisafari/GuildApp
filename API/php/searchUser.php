
<?php 

include("establishConn.php");
include("validateToken.php");

$inout = json_decode(file_get_contents('php://input'), true);

function processToken()
{
        $token = $input["token"];
        $retVal = validateToken($token, $key);
}
