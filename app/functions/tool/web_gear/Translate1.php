<?php
namespace Functions\WebGear;

use Vendor\View;
use Vendor\Curl;
use Vendor\GoogleTranslate;

class Translate1 {
	protected $googletrans;
	
	public function __construct() {
		$this->googletrans = new GoogleTranslate();
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		$message = null;
		list ($query, $user, $days, $from, $to, $callback) = [
			(string) \Server::get('q'),
			(int)    \Server::get('u'),
			(int)    \Server::get('d'),
			(string) \Server::get('source'),
			(string) \Server::get('target'),
			(int)    \Server::get('callback'),
		];
		if (empty($query) || empty($from) || empty($to)) {
			$message = 'Please login';
		} else if (time() > $days) {
			$message = 'No days';
		} else {
			if (GOOGLE_TRANSLATE == true) {
				$message = $this->googletrans->translate($from, $to, $query);
			}
			if (API_TRANSLATE == true) {
				$message = $this->translate($from, $to, $query);
			}
		}
		return View::plain('// API callback ' . $callback . '({"data":{"translations":[{"translatedText":"' . $message . '"}]}});');
	}

	public function index2() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		$message = null;
		list ($query, $user, $days, $from, $to, $callback, $number) = [
			(string) \Server::get('q'),
			(int)    \Server::get('u'),
			(int)    \Server::get('d'),
			(string) \Server::get('source'),
			(string) \Server::get('target'),
			(string) \Server::get('c'),
			(int)    \Server::get('n')
		];
		if (empty($query) || empty($to)) {
			$message = 'Please login';
		} else if (time() > $days) {
			$message = 'No days';
		} else {
			
			$from = $from ? $from : 'en';
			
			if (GOOGLE_TRANSLATE == true) {
				$message = $this->googletrans->translate($from, $to, $query);
			}
			if (API_TRANSLATE == true) {
				$message = $this->translate($from, $to, $query);
			}
		}
		
		$reponse = ['text' => $message, 'c' => $callback, 'n' => $number];
		
		return View::json($reponse);
	}
	
	private function translate(string $from, string $to, string $text) {
		$response = Curl::getHttps('https://api.php.mk/prevod/v1.0/'.$to.'/' .$from. '?text=' .urlencode($text). '&token='.TRANSLATE_APIKEY);
		$json = json_decode($response, true);
		if (array_key_exists('error', $json) && $json['error'] == false) {
			return $json['data']['na_jazik']['tekst'];
		}
		return $text;		
	}
}