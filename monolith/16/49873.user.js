// ==UserScript==
// @name           Army Emoticons [Emoplurk Add-On]
// @namespace      http://userscripts.org/users/74432
// @description    Smilies Set for ËMOPLURK 2.0
// @version        1
// @include        http://www.plurk.com/*
// @include        http://beinghacked.blogspot.com/*
// ==/UserScript==

var smilies = '';
/* Smilies definition begins ====================== */

smilies += '<a title="AR" href="http://s194.photobucket.com/albums/z4/uchari/ar/">001.gif,002.gif,003.gif,004.gif,005.gif,006.gif,007.gif,008.gif,009.gif,010.gif,011.gif,012.gif</a>';

/* Smilies definition ends ====================== */

/* Initialize */
var smilies_holder = document.createElement('div');
smilies_holder.id = 'smilies_holder';
smilies_holder.style.display = 'none';

if (!document.getElementById('smilies_holder')) {
  document.documentElement.appendChild(smilies_holder);
} 
smilies_holder = document.getElementById('smilies_holder');

/* Put the smilies holder */
var container = document.createElement('p')
container.innerHTML = smilies;
smilies_holder.appendChild(container);