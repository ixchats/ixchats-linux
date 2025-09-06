<?php
namespace Functions\Json\Xavi;

use Vendor\View;
use Classes\User;
use Vendor\Header;

class Get {
	protected $user;
	protected $defaultXavi = [
		'acc' => [
			'y'=> 0,
			'sy' => 0,
			'c'=> 0,
			'l'=> 'none',
			'r'=> 0,
			'sx' => 0,
			'x'=> 0
		],
		'browsr' => [
			'y'=> -11,
			'sy' => 0,
			'c'=> 0,
			'l'=> 'xbrowdefault',
			'r'=> 0,
			'sx' => 0,
			'x'=> -2
		],
		'xeyel'=> [
			'y'=> 0,
			'sy' => 0,
			'c'=> 0,
			'l'=> 'xeyesdefault',
			'r'=> 0,
			'sx' => 0,
			'x'=> 2
		],
		'mouth'=> [
			'y'=> 15,
			'sy' => 0,
			'c'=> 0,
			'l'=> 'xmouthdefault',
			'r'=> 0,
			'sx' => 0,
			'x'=> 0
		],
		'hair' => [
			'y'=> -25,
			'sy' => 0,
			'c'=> 0,
			'l'=> 'hair0',
			'r'=> 0,
			'sx' => 0,
			'x'=> 0
		],
		'xeyer'=> [
			'y'=> 0,
			'sy' => 0,
			'c'=> 0,
			'l'=> 'xeyesdefault',
			'r'=> 0,
			'sx' => 0,
			'x'=> -2
		],
		'head' => [
			'y'=> 0,
			'sy' => 0,
			'c'=> 0,
			'l'=> 'xhead1',
			'r'=> 0,
			'sx' => 0,
			'x'=> 0
		],
		'browsl' => [
			'y'=> -11,
			'sy' => 0,
			'c'=> 0,
			'l'=> 'xbrowdefault',
			'r'=> 0,
			'sx' => 0,
			'x'=> 2
		]
	];
	protected $defaultItems = [
		'hat' => [
			1  => 1,
			2  => 1,
			3  => 1,
			4  => 1,
			5  => 1,
			6  => 1,
			7  => 1,
			8  => 1,
			9  => 1,
			10 => 1,
			11 => 1,
			12 => 1,
			13 => 1,
			14 => 1,
			15 => 1,
			16 => 1,
			17 => 1,
			18 => 1,
			19 => 1,
			20 => 1,
			21 => 1,
			22 => 1,
			23 => 1,
			24 => 1,
			25 => 1,
			26 => 1,
			27 => 1,
			28 => 1,
			29 => 1,
			30 => 1,
			31 => 1,
			32 => 1,
			33 => 1,
			34 => 1,
			35 => 1,
			36 => 1,
			37 => 1,
			38 => 1,
			39 => 1,
			40 => 1
		],
		'hair' => [
			3  => 1,
			4  => 1,
			8  => 1,
			9  => 1,
			10 => 1,
			11 => 1,
			12 => 1,
		]
	];

	public function __construct() {
		$this->user = new User();
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		$getId   = (int)  \Server::get('u');
		$isAll   = (bool) \Server::get('all');
		$isxAll  = (bool) \Server::get('xall');
		
		if (!$getId) {
			return;
		}
		
		Header::set('json');
		$getUser = $this->user->getUserById($getId);
		
		if (!$getUser) {
			return View::json($this->defaultXavi);
		}
		
		$getXavi = json_decode($getUser->xavi, true);
		$xavi    = json_last_error() == JSON_ERROR_NONE ? $getXavi : $this->defaultXavi;
		$data    = $xavi['data'] ? $xavi['data'] : $this->defaultXavi;
		
		if ($isAll) {
			$json  = ['items' => [], 'xavi' => [$data], 'timestamp' => time()];

			if (isset($xavi['items']))
				$json['items'] = $xavi['items'];
		
			return View::json($json);
		}
		
		return View::json($data);
	}
}