// ==UserScript==
// @name		ViewTube
// @version		2013.11.06
// @description		Watch videos from video sharing websites without Flash Player.
// @author		sebaro
// @namespace		https://userscripts.org/users/sebaro
// @downloadURL		https://userscripts.org/scripts/source/87011.user.js
// @updateURL		https://userscripts.org/scripts/source/87011.meta.js
// @icon		http://s3.amazonaws.com/uso_ss/icon/87011/large.png
// @include		http://youtube.com*
// @include		http://www.youtube.com*
// @include		https://youtube.com*
// @include		https://www.youtube.com*
// @include		http://dailymotion.com*
// @include		http://www.dailymotion.com*
// @include		https://dailymotion.com*
// @include		https://www.dailymotion.com*
// @include		http://vimeo.com*
// @include		http://www.vimeo.com*
// @include		https://vimeo.com*
// @include		https://www.vimeo.com*
// @include		http://metacafe.com*
// @include		http://www.metacafe.com*
// @include		https://metacafe.com*
// @include		https://www.metacafe.com*
// @include		http://break.com*
// @include		http://www.break.com*
// @include		https://break.com*
// @include		https://www.break.com*
// @include		http://funnyordie.com*
// @include		http://www.funnyordie.com*
// @include		https://funnyordie.com*
// @include		https://www.funnyordie.com*
// @include		http://videojug.com*
// @include		http://www.videojug.com*
// @include		https://videojug.com*
// @include		https://www.videojug.com*
// @include		http://mevio.com*
// @include		http://*.mevio.com*
// @include		https://mevio.com*
// @include		https://*.mevio.com*
// @include		http://blip.tv*
// @include		http://www.blip.tv*
// @include		https://blip.tv*
// @include		https://www.blip.tv*
// @include		http://veoh.com*
// @include		http://www.veoh.com*
// @include		https://veoh.com*
// @include		https://www.veoh.com*
// @include		http://veehd.com*
// @include		http://www.veehd.com*
// @include		https://veehd.com*
// @include		https://www.veehd.com*
// @include		http://imdb.com/video*
// @include		http://www.imdb.com/video*
// @include		https://imdb.com/video*
// @include		https://www.imdb.com/video*
// @include		http://crackle.com*
// @include		http://www.crackle.com*
// @include		https://crackle.com*
// @include		https://www.crackle.com*
// @grant		none
// ==/UserScript==


/*
  
  Copyright (C) 2010 - 2013 Sebastian Luncan

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program. If not, see <http://www.gnu.org/licenses/>.
  
  Website: http://isebaro.com/viewtube
  Contact: http://isebaro.com/contact
  
*/


