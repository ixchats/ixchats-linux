<?php
namespace Functions\Panel;

use Vendor\Curl;
use Vendor\View;
use Vendor\Database;
use Classes\User;


class Powers {
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
		$Getid = (int) \Server::get('id');
		$GetUpdate = (string) 	 \Server::post('update');
		
		$amount = (int) 	 \Server::post('amount');
		$topsh = (string) 	 \Server::post('topsh');
		$pawns = (string) 	 \Server::post('pawns');
		$backs = (string) 	 \Server::post('backs');
		$super = (string) 	 \Server::post('super');
		$hugs = (string) 	 \Server::post('hugs');
		$tresc = (string) 	 \Server::post('tresc');
		
		$maxper = (int) 	 \Server::post('maxper');
		$currency = (int) 	 \Server::post('currency');
		$new = (int) 	 \Server::post('new');
		$limited = (int) 	 \Server::post('limited');
		$allp = (int) 	 \Server::post('allp');
		$groups = (int) 	 \Server::post('groups');
		$is_release = (int) 	 \Server::post('is_release');
		$epic = (int) 	 \Server::post('epic');
		$cost = (int) 	 \Server::post('cost');
		$emote = (string) 	 \Server::post('emote');
		$super = (string) 	 \Server::post('super');
		$requires = (string) 	 \Server::post('requires');
		
		$message  = ['success' => null, 'error' => null];
		
		$max   = $this->sql->fetch_array("select * from `powers`");
		
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
		$powers = $this->sql->fetch_array("SELECT * from `powers` ORDER BY `id` DESC LIMIT {$limite}, 25");
		$inicio = $fim - 9 < 1 ? 1 : $fim - 9;
		
		if($Getid){
			$p = $this->sql->fetch_array("SELECT * FROM `powers` WHERE `id`=" . intval($Getid));
			If(empty($p)){
				die('Error Not Fond');
			}
			
			if ($GetUpdate) {
				$this->user->updateData('powers',
								[
									'amount'   	        => $amount,
									'topsh'   	        => $topsh,
									'super'   	        => $super,
									'pawns'   	        => $pawns,
									'backs'   	        => $backs,
									'hugs'   	        => $hugs,
									'tresc'   	        => $tresc,
									'maxper'   	        => $maxper,
									'currency'   	    => $currency,
									'new'   	        => $new,
									'limited'   	    => $limited,
									'allp'   	        => $allp,
									'groups'   	        => $groups,
									'is_release'   	    => $is_release,
									'epic'   	        => $epic,
									'cost'   	        => $cost,
									'emote'   	        => $emote,
									'super'   	        => $super,
									'requires'   	    => $requires
								],
								[
									'id' => $p[0]['id']
								]
						);
				$message['success'] = 'Power '.$p[0]['name'].' Update! Waiting for loading!';
			}
			
			$getPage  = View::get('panel/editpowers', [
													'powers' => $p,
													'message' => $message
												]);
			return View::render('layout/main', ['page' => $getPage, 'nav' => \Server::loadNavbar('panel', 'nav'), 'foot' => \Server::loadFotter('panel', 'foot'), 'user' => $this->user, 'title' => ' Edit power : '.$p[0]['name'].''] );	
		}else{	
			$getPage  = View::get('panel/powers', [
													'powers' => $powers,
													'pagina' => $pagina, //for pagination
													'inicio' => $inicio,
													'fim' => $fim,
													'paginas' => $paginas
												]);
			return View::render('layout/main', ['page' => $getPage, 'nav' => \Server::loadNavbar('panel', 'nav'), 'foot' => \Server::loadFotter('panel', 'foot'), 'user' => $this->user, 'title' => ' Powers'] );	
		}
	}
}