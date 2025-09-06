<?php
namespace Functions\Panel;

use Vendor\Curl;
use Vendor\View;
use Vendor\Database;
use Classes\User;
use Classes\Chat;


class Pbanner {
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
		$max   = $this->sql->fetch_array("select * from `promobanner`");
		
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
		$banner = $this->sql->fetch_array("SELECT * from `promobanner` ORDER BY `active`='1' DESC LIMIT {$limite}, 25");
		$inicio = $fim - 9 < 1 ? 1 : $fim - 9;
		
			
			$list = [];
			foreach ($banner as $b) {
				$status = time() < $b['over'];
				if($status){
					$tm = date("m-d-Y H:i:s",$b['over']);
					$sts = "<span class=\"tx-success\">{$tm}</span>";
				}else{
					$sts = "<span class=\"tx-lato tx-danger\">Offline</span>";
				}
				$over = date("m-d-Y H:i:s",$b['over']);
				
				$list[] = [
					'id' => $b['id'], 
					'chat' => $b['chat'],
					'xby' => $b['xby'],
					'price' => $b['price'],
					'banner' => $b['banner'],
					'status' => $sts,
					'over' => $over
				];
			}
			
		$getPage  = View::get('panel/pbanner', [
												'banner' => $list,
												'pagina' => $pagina, //for pagination
												'inicio' => $inicio,
												'fim' => $fim,
												'paginas' => $paginas
											]);
		return View::render('layout/main', ['page' => $getPage, 'nav' => \Server::loadNavbar('panel', 'nav'), 'foot' => \Server::loadFotter('panel', 'foot'), 'user' => $this->user, 'title' => ' List Promo Banner'] );	
	}
}