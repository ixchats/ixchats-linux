<?php
namespace Functions\Panel;

use Vendor\Curl;
use Vendor\View;
use Vendor\Database;
use Classes\User;


class Transfer {
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
		$max   = $this->sql->fetch_array("select * from `transfers`");
		
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
		$transfers = $this->sql->fetch_array("SELECT * from `transfers` ORDER BY `id` DESC LIMIT {$limite}, 25");
		$inicio = $fim - 9 < 1 ? 1 : $fim - 9;
			
			$list = [];
			foreach ($transfers as $t) {
				$data = date("m-d-Y H:i:s",$t['timestamp']);
				$list[] = [
					'id' => $t['id'], 
					'data' => $data,
					'from' => $t['from'],
					'to' => $t['to'],
					'xats' => $t['xats'],
					'days' => $t['days']
				];
			}
			
		$getPage  = View::get('panel/transfer', [
												'transfers' => $list,
												'pagina' => $pagina, //for pagination
												'inicio' => $inicio,
												'fim' => $fim,
												'paginas' => $paginas
											]);
		return View::render('layout/main', ['page' => $getPage, 'nav' => \Server::loadNavbar('panel', 'nav'), 'foot' => \Server::loadFotter('panel', 'foot'), 'user' => $this->user, 'title' => ' Transfers List'] );	
	}
}