(function() {


// ==========Variables========== //

// Userscript
var userscript = 'ViewTube';

// Page
var page = {win: window, doc: document, body: document.body, url: window.location.href};

// Player
var player = {};
var feature = {'autoplay': true, 'definition': true, 'container': true, 'widesize': true, 'fullsize': true};
var option = {'plugin': 'Auto', 'autoplay': false, 'autoget': false, 'definition': 'HD', 'container': 'MP4', 'widesize': false, 'fullsize': false};
var plugins = ['Auto', 'Alt', 'HTML5', 'MPEG', 'MP4', 'FLV', 'VLC'];
if (navigator.platform.indexOf('Win') != -1) plugins = plugins.concat(['WMP', 'WMP2', 'QT']);
else if (navigator.platform.indexOf('Mac') != -1) plugins = plugins.concat(['QT']);
else plugins = plugins.concat(['Totem', 'Xine']);
var mimetypes = {
  'MPEG': 'video/mpeg',
  'MP4': 'video/mp4',
  'WebM': 'video/webm',
  'FLV': 'video/x-flv',
  'MOV': 'video/quicktime',
  'M4V': 'video/x-m4v',
  'AVI': 'video/x-msvideo',
  '3GP': 'video/3gpp',
  'WMP': 'application/x-ms-wmp',
  'WMP2': 'application/x-mplayer2',
  'QT': 'video/quicktime',
  'VLC': 'application/x-vlc-plugin',
  'Totem': 'application/x-totem-plugin',
  'Xine': 'application/x-xine-plugin'
};

// Links
var website = 'http://isebaro.com/viewtube/?ln=en';
var contact = 'http://isebaro.com/contact/?ln=en&sb=viewtube';


// ==========Fixes========== //

// Don't run on frames or iframes
if (window.top != window.self)  return;

// Force page reload on href change
page.win.setInterval(function() {
  nurl = window.location.href;
  if (page.url != nurl) window.location.href = nurl;
}, 500);


// ==========Functions========== //

function createMyElement (type, content, event, action, target) {
  var obj = page.doc.createElement(type);
  if (content) {
    if (type == 'div') obj.innerHTML = content;
    else if (type == 'img') obj.src = content;
    else if (type == 'option') {
      obj.value = content;
      obj.innerHTML = content;
    }
    else if (type == 'video') {
      obj.src = content;
      obj.controls = 'controls';
      obj.autoplay = 'autoplay';
      obj.loop = 'loop';
      obj.volume = 0.5;
      obj.innerHTML = '<br><br>The video should be loading. If it doesn\'t load, make sure your browser supports HTML5\'s Video and this video codec. If you think it\'s a script issue, please report it <a href="' + contact + '">here</a>.';
    }
    else if (type == 'object') {
      obj.data = content;
      obj.innerHTML = '<br><br>The video should be loading. If it doesn\'t load, make sure a video plugin is installed. If you think it\'s a script issue, please report it <a href="' + contact + '">here</a>.<param name="scale" value="aspect"><param name="stretchtofit" value="true"><param name="autostart" value="true"><param name="autoplay" value="true">';
    }
    else if (type == 'embed') {
      if (option['plugin'] == 'VLC') obj.setAttribute('target', content);
      else obj.src = content;
      obj.innerHTML = '<br><br>The video should be loading. If it doesn\'t load, make sure a video plugin is installed. If you think it\'s a script issue, please report it <a href="' + contact + '">here</a>.<param name="scale" value="aspect"><param name="stretchtofit" value="true"><param name="autostart" value="true"><param name="autoplay" value="true">';
    }
  }
  if (type == 'video' || type == 'object' || type == 'embed') {
    if (option['plugin'] == 'Auto' || option['plugin'] == 'Alt' || option['plugin'] == 'HTML5') {
      obj.type = mimetypes[player['videoPlay'].replace(/.*\s/, '')];
    }
    else {
      obj.type = mimetypes[option['plugin']];
    }
    obj.id = 'vtVideo';
  }
  if (event == 'change') {
    if (target == 'video') {
      obj.addEventListener ('change', function () {
	player['videoPlay'] = this.value;
	if (player['isGetting']) {
	  modifyMyElement (player['buttonGet'] , 'div', 'Get', false);
	  player['isGetting'] = false;
	}
	if (player['isPlaying']) playMyVideo(option['autoplay']);
      }, false);
    }
    else if (target == 'plugin') {
      obj.addEventListener ('change', function () {
	option['plugin'] = this.value;
	setMyOptions ('viewtube_plugin', option['plugin']);
	if (player['isPlaying']) playMyVideo(true);
      }, false);
    }
  }
  else if (event == 'click') {
    obj.addEventListener ('click', function () {
      if (action == 'close') {
	removeMyElement(page.body, target);
      }
      else if (action == 'logo') {
	page.win.location.href = website;
      }
      else if (action == 'play') {
	playMyVideo(!player['isPlaying']);
      }
      else if (action == 'get') {
	getMyVideo();
      }
      else if (action == 'autoplay') {
	option['autoplay'] = (option['autoplay']) ? false : true;
	if (option['autoplay']) {
	  styleMyElement (player['buttonPlay'], {display: 'none'});
	  styleMyElement (player['buttonAutoplay'], {color: '#008080', textShadow: '0px 1px 1px #CCCCCC'});  
	  if (!player['isPlaying']) playMyVideo(true);
	}
	else {
	  styleMyElement (player['buttonPlay'], {display: 'inline'});
	  styleMyElement (player['buttonAutoplay'], {color: '#CCCCCC', textShadow: '0px 0px 0px'});
	  playMyVideo(false);
	}
	setMyOptions ('viewtube_autoplay', option['autoplay']);
      }
      else if (action == 'definition') {
	for (var itemDef = 0; itemDef < option['definitions'].length; itemDef++) {
	  if (option['definitions'][itemDef].match(/[A-Z]/g).join('') == option['definition']) {
	    var nextDef = (itemDef + 1 < option['definitions'].length) ? itemDef + 1 : 0;
	    option['definition'] = option['definitions'][nextDef].match(/[A-Z]/g).join('');
	    break;
	  }
	}
	modifyMyElement (player['buttonDefinition'], 'div', option['definition'], false);
	setMyOptions ('viewtube_definition', option['definition']);
	if (player['isGetting']) {
	  modifyMyElement (player['buttonGet'] , 'div', 'Get', false);
	  player['isGetting'] = false;
	}
	selectMyVideo ();
	if (player['isPlaying']) playMyVideo(true);
      }
      else if (action == 'container') {
	for (var itemCont = 0; itemCont < option['containers'].length; itemCont++) {
	  if (option['containers'][itemCont] == option['container']) {
	    var nextCont = (itemCont + 1 < option['containers'].length) ? itemCont + 1 : 0;
	    option['container'] = option['containers'][nextCont];
	    break;
	  }
	}
	modifyMyElement (player['buttonContainer'], 'div', option['container'], false);
	setMyOptions ('viewtube_container', option['container']);
	if (player['isGetting']) {
	  modifyMyElement (player['buttonGet'] , 'div', 'Get', false);
	  player['isGetting'] = false;
	}
	selectMyVideo ();
	if (player['isPlaying']) playMyVideo(true);
      }
      else if (action == 'widesize') {
	option['widesize'] = (option['widesize']) ? false : true;
	setMyOptions ('viewtube_widesize', option['widesize']);
	resizeMyPlayer('widesize');
      }
      else if (action == 'fullsize') {
	option['fullsize'] = (option['fullsize']) ? false : true;
	setMyOptions ('viewtube_fullsize', option['fullsize']);
	resizeMyPlayer('fullsize');
      }
    }, false);
  }
  return obj;
}

function getMyElement (obj, type, from, value, child, content) {
  var getObj, chObj, coObj;
  var pObj = (!obj) ? page.doc : obj;
  if (type == 'body') getObj = pObj.body;
  else {
    if (from == 'id') getObj = pObj.getElementById(value);
    else if (from == 'class') getObj = pObj.getElementsByClassName(value);
    else if (from == 'tag') getObj = pObj.getElementsByTagName(type);
    else if (from == 'ns') getObj = pObj.getElementsByTagNameNS(value, type);
  }
  chObj = (child >= 0) ? getObj[child] : getObj;
  if (content && chObj) {
    if (type == 'html' || type == 'body' || type == 'div' || type == 'option') coObj = chObj.innerHTML;
    else if (type == 'object') coObj = chObj.data;
    else if (type == 'img' || type == 'video' || type == 'embed') coObj = chObj.src;
    else coObj = chObj.textContent;
    return coObj;
  }
  else {
    return chObj;
  }
}

function modifyMyElement (obj, type, content, clear) {
  if (content) {
    if (type == 'div') obj.innerHTML = content;
    else if (type == 'option') {
      obj.value = content;
      obj.innerHTML = content;
    }
    else if (type == 'object') obj.data = content;
    else if (type == 'img' || type == 'video' || type == 'embed') obj.src = content;
  }
  if (clear) {
    if (obj.hasChildNodes()) {
      while (obj.childNodes.length >= 1) {
        obj.removeChild(obj.firstChild);
      }
    }
  }
}

function cleanMyElement (element, hide) {
  var elEmbed, elVideo;
  if (hide) styleMyElement (element, {display: 'none'});
  elEmbed = getMyElement (element, 'embed', 'tag', '', 0, false) || getMyElement (element, 'object', 'tag', '', 0, false);
  if (elEmbed && elEmbed.parentNode) {
    removeMyElement (elEmbed.parentNode, elEmbed);
    if (!hide) return;
  }
  elVideo = getMyElement (element, 'video', 'tag', '', 0, false);
  if (elVideo && elVideo.currentSrc) {
    modifyMyElement (elVideo, 'video', 'none', true);
    if (!hide && elVideo.parentNode) removeMyElement (elVideo.parentNode, elVideo);
    return;
  }
  var elWait = 50;
  var elRemove = page.win.setInterval (function () {
    if (!elVideo) {
      elVideo = getMyElement (element, 'video', 'tag', '', 0, false);
      if (!elVideo) {
	elEmbed = getMyElement (element, 'embed', 'tag', '', 0, false) || getMyElement (element, 'object', 'tag', '', 0, false);
	if (elEmbed && elEmbed.id != 'vtVideo' && elEmbed.parentNode) {
	  removeMyElement (elEmbed.parentNode, elEmbed);
	  page.win.clearInterval (elRemove);
	}
      }
    }
    if (elVideo && elVideo.id != 'vtVideo' && elVideo.currentSrc) {
      modifyMyElement (elVideo, 'video', 'none', true);
      if (!hide && elVideo.parentNode) removeMyElement (elVideo.parentNode, elVideo);
      page.win.clearInterval (elRemove);
    }
    if (elWait > 0) elWait--;
    else page.win.clearInterval (elRemove);
  }, 500);
}

function styleMyElement (obj, styles) {
  for (var property in styles) {
    if (styles.hasOwnProperty(property)) obj.style[property] = styles[property];
  }
}

function appendMyElement (parent, child) {
  parent.appendChild(child);
}

function removeMyElement (parent, child) {
  parent.removeChild(child);
}

function replaceMyElement (parent, orphan, child) {
  parent.replaceChild(orphan, child);
}

function createMyPlayer () {
  /* Get My Options */
  getMyOptions ();

  /* Player Settings */
  player['panelHeight'] = 18;
  player['panelPadding'] = 2;

  /* The Panel */
  var panelWidth = player['playerWidth'] - player['panelPadding'] * 2;
  player['playerPanel'] = createMyElement ('div', '', '', '', '');
  styleMyElement (player['playerPanel'], {width: panelWidth + 'px', height: player['panelHeight'] + 'px', padding: player['panelPadding'] + 'px', backgroundColor: '#F4F4F4', textAlign: 'center'});
  appendMyElement (player['playerWindow'], player['playerPanel']);

  /* Panel Items */
  var panelItemBorder = 1;
  var panelItemHeight = player['panelHeight'] - panelItemBorder * 2;
  
  /* Panel Logo */
  player['panelLogo'] = createMyElement ('div', userscript + ':', 'click', 'logo', '');
  styleMyElement (player['panelLogo'], {height: panelItemHeight + 'px', border: '1px solid #F4F4F4', borderRadius: '3px', padding: '0px', display: 'inline', color: '#336699', fontSize: '12px', textShadow: '0px 1px 1px #CCCCCC', cursor: 'pointer'});
  appendMyElement (player['playerPanel'], player['panelLogo']);

  /* Panel Video Menu */
  player['videoMenu'] = createMyElement ('select', '', 'change', '', 'video');
  styleMyElement (player['videoMenu'], {width: '200px', height: panelItemHeight + 'px', border: '1px solid #F4F4F4', borderRadius: '3px', padding: '0px', display: 'inline', backgroundColor: '#F4F4F4', color: '#336699', fontSize: '12px', textShadow: '0px 1px 1px #CCCCCC', verticalAlign: 'baseline', cursor: 'pointer'});
  appendMyElement (player['playerPanel'], player['videoMenu'] );
  for (var videoCode in player['videoList']) {
    player['videoItem'] = createMyElement ('option', videoCode, '', '', '');
    styleMyElement (player['videoItem'], {padding: '0px', display: 'block', backgroundColor: '#F4F4F4', color: '#336699', fontSize: '12px', textShadow: '0px 1px 1px #CCCCCC', cursor: 'pointer'});
    appendMyElement (player['videoMenu'], player['videoItem']);
  }

  /* Panel Plugin Menu */
  player['pluginMenu'] = createMyElement ('select', '', 'change', '', 'plugin');
  styleMyElement (player['pluginMenu'], {width: '70px', height: panelItemHeight + 'px', border: '1px solid #F4F4F4', borderRadius: '3px', padding: '0px', display: 'inline', backgroundColor: '#F4F4F4', color: '#336699', fontSize: '12px', textShadow: '0px 1px 1px #CCCCCC', verticalAlign: 'baseline', cursor: 'pointer'});
  appendMyElement (player['playerPanel'], player['pluginMenu'] );
  for (var p = 0; p < plugins.length; p++) {
    player['pluginItem'] = createMyElement ('option', plugins[p], '', '', '');
    styleMyElement (player['pluginItem'], {padding: '0px', display: 'block', backgroundColor: '#F4F4F4', color: '#336699', fontSize: '12px', textShadow: '0px 1px 1px #CCCCCC', cursor: 'pointer'});
    appendMyElement (player['pluginMenu'], player['pluginItem']);
  }
  player['pluginMenu'].value = option['plugin'];
    
  /* Panel Play Button */
  player['buttonPlay'] = createMyElement ('div', 'Play', 'click', 'play', '');
  styleMyElement (player['buttonPlay'], {height: panelItemHeight + 'px', border: '1px solid #CCCCCC', borderRadius: '3px', padding: '0px 5px', display: 'inline', color: '#37B704', fontSize: '12px', textShadow: '0px 1px 1px #CCCCCC', cursor: 'pointer'});
  if (option['autoplay']) styleMyElement (player['buttonPlay'], {display: 'none'});
  appendMyElement (player['playerPanel'], player['buttonPlay']);
  
  /* Panel Get Button */
  player['buttonGet'] = createMyElement ('div', 'Get', 'click', 'get', '');
  styleMyElement (player['buttonGet'], {height: panelItemHeight + 'px', border: '1px solid #CCCCCC', borderRadius: '3px', padding: '0px 5px', display: 'inline', color: '#C000C0', fontSize: '12px', textShadow: '0px 1px 1px #CCCCCC', cursor: 'pointer'});
  appendMyElement (player['playerPanel'], player['buttonGet']);

  /* Panel Autoplay Button */
  if (feature['autoplay']) {
    var bAutoPlay = (player['playerWidth'] > 600) ? 'Autoplay' : 'AP';
    player['buttonAutoplay'] = createMyElement ('div', bAutoPlay, 'click', 'autoplay', '');
    styleMyElement (player['buttonAutoplay'], {height: panelItemHeight + 'px', border: '1px solid #CCCCCC', borderRadius: '3px', padding: '0px 5px', display: 'inline', color: '#CCCCCC', fontSize: '12px', cursor: 'pointer'});
    if (option['autoplay']) styleMyElement (player['buttonAutoplay'], {color: '#008080', textShadow: '0px 1px 1px #CCCCCC'});
    appendMyElement (player['playerPanel'], player['buttonAutoplay']);
  }

  /* Panel Definition Button */
  if (feature['definition']) {
    player['buttonDefinition'] = createMyElement ('div', option['definition'], 'click', 'definition', '');
    styleMyElement (player['buttonDefinition'], {height: panelItemHeight + 'px', border: '1px solid #CCCCCC', borderRadius: '3px', padding: '0px 5px', display: 'inline', color: '#008000', fontSize: '12px', textShadow: '0px 1px 1px #CCCCCC', cursor: 'pointer'});
    appendMyElement (player['playerPanel'], player['buttonDefinition']);
  }

  /* Panel Container Button */
  if (feature['container']) {
    player['buttonContainer'] = createMyElement ('div', option['container'], 'click', 'container', '');
    styleMyElement (player['buttonContainer'], {height: panelItemHeight + 'px', border: '1px solid #CCCCCC', borderRadius: '3px', padding: '0px 5px', display: 'inline', color: '#008000', fontSize: '12px', textShadow: '0px 1px 1px #CCCCCC', cursor: 'pointer'});
    appendMyElement (player['playerPanel'], player['buttonContainer']);
  }

  /* Panel Widesize Button */
  if (feature['widesize']) {
    if (option['widesize']) player['buttonWidesize'] = createMyElement ('div', '&lt;', 'click', 'widesize', '');
    else player['buttonWidesize'] = createMyElement ('div', '&gt;', 'click', 'widesize', '');
    styleMyElement (player['buttonWidesize'], {height: panelItemHeight + 'px', border: '1px solid #CCCCCC', borderRadius: '3px', padding: '0px 5px', display: 'inline', color: '#C05800', fontSize: '12px', textShadow: '1px 1px 2px #CCCCCC', cursor: 'pointer'});
    appendMyElement (player['playerPanel'], player['buttonWidesize']);
  }
  
  /* Panel Fullsize Button */
  if (feature['fullsize']) {
    if (option['fullsize']) player['buttonFullsize'] = createMyElement ('div', '-', 'click', 'fullsize', '');
    else player['buttonFullsize'] = createMyElement ('div', '+', 'click', 'fullsize', '');
    styleMyElement (player['buttonFullsize'], {height: panelItemHeight + 'px', border: '1px solid #CCCCCC', borderRadius: '3px', padding: '0px 5px', display: 'inline', color: '#C05800', fontSize: '12px', textShadow: '1px 1px 2px #CCCCCC', cursor: 'pointer'});
    appendMyElement (player['playerPanel'], player['buttonFullsize']);
  }

  /* The Content */
  player['contentWidth'] = player['playerWidth'];
  player['contentHeight'] = player['playerHeight'] - player['panelHeight'] - player['panelPadding'] * 2;
  player['playerContent'] = createMyElement ('div', '', '', '', '');
  styleMyElement (player['playerContent'], {width: player['contentWidth'] + 'px', height: player['contentHeight'] + 'px', backgroundColor: '#F4F4F4', color: '#AD0000', fontSize: '14px', textAlign: 'center'});
  appendMyElement (player['playerWindow'], player['playerContent']);
  
  /* The Video Thumbnail */
  if (player['videoThumb']) {
    player['contentImage'] = createMyElement ('img', player['videoThumb'], 'click', 'play', '');
    styleMyElement (player['contentImage'], {width: player['contentWidth'] + 'px', height: player['contentHeight'] + 'px', border: '0px', cursor: 'pointer'});
  }

  /* Disabled Features */
  if (!feature['autoplay']) option['autoplay'] = false;
  if (!feature['widesize']) option['widesize'] = false;
  if (!feature['fullsize']) option['fullsize'] = false;
 
  /* Resize My Player */
  if (option['widesize']) resizeMyPlayer('widesize');
  if (option['fullsize']) resizeMyPlayer('fullsize');
 
  /* Select My Video */
  if (feature['definition'] || feature['container']) selectMyVideo ();
 
  /* Play My Video */ 
  playMyVideo (option['autoplay']);
}

function selectMyVideo () {
  var vdoCont = (option['container'] != 'Any') ? [option['container']] : option['containers'];
  var vdoDef = option['definitions'];
  var vdoList = {};
  for (var vC = 0; vC < vdoCont.length; vC++) {
    if (vdoCont[vC] != 'Any') {
      for (var vD = 0; vD < vdoDef.length; vD++) {
	var format = vdoDef[vD] + ' ' + vdoCont[vC];
	if (!vdoList[vdoDef[vD]]) {
	  for (var vL in player['videoList']) {
	    if (vL == format) {
	      vdoList[vdoDef[vD]] = vL;
	      break;
	    }
	  }
	}
      }
    }
  }
  if (option['definition'] == 'UHD') {
    if (vdoList['Ultra High Definition']) player['videoPlay'] = vdoList['Ultra High Definition'];
    else if (vdoList['Full High Definition']) player['videoPlay'] = vdoList['Full High Definition'];
    else if (vdoList['High Definition']) player['videoPlay'] = vdoList['High Definition'];
    else if (vdoList['Standard Definition']) player['videoPlay'] = vdoList['Standard Definition'];
    else if (vdoList['Low Definition']) player['videoPlay'] = vdoList['Low Definition'];
    else if (vdoList['Very Low Definition']) player['videoPlay'] = vdoList['Very Low Definition'];
  }
  else if (option['definition'] == 'FHD') {
    if (vdoList['Full High Definition']) player['videoPlay'] = vdoList['Full High Definition'];
    else if (vdoList['High Definition']) player['videoPlay'] = vdoList['High Definition'];
    else if (vdoList['Standard Definition']) player['videoPlay'] = vdoList['Standard Definition'];
    else if (vdoList['Low Definition']) player['videoPlay'] = vdoList['Low Definition'];
    else if (vdoList['Very Low Definition']) player['videoPlay'] = vdoList['Very Low Definition'];
  }
  else if (option['definition'] == 'HD') {
    if (vdoList['High Definition']) player['videoPlay'] = vdoList['High Definition'];
    else if (vdoList['Standard Definition']) player['videoPlay'] = vdoList['Standard Definition'];
    else if (vdoList['Low Definition']) player['videoPlay'] = vdoList['Low Definition'];
    else if (vdoList['Very Low Definition']) player['videoPlay'] = vdoList['Very Low Definition'];
  }
  else if (option['definition'] == 'SD') {
    if (vdoList['Standard Definition']) player['videoPlay'] = vdoList['Standard Definition'];
    else if (vdoList['Low Definition']) player['videoPlay'] = vdoList['Low Definition'];
    else if (vdoList['Very Low Definition']) player['videoPlay'] = vdoList['Very Low Definition'];
  }
  else if (option['definition'] == 'LD') {
    if (vdoList['Low Definition']) player['videoPlay'] = vdoList['Low Definition'];
    else if (vdoList['Very Low Definition']) player['videoPlay'] = vdoList['Very Low Definition'];
  }
  else if (option['definition'] == 'VLD') {
    if (vdoList['Very Low Definition']) player['videoPlay'] = vdoList['Very Low Definition'];
    else if (vdoList['Low Definition']) player['videoPlay'] = vdoList['Low Definition'];
  }
  player['videoMenu'].value = player['videoPlay'];
}

function playMyVideo (play) {
  if (play) {
    player['isPlaying'] = true;
    modifyMyElement (player['buttonPlay'], 'div', 'Stop', false);
    styleMyElement (player['buttonPlay'], {color: '#AD0000'});
    if (option['plugin'] == 'HTML5') player['contentVideo'] = createMyElement ('video', player['videoList'][player['videoPlay']], '', '', '');
    else if (option['plugin'] == 'Alt' || option['plugin'] == 'VLC') player['contentVideo'] = createMyElement ('embed', player['videoList'][player['videoPlay']], '', '', '');
    else player['contentVideo'] = createMyElement ('object', player['videoList'][player['videoPlay']], '', '', '');
    player['contentVideo'].width = player['contentWidth'];
    player['contentVideo'].height = player['contentHeight'];
    styleMyElement (player['contentVideo'], {position: 'relative', width: player['contentWidth'] + 'px', height: player['contentHeight'] + 'px'});
    modifyMyElement (player['playerContent'], 'div', '', true);
    appendMyElement (player['playerContent'], player['contentVideo']);
  }
  else {
    player['isPlaying'] = false;
    modifyMyElement (player['buttonPlay'], 'div', 'Play', false);
    styleMyElement (player['buttonPlay'], {color: '#37B704'});
    modifyMyElement (player['playerContent'], 'div', '', true);
    if (player['contentImage']) appendMyElement (player['playerContent'], player['contentImage']);
    else showMyMessage ('!thumb');
  }
}

function getMyVideo () {
  var vdoURL = player['videoList'][player['videoPlay']];
  if (player['videoTitle']) {
    var vdoD = ' (' + player['videoPlay'] + ')';
    vdoD = vdoD.replace(/Ultra High Definition/, 'UHD');
    vdoD = vdoD.replace(/Full High Definition/, 'FHD');
    vdoD = vdoD.replace(/High Definition/, 'HD');
    vdoD = vdoD.replace(/Standard Definition/, 'SD');
    vdoD = vdoD.replace(/Very Low Definition/, 'VLD');
    vdoD = vdoD.replace(/Low Definition/, 'LD');
    vdoD = vdoD.replace(/\sFLV|\sMP4|\sWebM|\s3GP/g, '');
    vdoURL = vdoURL + '&title=' + player['videoTitle'] + vdoD;
  }
  if (option['autoget']) page.win.location.href = vdoURL;
  else {
    var vdoLink = 'Get <a href="' + vdoURL + '">Link</a>';
    modifyMyElement (player['buttonGet'] , 'div', vdoLink, false);
    player['isGetting'] = true;
  }
}

function resizeMyPlayer (size) {
  if (size == 'widesize') {
    if (option['widesize']) {
      modifyMyElement (player['buttonWidesize'], 'div', '&lt;', false);
      var playerWidth = player['playerWideWidth'];
      var playerHeight= player['playerWideHeight'];
      var sidebarMargin = player['sidebarMarginWide'];
    }
    else {
      modifyMyElement (player['buttonWidesize'], 'div', '&gt;', false);
      var playerWidth = player['playerWidth'];
      var playerHeight= player['playerHeight'];
      var sidebarMargin = player['sidebarMarginNormal'];
    }
  }
  else if (size == 'fullsize') {
    if (option['fullsize']) {
      var playerPosition = 'fixed';
      var playerWidth = page.win.innerWidth || page.doc.documentElement.clientWidth;
      var playerHeight = page.win.innerHeight || page.doc.documentElement.clientHeight;
      if (!player['isFullsize']) {
	if (feature['widesize']) styleMyElement (player['buttonWidesize'], {display: 'none'});
	modifyMyElement (player['buttonFullsize'], 'div', '-', false);
	appendMyElement (page.body, player['playerWindow']);
	styleMyElement (page.body, {overflow: 'hidden'});
	if (!player['resizeListener']) player['resizeListener'] = function() {resizeMyPlayer('fullsize')};
	page.win.addEventListener ('resize', player['resizeListener'], false);
	player['isFullsize'] = true;
      }
    }
    else {
      var playerPosition = 'relative';
      var playerWidth = (option['widesize']) ? player['playerWideWidth'] : player['playerWidth'];
      var playerHeight = (option['widesize']) ? player['playerWideHeight'] : player['playerHeight'];
      if (feature['widesize']) styleMyElement (player['buttonWidesize'], {display: 'inline'});
      modifyMyElement (player['buttonFullsize'], 'div', '+', false);
      appendMyElement (player['playerSocket'], player['playerWindow']);
      styleMyElement (page.body, {overflow: 'auto'});
      page.win.removeEventListener ('resize', player['resizeListener'], false);
      player['isFullsize'] = false;
    }
  }

  /* Resize The Player */
  if (size == 'widesize') {
    styleMyElement (player['sidebarWindow'], {marginTop: sidebarMargin + 'px'});
    styleMyElement (player['playerWindow'], {width: playerWidth + 'px', height: playerHeight + 'px'});
  }
  else styleMyElement (player['playerWindow'], {position: playerPosition, top: '0px', left: '0px', width: playerWidth + 'px', height: playerHeight + 'px'});
  
  /* Resize The Panel */
  var panelWidth = playerWidth - player['panelPadding'] * 2;
  styleMyElement (player['playerPanel'], {width: panelWidth + 'px'});

  /* Resize The Content */
  player['contentWidth'] = playerWidth;
  player['contentHeight'] = playerHeight - player['panelHeight'] - player['panelPadding'] * 2;
  styleMyElement (player['playerContent'], {width: player['contentWidth'] + 'px', height: player['contentHeight'] + 'px'});
  if (player['contentImage']) styleMyElement (player['contentImage'], {width: player['contentWidth'] + 'px', height: player['contentHeight'] + 'px', border: '0px'});
  if (player['isPlaying']) {
    player['contentVideo'].width = player['contentWidth'];
    player['contentVideo'].height = player['contentHeight'];
    styleMyElement (player['contentVideo'], {width: player['contentWidth'] + 'px', height: player['contentHeight'] + 'px'});
  }
}

function cleanMyContent (content, unesc) {
  var myNewContent = content;
  if (unesc) myNewContent = unescape (myNewContent);
  myNewContent = myNewContent.replace (/\\u0025/g,'%');
  myNewContent = myNewContent.replace (/\\u0026/g,'&');
  myNewContent = myNewContent.replace (/\\/g,'');
  myNewContent = myNewContent.replace (/\n/g,'');
  return myNewContent;
}

function getMyContent (url, pattern, clean) {
  var myPageContent, myVideosParse, myVideosContent;
  var isIE = (navigator.appName.indexOf('Internet Explorer') != -1) ? true : false;
  var getMethod = (url != page.url || isIE) ? 'XHR' : 'DOM';
  if (getMethod == 'DOM') {
    myPageContent = getMyElement ('', 'html', 'tag', '', 0, true);
    if (!myPageContent) myPageContent = getMyElement ('', 'body', '', '', -1, true);
    if (clean) myPageContent = cleanMyContent (myPageContent, true);
    myVideosParse = myPageContent.match (pattern);
    myVideosContent = (myVideosParse) ? myVideosParse[1] : null;
    if (myVideosContent) return myVideosContent;
    else getMethod = 'XHR';
  }
  if (getMethod == 'XHR') {
    var xmlHTTP = new XMLHttpRequest();
    xmlHTTP.open('GET', url, false);
    xmlHTTP.send();
    if (pattern == 'XML') {
      myVideosContent = xmlHTTP.responseXML;
    }
    else if (pattern == 'TEXT') {
      myVideosContent = xmlHTTP.responseText;
    }
    else {
      myPageContent = xmlHTTP.responseText;
      if (clean) myPageContent = cleanMyContent (myPageContent, true);
      myVideosParse = myPageContent.match (pattern);
      myVideosContent = (myVideosParse) ? myVideosParse[1] : null;
    }
    return myVideosContent;
  }
}

function setMyOptions (key, value) {
  try {
    localStorage.setItem(key, value);
  }
  catch(e) {
    var date = new Date();
    date.setTime(date.getTime() + (356*24*60*60*1000));
    var expires = '; expires=' + date.toGMTString();
    page.doc.cookie = key + '=' + value + expires + '; path=/';
  }
}

function getMyOptions () {
  var vtPlugin = 'viewtube_plugin';
  var vtAutoplay = 'viewtube_autoplay';
  var vtDefinition = 'viewtube_definition';
  var vtContainer = 'viewtube_container';
  var vtWidesize = 'viewtube_widesize';
  var vtFullsize = 'viewtube_fullsize';
  try {
    if (localStorage.getItem(vtPlugin)) option['plugin'] = localStorage.getItem(vtPlugin);
    if (localStorage.getItem(vtAutoplay)) option['autoplay'] = localStorage.getItem(vtAutoplay);
    if (localStorage.getItem(vtDefinition)) option['definition'] = localStorage.getItem(vtDefinition);
    if (localStorage.getItem(vtContainer)) option['container'] = localStorage.getItem(vtContainer);
    if (localStorage.getItem(vtWidesize)) option['widesize'] = localStorage.getItem(vtWidesize);
    if (localStorage.getItem(vtFullsize)) option['fullsize'] = localStorage.getItem(vtFullsize);
  }
  catch(e) {
    var cookies = page.doc.cookie.split(';');
    for (var i=0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) == ' ') cookie = cookie.substring(1, cookie.length);
      if (cookie.indexOf(vtPlugin) == 0) option['plugin'] = cookie.substring(vtPlugin.length + 1, cookie.length);
      if (cookie.indexOf(vtAutoplay) == 0) option['autoplay'] = cookie.substring(vtAutoplay.length + 1, cookie.length);
      if (cookie.indexOf(vtDefinition) == 0) option['definition'] = cookie.substring(vtDefinition.length + 1, cookie.length);
      if (cookie.indexOf(vtContainer) == 0) option['container'] = cookie.substring(vtContainer.length + 1, cookie.length);
      if (cookie.indexOf(vtWidesize) == 0) option['widesize'] = cookie.substring(vtWidesize.length + 1, cookie.length);
      if (cookie.indexOf(vtFullsize) == 0) option['fullsize'] = cookie.substring(vtFullsize.length + 1, cookie.length);
    }
  }
  option['autoplay'] = (option['autoplay'] == 'true') ? true : false;
  option['widesize'] = (option['widesize'] == 'true') ? true : false;
  option['fullsize'] = (option['fullsize'] == 'true') ? true : false;
}

