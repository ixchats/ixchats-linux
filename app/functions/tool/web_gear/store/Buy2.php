<?php
namespace Functions\WebGear\Store;

use Vendor\View;
use Vendor\Database;
use Vendor\Validator;
use Classes\User;

class Buy2 {
	protected $sql;
	protected $user;
	
	public function __construct() {
		$this->sql  = new Database();
		$this->user = new User();
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		$UserId     = (int)    \Server::post('UserId');
		$PassHash   = (string) \Server::post('PassHash');	
		$Err        = ['Err' => []];
		$table      = '';
				
		while(1) {		
			if (!$UserId) {
				$Err['Err']['buyxats'] = 'No UserID';
				break; 	 	 		 
			}
			if (!$this->user->isAuth()) {
				$Err['Err']['buyxats'] = \Server::PrintResult('buy','relogin');
				break; 	 	 		 
			}
			$user = $this->user->getUserById($UserId);
			if ($this->user->get()->id !== $user->id) {
				$Err['Err']['buyxats'] = \Server::PrintResult('buy','relogin');
				break; 	 	 		 
			}
			if ($PassHash != substr(sha1($user->password), 0, 20)) {
				$Err['Err']['buyxats'] = \Server::PrintResult('buy','relogin');
				break; 	 	 		 
			}
			
			/*$table .= '<table class="table-sm table-bordered table-responsive d-block d-md-table">';
			$table .= '<tr align="center">';
			$table .= '<th>xats</th>';
			$table .= '<th>'. \Server::PrintResult('buy','days') .'</th>';
			$table .= '<th>'. \Server::PrintResult('buy','cost') .'</th>';
			$table .= '<th>Pay with Gift Cards<BR>'. \Server::PrintResult('buy','noreserve') .'</th>';
			$table .= '<th>PaySafeCard<BR>'. \Server::PrintResult('buy','noreserve') .'</th>';
			$table .= '<th>Worldwide payments<BR>'. \Server::PrintResult('buy','noreserve') .'</th>';
			$table .= '<th>'. \Server::PrintResult('buy','credcard') .'<BR>Bank and more</th>';
			$table .= '<th>PayPal</th>';
			$table .= '</tr>';

			$query = $this->sql->fetch_array('select * from products;'); 
			
			foreach ($query as $q) {
				$table .= '<TR height="52">';
				$table .= '<TD>'.$q['xats'].' xats</TD>';
				$table .= '<TD>'.$q['days'].' <span data-localize=buy.includes>days</span>&nbsp;*</TD>';
				$table .= '<TD>$'.$q['price'].' ('.$q['coin'].') **</TD>';
				$table .= '<td width="150"><a href="/web_gear/chat/buy.php?OB=1&UserId='.$user->id.'&k2='.$user->k2.'&pack='.$q['id'].'">';
				$table .= '<img border=0 alt="Pay with Gift Cards" 
							src="https://pay.openbucks.com/paybutton_v2.php?pubkey=e7b70e8c-5732-4efb-a998-99288e0dde43&style=obx-170-50-anim"/>';
				$table .= '</a>';
				$table .= '</td>';
				$table .= '<td>';
				$table .= '<form method="post" action="https://'.DOMAIN.'/web_gear/chat/buy.php">';
				$table .= '<input type="hidden" name="payment_methods" value="PSC">';
				$table .= '<input type="hidden" name="UserId" value="'.$user->id.'">';
				$table .= '<input type="hidden" name="k2" value="'.$user->k2.'">';
				$table .= '<input type="hidden" name="pack" value="'.$q['id'].'">';
				$table .= '<input type="image" src="//'.DOMAIN.'/images/paysafecard.png" border="0" name="submit" title="Make payments with PaySafeCard.">';
				$table .= '</form>';
				$table .= '</td>';
				$table .= '<td width="153"><a href="https://api.paymentwall.com/api/subscription?key=be0baaa4c544f975fbf186133f2cd947&uid='.$user->id.'&widget=p1_1&amount='.$q['price'].'&currencyCode='.$q['coin'].'&ag_name='.$q['xats'].'+xats&ag_external_id='.$q['xats'].'+xats&ag_type=fixed&sign_version=3&email='.BUY_EMAIL.'%40'.DOMAIN.'"><img width="153" height="34" border=0 alt="Worldwide payments" src="//'.DOMAIN.'/images/paymentwall.png"/></a></td>';
				$table .= '<td>';
				$table .= '<form method="post" action="https://'.DOMAIN.'/web_gear/chat/buy.php">';
				$table .= '<input type="hidden" name="UserId" value="'.$user->id.'">';
				$table .= '<input type="hidden" name="k2" value="'.$user->k2.'">';
				$table .= '<input type="hidden" name="pack" value="'.$q['id'].'">';
				$table .= '<input type="image" src="//'.DOMAIN.'/images/skrill-payby-btn-grey_245x75.png" border="0" name="submit" title="Make payments with Skrill.">';
				$table .= '</form>';
				$table .= '</td>';
				$table .= '<td>';
				$table .= '<form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">';
				$table .= '<input type="hidden" name="cmd" value="_s-xclick">';
				$table .= '<input type="hidden" name="UserId" value="'.$user->id.'">';
				$table .= '<input type="hidden" name="k2" value="'.$user->k2.'">';
				$table .= '<input type="hidden" name="cancel_return" value="'.CANCEL_DONATION.'">';
				$table .= '<input type="hidden" name="return" value="'.SUCCESS_DONATION.'">';
				$table .= '<input type="hidden" name="business" value="'.BUY_EMAIL.'">';
				$table .= '<input type="hidden" name="item_name" value="'.XAT_NAME.'">';
				$table .= '<input type="hidden" name="notify_url" value="'.URL_DONATION.'">';
				$table .= '<input type="hidden" name="item_number" value="'.$q['id'].'">';
				$table .= '<input type="hidden" name="amount" value="'.$q['price'].'">';
				$table .= '<input type="hidden" name="currency_code" value="'.$q['coin'].'">';
				$table .= '<input type="hidden" name="button_subtype" value="services">';
				$table .= '<input type="hidden" name="lc" value="C2">';
				$table .= '<input type="hidden" name="no_note" value="'.$user->id.'">';
				$table .= '<input type="image" src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/buy-logo-large.png" border="0" name="submit" alt="Buy now with PayPal">';
				$table .= '</form>';
				$table .= '</td>';
				$table .= '</tr>';	
			}
			$table .= '<TR>';
			$table .= '<TD colspan="11"><small>'. \Server::PrintResult('buy','max10') .'</SMALL></TD>';
			$table .= '<TR>';
			$table .= '<TR>';
			$table .= '<TD colspan="101"><small>'. \Server::PrintResult('buy','reserve') .'</small></TD>';
			$table .= '<TR>';
			$table .= '<TR>';
			$table .= '<TD colspan="3">'. \Server::PrintResult('buy','ios') .':</TD>';
			$table .= '<TD colspan="101"><a href="https://itunes.apple.com/"><img src="/images/Download_on_the_App_Store_Badge_US-UK_135x40.svg"></a></TD>';
			$table .= '<TR>';
			$table .= '<TR>';
			$table .= '<TD colspan="3">'. \Server::PrintResult('buy','android') .':</TD>';
			$table .= '<TD colspan="101"><a href="https://play.google.com/"><img width="135" height="40" src="/images/google-play-badge.png"></a></TD>';
			$table .= '<TR>';
			$table .= '</TABLE>';*/
			$table .= '<center><a title="Support us" href="https://www.paypal.com/pools/c/8yJoSxWArG"><img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/buy-logo-large.png" alt="Support us" /></a></center>';
			$Err['Err']['buytable'] = $table;
			break;
		}
		return View::json($Err);
	}
}