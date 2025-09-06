<?php
namespace Vendor;

class Validator {
	public static function isNumeric(string $value): bool {
		return preg_match('/^[1-9][0-9]*$/', $value);
	}
	
	public static function isAlphanumeric(string $value): bool {
		return preg_match('/^[a-zA-Z0-9]+$/', $value);
	}
	
	public static function isValidChatName(string $value): bool {
		return preg_match('/^[a-zA-Z0-9_]+$/', $value);
	}

	public static function isValidEmail(string $value): bool {
		return filter_var($value, FILTER_VALIDATE_EMAIL); // not regex for now
	}
	
	public static function isValidUsername(string $value): bool {
		if (preg_match('/^[a-zA-Z0-9]+$/', $value)) {
			return !self::isNumeric($value[0]);
		}
		return false;
	}
	
	public static function isValidMail(string $value): bool {
		preg_match('/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@([a-z0-9-]+)(\.[a-z0-9-]+)*(\.[a-z]{2,})$/', $value, $mail);
		if (count($mail) > 2) {
			if (in_array($mail[2], ALLOW_EMAIL)) {
				return true;
			}
		}
		return false;
	}
	
	public static function isBetween(string $value, int $min, int $max): bool {
		return strlen($value) >= $min && strlen($value) <= $max;
	}
	
	public static function FilzeSize(string $file): bool {
		$ch = curl_init($file);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
		curl_setopt($ch, CURLOPT_HEADER, TRUE);
		curl_setopt($ch, CURLOPT_NOBODY, TRUE);
		$data = curl_exec($ch);
		$size = curl_getinfo($ch, CURLINFO_CONTENT_LENGTH_DOWNLOAD);
		curl_close($ch);
		return $size;
	}
	
	public static function validImage(string $file): bool  {
	   $size = getimagesize($file);
	   return (strtolower(substr($size['mime'], 0, 5)) == 'image' ? true : false);  
	}
	
	public static function ImageSize($file): array {
		$size = getimagesize($file);
		list($width, $height) = $size;
		return $sizearray = ['width' => $width, 'height' => $height];
	}
	
	public static function urlToDomain(string $url, $link = false): bool { 
		if (substr($url, 0, 8) == 'https://') {
		  $url = substr($url, 8);
		}
		if (substr($url, 0, 7) == 'http://') {
		  $url = substr($url, 7);
		}
		if (substr($url, 0, 4) == 'www.') {
		  $url = substr($url, 4);
		}
		if ($link == 'dom' && strpos($url, '/') !== false ) {
		  $explode = explode('/', $url);
		  $url     = $explode['0'];
		}
		if ($link == 'http' && !preg_match("~^(?:f|ht)tps?://~i", $url)) {
			$url = "http://" . $url;
		}
		return $url;
	}
	
    public static function get_time(int $ptime): string {
		$estimate_time = time() - $ptime;
		if($estimate_time < 1){
			return 'less than 1 second';
		}
		$condition = 
				[
					12 * 30 * 24 * 60 * 60  =>  '<span data-localize=chat.yearsago>years ago on</span>',
					30 * 24 * 60 * 60       =>  '<span data-localize=chat.monthsago>months ago on</span>',
					24 * 60 * 60            =>  '<span data-localize=chat.daysago>days ago on</span>',
					60 * 60                 =>  '<span data-localize=chat.hoursago>hours ago on</span>',
					60                      =>  '<span data-localize=chat.minutesago>minutes ago on</span>',
					1                       =>  '<span data-localize=chat.secondsago>seconds ago on</span>'
				];

		foreach($condition as $secs => $str) {
			$d = $estimate_time / $secs;
			if ($d >= 1)  {
				$r = round($d);
				return '' . $r . ' ' . $str . ( $r > 1 ? '' : '' ) . '';
			}
		}
    }	
	
	public static function isFilled(array $values): bool {
		foreach ($values as $k) {
			if (empty($k)) {
				return false;
			}
		}
		return true;
	}
	
	public static function isRequested(array $field, array $values): bool {
		foreach ($values as $k) {
			if (!array_key_exists($k, $field)) {
				return false;
			}
		}
		return true;
	}
	
	public static function spam_control(string $ip, string $page, int $time = 3, int $bantime = 10) { 
		$nfile  = DIRECTORY . SEPARATOR . 'app' . SEPARATOR . 'sessions' . SEPARATOR . 'UsePage.log';
		$file   = file_get_contents($nfile, true);
		$search = explode("\r\n", $file);
		foreach ($search as $s) {
			$decode = json_decode($s, true);
			if ($decode['ip'] == $ip && $decode['page'] == $page) {
				if (floor(time() - $decode['time']) < ($bantime * 60) && $decode['status'] == 'banned') {	
					return true;
				}
				$nb = $decode['time'];
			}
		}
		$open   = fopen($nfile, 'a');
		$status = (time() - $nb) < $time ? 'banned' : 'normal';
		$json   = [
					'ip'     => $ip ,
					'time'   => time(),
					'page'   => $page,
					'status' => $status
				  ];
		fwrite($open, json_encode($json)."\r\n"); 
		fclose($open); 
	}	
	
	public static function verifyEmail($email) {
		return true;
	}
	
	public static function recaptcha(string $value): string {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "https://www.google.com/recaptcha/api/siteverify");
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt(
            $ch,
            CURLOPT_POSTFIELDS,
            http_build_query(
                [
                    'secret'   => RECAPTCHA_PRIVATE,
                    'response' => $value
                ]
            )
        );
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($ch);
        $json = json_decode($response, false);
        return $json->success;
    }
}