function showMyMessage (cause, content) {
  var myScriptLogo = createMyElement ('div', userscript, '', '', '');
  styleMyElement (myScriptLogo, {margin: '0px auto', padding: '10px', color: '#666666', fontSize: '24px', textAlign: 'center', textShadow: '#FFFFFF -1px -1px 2px'});
  var myScriptMess = createMyElement ('div', '', '', '', '');
  styleMyElement (myScriptMess, {border: '1px solid #F4F4F4', margin: '5px auto 5px auto', padding: '10px', backgroundColor: '#FFFFFF', color: '#AD0000', textAlign: 'center'});
  if (cause == '!player') {
    var myScriptAlert = createMyElement ('div', '', '', '', '');
    styleMyElement (myScriptAlert, {position: 'absolute', top: '30%', left: '35%', border: '1px solid #F4F4F4', borderRadius: '3px', padding: '10px', backgroundColor: '#F8F8F8', fontSize: '14px', textAlign: 'center', zIndex: '99999'});
    appendMyElement (myScriptAlert, myScriptLogo);
    var myNoPlayerMess = 'Couldn\'t get the player element. Please report it <a href="' + contact + '">here</a>.';
    modifyMyElement (myScriptMess, 'div', myNoPlayerMess, false);
    appendMyElement (myScriptAlert, myScriptMess);
    var myScriptAlertButton = createMyElement ('div', 'OK', 'click', 'close', myScriptAlert);
    styleMyElement (myScriptAlertButton, {width: '100px', border: '3px solid #EEEEEE', borderRadius: '5px', margin: '0px auto', backgroundColor: '#EEEEEE', color: '#666666', fontSize: '18px', textAlign: 'center', textShadow: '#FFFFFF -1px -1px 2px', cursor: 'pointer'});
    appendMyElement (myScriptAlert, myScriptAlertButton);
    appendMyElement (page.body, myScriptAlert);
  }
  else if (cause == '!thumb') {
    var myNoThumbMess = '<br><br>Couldn\'t get the thumbnail for this video. Please report it <a href="' + contact + '">here</a>.';
    modifyMyElement (player['playerContent'], 'div', myNoThumbMess, false);
  }
  else {
    appendMyElement (myPlayerWindow, myScriptLogo);
    if (cause == '!content') {
      var myNoContentMess = 'Couldn\'t get the videos content. Please report it <a href="' + contact + '">here</a>.';
      modifyMyElement (myScriptMess, 'div', myNoContentMess, false);
    }
    else if (cause == '!videos') {
      var myNoVideosMess = 'Couldn\'t get any video. Please report it <a href="' + contact + '">here</a>.';
      modifyMyElement (myScriptMess, 'div', myNoVideosMess, false);
    }
    else if (cause == '!support') {
      var myNoSupportMess = 'This video uses the RTMP protocol and is not supported.';
      modifyMyElement (myScriptMess, 'div', myNoSupportMess, false);
    }
    else if (cause == 'embed') {
      var myEmbedMess = 'This is an embedded video. You can watch it <a href="' + content + '">here</a>.';
      modifyMyElement (myScriptMess, 'div', myEmbedMess, false);
    }
    appendMyElement (myPlayerWindow, myScriptMess);
  }
}


