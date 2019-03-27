<?php
//Return JSON package to client side
function sendJSON($obj)
{
        header('Content-type: application/json');
        echo $obj;
}
//Returns the decoded JSON package being sent to the server
function getRequestInfo()
{
        return json_decode(file_get_contents('php://input'), true);
}
//Processes JSON Web Token
function processToken($input, $key)
{
        $token = $input["token"];
        $retVal = validateToken($token, $key);
        //Return error if validation fails
        if(!$retVal)
        {
              $payload = returnError("Invalid token");
              sendJSON($payload);
              exit();
        }
        //Returns User Info
        return json_decode($retVal, true);
}
//Takes error message and returns it to client in a JSON payload
function returnError($s)
{
        $payload = json_encode(array("error" => $s));
        sendJSON($payload);
}
