// ==UserScript==
// @name		   travV1 by RS
// @version 	   1.0
// @date		   24-02-2010 12:02:40
// @author		   Rost Sota <rost152@i.ua>
// @description    
// @include 	   http://*.travian.*/karte.php*
// ==/UserScript==

(function(){
  var server = window.location.host.match(/^(.*?)[.]travian[.](.*?)$/);
  if (server[2] == "ru") server = server[1]; else server = server[1]+"."+server[2];
  var nav = document.getElementById("navi_table") || document.getElementById("sleft") || document.getElementById("side_navi");
  var uid = nav.innerHTML.match(/spieler\.php\?uid=([0-9]+)/)[1];

  function setMap() {
	var f = document.forms[0]; if (f.wrappedJSObject) f = f.wrappedJSObject;
	var x = f.xp.value;
	var y = f.yp.value;
	var url = 'http://trav.datacompboy.ru/map/'+server+'?uid='+uid+'&xp='+x+'&yp='+y;
	var map = document.getElementById('map_content');
	if (!document.getElementById('map_link_to_akossmap')) {
	  var link = document.createElement('A');
      link.setAttribute("id", "map_link_to_akossmap");
	  link.setAttribute("target", "_blank");
	  var img = document.createElement('IMG');
	  img.setAttribute("class", "map_link_to_xxlmap");
	  img.setAttribute("className", "map_link_to_xxlmap");
	  img.style.position='absolute';	  img.style.zIndex = '1000';
	  img.setAttribute("src", "img/un/m/max.gif");
	  link.appendChild(img);
	  var pos = map.getElementsByTagName("DIV")[0];
	  map.insertBefore(link, pos);
	}
	var link = document.getElementById("map_link_to_akossmap");
	link.setAttribute("href", url);
	link.setAttribute("onclick", "return pop('"+url+"')");
	var img = link.getElementsByTagName("IMG")[0];
	img.setAttribute("alt", "A-Koss Map");
	img.setAttribute("title", "A-Koss Map");
	return true;
  }

  function my_al(block) {
	var wnd = window.wrappedJSObject ? window.wrappedJSObject : window;
	var res = wnd._real_al(block);
	if (block == "map_content") {
	  setMap();
	}
	return res;
  }
  function my_ig() {
    var wnd = window.wrappedJSObject ? window.wrappedJSObject : window;
    var res = wnd._real_ig.apply(null, arguments);
    setMap();
    return res;
  }

  function my_map_init() {
	var wnd = window.wrappedJSObject ? window.wrappedJSObject : window;
	var res = wnd._real_map_init();
	setMap();
	return res;
  }

  var wnd = window.wrappedJSObject ? window.wrappedJSObject : window;
  var init = 0;
  if (!wnd._real_al && wnd.al) {
	wnd._real_al = wnd.al;
	wnd.al = my_al;
	setMap();
	init = 1;
  }
  if (!wnd._real_ig && wnd.ig) {
    wnd._real_ig = wnd.ig;
    wnd.ig = my_ig;
  }
  if (!wnd._real_map_init && wnd.map_init) {
	wnd._real_map_init = wnd.map_init;
	wnd.map_init = my_map_init;
	init = 1;
  }
  if (init) {
	wnd.pop = function(aQ){as=window.open(aQ,"map","scrollbars=yes,top=100,left=25,width=975,height=550");as.focus();return false;};
  }
  my_map_init(); // Since domReady fired before userjs

})();