// ==========Websites========== //

// =====YouTube===== //

if (page.url.indexOf('youtube.com/watch') != -1) {

  /* Get Player Window */
  var ytFeatherBeta;
  var ytPlayerWindow = getMyElement ('', 'div', 'id', 'player', -1, false);
  if (!ytPlayerWindow) {
    ytPlayerWindow = getMyElement ('', 'div', 'id', 'p', -1, false);
    ytFeatherBeta = true;
  }

  if (!ytPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Get Video Thumbnail */
    if (ytFeatherBeta) {
      var ytVideoID = page.url.match (/watch\?v=(.*?)(&|$)/);
      if (ytVideoID) var ytVideoThumb = 'http://img.youtube.com/vi/' + ytVideoID[1] + '/0.jpg';
    }
    else {
      var ytVideoThumb = getMyContent (page.url, 'link\\s+itemprop="thumbnailUrl"\\s+href="(.*?)"', false);
      if (!ytVideoThumb) ytVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);
      if (!ytVideoThumb) {
	var ytVideoID = page.url.match (/watch\?v=(.*?)(&|$)/);
	if (ytVideoID) ytVideoThumb = 'http://img.youtube.com/vi/' + ytVideoID[1] + '/0.jpg';
      }
    }

    /* Get Video Title */
    if (ytFeatherBeta) {
      var ytVideoTitle = page.doc.title;
    }
    else {
      var ytVideoTitle = getMyContent (page.url, 'meta\\s+itemprop="name"\\s+content="(.*?)"', false);
      if (!ytVideoTitle) ytVideoTitle = getMyContent (page.url, 'meta\\s+property="og:title"\\s+content="(.*?)"', false);
      if (!ytVideoTitle) ytVideoTitle = page.doc.title;
    }
    if (ytVideoTitle) {
      ytVideoTitle = ytVideoTitle.replace(/&quot;/g, '\'').replace(/&#34;/g, '\'').replace(/"/g, '\'');
      ytVideoTitle = ytVideoTitle.replace(/&#39;/g, '\'').replace(/'/g, '\'');
      ytVideoTitle = ytVideoTitle.replace(/&amp;/g, 'and').replace(/&/g, 'and');
      ytVideoTitle = ytVideoTitle.replace(/\?/g, '').replace(/[#:\*]/g, '-').replace(/\//g, '-');
      ytVideoTitle = ytVideoTitle.replace(/^\s+|\s+$/, '').replace(/\.+$/g, '');
      ytVideoTitle = ytVideoTitle.replace(/^YouTube\s-\s/, '');
    }

    /* Get Videos Content */
    var ytVideosContent;
    var ytVideosEncodedFmts, ytVideosAdaptiveFmts, ytVideosDashmpd;
    if (ytFeatherBeta) {
      ytVideosEncodedFmts = getMyContent(page.url, 'url_encoded_fmt_stream_map=(.*?)&amp;', false);
      if (ytVideosEncodedFmts) ytVideosEncodedFmts = cleanMyContent(ytVideosEncodedFmts, true);
      ytVideosAdaptiveFmts = getMyContent(page.url, 'adaptive_fmts=(.*?)&amp;', false);
      if (ytVideosAdaptiveFmts) ytVideosAdaptiveFmts = cleanMyContent(ytVideosAdaptiveFmts, true);
      ytVideosDashmpd = getMyContent(page.url, 'dashmpd=(.*?)&amp;', false);
      if (ytVideosDashmpd) ytVideosDashmpd = cleanMyContent(ytVideosDashmpd, true);
    }
    else {
      ytVideosEncodedFmts = getMyContent(page.url, '"url_encoded_fmt_stream_map":\\s+"(.*?)"', false);
      if (ytVideosEncodedFmts) ytVideosEncodedFmts = cleanMyContent(ytVideosEncodedFmts, false);
      ytVideosAdaptiveFmts = getMyContent(page.url, '"adaptive_fmts":\\s+"(.*?)"', false);
      if (ytVideosAdaptiveFmts) ytVideosAdaptiveFmts = cleanMyContent(ytVideosAdaptiveFmts, false);
      ytVideosDashmpd = getMyContent(page.url, '"dashmpd":\\s+"(.*?)"', false);
      if (ytVideosDashmpd) ytVideosDashmpd = cleanMyContent(ytVideosDashmpd, false);
    }
    if (ytVideosEncodedFmts) {
      ytVideosContent = ytVideosEncodedFmts;
    }
    if (ytVideosAdaptiveFmts) {
      if (ytVideosContent) ytVideosContent += ',' + ytVideosAdaptiveFmts;
      else ytVideosContent = ytVideosAdaptiveFmts;
    }
    var ytVideoDash = '';
    if (ytVideosDashmpd) {
      ytVideosDashmpd = ytVideosDashmpd.replace(/.*dash\//, '');
      if (ytVideosDashmpd) {
	var ytVideoDashParams = ytVideosDashmpd.split('/');      
	for (var i = 0; i < ytVideoDashParams.length; i++) {
	  if (i % 2) ytVideoDash += ytVideoDashParams[i] + '&';
	  else ytVideoDash += ytVideoDashParams[i] + '=';
	}
	ytVideoDash = ytVideoDash.replace(/&$/, '');
      }
    }
    
     /* Clean Player Window */
    var ytWatchPlayer = getMyElement ('', 'div', 'id', 'player-api', -1, false);
    if (ytWatchPlayer) cleanMyElement (ytWatchPlayer, true);

    /* Playlist Window */
    var ytPlaylistWindow = getMyElement ('', 'div', 'id', 'playlist-tray', -1, false);
    if (ytPlaylistWindow) {
      styleMyElement (ytPlaylistWindow, {width: '360px', position: 'absolute', margin: '0px 0px 0px 639px'});
    }
 
     /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '640px', height: '390px', backgroundColor: '#F4F4F4', zIndex: '99999'});
    if (ytFeatherBeta) {
      modifyMyElement (ytPlayerWindow, 'div', '', true);
      styleMyElement (ytPlayerWindow, {height: '100%'});
    }
    appendMyElement (ytPlayerWindow, myPlayerWindow);
    
    /* Get Videos */
    if (ytVideosContent) {
      var ytVideoFormats = {
	'5': 'Very Low Definition FLV',
	'17': 'Very Low Definition 3GP',
	'18': 'Low Definition MP4',
	'22': 'High Definition MP4',
	'34': 'Low Definition FLV',
	'35': 'Standard Definition FLV',
	'36': 'Low Definition 3GP',
	'37': 'Full High Definition MP4',
	'38': 'Ultra High Definition MP4',
	'43': 'Low Definition WebM',
	'44': 'Standard Definition WebM',
	'45': 'High Definition WebM',
	'46': 'Full High Definition WebM',
	'82': 'Low Definition 3D MP4',
	'83': 'Standard Definition 3D MP4',
	'84': 'High Definition 3D MP4',
	'85': 'Full High Definition 3D MP4',
	'100': 'Low Definition 3D WebM',
	'101': 'Standard Definition 3D WebM',
	'102': 'High Definition 3D WebM',
	'134': 'Low Definition Video MP4', 
	'135': 'Standard Definition Video MP4',
	'137': 'Full High Definition Video MP4',
	'138': 'Ultra High Definition Video MP4'
      };
      var ytVideoList = {};
      var ytVideoFound = false;
      var ytVideos = ytVideosContent.split(',');
      var ytVideoParse, ytVideoCodeParse, ytVideoCode, myVideoCode, ytVideo;
      for (var i = 0; i < ytVideos.length; i++) {
	if (!ytVideos[i].match(/^url/)) {
	  ytVideoParse = ytVideos[i].match(/(.*)(url=.*$)/);
	  if (ytVideoParse) ytVideos[i] = ytVideoParse[2] + '&' + ytVideoParse[1];
	}
	ytVideoCodeParse = ytVideos[i].match (/itag=(\d{1,3})/);
	ytVideoCode = (ytVideoCodeParse) ? ytVideoCodeParse[1] : null;
	if (ytVideoCode) {
	  myVideoCode = ytVideoFormats[ytVideoCode];
	  if (myVideoCode) {
	    ytVideo = ytVideos[i].replace (/url=/, '').replace(/&$/, '').replace(/&itag=\d{1,3}/, '');
	    if (ytVideo.match(/type=.*?&/)) ytVideo = ytVideo.replace(/type=.*?&/, '');
	    else ytVideo = ytVideo.replace(/&type=.*$/, '');
	    if (ytVideo.match(/&sig=/)) ytVideo = ytVideo.replace (/&sig=/, '&signature=');
	    else if (ytVideo.match(/&s=/)) {
	      var ytSig = ytVideo.match(/&s=(.*?)(&|$)/);
	      if (ytSig) {
		var s = ytSig[1].split('');
		s = s[38] + s.slice(59, 82).reverse().join('') + s[0] + s.slice(39, 58).reverse().join('') +
		    s[87] + s.slice(4, 38).reverse().join('') + s[1] + s[2];
		ytVideo = ytVideo.replace(/&s=.*?(&|$)/, '&signature=' + s + '$1');
	      }
	      else ytVideo = '';
	    }
	    ytVideo = cleanMyContent (ytVideo, true);
	    if (ytVideo && ytVideo.indexOf('http') == 0) {
	      if (!ytVideoFound) ytVideoFound = true;
	      ytVideoList[myVideoCode] = ytVideo;
	    }
	  }
	}
      }

      // Dash
      if (ytVideoDash) {
	if (ytVideoDash.match(/&sig=/)) ytVideoDash = ytVideoDash.replace(/&sig=/, '&signature=');
	else if (ytVideoDash.match(/&s=/)) {
	  var ytSig = ytVideoDash.match(/&s=(.*?)(&|$)/);
	  if (ytSig) {
	    var s = ytSig[1].split('');
	    s = s[38] + s.slice(59, 82).reverse().join('') + s[0] + s.slice(39, 58).reverse().join('') +
		s[87] + s.slice(4, 38).reverse().join('') + s[1] + s[2];
	    ytVideoDash = ytVideoDash.replace(/&s=.*?(&|$)/, '&signature=' + s + '$1');
	  }
	  else ytVideoDash = '';
	}
      }
      if (ytVideoDash) {
	if (ytVideoList['Low Definition Video MP4'] && !ytVideoList['Low Definition FLV']) {
	  var ytVideoDashStart = ytVideoList['Low Definition Video MP4'].match(/(.*videoplayback\?)/);
	  ytVideoDashStart = (ytVideoDashStart) ? ytVideoDashStart[1] :  null;
	  if (ytVideoDashStart) {
	    ytVideoList['Low Definition FLV'] = ytVideoDashStart + ytVideoDash + '&itag=34';
	  }
	}
	if (ytVideoList['Standard Definition Video MP4'] && !ytVideoList['Standard Definition FLV']) {
	  var ytVideoDashStart = ytVideoList['Standard Definition Video MP4'].match(/(.*videoplayback\?)/);
	  ytVideoDashStart = (ytVideoDashStart) ? ytVideoDashStart[1] :  null;
	  if (ytVideoDashStart) {
	    ytVideoList['Standard Definition FLV'] = ytVideoDashStart + ytVideoDash + '&itag=35';
	  }
	}
	if (ytVideoList['Full High Definition Video MP4'] && !ytVideoList['Full High Definition MP4']) {
	  var ytVideoDashStart = ytVideoList['Full High Definition Video MP4'].match(/(.*videoplayback\?)/);
	  ytVideoDashStart = (ytVideoDashStart) ? ytVideoDashStart[1] :  null;
	  if (ytVideoDashStart) {
	    ytVideoList['Full High Definition MP4'] = ytVideoDashStart + ytVideoDash + '&itag=37';
	  }
	}
	if (ytVideoList['Ultra High Definition Video MP4'] && !ytVideoList['Ultra High Definition MP4']) {
	  var ytVideoDashStart = ytVideoList['Ultra High Definition Video MP4'].match(/(.*videoplayback\?)/);
	  ytVideoDashStart = (ytVideoDashStart) ? ytVideoDashStart[1] :  null;
	  if (ytVideoDashStart) {
	    ytVideoList['Ultra High Definition MP4'] = ytVideoDashStart + ytVideoDash + '&itag=38';
	  }
	}
      }
      delete ytVideoList['Low Definition Video MP4'];
      delete ytVideoList['Standard Definition Video MP4'];
      delete ytVideoList['Full High Definition Video MP4'];
      delete ytVideoList['Ultra High Definition Video MP4'];
      
      if (ytVideoFound) {
	/* Get Watch Sidebar */
	var ytSidebarWindow = getMyElement ('', 'div', 'id', 'watch7-sidebar', -1, false);
	if (!ytSidebarWindow) ytSidebarWindow = getMyElement ('', 'div', 'id', 'rc', -1, false);

	/* Create Player */
	var ytDefaultVideo = 'Low Definition MP4';
	player = {
	  'playerSocket': ytPlayerWindow,
	  'playerWindow': myPlayerWindow,
	  'videoList': ytVideoList,
	  'videoPlay': ytDefaultVideo,
	  'videoThumb': ytVideoThumb,
	  'videoTitle': ytVideoTitle,
	  'playerWidth': 640,
	  'playerHeight': 390,
	  'playerWideWidth': 970,
	  'playerWideHeight': 510,
	  'sidebarWindow': ytSidebarWindow,
	  'sidebarMarginNormal': -390,
	  'sidebarMarginWide': 10
	};
	if (!ytSidebarWindow || page.url.indexOf('list=') != -1) feature['widesize'] = false;
	option['autoget'] = true;
	option['definitions'] = ['Ultra High Definition', 'Full High Definition', 'High Definition', 'Standard Definition', 'Low Definition', 'Very Low Definition'];
	option['containers'] = ['MP4', 'WebM', 'FLV', '3GP', 'Any'];
	createMyPlayer ();
      }
      else {
	if (ytVideosContent.indexOf('conn=rtmp') != -1) showMyMessage ('!support');
	else showMyMessage ('!videos');
      }
    }
    else {
      var ytVideoAvailable = getMyElement ('', 'div', 'id', 'player-unavailable', -1, false);
      if (ytVideoAvailable && ytVideoAvailable.className.indexOf('hid') == -1) removeMyElement(ytPlayerWindow, myPlayerWindow);
      else showMyMessage ('!content');
    }
  }
  
}

// =====DailyMotion===== //

else if (page.url.indexOf('dailymotion.com/video') != -1) {

  /* Get Player Window */
  var dmPlayerWindow = getMyElement ('', 'div', 'id', 'player_main', -1, false);
  if (!dmPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Get Video Thumbnail */
    var dmVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);

    /* Get Videos Content */
    var dmEmbed = page.url.replace(/\/video\//, "/embed/video/");
    dmVideosContent =  getMyContent (dmEmbed, 'info\\s+=\\s+\\{(.*?)\\}', false);

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '620px', height: '360px', backgroundColor: '#F4F4F4', zIndex: '99999'});
    modifyMyElement (dmPlayerWindow, 'div', '', true);
    styleMyElement (dmPlayerWindow, {height: '100%'});
    appendMyElement (dmPlayerWindow, myPlayerWindow);

    /* Get Videos */
    if (dmVideosContent) {
      var dmVideoFormats = {'stream_h264_hd1080_url': 'Full High Definition MP4', 'stream_h264_hd_url': 'High Definition MP4',
	  'stream_h264_hq_url': 'Standard Definition MP4', 'stream_h264_url': 'Low Definition MP4', 'stream_h264_ld_url': 'Very Low Definition MP4'};
      var dmVideoList = {};
      var dmVideoFound = false;
      var dmVideoParser, dmVideoParse, myVideoCode, dmVideo;
      for (var dmVideoCode in dmVideoFormats) {
	dmVideoParser = '"' + dmVideoCode + '":"(.*?)"';
	dmVideoParse = dmVideosContent.match (dmVideoParser);
	dmVideo = (dmVideoParse) ? dmVideoParse[1] : null;
	if (dmVideo) {
	  if (!dmVideoFound) dmVideoFound = true;
	  dmVideo = cleanMyContent(dmVideo, true);
	  myVideoCode = dmVideoFormats[dmVideoCode];
	  if (!dmVideoList[myVideoCode]) dmVideoList[myVideoCode] = dmVideo;
	}
      }

      if (dmVideoFound) {
	/* Get Watch Sidebar */
	var dmSidebarWindow = getMyElement ('', 'div', 'id', 'right_content_box', -1, false);
	
	/* Create Player */
	var dmDefaultVideo = 'Low Definition MP4';
	player = {
	  'playerSocket': dmPlayerWindow,
	  'playerWindow': myPlayerWindow,
	  'videoList': dmVideoList,
	  'videoPlay': dmDefaultVideo,
	  'videoThumb': dmVideoThumb,
	  'playerWidth': 620,
	  'playerHeight': 360,
	  'playerWideWidth': 940,
	  'playerWideHeight': 500,
	  'sidebarWindow': dmSidebarWindow,
	  'sidebarMarginNormal': (dmSidebarWindow && dmSidebarWindow.style.marginTop) ? -416 : 0,
	  'sidebarMarginWide': (dmSidebarWindow && dmSidebarWindow.style.marginTop) ? 10 : 520
	};
	feature['container'] = false;
	option['definitions'] = ['Full High Definition', 'High Definition', 'Standard Definition', 'Low Definition', 'Very Low Definition'];
	option['containers'] = ['MP4'];
	createMyPlayer ();
      }
      else {
	showMyMessage ('!videos');
      }
    }
    else {
      showMyMessage ('!content');
    }
  }
  
}

