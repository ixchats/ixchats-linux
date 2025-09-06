<?php
namespace Vendor;

class Database {
	private $settings = [
		'driver'  => 'mysql', // driver method
		'charset' => 'utf8' // charset type
	];
	
	private $options  = [
		\PDO::ATTR_ERRMODE            => \PDO::ERRMODE_EXCEPTION,
		\PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC,
		\PDO::ATTR_EMULATE_PREPARES   => false,
	];

	private $link;
	private $result;

	public function __construct() {
		try {
			$setDriver  = "{$this->settings['driver']}:host=" . MYSQL_HOST . ";dbname=" . MYSQL_NAME . ";charset={$this->settings['charset']}";
			$this->link = new \PDO($setDriver, MYSQL_USER, MYSQL_PASS, $this->options);
		} catch (\PDOException $e) {
			 echo $e->getMessage();
			 exit;
		}
	}

	public function query($string) {
		if (!is_string($string)) {
			return false;
		}
		$this->result = $this->link->query($string);
		return $this->result;
	}

	public function fetch_array($string) {
		if (!is_string($string)) {
			return false;
		}
		$this->query($string);
		$result = $this->result->fetchAll();
		return empty($result) ? array() : $result;
	}

	public function insert($table, $values) {
		if (!is_string($table) || !is_array($values)) {
			return false;
		}
		$keys    = implode(", ", array_keys($values));
		$addAsks = substr(str_repeat("?, ", count($values)), 0, -2);
		$prepare = $this->link->prepare("INSERT INTO {$table} ({$keys}) VALUES ({$addAsks})");
		$prepare->execute(array_values($values));
		return $prepare;
	}
	
	public function delete($table, $where) {
		if (!is_string($table) || !is_array($where)) {
			return false;
		}
		list($Tables, $whereC) = [null, null];
		foreach ($where as $k => $v) {
			$whereC .= "{$k} = '{$v}' AND "; // may be changed later
		}
		list($where,$Tables) = [ 
			substr($whereC, 0, -5),
			$table
		];
		$prepare = $this->query("DELETE FROM {$table} WHERE {$where}");
		return $prepare;
	}

	public function update($table, $values, $where) {
		if (!is_string($table) || !is_array($values) || !is_array($where)) {
			return false;
		}
		list($keysC, $whereC) = [null, null];
		foreach ($values as $k => $v) {
			$keysC .= "{$k} = ?, ";
		}
		foreach ($where as $k => $v) {
			$whereC .= "{$k} = '{$v}' AND "; // may be changed later
		}
		list($keys, $where, $values) = [
			substr($keysC, 0, -2),
			substr($whereC, 0, -5),
			array_values($values),
		];
		$prepare  = $this->link->prepare("UPDATE {$table} SET {$keys} WHERE {$where}");
		$prepare->execute(array_values($values));
		return $prepare;
	}

	public function search($table, $values) {
		if (!is_string($table) || !is_array($values) || count($values) < 2) {
			return false;
		}
		$result = $this->fetch_array("SELECT * FROM {$table} WHERE {$values[0]} LIKE '%{$values[1]}%'");
		if (empty($result)) {
			return false;
		}
		return $result;
	}

	public function rowCount($table) {
		if (!is_string($table)) {
			return false;
		}
		$result = $this->fetch_array("SELECT * FROM {$table}");
		return count($result);
	}

	public function tablesCount() {
		$result = $this->fetch_array("SHOW TABLES");
		return count($result);
	}

	public function lastInsertId() {
		return $this->link->lastInsertId();
	}
}
?>