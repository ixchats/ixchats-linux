<?php
		if($_POST["gif"]){
			$Imagick = new Imagick();
			$Imagick->readImageBlob(base64_decode($_POST["gif"]));
			
				$Imagick->resetIterator();

				switch($Imagick->getImageFormat())
				{
					case 'GIF':
						if ($Imagick->getNumberImages() <= 50 || ($Imagick->getNumberImages() <= 120 || $Imagick->getNumberImages() <= 100) && $Imagick->getImageWidth() <= 450 && $Imagick->getImageHeight() <= 450)
						{
							$Frames = $Imagick->coalesceImages();

							$Imagick = new Imagick();
							$Imagick->newImage(($Frames->getNumberImages() * 80), 80, "none");

							foreach($Frames as $Frame)
							{
								$Frame->scaleImage(80, 80);
								$Imagick->compositeImage($Frame, Imagick::COMPOSITE_OVER, ($Frame->getImageIndex() * 80), 0);
							}

							$Imagick->setImageFormat('PNG24');
							$Imagick->setImageCompressionQuality(100);
							
							ob_start();
							$ss = base64_encode($Imagick);
							header('Content-Type: application/json');
							print '{"Err":{"data":"'.$ss.'"}}';
							/*
								$content = base64_encode(ob_get_contents());
								header('Pragma: public');
								header('Cache-Control: public, no-cache');
								header('Content-Type: application/octet-stream');
								header('Content-Length: ' . ob_get_length());
								header("Content-Disposition: attachment; filename=\"{$_POST["Name"]}.png\"");
								header('Content-Transfer-Encoding: binary');
								@readfile(base64_decode($content));
							*/
							ob_end_flush();

							$Imagick->Clear();
							$Imagick->Destroy();
						}
						else
						{
							exit($Imagick->getNumberImages() . " - Too many frames");
						}
					break;

					default: exit('{"Err":{"Error":"Image is not animated or invalid"}}');
				}
			}else{
				header('Content-Type: application/json');
				echo '{"Err":{"Error":"no gif"}}';
			}

?>