// =====Vimeo===== //

else if (page.url.match(/vimeo.com($|\/$|\/\d|\/page:\d)/)) {

  /* Get Player Window */
  var viPlayerWindow = getMyElement ('', 'div', 'class', 'player_container', 0, false);
  if (!viPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Get Video Thumbnail */
    var viVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);
    
    /* Get Content Source */
    var viVideoSource = getMyContent (page.url, 'data-config-url="(.*?)"', false).replace(/&amp;/g, '&');      
  
    /* Get Videos Content */
    var viVideosContent;
    if (viVideoSource) {
      viVideosContent = getMyContent(viVideoSource, '"h264":\\{(.*?)\\}\\}', false);
    }
    
    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '960px', height: '540px', backgroundColor: '#F4F4F4', zIndex: '99999'});
    modifyMyElement (viPlayerWindow, 'div', '', true);
    styleMyElement (viPlayerWindow, {height: '100%'});
    appendMyElement (viPlayerWindow, myPlayerWindow);
    
    /* Get Videos */
    if (viVideosContent) {
      var viVideoFormats = {'hd': 'High Definition MP4', 'sd': 'Low Definition MP4', 'mobile': 'Very Low Definition MP4'};
      var viVideoList = {};
      var viVideoFound = false;
      var viPattern, viMatcher, viVideo, myVideoCode;
      for (var viVideoCode in viVideoFormats) {
	viPattern = '"' + viVideoCode + '":\\{.*?"url":"(.*?)"';
	viMatcher = viVideosContent.match(viPattern);
	viVideo = (viMatcher) ? viMatcher[1] : null;
	if (viVideo) {
	  if (!viVideoFound) viVideoFound = true;
	  myVideoCode = viVideoFormats[viVideoCode];
	  viVideoList[myVideoCode] = viVideo;
	}
      }
            
      if (viVideoFound) {
	/* Create Player */
	var viDefaultVideo = 'Low Definition MP4';
	player = {'playerSocket': viPlayerWindow, 'playerWindow': myPlayerWindow, 'videoList': viVideoList, 'videoPlay': viDefaultVideo, 'videoThumb': viVideoThumb, 'playerWidth': 960, 'playerHeight': 540};
	feature['container'] = false;
	feature['widesize'] = false;
	option['definitions'] = ['High Definition', 'Low Definition', 'Very Low Definition'];
	option['containers'] = ['MP4'];
	createMyPlayer ();
      }
      else {
	showMyMessage ('!videos');
      }
    }
    else {
      showMyMessage ('!content');
    }
  }
  
}

// =====MetaCafe===== //

