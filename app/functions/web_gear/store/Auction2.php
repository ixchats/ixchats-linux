<?php
namespace Functions\WebGear\Store;

use Vendor\Validator;
use Vendor\View;
use Classes\User;

class Auction2 {
	protected $user;
	
	public function __construct() {
		$this->user = new User();
	}
	private function time_diff_conv(int $ends) {
		$seconds = $ends - time();
		
		$days = floor($seconds / 86400);
		$seconds %= 86400;

		$hours = floor($seconds / 3600);
		$seconds %= 3600;

		$minutes = floor($seconds / 60);
		$seconds %= 60;
		
		return implode(':',[$hours + ($days * 24), $minutes, $seconds]);
	}
	private function seconds_convert(int $seconds) {
		
		$days = floor($seconds / 86400);
		$seconds %= 86400;

		$hours = floor($seconds / 3600);
		$seconds %= 3600;

		$minutes = floor($seconds / 60);
		$seconds %= 60;
		
		return implode(':',[$hours + ($days * 24), $minutes]);
	}
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		$agree        = (string) \Server::post('agree');
		$YourEmail    = (string) \Server::post('YourEmail');
		$password     = (string) \Server::post('password');
		$Transfer     = (string) \Server::post('Transfer');
		$agree        = (string) \Server::post('agree');
		$DesiredID    = (int) 	 \Server::post('DesiredID');
		$StartingBid  = (int) 	 \Server::post('StartingBid');
		$EnterBid     = (int) 	 \Server::post('EnterBid');
		$Old          = (int) 	 \Server::post('old'); 	
		$TransMode    = ['rereg', 'aucreg'];
		$Claim        = false;
		$Table 		  = '';
		$Old          = $Old && $Old < 2 ? $Old : 0;
		$MinBid       = AUCTION_MINBID;
		$data         = $this->user->getAuctionConfig($Old);
		$StartTime    = $data['start'];
		$EndTime      = $data['end'];
		$Phase		  = $EndTime > time() ? '<div>' . \Server::PrintResult('buy','p2ends') . ' ' . $this->time_diff_conv($EndTime) . '</div>' : '';
		$Phase		  .= $Old != 0 ? '<div>'. \Server::PrintResult('buy','previous') .'</div>' : "\r\n<div>".\Server::PrintResult('buy','during2') . "</div>";
		$Err          = ['Err' => ['Phase' => $Old + 2, 'auctionphase' => $Phase, 'auctiontable' => null , 'MinBid' => $MinBid]];
		$stop         = 0;
		
