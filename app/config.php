<?php
/* MySQL */
define('MYSQL_HOST', 'localhost');
define('MYSQL_USER', 'claudiu_xat');
define('MYSQL_PASS', '8&0B2ems');
define('MYSQL_NAME', 'claudiu_xat');

/* Function Emails */ 
define('phpmail', 0); //  PHPMAIL() Send Mails.
define('smtpmail', 1); //  Server SMTP  Gmail.
define('SMTP_Sec', 'ssl'); //  SMTPSecure. 587 for TLS. 465 is reserved for SSL.
define('host_smtp', base64_decode('')); //  SMTP Gmail. //define('host_smtp', 'smtp.gmail.com'); //  SMTP Gmail.
define('port_gmail', '465'); //  Port SMTP Gmail.
define('mail_gmail', base64_decode('')); //  Gmail. //define('mail_gmail', 'ixchats@gmail.com''); //  Gmail.
define('pass_gmail', ''); // Password Gmail.

/* Settings */
define('DEBUG', array_key_exists('isdebug', $_GET) ? true : false); // false, true
define('LANGUAGES', ['en', 'es', 'pt', 'fr', 'it', 'tr', 'ro', 'hu', 'et', 'ar', 'th', 'de']); // Languages list, e.g: pt, en, es
define('DEFAULT_LANG', 'en'); // Default language if not found in the list
define('DOMAIN', 'localhost:8000'); // Site link
define('SEASON', ['normal','png']); // Site logo [season, format] #normal
define('VERSION', '7.1.0'); // Your site version
define('MINIFY_HTML', true);

/* Index */
define('I_BACKGROUND', 'https://img.xatblog.net/image/71aTpYt1i.png');

/* Global variables */
define('METHOD', 'https:');
define('CDNMAIN', '//localhost:80/'); // change if needed for production, example: ixchats.com
define('XAT_NAME', 'ixchats'); // the xat instance name
define('FACEBOOK', 'https://www.facebook.com/ixchats');
define('BOXVERSION', 'R00065');
define('DIRVERSION', 'R00065');
define('SOCKDOMAIN', '95.111.236.253');
define('USEPORT', 842);
define('SWFVERSION', 'latest');
define('MAINCHAT', [1, 'Lobby']); // [ID, name]
define('STARTING_XATS', 50000); // 50k
define('STARTING_DAYS', 100); // 10 days
define('RESERVE_XATS', 9000000); // 9M
define('NOT_ALLOW', ['admin', 'unregistered', 'xat', 'x4t', 'fuck', 'bitch', 'pussy', 'caralho', 'porra', 'buceta', 'penis', 'staff', 'app', 'vendor', 'nxat', 'neoxat', 'owner', 'administrator', 'hacking', 'ktommy', 'ktommycc', 'ktommyc', 'tomsint', 'ktcommy', 'jihadi', 'terrorist', 'nigger', 'nigga', 'login', 'james', 'xtmike', 'xmike', 'fundador', 'programador', 'programmer', 'hacker', 'hacke', 'chat', 'owner', 'putos', 'putas', 'mierda', 'mierdas', 'main', 'pietro', 'tom', 'developer']); // Bad words
define('ALLOW_EMAIL', ['hotmail', 'gmail', 'yahoo', 'outlook']);

/* OPTIONS */
define('Emailvalidator_SMTP', 0);
define('Emailvalidator_API', 1);
define('GOOGLE_TRANSLATE', 1);
define('API_TRANSLATE', 0);

/* Security */
define('NO_PROXY', 0);

/* API KEYS */
define('G_ANALYTICS', 'UA-164958207-1');
define('RECAPTCHA_PUBLIC', '6LfdEVMeAAAAAMeaJ63Cc5_37LTVWTHDGAUbzK-0');
define('RECAPTCHA_PRIVATE', '6LfdEVMeAAAAAMyQ2afSGAioMHcSzW0jbP0aO7MG');
define('G_SEARCH_KEY', 'AIzaSyB-4UPsLeDeUkG1yh2mZOZW2hErRnMdQ-A'); //https://developers.google.com/custom-search/v1/overview
define('API_KEY', '');
define('USER_DETAIL_KEY', 'b560c71d016b4c0193ab7077dd51cd70');
define('MAILBOX_APIKEY', '');
define('TRANSLATE_APIKEY', '8d967e4dddfd9c85d5ed11b506daa5d2');

/* Donation System */
define('CANCEL_DONATION', METHOD.'//'.DOMAIN.'/store#!buyxats');
define('SUCCESS_DONATION', METHOD.'//'.DOMAIN.'/web_gear/chat/buy2.php');
define('BUY_EMAIL', '');
define('URL_DONATION', METHOD.'//'.DOMAIN.'/web_gear/chat/buy2.php');

/* Set-up */
define('AUCTION_MINBID', 100); // Minimum bid of the Auction
define('ID_MAXCHARS', 9); // Maximum size of the ID, 9 = enable M ids, 10 = enable B ids
define('ID_MINCHARS', 5); // Minimum size of the ID
define('ID_COTATION', 3); // Cotation used for IDs price
define('SN_COTATION', 2); // Cotation used for shortname prices
define('SN_MAXCHARS', 8); // Maximum size of the shortname
define('SN_MINCHARS', 4); // Minimum size of the shortname
define('MAX_ACCOUNT', 50); // Maximum of accounts allowed

/* Flags */
define('F_AUTO_SIGN_IN', 16);
define('F_IS_GROUP', 64);
define('F_MEMBERS_ONLY', 128);
define('F_NO_STORE', 0x100);
define('F_NO_SMILEY_LINE', 0x800);
define('F_TRANSPARENT', 0x10000);
define('F_NO_SOUND', 0x20000);
define('F_KICK_ALL', 0x80000);
define('F_MEMBERS_ONLY2', 0x100000);
define('F_LIVE_MODE', 0x200000);
define('F_HAS_POWERS', 0x1000000);
define('F_DELISTED', 0x800000);
