<?php
namespace Functions\WebGear;

use Vendor\View;
use Classes\User;
use Classes\Chat;
use Vendor\Header;

class Embed {
	protected $user;
	protected $chat;

	public function __construct() {
		$this->user = new User();
		$this->chat = new Chat();
	}
	
	public function index() {
		$getid     = (int) \Server::get('id');
		$postid    = (int) \Server::post('id');
		$getid     =  $postid ? $postid  : $getid;
		$submit    = (string) \Server::post('submit');
		$Flash     = (string) \Server::post('Flash');
		$height    = (int) \Server::post('height');
		$width     = (int) \Server::post('width');
		$getChat   = $this->chat->getById($getid);
		$getWidth  = empty($width) ? 540 : $width;
		$getHeight = empty($height) ? 405 : $height;
		$OldEmbed  = $submit && $Flash && $Flash == 'ON' ? true : false;
		if (empty($getChat)) {
			return \Server::redirect('/groups?404');
		}
		Header::xss(0);
		$getPage = View::get('web_gear/embed', ['core' => $this->chat, 'chat' => $getChat, 'width' => $getWidth, 'height' => $getHeight, 'flashembed' => $OldEmbed]);
		return View::render('layout/main', ['page' => $getPage, 'user' => $this->user, 'nav' => \Server::loadNavbar('classic', 'nav'), 'foot' => \Server::loadFotter('classic', 'foot'), 'title' => 'Put '.XAT_NAME.' chat group on your page', 'xt' => ['edit'], 'description' => 'Put '.XAT_NAME.' chat group on your page']);
	}
}