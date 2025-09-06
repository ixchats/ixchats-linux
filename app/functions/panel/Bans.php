<?php
namespace Functions\Panel;

use Vendor\Curl;
use Vendor\View;
use Vendor\Database;
use Classes\User;


class Bans {
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
		$max   = $this->sql->fetch_array("select * from `bans`");
		
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
		$bans = $this->sql->fetch_array("SELECT * from `bans` ORDER BY `index` DESC LIMIT {$limite}, 25");
		$inicio = $fim - 9 < 1 ? 1 : $fim - 9;
		
			
			$list = [];
			foreach ($bans as $b) {
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
				$chat = $this->sql->fetch_array("SELECT * FROM `chats` WHERE `id`={$b['chatid']}");
				$status = $b['unbandate'] > time();
				if($status){
					$tm = date("m-d-Y H:i:s",$b['unbandate']);
					$sts = "<span class=\"tx-success\">{$tm}</span>";
				}else{
					$sts = "<span class=\"tx-lato tx-danger\">Finish time ban</span>";
				}
				$list[] = [
					'id' => $b['index'], 
					'userid' => $b['userid'],
					'status' => $sts,
					'chat' => $chat[0]['name'],
					'ip' => $b['ip'],
					'type' => $Modes[$b['type']]
				];
			}
			
		$getPage  = View::get('panel/bans', [
												'bans' => $list,
												'pagina' => $pagina, //for pagination
												'inicio' => $inicio,
												'fim' => $fim,
												'paginas' => $paginas
											]);
		return View::render('layout/main', ['page' => $getPage, 'nav' => \Server::loadNavbar('panel', 'nav'), 'foot' => \Server::loadFotter('panel', 'foot'), 'user' => $this->user, 'title' => ' Bans List'] );	
	}
}