else if (page.url.indexOf('metacafe.com/watch') != -1) {

  /* Get Player Window */
  var mcPlayerWindow = getMyElement ('', 'div', 'id', 'FlashWrap', -1, false);
  if (!mcPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Check Video Availability */
    var mcVideoAvailable = getMyElement ('', 'div', 'id', 'FlashWrap', -1, true);
    if (mcVideoAvailable.indexOf('This Video cannot be played on this device.') != -1) return;
    
    /* Get Video Thumbnail */
    var mcVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);

    /* Get Videos Content */
    var mcVideosContent, mcVideoH5;
    var mcFlashVideo = getMyElement (mcPlayerWindow, 'embed', 'tag', '', 0, false) || getMyElement (mcPlayerWindow, 'object', 'tag', '', 0, false);
    if (mcFlashVideo) mcVideosContent = getMyContent (page.url, '"mediaData":"(.*?)"', false);
    else mcVideoH5 = getMyContent (page.url, 'video\\s+src="(.*?)"', false);

    /* Clean Player Window */
    cleanMyElement (mcPlayerWindow, false);

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '640px', height: '364px', backgroundColor: '#F4F4F4', zIndex: '99999'});
    styleMyElement (mcPlayerWindow, {height: '100%'});
    appendMyElement (mcPlayerWindow, myPlayerWindow);

    /* Get Videos */
    if (mcVideosContent || mcVideoH5) {
      var mcVideoList = {};
      var mcVideoFound = false;
      if (mcVideosContent) {
	mcVideosContent = cleanMyContent(mcVideosContent, true);
	var mcVideoFormats = {'highDefinitionMP4': 'High Definition MP4', 'MP4': 'Low Definition MP4', 'flv': 'Low Definition FLV'};
	var mcVideoParser, mcVideoParse, myVideoCode, mcVideoPath, mcVideoKey, mcVideo;
	for (var mcVideoCode in mcVideoFormats) {
	  mcVideoParser = '"' + mcVideoCode + '":\\{.*?"mediaURL":"(.*?)","access":\\[\\{"key":"(.*?)","value":"(.*?)"\\}\\]\\}';
	  mcVideoParse = mcVideosContent.match (mcVideoParser);
	  mcVideoPath = (mcVideoParse) ? mcVideoParse[1] : null;
	  mcVideoKeyName = (mcVideoParse) ? mcVideoParse[2] : null;
	  mcVideoKeyValue = (mcVideoParse) ? mcVideoParse[3] : null;
	  if (mcVideoPath && mcVideoKeyName && mcVideoKeyValue) {
	    if (!mcVideoFound) mcVideoFound = true;
	    myVideoCode = mcVideoFormats[mcVideoCode];
	    mcVideo = mcVideoPath + '?' + mcVideoKeyName + '=' + mcVideoKeyValue;
	    mcVideoList[myVideoCode] = mcVideo;
	  }
	}
      }
      else {
	mcVideoList['Low Definition MP4'] = mcVideoH5;
	mcVideoFound = true;
	feature['definition'] = false;
	feature['container'] = false;
      }
      
      if (mcVideoFound) {
	/* Get Watch Sidebar */
	var mcSidebarWindow = getMyElement ('', 'div', 'id', 'Sidebar', -1, false);
	
	/* Create Player */
	var mcDefaultVideo = (mcVideoList['Low Definition MP4']) ? 'Low Definition MP4' : 'Low Definition FLV';
	player = {
	  'playerSocket': mcPlayerWindow,
	  'playerWindow': myPlayerWindow,
	  'videoList': mcVideoList,
	  'videoPlay': mcDefaultVideo,
	  'videoThumb': mcVideoThumb,
	  'playerWidth': 640,
	  'playerHeight': 364,
	  'playerWideWidth': 960,
	  'playerWideHeight': 510,
	  'sidebarWindow': mcSidebarWindow,
	  'sidebarMarginNormal': 0,
	  'sidebarMarginWide': 520
	};
	option['definitions'] = ['High Definition', 'Low Definition'];
	option['containers'] = ['MP4', 'FLV', 'Any'];
	createMyPlayer ();
      }
      else {
	showMyMessage ('!videos');
      }
    }
    else {
      showMyMessage ('!content');
    }
  }
  
}

// =====Break===== //

else if (page.url.indexOf('break.com/video') != -1) {

  /* Get Player Window */
  var brPlayerWindow = getMyElement ('', 'div', 'id', 'video-player', -1, false);
  if (!brPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Get Video ID */
    var brVideoID = page.url.match(/(\d+)$/);
    brVideoID = (brVideoID) ? brVideoID[1] : null;

    /* Get Videos Content */
    var brHost = page.url.match(/(^.*?break.com)/);
    brHost = (brHost) ? brHost[1] : 'http://www.break.com';
    var brSource = brHost + '/embed/' + brVideoID;
    var brVideosContent = getMyContent (brSource, 'TEXT', false);

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '592px', height: '340px', backgroundColor: '#F4F4F4', zIndex: '99999'});
    modifyMyElement (brPlayerWindow, 'div', '', true);
    styleMyElement (brPlayerWindow, {height: '100%', overflow: 'visible'});
    appendMyElement (brPlayerWindow, myPlayerWindow);

    /* Get Videos */
    if (brVideosContent) {
      var brVideoList = {};
      var brVideoFormats = {};
      var brVideoFound = false;
      var brVideoPath, brVideoToken, brVideoThumb, brVideo, brCodeCheck, myVideoCode;
      brVideoPath = brVideosContent.match (/"videoUri":\s"(.*?)"/);
      brVideoPath = (brVideoPath) ? brVideoPath[1] : null;
      if (brVideoPath) {
	if (brVideoPath.match(/.wmv$/)) {
	  brVideoFormats = {'.flv': 'Low Definition FLV', '.mp4': 'Low Definition MP4'};
	  brVideoPath = brVideoPath.replace(/.wmv$/, '');
	}
	else if (brVideoPath.match(/.flv$/)) {
	  brVideoFormats = {'6.mp4': 'Very Low Definition MP4', '1.flv': 'Low Definition FLV', '1.mp4': 'Low Definition MP4', '2.mp4': 'Standard Definition MP4', '3.mp4': 'High Definition MP4'};
	  brVideoPath = brVideoPath.replace(/1.flv$/, '');
	}
	else if (brVideoPath.match(/.mp4$/)) {
	  brVideoFormats = {'240.mp4': 'Very Low Definition MP4', '360.mp4': 'Low Definition MP4', '480.mp4': 'Standard Definition MP4', '720.mp4': 'High Definition MP4',};
	  brVideoPath = brVideoPath.replace(/360.mp4$/, '');
	}
	else brVideoPath = null;
      }
      brVideoToken = brVideosContent.match (/"AuthToken":\s"(.*?)"/);
      brVideoToken = (brVideoToken) ? brVideoToken[1] : null;
      brVideoThumb = brVideosContent.match (/"thumbUri":\s"(.*?)"/);
      brVideoThumb = (brVideoThumb) ? brVideoThumb[1] : null;
      if (brVideoPath && brVideoToken) {
	for (var brVideoCode in brVideoFormats) {
	  brCodeCheck = brVideoCode.replace(/\.(flv|mp4)$/, '');
	  if (brVideosContent.match(brVideoPath + brCodeCheck)) {
	    if (!brVideoFound) brVideoFound = true;
	    myVideoCode = brVideoFormats[brVideoCode];
	    brVideo = brVideoPath + brVideoCode + '?' + brVideoToken;
	    brVideoList[myVideoCode] = brVideo;
	  }
	}
      }
      
      if (brVideoFound) {
	/* Get Watch Sidebar */
	var brSidebarWindow = getMyElement ('', 'aside', 'class', 'sidebar', 0, false);

	/* Create Player */
	var brDefaultVideo = 'Low Definition MP4';
	var brWindowWidth = page.win.innerWidth || page.doc.documentElement.clientWidth;
	var brPlayerWidth, brPlayerHeight;
	if (brWindowWidth > 1400) {
	  brPlayerWidth = 832;
	  brPlayerHeight = 480;
	}
	else {
	  brPlayerWidth = 592;
	  brPlayerHeight = 340;
	}
	player = {
	  'playerSocket': brPlayerWindow,
	  'playerWindow': myPlayerWindow,
	  'videoList': brVideoList,
	  'videoPlay': brDefaultVideo,
	  'videoThumb': brVideoThumb,
	  'playerWidth': brPlayerWidth,
	  'playerHeight': brPlayerHeight,
	  'playerWideWidth': 910,
	  'playerWideHeight': 510,
	  'sidebarWindow': brSidebarWindow,
	  'sidebarMarginNormal': 10,
	  'sidebarMarginWide': 610
	};
	if (brWindowWidth > 1400) feature['widesize'] = false;
	option['definitions'] = ['Very Low Definition', 'Low Definition', 'Standard Definition', 'High Definition'];
	option['containers'] = ['MP4', 'FLV', 'Any'];
	createMyPlayer ();
      }
      else {
	var ytVideoId =  brVideosContent.match (/"youtubeId":\s"(.*?)"/);
	if (ytVideoId) {
	  var ytVideoLink = 'http://youtube.com/watch?v=' + ytVideoId[1];
	  showMyMessage ('embed', ytVideoLink);
	}
	else {
	showMyMessage ('!videos');
	}
      }
    }
    else {
      showMyMessage ('!content');
    }
  }
  
}

// =====FunnyOrDie===== //

else if (page.url.indexOf('funnyordie.com/videos') != -1) {

  /* Get Player Window */
  var fodPlayerWindow = getMyElement ('', 'div', 'id', 'player-container', -1, false);
  if (!fodPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Get Video Thumbnail */
    var fodVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);
    if (fodVideoThumb) fodVideoThumb = fodVideoThumb.replace (/large/, 'fullsize');

    /* Get Videos Content */
    var fodVideosContent = getMyContent (page.url, '<video([\\s\\S]*?)video>', false);

    /* Clean Player Window */
    var fodPlayerContainer = getMyElement ('', 'div', 'id', 'videoContainer', -1, false);
    if (fodPlayerContainer) cleanMyElement (fodPlayerContainer, true);

    /* Restyle Page Header */ 
    var fodPageHeader = getMyElement ('', 'div', 'id', 'page-header', -1, false);
    if (fodPageHeader) styleMyElement (fodPageHeader, {zIndex: '1'});

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '970px', height: '560px', backgroundColor: '#F4F4F4', zIndex: '99999', margin: '0px auto'});
    appendMyElement (fodPlayerWindow, myPlayerWindow);
    
    /* Get Videos */
    if (fodVideosContent) {
      var fodVideoFormats = {'v2500.mp4': 'High Definition MP4', 'v1800.mp4': 'Standard Definition MP4', 'v600.mp4': 'Low Definition MP4', 'v600.webm': 'Low Definition WebM', 'v110.mp4': 'Very Low Definition MP4'};
      var fodVideoList = {};
      var fodVideoFound = false;
      var fodVideoPath, fodVideoCodes, fodVideo, myVideoCode;
      fodVideoPath = fodVideosContent.match(/src="(.*?)v\d+.mp4"/);
      fodVideoPath = (fodVideoPath) ? fodVideoPath[1] : null;
      fodVideoCodes = fodVideosContent.match (/v,(.*?),\./);
      fodVideoCodes = (fodVideoCodes) ? fodVideoCodes[1] : '';
      if (fodVideoPath && fodVideoCodes) {
	for (var fodVideoCode in fodVideoFormats) {
	  if (fodVideoCodes.indexOf(fodVideoCode.replace(/v/, '').replace(/\..*/, "")) != -1) {
	    if (!fodVideoFound) fodVideoFound = true;
	    fodVideo = fodVideoPath + fodVideoCode;
	    myVideoCode = fodVideoFormats[fodVideoCode];
	    fodVideoList[myVideoCode] = fodVideo;
	  }
	}
      }
      else {
	fodVideoPath = fodVideosContent.match(/href="(.*?)v\d+.mp4"/);
	fodVideoPath = (fodVideoPath) ? fodVideoPath[1] : null;
	if (fodVideoPath) {
	  if (!fodVideoFound) fodVideoFound = true;	  
	  for (var fodVideoCode in fodVideoFormats) {
	    fodVideo = fodVideoPath + fodVideoCode;
	    myVideoCode = fodVideoFormats[fodVideoCode];
	    fodVideoList[myVideoCode] = fodVideo;
	  }
	}
      }

      if (fodVideoFound) {
	/* Create Player */
	fodDefaultVideo = 'Low Definition MP4';
	player = {
	  'playerSocket': fodPlayerWindow,
	  'playerWindow': myPlayerWindow,
	  'videoList': fodVideoList,
	  'videoPlay': fodDefaultVideo,
	  'videoThumb': fodVideoThumb,
	  'playerWidth': 970,
	  'playerHeight': 560
	};
	feature['container'] = false;
	option['definitions'] = ['High Definition', 'Low Definition'];
	option['containers'] = ['MP4'];
	createMyPlayer ();
      }
      else {
	showMyMessage ('!videos');
      }
    }
    else {
      showMyMessage ('!content');
    } 
  }
  
}

