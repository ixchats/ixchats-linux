<?php
$autoloader = DIRECTORY . SEPARATOR . 'vendor' . SEPARATOR . 'Autoloader.php';
$configfile = DIRECTORY . SEPARATOR . 'app' . SEPARATOR . 'config.php';

/* load settings */
if (!file_exists($configfile)) { die('Configuration file not found.'); }
require_once $configfile;

/* adds autoloader */
if (!file_exists($autoloader)) { die('Autoloader not found.'); }
require_once $autoloader;

/* display errors */
if (DEBUG) {
	error_reporting(E_ALL);
	ini_set('display_errors', 'on');
}

/* load everything here */
foreach(\Server::loadVendor() as $dir) { require_once($dir); }
foreach(\Server::loadClasses() as $dir) { require_once($dir); }
foreach(\Server::loadFunctions() as $dir) { require_once($dir); }

/* load routes */
\Server::isForbidden(
	['app', 'vendor']
);
use Vendor\Router;
$Route = new Router();
require_once 'routes.php';
$Route->initialize();
