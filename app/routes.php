<?php
/* Index */
$Route->new('/', ['\Functions\Home', 'index']);

/* Pages */
$Route->new('/login', ['\Functions\Login', 'index']);
$Route->new('/store', ['\Functions\Store', 'index']);
$Route->new('/terms', ['\Functions\Terms', 'index']);
$Route->new('/terms.php', ['\Functions\Terms', 'plain']);
$Route->new('/privacy', ['\Functions\Privacy', 'index']);
$Route->new('/chats', ['\Functions\Chats', 'index']);
$Route->new('/report', ['\Functions\Report', 'index']); // html5
$Route->new('/editme', ['\Functions\EditMe', 'index']);
$Route->new('/tools', ['\Functions\Tools', 'index']);
$Route->new('/maintenance', ['\Functions\Maintenance', 'index']);

/* Aliases */
$Route->new('/logout', ['\Functions\Redirect', 'logout']);
$Route->new('/register', ['\Functions\Redirect', 'register']);
$Route->new('/terms', ['\Functions\Redirect', 'terms']);
$Route->new('/ShortName', ['\Functions\Redirect', 'shortname']);
$Route->new('/promotion', ['\Functions\Redirect', 'promo']);
$Route->new('/BuyGroup', ['\Functions\Redirect', 'buygroup']);
$Route->new('/buygroup', ['\Functions\Redirect', 'buygroup']);
$Route->new('/ad', ['\Functions\Redirect', 'ads']);
$Route->new('/Auction', ['\Functions\Redirect', 'auction']);
$Route->new('/x2d', ['\Functions\Redirect', 'x2d']);
$Route->new('/dx', ['\Functions\Redirect', 'dx']);
$Route->new('/xavi', ['\Functions\Redirect', 'getxavi']);
$Route->new('/facebook', ['\Functions\Redirect', 'facebook']);
$Route->new('/twitter', ['\Functions\Redirect', 'twitter']);
$Route->new('/power', ['\Functions\Redirect', 'powers']);
$Route->new('/powers', ['\Functions\Redirect', 'powers']);
$Route->new('/search', ['\Functions\Redirect', 'search']);
$Route->new('/create', ['\Functions\Redirect', 'create']);
$Route->new('/buy', ['\Functions\Redirect', 'buy']);
$Route->new('/wiki', ['\Functions\Redirect', 'wiki']);
$Route->new('/bot', ['\Functions\Redirect', 'bot']);
$Route->new('/safety', ['\Functions\Redirect', 'safety']);
$Route->new('/safety.html', ['\Functions\Redirect', 'safety']);
$Route->new('/help_', ['\Functions\Redirect', 'help']);
$Route->new('/_help', ['\Functions\Redirect', 'help']);
$Route->new('/_trade', ['\Functions\Redirect', 'trade']);
$Route->new('/ticket', ['\Functions\Redirect', 'ticket']);
$Route->new('/support', ['\Functions\Redirect', 'ticket']);
$Route->new('/forum', ['\Functions\Redirect', 'forum']);
$Route->new('/web_gear/chat.php', ['\Functions\Redirect', 'create']);

/* Tools */
$Route->new('/embed/chat.php', ['\Functions\Embed', 'index']);
$Route->new('/crossdomain.xml', ['\Functions\Crossdomain', 'index']);

/* Wiki */
//$Route->new('/wiki/index.php', ['\Functions\wiki\Index', 'index']);

/* Web Gear */
$Route->new('/web_gear/chat/auser3.php', ['\Functions\WebGear\Auser3', 'index']);
$Route->new('/web_gear/chat/ip2.php', ['\Functions\WebGear\IP2', 'index']);
$Route->new('/web_gear/chat/ip3.php', ['\Functions\WebGear\IP3', 'index']);
$Route->new('/web_gear/chat/kiss.php', ['\Functions\WebGear\Kiss', 'index']);
$Route->new('/web_gear/chat/pow2.php', ['\Functions\WebGear\Pow2', 'index']);
$Route->new('/web_gear/chat/sticker.php', ['\Functions\WebGear\Sticker', 'index']);
$Route->new('/web_gear/chat/linkvalidator.php', ['\Functions\WebGear\LinkValidator', 'index']);
$Route->new('/web_gear/chat/changelanguage.php', ['\Functions\WebGear\changelanguage', 'index']);
$Route->new('/web_gear/chat/translate1.php', ['\Functions\WebGear\Translate1', 'index']);
$Route->new('/web_gear/chat/translate2.php', ['\Functions\WebGear\Translate1', 'index2']);
$Route->new('/web_gear/chat/profile2.php', ['\Functions\WebGear\User\Profile2', 'index']);

