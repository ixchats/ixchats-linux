<?php
namespace Vendor;

class Curl {
	static function getHttps(string $url): string {
		$ch = curl_init($url);
		curl_setopt_array($ch, [
			CURLOPT_HEADER         => 0,
			CURLOPT_RETURNTRANSFER => 1,
			CURLOPT_SSL_VERIFYPEER => 0,
			CURLOPT_FOLLOWLOCATION => 1,
			CURLOPT_TIMEOUT        => 3
		]);
		$cr = curl_exec($ch);
		curl_close($ch);
		return $cr;
	}
	
	static function getHttp(string $url): string {
		$ch = curl_init($url);
		curl_setopt_array($ch, [
			CURLOPT_HEADER         => 0,
			CURLOPT_RETURNTRANSFER => 1,
			CURLOPT_FOLLOWLOCATION => 1,
			CURLOPT_TIMEOUT        => 3
		]);
		$cr = curl_exec($ch);
		curl_close($ch);
		return $cr;
	}
	
	static function postHttps(string $url, array $values): string {
		$ch = curl_init($url);
		curl_setopt_array($ch, [
			CURLOPT_HEADER         => 0,
			CURLOPT_RETURNTRANSFER => 1,
			CURLOPT_SSL_VERIFYPEER => 0,
			CURLOPT_FOLLOWLOCATION => 1,
			CURLOPT_TIMEOUT        => 3,
			CURLOPT_POST           => 1,
			CURLOPT_POSTFIELDS     => http_build_query($values)
		]);
		$cr = curl_exec($ch);
		curl_close($ch);
		return $cr;
	}
	
	static function postHttp(string $url, array $values): string {
		$ch = curl_init($url);
		curl_setopt_array($ch, [
			CURLOPT_HEADER         => 0,
			CURLOPT_RETURNTRANSFER => 1,
			CURLOPT_FOLLOWLOCATION => 1,
			CURLOPT_TIMEOUT        => 3,
			CURLOPT_POST           => 1,
			CURLOPT_POSTFIELDS     => http_build_query($values)
		]);
		$cr = curl_exec($ch);
		curl_close($ch);
		return $cr;
	}
}