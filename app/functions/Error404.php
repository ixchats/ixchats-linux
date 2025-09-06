<?php
namespace Functions;

class Error404 {
	public function __construct(string $page) {
		if (!preg_match('/^[A-Za-z0-9_]+$/', $page)) {
			header('HTTP/1.0 404 Not Found', true, 404);
			die('<html><body><h1>Page not found (404)</h1><a href="'.METHOD.'//'.DOMAIN.'">'.DOMAIN.'</a></body></html>');
		}
		$chat = preg_replace('/[^A-Za-z0-9_\/\?!]/', '', $page);
		return new Chat($chat);
	}
}