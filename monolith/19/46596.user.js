// ==UserScript== 
// @name			CollerEvader test
// @author			FurryEwok
// @description			Coller evader Fleet load page
// @include			http://uni1.ogame.org/game/index.php?page=overview&session=*
// ==/UserScript==

function ActionTime() {
 if (running) { return; }
 var time;
 time = new Date();
 if ((time.getHours()==14) && (time.getMinutes()==16) && (time.getSeconds()==00)) {
  running=true;
  var sessionID;
  sessionID=location.href.substr("http://uni1.ogame.org/game/index.php?page=overview&session=".length)
  location.href="http://uni1.ogame.org/game/index.php?page=flotten1&session="+sessionID+"&mode=Flotte";
 } else {
  setTimeout("ActionTime()",1000);
 }
}

var running;
running=false;
ActionTime();