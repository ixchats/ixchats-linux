<?php
namespace Functions\Panel;

use Vendor\Curl;
use Vendor\View;
use Vendor\Database;
use Classes\User;


class Pchat {
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
		$max   = $this->sql->fetch_array("select * from `promoted`");
		
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
		$promoted = $this->sql->fetch_array("SELECT * from `promoted` ORDER BY `active`='1' DESC LIMIT {$limite}, 25");
		$inicio = $fim - 9 < 1 ? 1 : $fim - 9;
		
			$list = [];
			foreach ($promoted as $p) {
				$status = $b['over'] > time();
				if($status){
					$sts = "<span class=\"tx-success\">Active</span>";
				}else{
					$sts = "<span class=\"tx-lato tx-danger\">Offline</span>";
				}
				$over = date("m-d-Y H:i:s",$p['over']);
				
				$user = $this->sql->fetch_array("SELECT * FROM `users` WHERE `id`={$p['xby']}");
				$username = isset($user[0]['username']) ? $user[0]['username'] : 0;
				if($username){ 
					$usernm = $username; 
				}else{ 
					$usernm = "Unregistered"; 
				}
				$list[] = [
					'id' => $p['id'], 
					'chat' => $p['chat'],
					'by' => $p['xby'],
					'username' => $usernm,
					'price' => $p['price'],
					'status' => $sts,
					'over' => $over
				];
			}
			
		$getPage  = View::get('panel/pchat', [
												'chats' => $list,
												'pagina' => $pagina, //for pagination
												'inicio' => $inicio,
												'fim' => $fim,
												'paginas' => $paginas
											]);
		return View::render('layout/main', ['page' => $getPage, 'nav' => \Server::loadNavbar('panel', 'nav'), 'foot' => \Server::loadFotter('panel', 'foot'), 'user' => $this->user, 'title' => ' List Chats Promoted'] );	
	}
}