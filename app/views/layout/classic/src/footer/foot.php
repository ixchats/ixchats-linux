<!--footer-->
    <div id="footer">
	<footer>
        <ul>
        <!--<li><a href="//<?php echo DOMAIN ?>/about.php" title="About" data-localize="main.about">About</a></li>-->
        <li><a href="//<?php echo DOMAIN ?>/facebook" title="Twitter" data-localize="main.twitter">Twitter</a></li>
        <li><a href="//util.<?php echo DOMAIN ?>/wiki/index.php?title=Main_Page" title="Wiki" data-localize="main.wiki">Wiki</a></li>
        <li><a href="//<?php echo DOMAIN ?>/privacy.html" title="Privacy" data-localize="main.privacy">Privacy</a></li>
        <li><a href="//<?php echo DOMAIN ?>/terms.html" title="Terms" data-localize="main.terms">Terms</a></li>
        <li><a href="//util.<?php echo DOMAIN ?>/wiki/index.php?title=Safety" title="Safety" data-localize="main.safety">Safety</a></li>
        <li><a href="//<?php echo DOMAIN ?>/ticket" title="Support" data-localize="main.support">Support</a></li>
        <li><a href="//<?php echo DOMAIN ?>/" title="Contact" data-localize="main.contact">Contact</a></li>
        </ul>
        <p>&copy; <?php echo date("Y") ?>  <?php echo XAT_NAME ?>  Ltd. All rights reserved.</p>
    </footer>
    </div>
<!--/footer-->
<!--foot-->
	<style>
	/* width */
	 ::-webkit-scrollbar {
		width: 10px;
	 }
	 /* Track */
	 ::-webkit-scrollbar-track {
		background: #f1f1f1; 
	 }
	 /* Handle */
	 ::-webkit-scrollbar-thumb {
		background: #000000; 
	 }
	 /* Handle on hover */
	 ::-webkit-scrollbar-thumb:hover {
		background: #555; 
	 }
	#xatbox {
		text-align: center;
		color: aliceblue;
	}
	#hero {
		background-size: cover;
		background-position: center;
		background-image: url(https://images.weserv.nl/?url=<?php echo I_BACKGROUND;?>);
		margin-top: 0;
		margin-bottom: 1rem;
		color: #ffffff;
	}
	#hero .item p {
		color: #fff8f8;
	}
	</style>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="//<?php echo DOMAIN ?>/js/vendor/jquery.cookie.js?v=<?php echo VERSION ?>"></script>
    <script src="//<?php echo DOMAIN ?>/js/vendor/jquery.cookiecuttr.js?v=<?php echo VERSION ?>"></script>
	<script src="//<?php echo DOMAIN ?>/js/vendor/bootstrap.min.js?v=<?php echo VERSION ?>"></script>
    <script src="//<?php echo DOMAIN ?>/js/plugins.js?v=<?php echo VERSION ?>"></script>
    <script src="//<?php echo DOMAIN ?>/js/vendor/jquery.localize.js?v=<?php echo VERSION ?>"></script>
	<script src="//<?php echo DOMAIN ?>/js/main.js?v=<?php echo VERSION ?>"></script>
	<script src="//<?php echo DOMAIN ?>/js/previe.js"></script>
	<script type="text/javascript">
		_uacct = "<?php echo G_ANALYTICS?>";
		if(!config.cookiedecline) urchinTracker();
		<?php if (strpos($description, 'stuff') == true) {?>
		$(document).ready(ChatEmbed());
		<?php } ?>
	</script>
</body>
</html>
<!--/foot-->
