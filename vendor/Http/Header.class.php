<?php
namespace Vendor;

class Header {
	const CACHETIME = 2592000; // 1 month for caching
	
	public static function set(string $type) {
		header('Content-Type: ' . $type);
	}

	public static function location(string $url) {
		header('Location: ' . $url);
	}

	public static function xss(int $value) {
		header('X-XSS-Protection: '. $value);
	}
	
	public static function refresh($sec = 0) {
		header('refresh: ' . $sec);
	}
	
	public static function connection(string $value) {
		header('Connection: '. $value);
	}
	
	public static function ranges(string $value) {
		header('Accept-Ranges: '. $value);
	}
	
	public static function SessionCache() {
		header('Cache-Control: no cache');
		session_cache_limiter('private_no_expire');
	}
	
	public static function setcache() {
		$ts = gmdate("D, d M Y H:i:s", time() + self::CACHETIME) . " GMT";
		header("Expires: $ts");
		header("Pragma: cache");
		header("Cache-Control: max-age=" . self::CACHETIME);
	}

	public static function cache(string $dir) {
		if (file_exists($dir)) {
			$last = filemtime($dir); 
			$etag = md5_file($dir);
			header("Cache-Control: max-age=" . self::CACHETIME);
			header("Last-Modified: ".gmdate("D, d M Y H:i:s", $last)." GMT"); 
			header("Etag: " . $etag);
			if (!array_key_exists('HTTP_IF_NONE_MATCH', $_SERVER) || !array_key_exists('HTTP_IF_MODIFIED_SINCE', $_SERVER)) {
				return false;
			} else if (strtotime($_SERVER['HTTP_IF_MODIFIED_SINCE']) == $last && trim($_SERVER['HTTP_IF_NONE_MATCH']) == $etag) { 
				http_response_code(304);
				return true;
			}
		}
		return false;
	}
}