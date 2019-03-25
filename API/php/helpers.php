<?php

function sendJson($obj)
{
        header('Content-type: application/json');
        echo $obj;
}

function getRequestInfo()
{
        return json_decode(file_get_contents('php://input'), true);
}

function processToken($input, $key)
{
        $token = $input["token"];
        $retVal = validateToken($token, $key);
        
        if(!$retVal)
        {
              $payload = '{"error": "Invalid token"}';
              sendJSON($payload);
              exit();
        }
        //Returns User Info
        return json_decode($retVal, true);
}