/* Web Gear - Html5 */
$Route->new('/web_gear/chat/creategroup2.php', ['\Functions\WebGear\CreateGroup2', 'index']);
$Route->new('/web_gear/chat/activategroup2.php', ['\Functions\WebGear\ActivateGroup2', 'index']);
$Route->new('/web_gear/chat/events2.php', ['\Functions\WebGear\Events2', 'index']);
$Route->new('/web_gear/chat/editgroup3.php', ['\Functions\WebGear\editgroup3', 'index']);
$Route->new('/web_gear/chat/GroupOptionEdit2.php', ['\Functions\WebGear\GroupOptionEdit2', 'index']);
$Route->new('/web_gear/chat/ownerfeedback2.php', ['\Functions\WebGear\OwnerFeedBack2', 'index']);
$Route->new('/web_gear/chat/reportgroup.php', ['\Functions\WebGear\reportgroup', 'index']);
$Route->new('/web_gear/chat/reportuser.php', ['\Functions\WebGear\reportuser', 'index']);
$Route->new('/web_gear/chat/search2.php', ['\Functions\WebGear\Search2', 'index']);

/* Web Gear - Group */
$Route->new('/web_gear/chat/media.php', ['\Functions\WebGear\Media', 'index']);
$Route->new('/web_gear/chat/commentview.php', ['\Functions\WebGear\CommentsView', 'index']);
$Route->new('/web_gear/chat/commentpost.php', ['\Functions\WebGear\CommentsPost', 'index']);
$Route->new('/web_gear/chat/eip.php', ['\Functions\WebGear\EIP', 'index']);
//$Route->new('/web_gear/chat/GroupOptionEdit.php', ['\Functions\WebGear\GroupOptionEdit', 'index']);
$Route->new('/web_gear/chat/roomid.php', ['\Functions\WebGear\RoomID', 'index']);
$Route->new('/web_gear/chat/SetScroller.php', ['\Functions\WebGear\SetScroller', 'index']);
$Route->new('/web_gear/chat/direct.php', ['\Functions\WebGear\Direct', 'index']);

/* Web Gear - User */
$Route->new('/web_gear/chat/register2.php', ['\Functions\WebGear\User\Register2', 'index']);
$Route->new('/web_gear/chat/register3.php', ['\Functions\WebGear\User\Register2', 'index']);
$Route->new('/web_gear/chat/register4.php', ['\Functions\WebGear\User\Register2', 'index']);
$Route->new('/web_gear/chat/mlogin2.php', ['\Functions\WebGear\User\MLogin2', 'index']);
$Route->new('/web_gear/chat/SaveUser.php', ['\Functions\WebGear\User\SaveUser', 'index']);
$Route->new('/web_gear/chat/AreYouaHuman.php', ['\Functions\WebGear\User\AreYouHuman', 'index']);
$Route->new('/web_gear/chat/editprofile2.php', ['\Functions\WebGear\User\EditProfile2', 'index']);
$Route->new('/web_gear/chat/editprofile2_6874.php', ['\Functions\WebGear\User\EditProfile2', 'index']);

/* Web Gear - Store */
$Route->new('/web_gear/chat/GetPowers2.php', ['\Functions\WebGear\Store\GetPowers2', 'index']);
$Route->new('/web_gear/chat/promotion2.php', ['\Functions\WebGear\Store\promotion2', 'index']);
$Route->new('/web_gear/chat/Auction2.php', ['\Functions\WebGear\Store\Auction2', 'index']);
$Route->new('/web_gear/chat/BuyShortName2.php', ['\Functions\WebGear\Store\BuyShortName2', 'index']);
$Route->new('/web_gear/chat/TransferGroup2.php', ['\Functions\WebGear\Store\TransferGroup2', 'index']);
$Route->new('/web_gear/chat/XatsToDays2.php', ['\Functions\WebGear\Store\XatsToDays2', 'index']);
$Route->new('/web_gear/chat/DaysToXats2.php', ['\Functions\WebGear\Store\DaysToXats2', 'index']);
$Route->new('/web_gear/chat/buy2.php', ['\Functions\WebGear\Store\Buy2', 'index']);


/* Web Gear - Gifts */
$Route->new('/web_gear/chat/buygifts.php', ['\Functions\WebGear\Gifts\BuyGifts', 'index']);
$Route->new('/web_gear/chat/gift1.php', ['\Functions\WebGear\Gifts\Gift1', 'index']);
$Route->new('/web_gear/chat/gift2.php', ['\Functions\WebGear\Gifts\Gift2', 'index']);
$Route->new('/web_gear/chat/gifts.php', ['\Functions\WebGear\Gifts\Gifts', 'index']);
$Route->new('/web_gear/chat/gifts22.php', ['\Functions\WebGear\Gifts\Gifts22', 'index']);

