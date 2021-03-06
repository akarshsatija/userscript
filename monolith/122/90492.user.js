// ==UserScript==
// @name           TafariForum Kropfbutton
// @description    Entfernt den Kropfbutton im Tafariforum
// @include        http://www.tafari.at/forum/*
// @include        https://www.tafari.at/forum/*
// @copyright      JollyJoker
// @version        2.1.0
// ==/UserScript==

//
// Loescht den Kropfbutton
//
var deleteButton = true;
var xp_right=document.evaluate('//a[@title="Like Post"]',document,null,6,null);
var xp_left=document.evaluate("//*[@class='author_buttons float_left']",document,null,6,null);
for(var i=xp_right.snapshotLength-1;i>=0;--i) {
	var cur_right=xp_right.snapshotItem(i);
	var cur_left=xp_left.snapshotItem(i);
	likebutton = cur_right.parentNode;
	cur_right.parentNode.parentNode.removeChild(likebutton);
	if (!deleteButton) {cur_left.appendChild(likebutton);}
}