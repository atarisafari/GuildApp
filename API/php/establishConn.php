<?php

require_once("../../../mysql_pw.php");

$conn = new mysqli($url, $username, $password, $database);

if(!$conn) //Connection Failed
{
        echo("Connection Failed :( ");
}