		while(1) {
			
			if (!$EnterBid) { break; }
			
			if (!$agree ||($agree && $agree !== 'ON')) { 	 
				$Err['Err']['agreeterms'] = \Server::PrintResult('buy','terms');
				$stop = 1; 	 	 
			}	
			if (!$YourEmail || !Validator::isAlphanumeric($YourEmail)) { 
				$Err['Err']['username'] = \Server::PrintResult('buy','notfound'); 
				$stop = 1; 	 	 
			} 
			
			if($stop == 1){ break; }

			$user = $this->user->getUserByUsername($YourEmail);
			if (!$user) { 
				$Err['Err']['username'] = $YourEmail . \Server::PrintResult('buy','notfound'); 
				break; 	 	 		 
			} 
			$getAuctionID = $this->user->getAuctionID($DesiredID, $Old);
			if (!$getAuctionID) {
				$Err['Err']['DesiredID'] = $DesiredID .' '. \Server::PrintResult('buy','notpart');
				break; 	 	 		 
			} 
			if (!$this->user->isAuth()) {
				$Err['Err']['auction'] = \Server::PrintResult('buy','relogin'); 
				break; 	 	 		 
			}
			if ($this->user->get()->username != $user->username) {
				$Err['Err']['auction'] = \Server::PrintResult('buy','relogin'); 
				break; 	 	 		 
			}
			if (!$this->user->verifyPass($password)) {
				$Err['Err']['password'] = \Server::PrintResult('buy','wrongpassword'); 
				break; 	 	 		 
			}
			if ($EndTime  <= time()) {
				if ($getAuctionID->bidusername == $user->username && $getAuctionID->claimed == 0) {
					if (!in_array($Transfer, $TransMode)) {
						$auctionchoose .= '<tr>'; 
						$auctionchoose .= '<td><p><span>Choose option:</span></p></td>';	
						$auctionchoose .= '<td><select name=Transfer id=Transfer>';
						$auctionchoose .= '<option value="none">Choose one</option>';
						$auctionchoose .= '<option value="rereg">Transfer to new ID</option>';
						$auctionchoose .= '<option value="aucreg">Get reg link for New ID</option>';
						$auctionchoose .= '</select></td>';
						$auctionchoose .= '<td><p><span>Please Specify if you would like xats, days, powers, gifts transfered to new ID</span></p></td>';
						$auctionchoose .= '<td>';
						$auctionchoose .= '</tr>';
						$Err['Err']['auctionchoose'] = $auctionchoose;
					}		
					$Claim = true;
				}
				if (!$Claim)
				{
					$Err['Err']['auction'] = \Server::PrintResult('buy','ended');
					break; 	 	 	
				}
			}
			if ($user->is_held > time()) {
				$Err['Err']['auction'] = \Server::PrintResult('buy','held').'('. $this->user->getDays($user->is_held) .')'; 
				break; 	 	 		 
			} 
			if ($user->reserve < $getAuctionID->bid) {
				$Err['Err']['auction'] = 'xats reserve limit exceeded.'; 
				break; 	 	 		 
			} 
			if ($getAuctionID->bid > $user->xats || $StartingBid > $user->xats) { 
				$Err['Err']['auction'] = \Server::PrintResult('buy','noxats'); 
				break; 	 	 		 
			} 	
			if ($Transfer) {	
			
				if ($Claim != true) { break; }
				
				switch($Transfer) {
					case 'rereg':
					$this->user->updateData('users', ['xats' => $user->xats - $getAuctionID->bid], ['username' => $user->username]);
					$this->user->updateData('auction', ['claimed' => 1], ['uid' => $getAuctionID->uid]);
					$this->user->updateData('users', ['id' => $getAuctionID->uid], ['id' => $user->id]);
					$this->user->updateData('group_powers', ['assignedBy' => $getAuctionID->uid], ['assignedBy' => $user->id]);
					$this->user->InsertData('users',
						[
							'id' 	 => $user->id,
							'k' 	 => substr(sha1(microtime(true)), 0, 20),
							'k2' 	 => rand(-1000000, 1000000),
							'k3' 	 => rand(-1000000, 1000000),
							'avatar' => rand(1, 1759),
							'url'    => ''

						]
					);
						
					$olduser = $this->user->getUserById($user->id);
					 
						$TransferOpts .= '<b>';
						$TransferOpts .= \Server::PrintResult('buy','congrats');
						$TransferOpts .= '</b>';
						$TransferOpts .= \Server::PrintResult('buy','rereg');
						$TransferOpts .= ': ';
						$TransferOpts .= '<a href=/login?UserId='.$olduser->id.'&k2='.$olduser->k2.'&mode=1 target=_blank >Register Old</a>';
						$TransferOpts .= '<br>';
						$TransferOpts .= \Server::PrintResult('buy','auclogin');
					
					$Err['Err']['TransferOpts'] = $TransferOpts;		
					break;
					
					case 'aucreg':
					$this->user->updateData('users',['xats' => $user->xats - $getAuctionID->bid], ['username' => $user->username]);
					$this->user->updateData('auction',['claimed' => 1], ['uid' => $getAuctionID->uid]);
					$this->user->InsertData('users',
						[
							'id' 	 => $getAuctionID->uid,
							'k' 	 => substr(sha1(microtime(true)), 0, 20),
							'k2' 	 => rand(-1000000, 1000000),
							'k3' 	 => rand(-1000000, 1000000),
							'avatar' => rand(1, 1759),
							'url'    => ''
						]
					);
						
					$newuser = $this->user->getUserById($getAuctionID->uid);
					
						$TransferOpts .= '<b>';
						$TransferOpts .= \Server::PrintResult('buy','congrats');
						$TransferOpts .= '</b>';
						$TransferOpts .= '<br>';
						$TransferOpts .= \Server::PrintResult('buy','aucreg');
						$TransferOpts .= ': ';
						$TransferOpts .= '<a href=/login?UserId='.$newuser->id.'&k2='.$newuser->k2.'&mode=1 target=_blank >Register</a>';
					
					$Err['Err']['TransferOpts']	= $TransferOpts;		
					break;
				}
				break;
			}
			if ($MinBid > $StartingBid) {
				$Err['Err']['StartingBid'] = \Server::PrintResult('buy','needmore'). ' ' . $MinBid;
				break; 	 	 		 
			} 
			if ($getAuctionID->bid >= $StartingBid) {
				$Err['Err']['StartingBid'] = \Server::PrintResult('buy','needmore'). ' ' . $getAuctionID->bid;
				break; 	 	 		 
			} 
			if ($getAuctionID->bidusername == $user->username) {
				$Err['Err']['auction'] = \Server::PrintResult('buy','alreadybid');
				break; 	 	 		 
			}
			$this->user->updateData('auction',
				[
					'bid' 	      => $StartingBid,
					'bidby'       => $user->id,
					'prevbid'     => $getAuctionID->bid,
					'prevbidby'   => $getAuctionID->bidby,
					'bidusername' => $user->username,
					'prevuser'    => $getAuctionID->bidusername,
					'timepbid'	  => $getAuctionID->timebid,
					'timebid'     => time(),
					'uip'         => \Server::getIp(),
					'lastuip'     => $getAuctionID->uip
				],
				[
					'uid'         => $getAuctionID->uid
				]
			);
			$Err['Err']['auctionok'] = \Server::PrintResult('buy','biddone');
			break;
		}
		
		$auction = $this->user->getAuction($Old);
		if ($auction) {
			$Table .= "\r\n\t\t<h2><span data-localize=buy.bids>current bids</span>:</h2>\r\n\t\t<table class=\"table-sm table-bordered table-responsive d-block d-md-table\">\r\n\t\t<tr align=\"center\"><th><span data-localize=buy.idfor>ID for sale</span></th><th><span data-localize=buy.bid>Bid</span> (xats)</th><th data-localize=buy.topbid>Top bid from</th>\r\n\t\t<th data-localize=buy.timeleft>time left</th><th data-localize=buy.prevbid>previous bid</th></tr>";
			foreach ($auction as $id) {
				$status    = time() > $EndTime ? ($id['claimed'] == 1 ? \Server::PrintResult('buy','soldcol') : '<font color="#FF0000">'. \Server::PrintResult('buy','winner').'</font>') : $this->time_diff_conv($EndTime);
				$newbid    = floor($id['bid'] + 11); 	
				$offert    = floor($id['timepbid'] - $StartTime);
				$offertime = $this->seconds_convert($offert);

				$Table .= "<tr><td><a class=bid href='#bid' data-id={$id['uid']} data-bid={$newbid}>{$id['uid']}</a></td><td>{$id['bid']}</td><td>{$id['bidusername']} ({$id['bidby']})</td><td>{$status}</td><td>{$id['prevuser']} {$id['prevbid']}  {$offertime}</td></tr>";
			}
			$Table .= "\n</table>";
			$Err['Err']['auctiontable'] = $Table;
		}
		return View::json($Err);
	}
}
