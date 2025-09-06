<?php
namespace Classes;

class Core {
	protected $apiList = [
		'users',
		'games',
		'gifts',
		'scroll',
		'chatusers',
		'human',
		'botstat'
	];
	
	public function hash($str, $rawsalt = null, $hash = 'sha512'): string {
		if ($rawsalt == null) {
			$rawsalt = $this->rand(((strlen($str) % 3) + 1) * 5);
		}
		$loc = array(hash('sha1', $rawsalt), hash('sha1', $str), '');
		foreach(str_split($loc[0], 1) as $index => $character) {
			$loc[2] .= $character . $loc[1][$index];
		}
		$hash = hash($hash, $loc[2]);
		return substr_replace($hash, $rawsalt, (strlen($str) << 2) % strlen($hash), 0);
	}
	
	public function validate($str, $hash, $engine = 'sha512') {
		if (empty($str) || empty($hash)) {
			return false;
		}
		$salt = substr($hash, (strlen($str) << 2) % strlen(hash($engine, 1)), ((strlen($str) % 3) + 1) * 5);
		return $this->hash($str, $salt, $engine) === $hash ? true : false;
	}
	
	public function rand($len = 32): string {
		$chars = array_merge(range('a', 'z'), range('A', 'Z'), range('0', '9'));
		for($rand = ''; strlen($rand) < $len; $rand .= $chars[rand(0, 61)]);
		return $rand;
	}

	public function DecodePowers($p, $dO = null): array {
        $powers = [];
        if (!empty($p)) {
            foreach (explode("|", $p) as $d => $z) {
                if (empty($z)) {
                    continue;
                }
                $p = decbin($z);
                foreach (str_split(strrev($p)) as $i => $c) {
                    if ($c == "1") {
                        $id = $i + ($d * 32);
                        $powers[$id] = 1;
                    }
                }
            }
        }
        if (!empty($dO)) {
            foreach (explode("|", $dO) as $p) {
                if (empty($p)) {
                    continue;
                }
                list($id, $count) = explode("=", $p);
                $powers[$id] += $count;
            }
        }
        return $powers;
    }

    public function EncodePowers($powers): array {
        $dO = [];
        if (count($powers) == 0) {
            return [null, null];
        }
        if (!(array_keys($powers) !== range(0, count($powers) - 1))) {
            $temp = [];
            foreach ($powers as $power) {
                $temp[$power] = 1;
            }
            $powers = $temp;
        }
        $min_ = min(array_keys($powers));
        if ($min_ < 0) {
            for ($x = 1; $x <= abs($min_); $x++) {
                if (array_key_exists(-$x, $powers)) {
                    $powers[$x + 640] = $powers[-$x];
                    unset($powers[-$x]);
                }
            }
        }
        $new_powers = array_fill(0, ceil(max(array_keys($powers)) / 32), 0);
        foreach ($powers as $power => $amount) {
            if ($power < 0) {
                $power = 640 + abs($power);
            }
            $new_powers[floor($power / 32)] |= pow(2, $power % 32);
            if ($amount > 1) {
                $dO[] = $power . "=" . ($amount - 1);
            }
        }
        return [implode("|", $new_powers), implode("|", $dO)];
    }
	
	public function CalcXats(string $DesiredName, $inflation = 4) {
		$body = file_get_contents('https://www.googleapis.com/customsearch/v1?q=' . strtolower($DesiredName) . '&key='.G_SEARCH_KEY.'&cx=010012013479808163352:mvu-ewtvhnq&filter=1');
		if(!$body) return -1;//cant reach google sorry

		$json = json_decode($body); //decode json response
		if(isset($json->error)) return -1; //google suspectes spaming

		$erc = intval($json->searchInformation->totalResults);
		if($erc < 1) return -1;//erc is not legit
		if(ord($erc) > ord('9') || ord($erc) < ord('0')) return -1;

		$x = intval(224.08 / 6 * pow($erc, 0.26));
		$n = 0;
		while($x > 99) {
			$n++;
			$x = intval($x / 10);
		}
		while($n) {
			$n--;
			$x *= 10;
		}
		$x *= 4; // Google factor was 2.3
		$x += 600 * pow(1.7, 9 - strlen($DesiredName)); // 500, 1.7 length factors
		$x *= $inflation; // inflation 1.5
		if($x < 5000) $x = 2000 * $inflation;
		return intval($x);
	}
	
	public function userdetails($ip) {		
		/* Free api - only 1000 request per day */
        $url    = "https://api.ipgeolocation.io/ipgeo?apiKey=".USER_DETAIL_KEY."&ip={$ip}&lang=en";
        $cURL   = curl_init();

        curl_setopt($cURL, CURLOPT_URL, $url);
        curl_setopt($cURL, CURLOPT_HTTPGET, true);
        curl_setopt($cURL, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($cURL, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Accept: application/json'
        ));
        $op =  curl_exec($cURL);
		$op =  json_decode($op);
		$options = [
			'ip'      => $op->ip,
			'isp'     => $op->isp,
			'country' => $op->country_name
		];
		return $options;
	}
	
	public function API($name, $values = array(), $response = true) {
		if (!in_array($name, $this->apiList)) {
			return false;
		}
		$atts = [
			'z="' . $name . '"',
			'x="' . API_KEY . '"'
		];
		foreach ($values as $k => $v) {
			$atts[] = "{$k}=\"{$v}\"";
		}
		$sock = fsockopen(SOCKDOMAIN, USEPORT, $e, $e, 1);
		if (!$sock) {
			return false;
		}
		fwrite($sock, "<api " . implode(" ", $atts) . " />" . chr(0));
		//$read = rtrim(fread($sock, 2048));
		fclose($sock);
		//return $read;
	}
}