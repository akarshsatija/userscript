// ==UserScript==
// @name           Asgards
// @namespace      Asgards
// @description    Ajoute un lien vers le forum de l'alliance Asgards
// @include http://*s110-fr.ogame.gameforge.com/game/index.php?page=*
// @exclude http://*.ogame.*ajax*
// ==/UserScript==

var pseudo = document.getElementById("playerName").getElementsByTagName('span')[0].innerHTML;

var uni = document.getElementsByTagName('head')[0].innerHTML;
uni = uni.split('http://')[1].split('.')[0];

var lang = document.getElementsByTagName('head')[0].innerHTML;
lang = lang.split('.ogame.')[1].split('/game')[0];

var LinkDiv = document.createElement('div');
LinkDiv.id = 'LinkDiv';
LinkDiv.innerHTML +='<li class="menubutton_table"><span class="menu_icon"><img src="http://s3.noelshack.com/old/up/ad-36bfc30555.gif" height="29" width="38"></span>'
				  +'<a class="menubutton " href="http://asgards-jupiter.vraiforum.com/index.php"" target="_blank"><span class="textlabel">Asgards</span></a></li>'
document.getElementById('menuTable').appendChild(LinkDiv);





