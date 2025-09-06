<?php
namespace Functions\Panel;

use Vendor\Curl;
use Vendor\View;
use Vendor\Database;
use Classes\User;


class UsersNull {
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
		
		$max   = $this->sql->fetch_array("select * from `users` where username like ''");
		
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
		$users = $this->sql->fetch_array("SELECT * from `users` where username like '' ORDER BY `id` DESC LIMIT {$limite}, 27");
		$inicio = $fim - 9 < 1 ? 1 : $fim - 9;
		
		
				$list = [];
				foreach ($users as $u) {
					$type = empty($u['username']) ? '<label class="badge badge-danger">Unregistered</label>' : ($u['confirmed'] == 1 ? '<label class="badge badge-success">Registered</label>' : '<label class="badge badge-warning">No confirmed</label>');
					if($u['username']){ $username = $u['username']; }else{ $username = "Not Register"; }
					if($u['avatar']){
						$avss = $u['avatar'];
					}else{
						$avss = '34';
					}
					$savatar = !is_numeric($avss) ? '<iframe frameborder="0" height="110" width="110" scrolling="no" src="/Panel/avatar.html?size=100&url='.$avss.'"></iframe>' : '<img width="100" height="100" src="//rxat.ro/web_gear/chat/av/'.$avss.'.png" alt="Avatar">';

					$list[] = [
						'id' => $u['id'], 
						'username' => $username,
						'avatar' => $savatar,
						'type' => $type,
						'time' => $u['time_stamp'],
						'conect' => $u['connectedlast'],
						'isp' => $u['isp']
					];
				}
				
			$getPage  = View::get('panel/usersnull', [
													'users' => $list,
													'pagina' => $pagina, //for pagination
													'inicio' => $inicio,
													'fim' => $fim,
													'paginas' => $paginas
												]);
			return View::render('layout/main', ['page' => $getPage, 'nav' => \Server::loadNavbar('panel', 'nav'), 'foot' => \Server::loadFotter('panel', 'foot'), 'user' => $this->user, 'title' => ' Users Null'] );	
	}
}