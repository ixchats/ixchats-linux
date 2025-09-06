<?php
namespace Functions\Panel;

use Vendor\Curl;
use Vendor\View;
use Vendor\Database;
use Classes\User;


class Messages {
	protected $sql;
	protected $user;
	
	public function __construct() {
		$this->sql = new Database();
		$this->user = new User();
	}
	
	public function index() {
		
		if (!$this->user->isAuth() || $this->user->get()->panel == 0) {
			return \Server::redirect('/login');
		}
		$getPage  	= (int) \Server::get('p');
		$max   = $this->sql->fetch_array("select * from `messages`");
		
		$paginas = ceil((int) count($max) / 25);
		$pagina  = (intval(Isset($getPage) && is_numeric($getPage) && $getPage >= 1 && $getPage <= $paginas) ? $getPage : 1);
		$limite = ($pagina - 1) * 25 - 1;
		If($limite > count($max) || $limite < 0)
		$limite = 0;
			Else
		$limite--;
		$paginas = ceil((int) count($max) / 25);
		$fim   = $pagina > 5 ? ($pagina + 5 > $paginas ? $paginas : $pagina + 5) : 10;
		If($paginas < $fim)
			$fim = $paginas;
		$messages = $this->sql->fetch_array("SELECT * from `messages` ORDER BY `mid` DESC LIMIT {$limite}, 25");
		$inicio = $fim - 9 < 1 ? 1 : $fim - 9;
		
			$words = array('pula', 'huj', 'nxat', 'hack', 'fuck', 'rxat', 'fut', 'pizda', 'ionut', 'xat.com'); // alert mesaje 
			$replacement = array();
			foreach($words as $word){
				$replacement[] = "<b><font color=\"ff0000\">" . $word . "</font></b>";
			}
			
			$list = [];
			foreach ($messages as $m) {
				$chat = $this->sql->fetch_array("SELECT * FROM `chats` WHERE `id`={$m['id']}");
				$time = date("m-d-Y H:i:s",$m['time']);
				$list[] = [
					'id' => $m['mid'], 
					'registered' => $m['registered'],
					'message' => $m['message'],
					'chat' => $chat[0]['name'],
					'time' => $time,
					'pool' => $m['pool'],
					'port' => $m['port']
				];
			}
			
		$getPage  = View::get('panel/messages', [
												'mesages' => $list,
												'words' => $words, //bad item
												'replacement' => $replacement,
												'pagina' => $pagina, //for pagination
												'inicio' => $inicio,
												'fim' => $fim,
												'paginas' => $paginas
											]);
		return View::render('layout/main', ['page' => $getPage, 'nav' => \Server::loadNavbar('panel', 'nav'), 'foot' => \Server::loadFotter('panel', 'foot'), 'user' => $this->user, 'title' => ' Messages'] );	
	}
}