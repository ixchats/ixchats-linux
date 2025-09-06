function patchLink(link)
{
	var url   = new URL(link.href);
	var hosts = ["rxat.ro", "bot.rxat.ro"];

	if(hosts.indexOf(url.host) !== -1)
		return;

	// linkvalidator.net/warn.php?p=b64
	link.href = "https://linkvalidator.rxat.ro/warn.php?p=" + btoa(link.href);
	//link.href = "https://linkvalidator.net/warn.php?p=" + btoa(link.href);

}

window.addEventListener("load", function(event) {
	var links = document.querySelectorAll("a");
	var css   = document.styleSheets;

	for(var i = 0; i < links.length; i++)
		patchLink(links[i]);

	for(var i = 0; i < css.length; i++)
		if(css[i].title === "loading")
			//css[i].deleteRule("a");
			css[i].disabled = true;

});
