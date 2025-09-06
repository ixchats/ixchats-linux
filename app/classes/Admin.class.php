<?php
namespace Classes;

use Vendor\Database;
//Class Admn Panel
class Admin {
	protected $sql;
	protected $core;
	
	public function __construct() {
		$this->sql = new Database();
		$this->core = new Core();
	}
	
	public function getTotal(string $field): int { //Get total Sql data
		$total = $this->sql->fetch_array('SELECT id FROM ' . $field . ';');
		return count($total);
	}
	
	public function getRegister(): int { //Get total user register
		$total = $this->sql->fetch_array("select * from `users` where `username` != ''");
		return count($total);
	}
	
	public function getNullUsers(): int { //Get Total Users null (Not Register )
		$total = $this->sql->fetch_array("select * from `users` where username like ''");
		return count($total);
	}
}