// =====Videojug===== //

else if (page.url.indexOf('videojug.com/film') != -1) {

  /* Get Player Window */
  var vjPlayerWindow = getMyElement ('', 'div', 'id', 'player', -1, false);
  if (!vjPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Get Videos Content */
    var vjVideosContent = getMyContent (page.url, 'new\\s+Player\\((.*?)\\)', true);

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '640px', height: '380px', backgroundColor: '#F4F4F4', zIndex: '99999'});
    modifyMyElement (vjPlayerWindow, 'div', '', true);
    styleMyElement (vjPlayerWindow, {height: '100%', backgroundColor: '#FFFFFF'});
    appendMyElement (vjPlayerWindow, myPlayerWindow);

    /* Get Videos */
    if (vjVideosContent) {
      vjVideosContent = vjVideosContent.replace(/'/g, '').replace(/\s/g, '');
      var vjVideosParts = vjVideosContent.split(',');
      var vjVideoToken = vjVideosParts[3];
      var vjVideoToken2 = vjVideoToken.substring(0,2);
      var vjVideoTitle = vjVideosParts[7];
      var vjVideoFormats = {'VJ480PENG.mp4': 'Standard Definition MP4', 'VJ360PENG.mp4': 'Low Definition MP4', 'PHOENG.mp4': 'Very Low Definition MP4', 'FW8ENG.flv': 'Low Definition FLV', 'FS8ENG.flv': 'Very Low Definition FLV'};
      var vjVideoList = {};
      var vjVideoFound = false;
      var vjVideoPart, vjVideoHost, myVideoCode, vjVideo, vjVideoThumb;
      if (vjVideoToken && vjVideoTitle) {
	vjVideoFound = true;
	vjVideoPart = vjVideoToken2 + '/' + vjVideoToken + '/' + vjVideoTitle;
	for (var vjVideoCode in vjVideoFormats) {
	  if (vjVideoCode == 'FS8ENG.flv') vjVideoHost = 'http://content.videojug.com/';
	  else vjVideoHost = 'http://content3.videojug.com/';
	  vjVideo =  vjVideoHost + vjVideoPart + '__' + vjVideoCode;
	  myVideoCode = vjVideoFormats[vjVideoCode];
	  vjVideoList[myVideoCode] = vjVideo;
	}
	vjVideoHost = 'http://content5.videojug.com/';
	vjVideoThumb =  vjVideoHost + vjVideoPart + '.WidePlayer.jpg';
      }
      
      if (vjVideoFound) {
	/* Get Watch Sidebar */
	var vjSidebarWindow = getMyElement ('', 'div', 'id', 'recommended_content', -1, false);
	
	/* Create Player */
	var vjDefaultVideo = 'Low Definition MP4';
	player = {
	  'playerSocket': vjPlayerWindow,
	  'playerWindow': myPlayerWindow,
	  'videoList': vjVideoList,
	  'videoPlay': vjDefaultVideo,
	  'videoThumb': vjVideoThumb,
	  'playerWidth': 640,
	  'playerHeight': 380,
	  'playerWideWidth': 970,
	  'playerWideHeight': 510,
	  'sidebarWindow': vjSidebarWindow,
	  'sidebarMarginNormal': 5,
	  'sidebarMarginWide': 620
	};
	option['definition'] = 'SD';
	option['definitions'] = ['Standard Definition', 'Low Definition', 'Very Low Definition'];
	option['containers'] = ['MP4', 'FLV', 'Any'];
	createMyPlayer ();
      }
      else {
	showMyMessage ('!videos');
      }
    }
    else {
      showMyMessage ('!content');
    }
  }
  
}

// =====Mevio===== //

else if (page.url.indexOf('mevio.com') != -1) {

  /* Get Player Window */
  var mePlayerWindow = getMyElement ('', 'div', 'id', 'player-zone', -1, false);
  if (!mePlayerWindow) {
      //showMyMessage ('!player');
  }
  else {
    /* Get Data Content */
    var meDataContent = getMyContent (page.url, 'args.default_media\\s+=\\s+\\{(.*?)\\};', false);
    meDataContent = cleanMyContent (meDataContent, true);

    /* Get Video Thumbnail */
    var meVideoThumb = meDataContent.match(/"large":"(.*?)"/);
    meVideoThumb = (meVideoThumb) ? meVideoThumb[1] : null;

    /* Get Videos Content */
    var meVideosContent = meDataContent.match(/"media_urls":\{(.*?)\}/);
    meVideosContent = (meVideosContent) ? meVideosContent[1] : null;

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '915px', height: '480px', margin: '0px auto', backgroundColor: '#F4F4F4', zIndex: '99999'});
    modifyMyElement (mePlayerWindow, 'div', '', true);
    styleMyElement (mePlayerWindow, {backgroundImage: 'none !important', backgroundColor: '#656665 !important'});
    appendMyElement(mePlayerWindow, myPlayerWindow);

    /* Get Videos */
    if (meVideosContent) {
      var meVideoFormats = {'mp4': 'High Definition MP4', 'm4v': 'High Definition M4V',  'mov': 'High Definition MOV', 'h264': 'Low Definition MP4', 'flv': 'Low Definition FLV'};
      var meVideoList = {};
      var meVideoFound = false;
      var meVideoParser, meVideoParse, meVideo, myVideoCode;
      for (var meVideoCode in meVideoFormats) {
	meVideoParser = meVideoCode + '":"(.*?)"';
	meVideoParse = meVideosContent.match (meVideoParser);
	meVideo = (meVideoParse) ? meVideoParse[1] : null;
	if (meVideo) {
	  if (!meVideoFound) meVideoFound = true;
	  myVideoCode = meVideoFormats[meVideoCode];
	  meVideoList[myVideoCode] = meVideo;
	}
      }

      if (meVideoFound) {
	/* Create Player */
	var meDefaultVideo = 'Low Definition FLV';
	player = {'playerSocket': mePlayerWindow, 'playerWindow': myPlayerWindow, 'videoList': meVideoList, 'videoPlay': meDefaultVideo, 'videoThumb': meVideoThumb, 'playerWidth': 915, 'playerHeight': 480};
	feature['widesize'] = false;
	option['definitions'] = ['High Definition', 'Low Definition'];
	option['containers'] = ['MP4', 'M4V', 'MOV', 'FLV', 'Any'];
	createMyPlayer ();
      }
      else {
	showMyMessage ('!videos');
      }
    }
    else {
      showMyMessage ('!content');
    }
  }
  
}

// =====Blip===== //

else if (page.url.indexOf('blip.tv') != -1) {

  /* Get Page Type */
  var blipPageType = getMyContent (page.url, 'meta\\s+property="og:type"\\s+content="(.*?)"', false);
  if (!blipPageType || blipPageType != 'video.episode') return;

  /* Get Player Window */
  var blipPlayerWidth, blipPlayerHeight;
  var blipPlayerWindow = getMyElement ('', 'div', 'class', 'EpisodePlayer', 0, false) || getMyElement ('', 'div', 'id', 'ErrorWrap', -1, false);
  if (!blipPlayerWindow) {
    blipPlayerWindow = getMyElement ('', 'div', 'id', 'PlayerEmbed', -1, false);
    blipPlayerWidth = 596;
    blipPlayerHeight = 334;
  }
  else {
    blipPlayerWidth = 960;
    blipPlayerHeight = 540;
  }
  if (!blipPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Get Video Thumbnail */
    var blipVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);

    /* Get Videos Content */
    var blipVideosContent = getMyContent(page.url + '?skin=json', '"additionalMedia":\\[(.*?)\\]', false);

    /* My Player Window */    
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: blipPlayerWidth + 'px', height: blipPlayerHeight + 'px', backgroundColor: '#F4F4F4', zIndex: '99999'});
    modifyMyElement (blipPlayerWindow, 'div', '', true);
    styleMyElement (blipPlayerWindow, {paddingTop: '0px'});
    appendMyElement (blipPlayerWindow, myPlayerWindow);

    /* Get Videos */
    if (blipVideosContent) {
      var blipVideoList = {};
      var blipVideoFound = false;
      var blipMimeTypes = {'video/x-m4v': 'M4V', 'video/quicktime': 'MOV', 'video/mp4': 'MP4', 'video/x-flv': 'FLV'};
      var blipVideos = blipVideosContent.split(',{');
      var blipVideoURL, blipVideoMime, blipVideoHeight, blipVideoRole, blipVideoDef, blipVideoCode;
      var blipDefaultVideo = 'Low Definition MP4';
      for (var blipV = 0; blipV < blipVideos.length; blipV++) {
	blipVideoMime = blipVideos[blipV].match(/"primary_mime_type":"(.*?)"/);
	blipVideoMime = (blipVideoMime) ? blipVideoMime[1] : null;
	if (blipMimeTypes[blipVideoMime]) {
	  blipVideoURL = blipVideos[blipV].match(/"url":"(.*?)"/);
	  blipVideoURL = (blipVideoURL) ? blipVideoURL[1] : null;
	  blipVideoHeight = blipVideos[blipV].match(/"media_height":"(.*?)"/);
	  blipVideoHeight = (blipVideoHeight) ? blipVideoHeight[1] : null;
	  blipVideoRole = blipVideos[blipV].match(/"role":"(.*?)"/);
	  blipVideoRole = (blipVideoRole) ? blipVideoRole[1] : null;
	  if (blipVideoURL && blipVideoHeight && blipVideoRole) {
	    if (!blipVideoFound) blipVideoFound = true;
	    if (blipVideoHeight >= 200 && blipVideoHeight < 400) blipVideoDef = 'Low Definition';
	    else if (blipVideoHeight >= 400 && blipVideoHeight < 700) blipVideoDef = 'Standard Definition';
	    else if (blipVideoHeight >= 700) blipVideoDef = 'High Definition';
	    blipVideoCode = blipVideoDef + ' ' + blipMimeTypes[blipVideoMime];
	    blipVideoList[blipVideoCode] = blipVideoURL;
	    if (blipVideoRole == 'Source') blipDefaultVideo = blipVideoCode;
	  }
	}
      }

      if (blipVideoFound) {
	/* Create Player */
	player = {'playerSocket': blipPlayerWindow, 'playerWindow': myPlayerWindow, 'videoList': blipVideoList, 'videoPlay': blipDefaultVideo, 'videoThumb': blipVideoThumb, 'playerWidth': blipPlayerWidth, 'playerHeight': blipPlayerHeight};
	feature['widesize'] = false;
	option['definitions'] = ['High Definition', 'Standard Definition', 'Low Definition'];
	option['containers'] = ['MP4', 'M4V', 'MOV', 'FLV', 'Any'];
	createMyPlayer ();
      }
      else {
	showMyMessage ('!videos');
      }
    }
    else {
      showMyMessage ('!content');
    }
  }
  
}

// =====Veoh===== //

