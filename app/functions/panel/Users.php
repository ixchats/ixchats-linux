<?php
namespace Functions\Panel;

use Vendor\Curl;
use Vendor\View;
use Vendor\Database;
use Classes\User;
use Classes\Core;


class Users {
	protected $sql;
	protected $user;
	protected $core;
	
	public function __construct() {
		$this->sql = new Database();
		$this->user = new User();
		$this->core = new Core();
	}
	
	public function index() {
		
		if (!$this->user->isAuth() || $this->user->get()->panel == 0) {
			return \Server::redirect('/login');
		}
		$getPage  	= (int) \Server::get('p');
		$Getid = (int) \Server::get('id');
		$Getuser = (int) \Server::get('info');
		$GetUpdate = (string) 	 \Server::post('update');
		
		$held = (int) 	 \Server::post('is_held');
		$reserve = (int) 	 \Server::post('reserve');
		$panel = (int) 	 \Server::post('panel');
		$transferblock = (int) 	 \Server::post('transferblock');
		$block = (int) 	 \Server::post('block');
		
		$days = (int) 	 \Server::post('days');
		$update1 = (string) 	 \Server::post('update1');
		$xats = (int) 	 \Server::post('xats');
		$update2 = (string) 	 \Server::post('update2');
		
		$max   = $this->sql->fetch_array("select * from `users` where `username` != ''");
		
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
		$users = $this->sql->fetch_array("SELECT * from `users` where `username` != '' ORDER BY `id` DESC LIMIT {$limite}, 27");
		$inicio = $fim - 9 < 1 ? 1 : $fim - 9;
		

		if($Getid){
			$u = $this->sql->fetch_array("SELECT * FROM `users` WHERE `id`=" . intval($Getid));
			If(empty($u)){
				die('Error Not Fond');
			}
			
		if ($update1) {
			$day = floor($days * 86400);
			$add = $u[0]['days'] + $day;
			$this->user->updateData('users',['days' => $add],['id' => $u[0]['id']]);
			
			$message['success'] = 'Add '.$days.' days to '.$u[0]['username'].' Update! Waiting for loading!';
		}
		if ($update2) {
			$add = $u[0]['xats'] + $xats;
			$this->user->updateData('users',['xats' => $add],['id' => $u[0]['id']]);
			$message['success'] = 'Add '.$xats.' xats to '.$u[0]['username'].' Update! Waiting for loading!';
		}
		
		if ($GetUpdate) {	
			$helds = floor($held * (3600 * 24)) + time();
			$this->user->updateData('users',
								[
									'is_held'   	    => $helds,
									'reserve'   	    => $reserve,
									'panel' 			=> $panel,
									'transferblock' 	=> $transferblock,
									'block' 			=> $block
								],
								[
									'id' => $u[0]['id']
								]
						);
				$message['success'] = 'User '.$u[0]['username'].' Update! Waiting for loading!';
		}
			$getPage  = View::get('panel/edituser', [
													'user' => $u,
													'days' => $this->user->getDays($u[0]['days']),
													'held' => $this->user->getDays($u[0]['is_held']),
													'message' => $message
												]);
			if($u[0]['username']){
				$username = $u[0]['username']; 
			}else{ 
				$username = "Not Register"; 
			}
			return View::render('layout/main', ['page' => $getPage, 'nav' => \Server::loadNavbar('panel', 'nav'), 'foot' => \Server::loadFotter('panel', 'foot'), 'user' => $this->user, 'title' => ' Edit user : '.$username.''] );	
		}elseif($Getuser){
			$u = $this->sql->fetch_array("SELECT * FROM `users` WHERE `id`=" . intval($Getuser));
			If(empty($u)){
				die('Error Not Fond');
			}
				$powers = $this->core->DecodePowers($u[0]['powers'], $u[0]['dO']);
				$domeniu = DOMAIN;
				$url = 'https://'.$domeniu.'/json/powers.php';
				$checkLogin = file_get_contents($url);
					for ($i = 0; $i <= 31; ++$i) { 
						$checkLogin = str_replace(chr($i), "", $checkLogin); 
					}
					$checkLogin = str_replace(chr(127), "", $checkLogin);
					if (0 === strpos(bin2hex($checkLogin), 'efbbbf')) {
					   $checkLogin = substr($checkLogin, 3);
					}
					$fgc = json_decode($checkLogin);
					$fgc->s;
					
				$list = [];
				foreach ($powers AS $i => $x) {
					if($i == 0){
						$name = 'allpowers';
					}elseif($i == 81){
						$name = 'tickle';
					}elseif($i == 95){
						$name = 'everypower';
					}else{
						$name = $fgc->$i->s;
					}
					$list[] = [
						'id' => $i,
						'name' => $name,
						'count' => $x
					];
				}
				
				$getPage  = View::get('panel/infouser', [
														'user' => $u,
														'powers' => $list,
														//'pow' => $pow,
														'message' => $message
													]);
				if($u[0]['username']){
					$username = $u[0]['username']; 
				}else{ 
					$username = "Not Register"; 
				}
			return View::render('layout/main', ['page' => $getPage, 'nav' => \Server::loadNavbar('panel', 'nav'), 'foot' => \Server::loadFotter('panel', 'foot'), 'user' => $this->user, 'title' => ' Info user : '.$username.''] );	
		}else{
				$countries = array
					(
						'AF' => 'Afghanistan',
						'AX' => 'Aland Islands',
						'AL' => 'Albania',
						'DZ' => 'Algeria',
						'AS' => 'American Samoa',
						'AD' => 'Andorra',
						'AO' => 'Angola',
						'AI' => 'Anguilla',
						'AQ' => 'Antarctica',
						'AG' => 'Antigua And Barbuda',
						'AR' => 'Argentina',
						'AM' => 'Armenia',
						'AW' => 'Aruba',
						'AU' => 'Australia',
						'AT' => 'Austria',
						'AZ' => 'Azerbaijan',
						'BS' => 'Bahamas',
						'BH' => 'Bahrain',
						'BD' => 'Bangladesh',
						'BB' => 'Barbados',
						'BY' => 'Belarus',
						'BE' => 'Belgium',
						'BZ' => 'Belize',
						'BJ' => 'Benin',
						'BM' => 'Bermuda',
						'BT' => 'Bhutan',
						'BO' => 'Bolivia',
						'BA' => 'Bosnia And Herzegovina',
						'BW' => 'Botswana',
						'BV' => 'Bouvet Island',
						'BR' => 'Brazil',
						'IO' => 'British Indian Ocean Territory',
						'BN' => 'Brunei Darussalam',
						'BG' => 'Bulgaria',
						'BF' => 'Burkina Faso',
						'BI' => 'Burundi',
						'KH' => 'Cambodia',
						'CM' => 'Cameroon',
						'CA' => 'Canada',
						'CV' => 'Cape Verde',
						'KY' => 'Cayman Islands',
						'CF' => 'Central African Republic',
						'TD' => 'Chad',
						'CL' => 'Chile',
						'CN' => 'China',
						'CX' => 'Christmas Island',
						'CC' => 'Cocos (Keeling) Islands',
						'CO' => 'Colombia',
						'KM' => 'Comoros',
						'CG' => 'Congo',
						'CD' => 'Congo, Democratic Republic',
						'CK' => 'Cook Islands',
						'CR' => 'Costa Rica',
						'CI' => 'Cote D\'Ivoire',
						'HR' => 'Croatia',
						'CU' => 'Cuba',
						'CY' => 'Cyprus',
						'CZ' => 'Czech Republic',
						'DK' => 'Denmark',
						'DJ' => 'Djibouti',
						'DM' => 'Dominica',
						'DO' => 'Dominican Republic',
						'EC' => 'Ecuador',
						'EG' => 'Egypt',
						'SV' => 'El Salvador',
						'GQ' => 'Equatorial Guinea',
						'ER' => 'Eritrea',
						'EE' => 'Estonia',
						'ET' => 'Ethiopia',
						'FK' => 'Falkland Islands (Malvinas)',
						'FO' => 'Faroe Islands',
						'FJ' => 'Fiji',
						'FI' => 'Finland',
						'FR' => 'France',
						'GF' => 'French Guiana',
						'PF' => 'French Polynesia',
						'TF' => 'French Southern Territories',
						'GA' => 'Gabon',
						'GM' => 'Gambia',
						'GE' => 'Georgia',
						'DE' => 'Germany',
						'GH' => 'Ghana',
						'GI' => 'Gibraltar',
						'GR' => 'Greece',
						'GL' => 'Greenland',
						'GD' => 'Grenada',
						'GP' => 'Guadeloupe',
						'GU' => 'Guam',
						'GT' => 'Guatemala',
						'GG' => 'Guernsey',
						'GN' => 'Guinea',
						'GW' => 'Guinea-Bissau',
						'GY' => 'Guyana',
						'HT' => 'Haiti',
						'HM' => 'Heard Island & Mcdonald Islands',
						'VA' => 'Holy See (Vatican City State)',
						'HN' => 'Honduras',
						'HK' => 'Hong Kong',
						'HU' => 'Hungary',
						'IS' => 'Iceland',
						'IN' => 'India',
						'ID' => 'Indonesia',
						'IR' => 'Iran, Islamic Republic Of',
						'IQ' => 'Iraq',
						'IE' => 'Ireland',
						'IM' => 'Isle Of Man',
						'IL' => 'Israel',
						'IT' => 'Italy',
						'JM' => 'Jamaica',
						'JP' => 'Japan',
						'JE' => 'Jersey',
						'JO' => 'Jordan',
						'KZ' => 'Kazakhstan',
						'KE' => 'Kenya',
						'KI' => 'Kiribati',
						'KR' => 'Korea',
						'KW' => 'Kuwait',
						'KG' => 'Kyrgyzstan',
						'LA' => 'Lao People\'s Democratic Republic',
						'LV' => 'Latvia',
						'LB' => 'Lebanon',
						'LS' => 'Lesotho',
						'LR' => 'Liberia',
						'LY' => 'Libyan Arab Jamahiriya',
						'LI' => 'Liechtenstein',
						'LT' => 'Lithuania',
						'LU' => 'Luxembourg',
						'MO' => 'Macao',
						'MK' => 'Macedonia',
						'MG' => 'Madagascar',
						'MW' => 'Malawi',
						'MY' => 'Malaysia',
						'MV' => 'Maldives',
						'ML' => 'Mali',
						'MT' => 'Malta',
						'MH' => 'Marshall Islands',
						'MQ' => 'Martinique',
						'MR' => 'Mauritania',
						'MU' => 'Mauritius',
						'YT' => 'Mayotte',
						'MX' => 'Mexico',
						'FM' => 'Micronesia, Federated States Of',
						'MD' => 'Moldova',
						'MC' => 'Monaco',
						'MN' => 'Mongolia',
						'ME' => 'Montenegro',
						'MS' => 'Montserrat',
						'MA' => 'Morocco',
						'MZ' => 'Mozambique',
						'MM' => 'Myanmar',
						'NA' => 'Namibia',
						'NR' => 'Nauru',
						'NP' => 'Nepal',
						'NL' => 'Netherlands',
						'AN' => 'Netherlands Antilles',
						'NC' => 'New Caledonia',
						'NZ' => 'New Zealand',
						'NI' => 'Nicaragua',
						'NE' => 'Niger',
						'NG' => 'Nigeria',
						'NU' => 'Niue',
						'NF' => 'Norfolk Island',
						'MP' => 'Northern Mariana Islands',
						'NO' => 'Norway',
						'OM' => 'Oman',
						'PK' => 'Pakistan',
						'PW' => 'Palau',
						'PS' => 'Palestinian Territory, Occupied',
						'PA' => 'Panama',
						'PG' => 'Papua New Guinea',
						'PY' => 'Paraguay',
						'PE' => 'Peru',
						'PH' => 'Philippines',
						'PN' => 'Pitcairn',
						'PL' => 'Poland',
						'PT' => 'Portugal',
						'PR' => 'Puerto Rico',
						'QA' => 'Qatar',
						'RE' => 'Reunion',
						'RO' => 'Romania',
						'RU' => 'Russian Federation',
						'RW' => 'Rwanda',
						'BL' => 'Saint Barthelemy',
						'SH' => 'Saint Helena',
						'KN' => 'Saint Kitts And Nevis',
						'LC' => 'Saint Lucia',
						'MF' => 'Saint Martin',
						'PM' => 'Saint Pierre And Miquelon',
						'VC' => 'Saint Vincent And Grenadines',
						'WS' => 'Samoa',
						'SM' => 'San Marino',
						'ST' => 'Sao Tome And Principe',
						'SA' => 'Saudi Arabia',
						'SN' => 'Senegal',
						'RS' => 'Serbia',
						'SC' => 'Seychelles',
						'SL' => 'Sierra Leone',
						'SG' => 'Singapore',
						'SK' => 'Slovakia',
						'SI' => 'Slovenia',
						'SB' => 'Solomon Islands',
						'SO' => 'Somalia',
						'ZA' => 'South Africa',
						'GS' => 'South Georgia And Sandwich Isl.',
						'ES' => 'Spain',
						'LK' => 'Sri Lanka',
						'SD' => 'Sudan',
						'SR' => 'Suriname',
						'SJ' => 'Svalbard And Jan Mayen',
						'SZ' => 'Swaziland',
						'SE' => 'Sweden',
						'CH' => 'Switzerland',
						'SY' => 'Syrian Arab Republic',
						'TW' => 'Taiwan',
						'TJ' => 'Tajikistan',
						'TZ' => 'Tanzania',
						'TH' => 'Thailand',
						'TL' => 'Timor-Leste',
						'TG' => 'Togo',
						'TK' => 'Tokelau',
						'TO' => 'Tonga',
						'TT' => 'Trinidad And Tobago',
						'TN' => 'Tunisia',
						'TR' => 'Turkey',
						'TM' => 'Turkmenistan',
						'TC' => 'Turks And Caicos Islands',
						'TV' => 'Tuvalu',
						'UG' => 'Uganda',
						'UA' => 'Ukraine',
						'AE' => 'United Arab Emirates',
						'GB' => 'United Kingdom',
						'US' => 'United States',
						'UM' => 'United States Outlying Islands',
						'UY' => 'Uruguay',
						'UZ' => 'Uzbekistan',
						'VU' => 'Vanuatu',
						'VE' => 'Venezuela',
						'VN' => 'Viet Nam',
						'VG' => 'Virgin Islands, British',
						'VI' => 'Virgin Islands, U.S.',
						'WF' => 'Wallis And Futuna',
						'EH' => 'Western Sahara',
						'YE' => 'Yemen',
						'ZM' => 'Zambia',
						'ZW' => 'Zimbabwe',
						'Unk' => 'Unknown',
					);
				
				$list = [];
				foreach ($users as $u) {
					$type = empty($u['username']) ? '<label class="badge badge-danger">Unregistered</label>' : ($u['confirmed'] == 1 ? '<label class="badge badge-success">Registered</label>' : '<label class="badge badge-warning">No confirmed</label>');
					if($u['username']){ $username = $u['username']; }else{ $username = "Not Register"; }
					if(preg_match("/^\\((.*)\\)(\\#?)(.*)$/m", $u['avatar'])){
						$abc = str_replace(
							array('(',')','_'),
							array('','',''),
							$u['avatar']        
						);      ;
						$savatar = '<iframe frameborder="0" height="110" width="110" scrolling="no" src="/tool/smileshow.php?sm='.$abc.'"></iframe>';
					}else{
						$savatar = !is_numeric($u['avatar']) ? '<iframe frameborder="0" height="110" width="110" scrolling="no" src="/Panel/avatar.html?size=100&url='.$u['avatar'].'"></iframe>' : '<img width="110" height="110" src="//rxat.ro/web_gear/chat/av/'.$u['avatar'].'.png" alt="Avatar">';
					}
					$list[] = [
						'id' => $u['id'], 
						'username' => $username,
						'avatar' => $savatar,
						'type' => $type,
						'email' => $u['email'],
						'conect' => $u['connectedlast'],
						'sizecountry' => $countries,
						'country' => $u['country'],
						'isp' => $u['isp']
					];
				}
				
			$getPage  = View::get('panel/users', [
													'users' => $list,
													'pagina' => $pagina, //for pagination
													'inicio' => $inicio,
													'fim' => $fim,
													'paginas' => $paginas
												]);
			return View::render('layout/main', ['page' => $getPage, 'nav' => \Server::loadNavbar('panel', 'nav'), 'foot' => \Server::loadFotter('panel', 'foot'), 'user' => $this->user, 'title' => ' Users'] );	
		}
	}
}