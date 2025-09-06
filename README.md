# ixchats-linux
just a ixchat for linux or something, yuh<br><br>

`app/functions/json/xavi/Action.php` - has emojis (named actions for some reason lol)<br>
`app/functions/Redirect.php` - line 65 is hardcoded twitter and line 83 is hardcoded email
`app/classes/Core.class.php` - on line 133 for the userdetails it can look up geo of an IP with the service https://ipgeolocation.io<br>
`app/functions/web_gear/Translate1.php` - on line 79 there is the API for https://php.mk<br>
`app/classes/Chat.class.php` - lists for games, backs, games, backgrounds, etc<br>
`‎app/functions/json/lists/GameList.php` - has hardcoded games<br>
`app/functions/json/translate/src/` - inconsistant file count?? it doesnt really matter as much though, not many people in this audience is not speaking anything other than English (?)<br>
`/app/functions/panel/LastPower.php` - on line 13 there is an official xat domain, fix it by adding the DOMAIN var thing<br>
`app/functions/json/xavi/Put.php` tf is this?? there's also Put2.php<br>
`app/config.php` - sets up configurations for database connections, email settings, site behavior, APIs, donations, auctions, and feature flags.<br>
`app/functions/web_gear/group/Events2.php` - incomplete code at like 175 "meh too busy to finish it, maybe later"<br>
`/app/functions/web_gear/user/Profile2.php` - this is still using xat domains!! fix<br>
`app/goe/html/92.html` 92, 96, 98, 102, 108, 148, 156 - has invalid link (use web archive or make/find equivalent?) http://www.febooti.com/products/iezoom/online-help/online-color-chart-picker.html (wtf is Zatbots on 150.html)
what is the goe html and custom chat sounds at 180.html?? "Gsound"??

