<?php

define('CACHING', 2592000); // 1 month for caching


$getName = !empty($_GET['f']) ? $_GET['f'] : false;
if ($getName) {
$getResult = fopen("{$getName}", "r");
$bb = fread($getResult,filesize("{$getName}"));
header('Content-Type: application/font-woff2');
echo $bb;
fclose($getResult);

}
