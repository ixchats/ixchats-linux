<?php
namespace Functions;

class Redirect {
	protected $helpchats = [ 
		'en' => 'Help',
		'es' => 'Ayuda',
		'pt' => 'Ajuda'
	];
	protected $tradechats = [ 
		'en' => 'Trade',
		'es' => 'Cambio',
		'pt' => 'Troca'
	];
	
	public function ads() {
		return \Server::redirect('/store#!ads');
	}
	public function powers() {
		return \Server::redirect('/store');
	}
	public function buygroup() {
		return \Server::redirect('/store#!group');
	}
	public function x2d() {
		return \Server::redirect('/store#!xats2days');
	}
	public function dx() {
		return \Server::redirect('/store#!days2xats');
	}	
	public function getxavi() {
		return \Server::redirect('/web_gear/chat/Getxavis.php');
	}
	public function promo() {
		return \Server::redirect('/store#!promotion');
	}
	public function auction() {
		return \Server::redirect('/store#!auction');
	}
	public function facebook() {
		return \Server::redirect(FACEBOOK);
	}
	public function shortname() {
		return \Server::redirect('/store#!shortname');
	}
	public function search() {
		return \Server::redirect('/tools#!search');
	}
	public function create() {
		return \Server::redirect('/chats#!creategroup');
	}
	public function logout() {
		return \Server::redirect('/login#!logout');
	}
	public function register() {
		return \Server::redirect('/login?mode=1');
	}
	public function terms() {
		return \Server::redirect('/terms.html');
	}
	public function buy() {
		return \Server::redirect('/store#!buyxats');
	}
	public function twitter() {
		return \Server::redirect('https://twitter.com/ixchats');
	}
	public function wiki() {
		return \Server::redirect(METHOD . '//util.' . DOMAIN . '');
	}
	public function safety() {
		return \Server::redirect(METHOD . '//util.' . DOMAIN . '/Safety');
	}
	public function bot() {
		return \Server::redirect(METHOD . '//bot.' . DOMAIN);
	}
	public function help() {
		return \Server::redirect('/' . $this->helpchats[\Server::detectLanguage()]);
	}
	public function trade() {
		return \Server::redirect('/' . $this->tradechats[\Server::detectLanguage()]);
	}
	public function ticket() {
		return \Server::redirect('mailto:ixchats@gmail.com');
	}
	public function forum() {
		return \Server::redirect(METHOD . '//forum.' . DOMAIN);
	}
}
