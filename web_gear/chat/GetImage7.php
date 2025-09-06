<?php
define('CACHING', 2592000); // 1 month for caching

function cURL($url) {
	$opts = [
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_HEADER         => false,
		CURLOPT_FOLLOWLOCATION => true,
		CURLOPT_SSL_VERIFYPEER => false,
		CURLOPT_CONNECTTIMEOUT => 5,
		CURLOPT_TIMEOUT        => 5,
		CURLOPT_MAXREDIRS      => 2,
		CURLOPT_HTTPHEADER, ['Origin: https://xat.com']
	];
	$ch = curl_init($url);
	curl_setopt_array($ch, $opts);
	$html = curl_exec($ch);
	$CT = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);
	curl_close($ch);
	return [$CT, $html];
}

function setCache($str) {
	$etag = md5($str);
	header("Cache-Control: max-age=" . CACHING);
	header("Etag: " . $etag);
	if (!array_key_exists('HTTP_IF_NONE_MATCH', $_SERVER)) {
		return false;
	} else if (trim($_SERVER['HTTP_IF_NONE_MATCH']) == $etag) { 
		http_response_code(304);
		return true;
	}
	return false;
}

$getName = !empty($_GET['U']) ? $_GET['U'] : false;
$getSize = !empty($_GET['H']) ? $_GET['H'] : false;
if ($getName) {
	$getResult = cURL(sprintf('https://images.weserv.nl/?h=%s&url=%s', intval($getSize), urlencode($getName)));

	if ($getResult[0] == 'image/png') {
		if (setCache($getName)) {
			exit;
		}
	}
	
	header('Content-Type: ' . $getResult[0]);
	echo $getResult[1];
}
?>