`web_gear/gifts/Gift1.php` - line 16 has xat domain, so easy to fix!! priority<br>
(use <?php echo XAT_NAME ?> and <?php echo DOMAIN ?>)
Fixed:<br>
`app/functions/web_gear/EditGroup.php` - "Your Group is not Active please go to Your Email" bruh wtf is this broken ahh text, i fixed it dawg but like why is it all capitalised and shi (it also manages emails)<br>
`app/functions/web_gear/group/editgroup3.php` - wtf is on with this shit but anyways i fixed it again<br><br>
`app/goe/js/200.js` - line 1 had a space for some odd reason<br>
`app/views/chats.php` - "<meta property="fb:admins" content="634242600074268" />" some legacy facebook app shit, removed and 8-3 is some google analytics, removed and at line 1457 is the same google shit, removed<br>
Other:<br>
not sure if it will break anything or not so i left it "System problem. Please try later, sorry.(no search)" in `/web_gear/group/Search2.php` line 25<br>
`app/functions/web_gear/store/Buy2.php` - line 124 has a PayPal fundraiser that doesn't exist anymore<br>
`app/functions/web_gear/store/promotion2.php` - hardcoded adimage valid link i.imgur.com, i67.tinypic.com<br>
`app/views/layout/classic/src/footer/foot.php` - uses weserv.nl which is a image cache and resize service, using Cloudflare CDN<br>
wtf is "O-Bot - xat Bot Service Provider" in `app/views/layout/panel/src/navbar/nav.php`??<br>
why the fuck is there `<script>location="../"</script>` in both index.html and index.php IN EVERY FOLDER in cgi-bins??<br>
cgi-bins is about InnovaStudio (https://InnovaStudio.com)???<br>
useless folder? `content/fonts/test/`<br>

why tf is `app/views/terms.php` the only thing to include https://rxat.wiki/? lol<br>
Progress:<br>
Should xatspace be changes to ixchatspace? too long? `app/views/Editme.php` has mentions of xatspace (also fixed one liner... also has mentions of xat.wiki and xat.me but basically all CSP's in the views folder is like that)<br>
when our logo is done, put it in here: `content/img/`

Legal:
`app/views/ChatTerms.php` - Terms of Use
> Also stored in: `app/views/maintenance.php`
> Also stored in: `apps/views/terms.php`
> Also stored in: `apps/views/Tools.php` (why is it located in 3 files wtf)
`app/views/Privacy.php` - Privacy Policy

## Key Sections

### 1. MySQL Database
- **Constants**: `MYSQL_HOST`, `MYSQL_USER`, `MYSQL_PASS`, `MYSQL_NAME`
- **Details**: Connects to a MySQL database on `localhost`.
- **Note**: Hardcoded credentials pose a security risk.

### 2. Email Settings
- **Constants**: `phpmail`, `smtpmail`, `SMTP_Sec`, `host_smtp`, `port_gmail`, `mail_gmail`, `pass_gmail`
- **Details**: Supports PHP `mail()` or Gmail SMTP (port 465, SSL).
- **Issues**: Empty `host_smtp`, `mail_gmail`, `pass_gmail` values; Gmail may require App Password.

### 3. Site Settings
- **Constants**: `DEBUG`, `LANGUAGES`, `DEFAULT_LANG`, `DOMAIN`, `SEASON`, `VERSION`, `MINIFY_HTML`
- **Details**: Enables debug via URL, supports multiple languages (default: `en`), sets domain (`rxat.ro`), and minifies HTML.
- **Note**: Debug via URL is risky in production.

### 4. Index & Global Variables
- **Constants**: `I_BACKGROUND`, `METHOD`, `CDNMAIN`, `XAT_NAME`, `FACEBOOK`, `SOCKDOMAIN`, `USEPORT`, `MAINCHAT`, `STARTING_XATS`, `NOT_ALLOW`, `ALLOW_EMAIL`
- **Details**: Configures frontend (background image), chat (socket IP, port 842), virtual currency (`STARTING_XATS`: 50k), and restricted usernames/emails.
- **Note**: `NOT_ALLOW` lists bad words; `ALLOW_EMAIL` limits providers.

### 5. Options & Security
- **Constants**: `Emailvalidator_API`, `GOOGLE_TRANSLATE`, `NO_PROXY`
- **Details**: Enables API-based email validation and Google Translate; proxy settings unclear.
- **Note**: Empty `MAILBOX_APIKEY` may break email validation.

### 6. API Keys
- **Constants**: `G_ANALYTICS`, `RECAPTCHA_PUBLIC`, `RECAPTCHA_PRIVATE`, `G_SEARCH_KEY`, `API_KEY`, `USER_DETAIL_KEY`, `TRANSLATE_APIKEY`
- **Details**: Keys for Google Analytics, reCAPTCHA, and translation APIs.
- **Warning**: Hardcoded keys are a security risk.

### 7. Donation System
- **Constants**: `CANCEL_DONATION`, `SUCCESS_DONATION`, `BUY_EMAIL`, `URL_DONATION`
- **Details**: Configures donation URLs; `BUY_EMAIL` is empty.
- **Note**: Duplicate URLs could be consolidated.

### 8. Setup
- **Constants**: `AUCTION_MINBID`, `ID_MAXCHARS`, `ID_MINCHARS`, `SN_MAXCHARS`, `SN_MINCHARS`, `MAX_ACCOUNT`
- **Details**: Sets auction rules (min bid: 100), ID/short name lengths, and account limit (50).

### 9. Flags
- **Constants**: `F_AUTO_SIGN_IN`, `F_IS_GROUP`, `F_MEMBERS_ONLY`, etc.
- **Details**: Bitwise flags for chat features (e.g., members-only, live mode).
- **Note**: Redundant flags (e.g., `F_MEMBERS_ONLY2`) need clarification.

## Recommendations
- **Security**: Move credentials and API keys to environment variables (`.env`).
- **Email**: Fix empty SMTP settings; use PHPMailer and Gmail App Password.
- **Debug**: Restrict `DEBUG` to non-production environments.
- **APIs**: Upgrade to Google Analytics 4; validate reCAPTCHA keys.
- **Code**: Group constants, add comments, and consider modern PHP practices (e.g., namespaces).

## Usage
Include this file in your PHP application to access constants. Ensure sensitive data is secured before deployment.

## Next Steps
- Specify tasks (e.g., debug SMTP, refactor code, explain flags).
- Request security audit or integration help (e.g., MySQL, APIs).
- Ask for visualizations if data is available (e.g., auction bids).

*Last Updated: September 6, 2025*
