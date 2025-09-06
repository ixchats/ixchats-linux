<?php
namespace Functions\WebGear;

use Vendor\View;
use Classes\Chat;
use Vendor\Header;
use Vendor\Validator;

class EIP {
	private $fields = ['id', 'pw', 'md', 'back', 'fg', 't'];
	private $bgUrl  = METHOD . CDNMAIN . 'web_gear/background/xat_%s.jpg';
	protected $chat;
	protected $xml;

	public function __construct() {
		$this->chat = new Chat();
	}
	
	public function index() {
		$id      = (int) \Server::get('id');
		$bg      = (string) \Server::get('back');
		$pass    = (int) \Server::get('pw');
		$mode    = (int) \Server::get('md');
		$search  = (string) \Server::get('s');
		$getChat = $this->chat->getById($id);
		$backVar = explode(';=', $bg);
		$chat    = new \stdClass();
		$backs   = $this->chat->getBackgrounds();
		$back    = $this->chat->validateBg($backVar[0]);
		if (!$mode) {
			return;
		}
		$this->xml = new \SimpleXMLElement('<chat/>');
		$this->addAttr('width', 540);
		$this->addAttr('height', 405);
		$this->addAttr('pw', $pass);
		$this->addAttr('id', $id);
		$this->addAttr('oldback', 0);
		switch ($mode) {
			case 2: // display backgrounds
				shuffle($backs);
				$this->addAttr('i0', !$back ? sprintf($this->bgUrl, $backs[0]) : $back );
				$this->addAttr('w0', '');
				$this->addAttr('h0', '');
				for($i = 0; $i < 29; $i++) {
					$this->addAttr('i' . ($i + 1), $backs[$i]);
				}
				break;
			case 4: // change chat background
				if (!$getChat) {
					return;
				} else if ($getChat->crc32 != $pass) {
					return;
				}
				$this->chat->update($getChat->id, ['bg' => $backVar[0]]);
				break;
			case 8: // display groups
				$group  = $this->xml->addChild('group');
				$groups = $this->chat->allGroups(60);
				for($i = 0; $i < count($groups); $i++) {
					$g = $group->addChild('g' . ($i + 1));
					$g->addAttribute('n', $groups[$i]['name']);
					$g->addAttribute('r', $groups[$i]['id']);
					$g->addAttribute('d', $groups[$i]['desc']);
				}
				break;
			case 16: // change attached group
				if (!$getChat) {
					return;
				} else if ($getChat->crc32 != $pass) {
					return;
				}
				$this->chat->update($getChat->id, ['attached' => $backVar[1]]);
				break;
			case 40: // lookup chat
				$group  = $this->xml->addChild('group');
				$groups = $this->chat->allGroups(60);
				$getChat = $this->chat->search($search, 1);
				if (!empty($getChat[0])) {
					$g = $group->addChild('g0');
					$g->addAttribute('n', $getChat[0]['name']);
					$g->addAttribute('r', $getChat[0]['id']);
					$g->addAttribute('d', $getChat[0]['desc']);
				}
				for($i = 0; $i < count($groups); $i++) {
					$g = $group->addChild('g' . ($i + 1));
					$g->addAttribute('n', $groups[$i]['name']);
					$g->addAttribute('r', $groups[$i]['id']);
					$g->addAttribute('d', $groups[$i]['desc']);
				}
				break;
		}
		View::xml($this->xml->asXML());
	}
	
	public function addAttr(string $name, string $value) {
		${$name} = $this->xml->addChild($name);
		${$name}->addAttribute('v', $value);
		return ${$name};
	}
}