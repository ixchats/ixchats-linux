<?php
namespace Functions;

use Vendor\Validator;
use Vendor\Header;
use Vendor\View;
use Classes\User;
use Classes\Chat as ChatClass;

class Chat {
	protected $user;
	protected $chat;
	
	public function __construct(string $chat) {
		$this->user = new User();
		$this->chat = new ChatClass();
		
		if (!Validator::isValidChatName($chat)) {
			return \Server::redirect('/#featured');
		}
		
		$vchat    = substr($chat, 0, 3) == 'xat' && is_numeric(substr($chat, 3)) ? $this->chat->getById(substr($chat, 3)) : $this->chat->get($chat) ;
		$chatpage = (int) \Server::get('p');
		$getSS    = (int) \Server::get('ss');
		
		if (!$vchat) {
			return \Server::redirect('/#featured');
		}
		
		if ($vchat->active != 1) {
			return \Server::redirect('/#featured');
		}
		//Header::setcache();
		$test = json_decode(fixJSON($vchat->redirect));
		if(!empty($vchat->redirect) && $this->chat->isAssigned($vchat->name, 252) == 1){
			if(is_numeric($test->id)){
				return \Server::redirect('/xat'. $test->id);
			}elseif($test->id){
				$ids = $this->chat->get($test->id);
				return \Server::redirect('/xat'. $ids->id);
			}
		}
		
		$getattachedid = $this->chat->get($vchat->attached);
		
		$getPage = View::get('ChatNew', ['user' => $this->user, 'chat' => $this->chat->get($vchat->name), 'attachedid' => $getattachedid->id, 'assigned' => $this->chat->isAssigned($vchat->name, 220), 'embed' => $this->chat->getChatEmbed($vchat->name), 'chatpage' => $chatpage, 'getSS' => $getSS]);
			
		$getChat = $this->chat->get($vchat->name);		
			
		return View::render('layout/main', ['title' => $getChat->name . ' - ' . $getChat->descr, 'page' => $getPage, 'user' => $this->user]);		
	}
}
function fixJSON($json) {
    $regex = <<<'REGEX'
~
    "[^"\\]*(?:\\.|[^"\\]*)*"
    (*SKIP)(*F)
  | '([^'\\]*(?:\\.|[^'\\]*)*)'
~x
REGEX;

    return preg_replace_callback($regex, function($matches) {
        return '"' . preg_replace('~\\\\.(*SKIP)(*F)|"~', '\\"', $matches[1]) . '"';
    }, $json);
}