/* Web Gear - GameRaces */
$Route->new('/web_gear/chat/50136.php', ['\Functions\WebGear\Gameraces\G50136', 'index']);
$Route->new('/web_gear/chat/50140.php', ['\Functions\WebGear\Gameraces\G50140', 'index']);
$Route->new('/web_gear/chat/50152.php', ['\Functions\WebGear\Gameraces\G50152', 'index']);
$Route->new('/web_gear/chat/50162.php', ['\Functions\WebGear\Gameraces\G50162', 'index']);
$Route->new('/web_gear/chat/50236.php', ['\Functions\WebGear\Gameraces\G50236', 'index']);
$Route->new('/web_gear/chat/snakeban.php', ['\Functions\WebGear\Gameraces\Snakeban', 'index']);
$Route->new('/web_gear/chat/snakeban2.php', ['\Functions\WebGear\Gameraces\Snakeban2', 'index']);
$Route->new('/web_gear/chat/codeban.php', ['\Functions\WebGear\Gameraces\Codeban', 'index']);
$Route->new('/web_gear/chat/spaceban.php', ['\Functions\WebGear\Gameraces\Spaceban', 'index']);


/* Language */
$Route->new('/json/lang/lookup.php', ['\Functions\Json\Lang\Lookup', 'index']);
$Route->new('/json/lang/customlang2.php', ['\Functions\Json\Lang\CustomLang2', 'index']);
$Route->new('/json/lang/getlang2.php', ['\Functions\Json\Lang\GetLang2', 'index']);
$Route->new('/json/lang/languages.php', ['\Functions\Json\Lang\Languages', 'index']);
$Route->new('/json/lang/locate.php', ['\Functions\Json\Lang\Locate', 'index']);
/* add */ $Route->new('/json/translate', ['\Functions\Json\Translate\TranslateChat', 'index', '([a-zA-Z0-9]+)-([a-zA-Z0-9\-]+)\.php']);

/* Chat */
/* add */ $Route->new('/chat/room', ['\Chat\Room\Chat', 'index', '([0-9]+)\/']);

/* Xavi */
$Route->new('/json/xavi/action.php', ['\Functions\Json\Xavi\Action', 'index']);
$Route->new('/json/xavi/get.php', ['\Functions\Json\Xavi\Get', 'index']);
$Route->new('/json/xavi2/get.php', ['\Functions\Json\Xavi\Get2', 'index']);
$Route->new('/json/xavi/put.php', ['\Functions\Json\Xavi\Put', 'index']);
$Route->new('/json/xavi2/put.php', ['\Functions\Json\Xavi\Put2', 'index']);
$Route->new('/json/xavi/xavi.php', ['\Functions\Json\Xavi\Xavi', 'index']);

/* Api */
$Route->new('/api/roomid.php', ['\Functions\Api\ApiRoomID', 'index']);

/* Json */
$Route->new('/json/powers.php', ['\Functions\Json\Powers', 'index']);
$Route->new('/json/ginfo.php', ['\Functions\Json\GInfo', 'index']);
$Route->new('/json/GroupSearch.php', ['\Functions\Json\GroupSearch', 'index']);
$Route->new('/json/promo.php', ['\Functions\Json\Promo', 'index']);
$Route->new('/json/ad.php', ['\Functions\Json\Ad', 'index']);
$Route->new('/json/adverts.php', ['\Functions\Json\Adverts', 'index']);
$Route->new('/json/20048.php', ['\Functions\Json\GroupPools', 'index']);
$Route->new('/json/lists/games.php', ['\Functions\Json\Lists\GameList', 'index']);
/* add */ $Route->new('/json/lists', ['\Functions\Json\Lists\ChatList', 'index', '([0-9]{1}+)_([a-zA-Z-]+)_(featured|popular|supported)\.php']);

/* Panel */
$Route->new('/Panel/Home', ['\Functions\Panel\Home', 'index']);
$Route->new('/Panel/Staff', ['\Functions\Panel\Staff', 'index']);
$Route->new('/Panel/Messages', ['\Functions\Panel\Messages', 'index']);
$Route->new('/Panel/Transfer', ['\Functions\Panel\Transfer', 'index']);
$Route->new('/Panel/Bans', ['\Functions\Panel\Bans', 'index']);
$Route->new('/Panel/Pbanner', ['\Functions\Panel\Pbanner', 'index']);
$Route->new('/Panel/Pchat', ['\Functions\Panel\Pchat', 'index']);
$Route->new('/Panel/Powers', ['\Functions\Panel\Powers', 'index']);
$Route->new('/Panel/Chats', ['\Functions\Panel\Chats', 'index']);
$Route->new('/Panel/Users', ['\Functions\Panel\Users', 'index']);
$Route->new('/Panel/UsersNull', ['\Functions\Panel\UsersNull', 'index']);
$Route->new('/Panel/Lastpower', ['\Functions\Panel\LastPower', 'index']); //Add new powers
$Route->new('/Panel/avatar.html', ['\Functions\Panel\Avatar', 'index']); // Avatar animate

/* Tool */
$Route->new('/tool/smileshow.php', ['\Functions\Tool\SmileShow', 'index']);