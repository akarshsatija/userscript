// ==UserScript==
// @name           Auto-Accept Facebook Friend Reqests
// @namespace      http://www.netcasino.ws
// @description    Accept all Facebook friend requests automatically
// @include        http://*facebook.com/reqs.php*
// ==/UserScript==

/*

Eirik Neefjes
http://www.netcasino.ws

13.07.2009

*/

(function() {

	var findPattern = "//div[@id='friend_connect']//input[@class='inputbutton' and @value='Confirm']";
	var results = document.evaluate( findPattern, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null );
	
	var i=0;
	while ( (res = results.snapshotItem(i) ) !=null ){
	    res.click();
	    i++;
	}

})();





