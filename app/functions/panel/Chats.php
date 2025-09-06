<?php
namespace Functions\Panel;

use Vendor\Curl;
use Vendor\View;
use Vendor\Database;
use Classes\User;
use Classes\Chat;
use Classes\Core;


class Chats {
	protected $sql;
	protected $user;
	protected $chat;
	
	public function __construct() {
		$this->sql = new Database();
		$this->user = new User();
		$this->chat = new Chat();
	}
	
	public function index() {
		
		if (!$this->user->isAuth() || $this->user->get()->panel == 0) {
			return \Server::redirect('/login');
		}
		$getPage  	= (int) \Server::get('p');
		$Getid = (int) \Server::get('id');
		$GetUpdate = (string) 	 \Server::post('update');
		
		$outter = (string) 	 \Server::post('outter');
		$langdef = (string) 	 \Server::post('langdef');
		$tags = (string) 	 \Server::post('tags');
		$bg = (string) 	 \Server::post('bg');
		$descr = (string) 	 \Server::post('descr');
		$button = (string) 	 \Server::post('button');
		
		
		$message  = ['success' => null, 'error' => null];
		
		$max   = $this->sql->fetch_array("select * from `chats`");
		
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
		$chats = $this->sql->fetch_array("SELECT * from `chats` ORDER BY `id` DESC LIMIT {$limite}, 25");
		$inicio = $fim - 9 < 1 ? 1 : $fim - 9;
		
		if($Getid){
			$c = $this->sql->fetch_array("SELECT * FROM `chats` WHERE `id`=" . intval($Getid));
			If(empty($c)){
				die('Error Not Fond');
			}
			
			if ($GetUpdate) {
				$this->user->updateData('chats',
								[
									'outter'   	        => $outter,
									'langdef'   	    => $langdef,
									'tags'   	        => $tags,
									'bg'   	        	=> $bg,
									'descr'   	    	=> $descr,
									'button'			=> $button
								],
								[
									'id' => $c[0]['id']
								]
						);
				$message['success'] = 'Chat ['.$c[0]['name'].'] Update! Waiting for loading!';
			}
			
			$rank = [];
			$ranks = $this->sql->fetch_array("SELECT * FROM `ranks` WHERE `chatid`={$c[0]['id']}");
			foreach ($ranks as $r) {
				$user = $this->sql->fetch_array("SELECT * FROM `users` WHERE `id`={$r['userid']}");
				$username = isset($user[0]['username']) ? $user[0]['username'] : 0;
				if($username){ 
					$usernm = $username; 
				}else{ 
					$usernm = "Unregistered"; 
				}
				$email = isset($user[0]['email']) ? $user[0]['email'] : 0;
				if($email){ 
					$email = $email; 
				}else{ 
					$email = "Not Fond"; 
				}
				$rank[] = [
					'id' => $r['id'], 
					'username' => $usernm,
					'userid' => $r['userid'],
					'cemail' => $c[0]['email'],
					'uemail' => $email,
					'type' => $r['f']
				];
			}
			
			$ban = [];
			$bans = $this->sql->fetch_array("SELECT * FROM `bans` WHERE `chatid`={$c[0]['id']}");
			foreach ($bans as $b) {
				$user = $this->sql->fetch_array("SELECT * FROM `users` WHERE `id`={$r['userid']}");
				$status = time() < $b['unbandate'];
				if($status){
					$tm = date("m-d-Y H:i:s",$b['unbandate']);
					$sts = "<span class=\"tx-success\">{$tm}</span>";
				}else{
					$sts = "<span class=\"tx-lato tx-danger\">Finish time ban</span>";
				}
				$username = isset($user[0]['username']) ? $user[0]['username'] : 0;
				if($username){ $usernm = $username; }else{ $usernm = "Unregistered"; }
				$Modes = [
					'gm' => 'muted',
					'gg' => 'gag',
					'gs' => 'guest self',
					'g' => 'ban',
					'ss' => 'set scroller',
					'rl' => 'ranklock',
					'sb' => 'sinbin',
					'pt' => 'protect',
					'hu' => 'hush',
					'k' => 'kick',
					'mb' => 'temp member',
					'me' => 'make member',
					'mm' => 'make mod',
					'mo' => 'make owner',
					'dr' => 'demote to guest',
					'de' => 'demote to member',
					'dm' => 'demote to mod',
					'u' => 'unban',
					'pro' => 'promotion',
					'rst' => 'restore',
					'gd' => 'dunce',
					'd2' => 'un-dunce',
					'b1' => 'badge',
					'b2' => 'un-badge',
					'n1' => 'naughty',
					'gn' => 'naughty',
					'n2' => 'un-naughty',
					'gy' => 'yellowcard',
					'y2' => 'un-yellowcard',
					'R' => 'redcard self',
					'gr' => 'redcard',
					'r2' => 'un-redcard',
					'ka' => 'kickall'
				];
				$ban[] = [
					'id' => $b['index'], 
					'username' => $usernm,
					'userid' => $b['userid'],
					'ip' => $b['ip'],
					'timess' => $sts,
					'type' => $Modes[$b['type']]
				];
			}
			
			$powers = [];
			$GroupPowers = $this->chat->getGroupPowers($c[0]['name']);
			foreach ($GroupPowers as $g) {
				$user = $this->sql->fetch_array("SELECT * FROM `users` WHERE `id`={$g['assignedBy']}");
				$username = isset($user[0]['username']) ? $user[0]['username'] : 0;
				if($username){ $usernm = $username; }else{ $usernm = "Unregistered"; }
				$power = $this->sql->fetch_array("SELECT * FROM `powers` WHERE `id`={$g['power']}");
				$powers[] = [
					'by' => $g['assignedBy'],
					'user' => $usernm,
					'power' => $power[0]['name']
				];
			}
			
			$getPage  = View::get('panel/editchats', [
													'groups' => $c,
													'rank' => $rank,
													'ban' => $ban,
													'powers' => $powers,
													'message' => $message
												]);
			return View::render('layout/main', ['page' => $getPage, 'nav' => \Server::loadNavbar('panel', 'nav'), 'foot' => \Server::loadFotter('panel', 'foot'), 'user' => $this->user, 'title' => ' Edit chat : '.$c[0]['name'].''] );	
		}else{	
			$getPage  = View::get('panel/chats', [
													'chats' => $chats,
													'pagina' => $pagina, //for pagination
													'inicio' => $inicio,
													'fim' => $fim,
													'paginas' => $paginas
												]);
			return View::render('layout/main', ['page' => $getPage, 'nav' => \Server::loadNavbar('panel', 'nav'), 'foot' => \Server::loadFotter('panel', 'foot'), 'user' => $this->user, 'title' => ' Chats'] );	
		}
	}
}