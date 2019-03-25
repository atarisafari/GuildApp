<?php

include("establishConn.php");
require_once 'vendor/autoload.php';
use \Firebase\JWT\JWT;

function validateToken($token, $key)
{
        try {
                $decoded = JWT::decode($token,$key,array('HS256'));
        }

        catch (Exception $e) {
                return NULL;
        }

        return json_encode( (array) $decoded);
}
