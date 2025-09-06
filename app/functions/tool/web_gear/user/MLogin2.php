<?php
namespace Functions\WebGear\User;

use Vendor\View;
use Vendor\Header;
use Vendor\Database;
use Classes\Core;
use Vendor\SMTP;
use Vendor\PHPMailer;
use Classes\User;

class MLogin2 {
	protected $sql;
	protected $core;
	protected $settings = '[{"status":""},{"font":"","language":"","notifications":"","tortoise":""}]';
	
	public function __construct() {
		$this->sql  = new Database();
		$this->core = new Core();
		$this->user = new User();
		$this->mail = new PHPMailer();
	}
	
	public function index() {
		/*if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}*/
		$getJson = (string) \Server::post('json', false);
		$json = json_decode($getJson, false);
		$getid = (int)    \Server::get('id');
		$gettk = (string) \Server::get('tk');
		$validate = false;

		if ($getid && $gettk) {
			
			while(1) {
				if (!$getid) {
					$message['Err']['loginfail'] = \Server::PrintResult('login','mobauthbad');
					break; 			
				}
				if (strlen($gettk) != 32) {
					$message['Err']['loginfail'] = \Server::PrintResult('login','mobauthbad');
					break; 			
				}
				$getUser = $this->sql->fetch_array('select id, mobile, token from users where id = \'' . $getid . '\' limit 1');
				if (!$getUser) {
					$message['Err']['loginfail'] = \Server::PrintResult('buy','notfound');
					break; 			
				}

				if ($gettk == $getUser[0]['token']) {
					$message['Err']['loginfail'] = \Server::PrintResult('login','mobauthbad');
					break; 
				}
				$this->sql->fetch_array('update users set mobile = \'' . base64_decode($getUser[0]['mobile']) . '\', token = null where id = \'' . $getUser[0]['id'] . '\'');
				$message['Err']['loginok'] = \Server::PrintResult('login','mobauthok');
				break;
			}
			header('Content-Type: application/json');
			return View::plain(json_encode($message));
		}		
			
		if (!$getJson) {
			return View::plain(3);
		} else if (json_last_error() !== 0) {
			return View::plain(4);
		} else if (empty($json->n)) {
			return View::plain(3);
		} else if (!isset($json->d)) {
			return View::plain(3);
		} else if (empty($json->P) && empty($json->p)) {
			return View::plain(10);
		}
		$user = \Server::protection($json->n);
		$pass = is_numeric($user) ? \Server::protection($json->P) : \Server::protection($json->p);
		$getUser = $this->sql->fetch_array('select * from users where id = \'' . $user . '\' or username = \'' . $user . '\' or email = \'' . $user . '\' and confirmed=1 limit 1');
		
		if ($getUser) {
			if (!is_numeric($user)) {
				if (empty($json->d) || $json->d != $getUser[0]['mobile']) {
					$token = $this->core->rand();
					$mobile =  md5(microtime(true));
					$this->sql->fetch_array('update users set token = \'' . $token . '\', mobile = \'' . base64_encode($mobile) . '\' where username = \'' . $getUser[0]['username'] . '\'');
					if (smtpmail == true) {	
						$this->mail->IsSMTP();
						$this->mail->SMTPAuth   = true;
						$this->mail->SMTPSecure = SMTP_Sec;
						$this->mail->Host       = host_smtp;
						$this->mail->Port       = port_gmail;
						$this->mail->Username   = mail_gmail;
						$this->mail->Password   = pass_gmail;
						$this->mail->From       = mail_gmail;              
						$this->mail->FromName   = 'INFO ' . XAT_NAME;
						$this->mail->Subject    = \Server::PrintMessage('login', 'confmob',[]);
						$this->mail->AltBody    = "";
						$this->mail->Body       = "";
						$this->mail->Body      .= \Server::PrintMessage('login', 'confmob2',[]);
						$this->mail->Body      .= sprintf(METHOD . '//' . DOMAIN . '/login#!confirm&id=%u&tk=%s', $getUser[0]['id'], $token);
						$this->mail->AddAddress($getUser[0]['email'], "");
						$this->mail->IsHTML(false);
						$this->mail->Send();
					}	
					return View::plain(json_encode(['d' => $mobile, 's' => \Server::PrintResult('login','emcheck')]));
				}
				if ($this->core->validate($pass, $getUser[0]['password'])) {
					$validate = true;
				}

			} else {
				if ($pass == substr(sha1($getUser[0]['password']), 0, 20)) {
					$validate = true;
				}
			}
		}
		
		if ($validate) {
			$final = new \stdClass();
			$final->timestamp = time();
			$final->{$getUser[0]['id']}  = '5,,';
			$unickname = base64_decode($getUser[0]['nickname']);
			$final->{$getUser[0]['id']} .= explode('##', $unickname)[0] . ',';
			$final->{$getUser[0]['id']} .= $getUser[0]['avatar'] . ',';
			$final->{$getUser[0]['id']} .= $getUser[0]['url'] . ',';
			$userPowers = explode('|', $getUser[0]['powers']);
			$doLogin = null;
			$powers = null;
			for ($i = 0; $i <= 26; $i++) {
				$section = array_key_exists($i, $userPowers) ? $userPowers[$i] : 0;
				$final->{$getUser[0]['id']} .= $section . ',';
				if ($section != 0) {
					$powers .= "d" . ($i + 4) . "=\"{$section}\" ";;
				}
			}
			foreach (json_decode($getUser[0]['friends']) as $f) {
				$getFriend = $this->sql->fetch_array('select nickname from users where id = ' . $f . ' limit 1');
				if (!empty($getFriend)) {
					$final->{$f} = '5,,' . explode('##', base64_decode($getFriend[0]['nickname']))[0];
				}
			}
			$settings = json_decode((!empty($getUser[0]['settings']) ? $getUser[0]['settings'] : $this->settings), true);
			$login = [
				'd1' => $getUser[0]['days'],
				'd0' => $getUser[0]['d0'], // avatar shadow
				'd2' => $getUser[0]['d2'],
				'd3' => 0,
				'dx' => $getUser[0]['xats'],
				'dt' => time(),
				'i'  => $getUser[0]['id'],
				'n'  => $getUser[0]['username'],
				'k2' => $getUser[0]['k2'],
				'k3' => $getUser[0]['k3'],
				'k1' => $getUser[0]['k']				
			];
			if (!empty($getUser[0]['dO'])) {
				$login['dO'] = $getUser[0]['dO'];
			}
			foreach ($login as $k => $v) {
				$doLogin .= "{$k}=\"{$v}\" ";
			}
			$doLogin .= $powers;
			$final->p = $json->P;
			$final->v = '<v ' . $doLogin . '/>';
			$final->M = $settings[0];
			$final->S = $settings[1];
			return View::json((array)$final);
			
		} else {
			return View::plain(json_encode([
				'v' => '<v o="" e="8" />', 
				'c' => time()
			]));
		}
	}
}