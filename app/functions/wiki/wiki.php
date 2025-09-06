<?php
namespace Functions\Wiki;

use Vendor\Validator;
use Vendor\View;
use Vendor\Database;

class Index {
	protected $sql;

	public function __construct() {
		$this->sql = new Database();
	}

	public function index() {
		
		$title = (string) \Server::get('title');
		$ipowers = [];
		$wiki_page = 'wiki/index';
		
		while (1) {
			
			if (!$title) { 
				break; 
			}
		
			$powers = $this->sql->fetch_array('select * from powers order by id desc');
			
			foreach ($powers as $power) {
				$ipowers[$power['name']] = $power;
			}
			
			if (array_key_exists(strtolower($title), \Server::loadWikiPages())) {
				$wiki_page = 'wiki/pages/' . strtolower($title);
				break;
			}
			
			if (array_key_exists(strtolower($title), $ipowers)) {
				$wiki_page = 'wiki/powers';
				break;
			}
			header('HTTP/1.0 404 Not Found', true, 404);
			die('<html><body><h1>Page not found (404)</h1><a href="'.METHOD.'//'.DOMAIN.'">'.DOMAIN.'</a></body></html>');
			break;
		}
		
		$getPage = View::get($wiki_page, ['power' => $ipowers, 'title' => strtolower($title)]);
		return View::render('layout/wiki', ['content' => $getPage, 'title' => $title]);
	}
}
