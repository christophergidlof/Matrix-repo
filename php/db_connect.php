<?php

$mysql_host = "localhost";
$mysql_user = "root";
$mysql_pass = "mysql_password";

$mysql_db = "name of db";

$connect = mysql_connect($mysql_host,$mysql_user,$mysql_pass);

mysql_select_db($mysql_db, $connect);

?>