else if (page.url.indexOf('veoh.com/watch') != -1) {

  /* Get Video Availability */
  if (getMyElement ('', 'div', 'class', 'veoh-video-player-error', 0, false)) return;
 
  /* Get Player Window */
  var veVideoContainer = getMyElement ('', 'div', 'id', 'videoContainer', -1, false);
  var veVideoPlayer = getMyElement ('', 'div', 'id', 'videoPlayerContainer', -1, false);
  if (!veVideoContainer || !veVideoPlayer) {
    showMyMessage ('!player');
  }
  else {
    /* Get Videos Content */
    var veVideosContent = getMyContent (page.url, '__watch.videoDetailsJSON = \'\\{(.*?)\\}', false);
    veVideosContent = cleanMyContent (veVideosContent, true);
    
    /* Get Video Thumbnail */
    var veVideoThumbGet = veVideosContent.match (/"highResImage":"(.*?)"/);
    var veVideoThumb = (veVideoThumbGet) ? veVideoThumbGet[1] : null;

    /* New Player Socket */
    var vePlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (vePlayerWindow, {height: '100%', margin: '0px 0px 20px 0px'});
    replaceMyElement (veVideoContainer, vePlayerWindow, veVideoPlayer);
    
    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '640px', height: '400px', backgroundColor: '#F4F4F4', zIndex: '99999'});
    appendMyElement (vePlayerWindow, myPlayerWindow);

    /* Get Videos */
    if (veVideosContent) {
      var veVideoFormats = {'fullPreviewHashLowPath': 'Very Low Definition MP4', 'fullPreviewHashHighPath': 'Low Definition MP4'};
      var veVideoList = {};
      var veVideoFound = false;
      var veVideoParser, veVideoParse, veVideo, myVideoCode;
      for (var veVideoCode in veVideoFormats) {
	veVideoParser = veVideoCode + '":"(.*?)"';
	veVideoParse = veVideosContent.match (veVideoParser);
	veVideo = (veVideoParse) ? veVideoParse[1] : null;
	if (veVideo) {
	  if (!veVideoFound) veVideoFound = true;
	  myVideoCode = veVideoFormats[veVideoCode];
	  veVideoList[myVideoCode] = veVideo;
	}
      }

      if (veVideoFound) {
	/* Get Watch Sidebar */
	var veSidebarWindow = getMyElement ('', 'div', 'id', 'videoToolsContainer', -1, false);

	/* Create Player */
	var veDefaultVideo = 'Low Definition MP4';
	player = {
	  'playerSocket': vePlayerWindow,
	  'playerWindow': myPlayerWindow,
	  'videoList': veVideoList,
	  'videoPlay': veDefaultVideo,
	  'videoThumb': veVideoThumb,
	  'playerWidth': 640,
	  'playerHeight': 400,
	  'playerWideWidth': 970,
	  'playerWideHeight': 510,
	  'sidebarWindow': veSidebarWindow,
	  'sidebarMarginNormal': 0,
	  'sidebarMarginWide': 530
	};
	feature['container'] = false;
	option['definition'] = 'LD';
	option['definitions'] = ['Low Definition', 'Very Low Definition'];
	option['containers'] = ['MP4'];
	createMyPlayer ();
      }
      else {
	var veVideoSource = getMyContent(page.url, '"videoContentSource":"(.*?)"', false);
	if (veVideoSource == 'YouTube') var ytVideoId = getMyContent(page.url, '"videoId":"yapi-(.*?)"', false);
	if (ytVideoId) {
	  var ytVideoLink = 'http://youtube.com/watch?v=' + ytVideoId;
	  showMyMessage ('embed', ytVideoLink);
	}
	else {
	  showMyMessage ('!videos');
	}
      }
    }
    else {
      showMyMessage ('!content');
    }
  }
  
}

// =====VeeHD===== //

else if (page.url.indexOf('veehd.com/video/') != -1) {

  /* Get Player Window */
  var veePlayerWindow = getMyElement ('', 'div', 'class', 'videoHolder', 0, false);
  if (!veePlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Get Video Thumb */
    var veeVideoThumb = getMyContent (page.url, 'img\\s+id="veehdpreview"\\s+src="(.*?)"', false);
    
    /* Get Videos Content */
    var veeVideosContent = getMyContent (page.url, '"(\/vpi\\?h=.*?)"', false);
    
    /* My Player Window */ 
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '990px', height: '480px', backgroundColor: '#F4F4F4', zIndex: '99999'});
    modifyMyElement (veePlayerWindow, 'div', '', true);
    styleMyElement (veePlayerWindow, {height: '100%'});
    appendMyElement (veePlayerWindow, myPlayerWindow);

    /* Get Videos */
    if (veeVideosContent) {
      var veeVideoList = {};
      var veeVideoFound = false;
      var veeVideoType = getMyContent (page.url, 'type:\\s+(.*?)<', false);
      var veeVideo, veeVideoContainer, veeVideoSize, veeVideoDefinition, veeDefaultVideo;
      if (veeVideoType == 'divx') {
	veeVideo = getMyContent (veeVideosContent, 'param\\s+name="src"\\s+value="(.*?)"', true);
	veeVideoContainer = 'AVI';
      }
      else {
	veeVideo = getMyContent (veeVideosContent, '"url":"(.*?)"', true);
	veeVideoContainer = 'MP4';
      }
      veeVideoSize = getMyContent (page.url, 'resolution:.*?x(.*?)<', false);
      veeVideoDefinition = 'Low Definition';
      if (veeVideoSize > 400) veeVideoDefinition = 'Standard Definition';
      if (veeVideoSize > 700) veeVideoDefinition = 'High Definition';
      if (veeVideoSize > 1000) veeVideoDefinition = 'Full High Definition';
      veeDefaultVideo = veeVideoDefinition + ' ' + veeVideoContainer;
      if (veeVideo) {
	if (!veeVideoFound) veeVideoFound = true;
	veeVideoList[veeDefaultVideo] = veeVideo;
      }
      
      if (veeVideoFound) {
	/* Create Player */
	player = {'playerSocket': veePlayerWindow, 'playerWindow': myPlayerWindow, 'videoList': veeVideoList, 'videoPlay': veeDefaultVideo, 'videoThumb': veeVideoThumb, 'playerWidth': 990, 'playerHeight': 480};
	feature['definition'] = false;
	feature['container'] = false;
	feature['widesize'] = false;
	option['definitions'] = [veeVideoDefinition];
	option['containers'] = ['MP4', 'AVI', 'Any'];
	createMyPlayer ();
      }
      else {
	showMyMessage ('!videos');
      }
    }
    else {
      showMyMessage ('!content');
    }
  }
  
}

// =====IMDB===== //

else if (page.url.indexOf('imdb.com/video/') != -1) {

  /* Get Player Window */
  var imdbPlayerWindow = getMyElement ('', 'div', 'id', 'player-article', -1, false);
  if (!imdbPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* My Player Window */ 
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '640px', height: '390px', backgroundColor: '#F4F4F4', zIndex: '99999'});
    modifyMyElement (imdbPlayerWindow, 'div', '', true);
    appendMyElement (imdbPlayerWindow, myPlayerWindow);

    /* Get Videos Content */
    var imdbVideoList = {};
    var imdbVideoFormats = {'1': 'Low Definition MP4', '2': 'Standard Definition MP4', '3': 'High Definition MP4'};
    var imdbVideoThumb, imdbDefaultVideo, imdbURL, imdbVideo, myVideoCode;
    var imdbVideoFound = false;
    var imdbVideoRTMP = false;
    var imdbPageURL = page.url.replace(/\\?.*$/, '');
    for (var imdbVideoCode in imdbVideoFormats) {
      imdbURL = imdbPageURL + 'player?uff=' + imdbVideoCode;
      imdbVideo = getMyContent (imdbURL, 'so.addVariable\\("file",\\s+"(.*?)"\\);', true);
      if (!imdbVideoThumb) imdbVideoThumb = getMyContent (imdbURL, 'so.addVariable\\("image",\\s+"(.*?)"\\);', true);
      if (imdbVideo) {
	if (imdbVideo.indexOf('rtmp') != -1) {
	  if (!imdbVideoRTMP) imdbVideoRTMP = true;
	}
	else {
	  if (!imdbVideoFound) imdbVideoFound = true;
	  myVideoCode = imdbVideoFormats[imdbVideoCode];
	  imdbVideoList[myVideoCode] = imdbVideo;
	  if (!imdbDefaultVideo) imdbDefaultVideo = myVideoCode;
	}
      }
    }

    if (imdbVideoFound) {
      /* Get Watch Sidebar */
      var imdbSidebarWindow = getMyElement ('', 'div', 'id', 'sidebar', -1, false);
      
      /* Create Player */
      player = {
	'playerSocket': imdbPlayerWindow,
	'playerWindow': myPlayerWindow,
	'videoList': imdbVideoList,
	'videoPlay': imdbDefaultVideo,
	'videoThumb': imdbVideoThumb,
	'playerWidth': 640,
	'playerHeight': 390,
	'playerWideWidth': 970,
	'playerWideHeight': 510,
	'sidebarWindow': imdbSidebarWindow,
	'sidebarMarginNormal': 0,
	'sidebarMarginWide': 530
      };
      feature['container'] = false;
      option['definitions'] = ['High Definition', 'Standard Definition', 'Low Definition'];
      option['containers'] = ['MP4'];
      createMyPlayer ();
    }
    else {
      if (imdbVideoRTMP) showMyMessage ('!support');
      else showMyMessage ('!videos');
    }
  }
  
}

// =====Crackle===== //

else if (page.url.indexOf('crackle.com/') != -1) {
  
  /* Get Page Type */
  var crPageType = getMyContent (page.url, 'meta\\s+property="og:type"\\s+content="(.*?)"', false);
  if (!crPageType || crPageType.indexOf('video') == -1) return;
 
  /* Get Player Window */
  var crPlayerWindow = getMyElement ('', 'div', 'id', 'main', -1, false);
  if (!crPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Get Video ID */
    var crVideoID = getMyContent (page.url, 'StartPlayer\\s+\\((.*?),', false);
    
    /* Get Videos Content */
    var crVideoPath = getMyContent (page.url, 'images-us-am.crackle.com\/(.*?_)tnl', false);
    if (!crVideoPath) {
      var crHost = page.url.match(/(^.*?crackle.com)/);
      crHost = (crHost) ? crHost[1] : 'http://www.crackle.com';
      var crVidWallCache = crHost + '/app/vidwallcache.aspx?flags=-1&fm=' + crVideoID + '&partner=20';
      crVideoPath = getMyContent (crVidWallCache, '\\sp="(.*?)"', false);
    }
    
    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '970px', height: '490px', backgroundColor: '#F4F4F4', zIndex: '99999'});
    modifyMyElement (crPlayerWindow, 'div', '', true);
    styleMyElement (crPlayerWindow, {width: '970px', height: '490px', backgroundColor: '#FFFFFF'});
    appendMyElement (crPlayerWindow, myPlayerWindow);
    
    /* Get Videos */
    if (crVideoPath) {
      var crVideoList = {};
      var crVideoFormats = {'360p.mp4': 'Low Definition MP4', '480p.mp4': 'Standard Definition MP4'};
      var crVideoThumb, crVideo, myVideoCode;
      for (var crVideoCode in crVideoFormats) {
	crVideo = 'http://media-us-am.crackle.com/' + crVideoPath + crVideoCode;
	myVideoCode = crVideoFormats[crVideoCode];
	crVideoList[myVideoCode] = crVideo;
      }
      crVideoThumb = 'http://images-us-am.crackle.com/' + crVideoPath + 'tnl.jpg';

      /* Create Player */
      var crDefaultVideo = 'Low Definition MP4';
      player = {
	'playerSocket': crPlayerWindow,
	'playerWindow': myPlayerWindow,
	'videoList': crVideoList,
	'videoPlay': crDefaultVideo,
	'videoThumb': crVideoThumb,
	'playerWidth': 970,
	'playerHeight': 490,
      };
      feature['container'] = false;
      feature['widesize'] = false;
      option['definition'] = 'SD';
      option['definitions'] = ['Standard Definition', 'Low Definition'];
      option['containers'] = ['MP4'];
      createMyPlayer ();
      
      /* Fix Thumbnails */
      var crThumbs = getMyElement('', 'div', 'class', 'thumbnail', -1, false);
      for (var crT = 0; crT < crThumbs.length; crT++) {
	if (crThumbs[crT].innerHTML.indexOf('updateWatchPage') != -1) {
	  var crLink = crThumbs[crT].innerHTML.match(/,\s+\d+,\s+'(.*?)'/);
	  crLink = (crLink) ? crLink[1] : null;
	  var crImg = crThumbs[crT].innerHTML.match(/src="(.*?)"/);
	  crImg = (crImg) ? crImg[1] : null;
	  crThumbs[crT].innerHTML = '<img src="' + crImg + '" onclick="window.location.href=\'' + crLink + '\'" style="cursor:pointer">';
	}
      }
    }
    else {
      showMyMessage ('!videos');
    }
    
  }

}


})();
