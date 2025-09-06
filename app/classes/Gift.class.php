<?php
namespace Classes;

use Vendor\Database;

class Gift {
	protected $sql;
	protected $core;

	public function __construct() {
		$this->sql = new Database();
		$this->core = new Core();
	}

	public function buyGift(array $values) {
		$this->sql->insert('gifts', $values);
	}
		
	public function getGiftsById(int $id): array {
		$getGifts = [];
		$getGifts = $this->sql->fetch_array('select * from gifts where b = ' . $id . ';');
		return $getGifts;
	}

	public function getUserById(int $id) {
		$getUser = $this->sql->fetch_array('select * from users where id = ' . $id . ' limit 1;');
		if (empty($getUser[0])) {
			return false;
		}
		return (object) $getUser[0];
	}

	public function update(string $table,array $values,array $condition): bool {
		$this->sql->update($table, $values, $condition);
		return true;
	}

	public function delete(array $condition): bool {
		$this->sql->delete('gifts', $condition);
		return true;
	}

	public function verifyPass(string $pass,string $userpass): bool {
	    if ($this->core->validate($pass, $userpass)) {
			return true;
		}
		return false;
	}

	public function getUserByK2(int $id, string $k2) {
		$getUser = $this->sql->fetch_array('select * from users where id = \'' . $id . '\' and k2 = \'' . $k2 . '\' order by id desc limit 1;');
		if (empty($getUser[0])) {
			return false;
		}
		return (object) $getUser[0];
	}

	public function checkForID(int $id): bool {
		$getUser = $this->sql->fetch_array('select * from users where id = ' . $id . ' limit 1;');
		return !empty($getUser[0]);
	}
}