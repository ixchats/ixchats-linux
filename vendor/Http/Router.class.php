<?php
namespace Vendor;

use Functions;
use Vendor\Header;
use Vendor\Mimetype;

class Router {
	private $error404 = true; // default enabled
	
	public function initialize() {
		$file = DIRECTORY . SEPARATOR . substr(\Server::getUrl(), 1);
		$ext  = pathinfo($file, PATHINFO_EXTENSION);
		$mime = Mimetype::getByExtension($ext);
		if ($mime && file_exists($file)) {
			ob_start();
			Header::set($mime);
			Header::cache($file);
			Header::connection('close');
			print file_get_contents($file);
			ob_flush();
		} else if ($this->error404) {
			$page = substr(\Server::getUrl(), 1);
			return new Functions\Error404($page);
		}
	}

	public function new(string $page, array $args) {
		$GetUrl = \Server::getUrl();
		if (count($args) < 2) {
			return false;
		} elseif (count($args) == 3) {
			$PageGet = [];
			preg_match('/\/'.$args[2].'/', $GetUrl, $PageGet);
			$GetUrl = preg_split('/\/'.$args[2].'/', $GetUrl)[0];
			if ($page == $GetUrl){
				$object = new $args[0]();
				$this->error404 = false;
				return $object->{$args[1]}($PageGet);
			}
		} elseif ($page == $GetUrl) {
			$object = new $args[0]();
			$this->error404 = false;
			return $object->{$args[1]}();
		}
	}
}