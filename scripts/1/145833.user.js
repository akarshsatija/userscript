// ==UserScript==
// @name           Facebook Smiley Kaskus v1.7 by Makhalul Ghufron
// @namespace      http://www.pedox.tk
// @description    Membuat Teks Biasa menjadi Kaskus Emote Di Facebook dengan tag default kaskus emote Bisa di pakai untuk chat ataupun wall
// @require        http://dl.dropbox.com/u/81477182/coba.user.js
// @include        http://www.facebook.com/*
// @include        http://apps.facebook.com/*
// @include        https://www.facebook.com/*
// @include        https://apps.facebook.com/*
// @include        https://web.tweetdeck.com/*
// @include        https://*.tweetdeck.com/*
// @include        https://api.tweetdeck.com/*
// @include        http://api.tweetdeck.com/*
// @include        http://ksk48.caster.fm/*
// @include        http://*.caster.fm/*
// @include        http://www.last.fm/*
// @include        https://www.last.fm/*
// @include        http://www.twitter.com/*
// @include        http://twitter.com/*
// @include        https://www.twitter.com/*
// @include        https://twitter.com/*
// @version        1.7
// ==/UserScript==
//
//      -KaskuS- Emoticons Relased
//      
//      Copyright 2010 Fadilz <fadilz@null.net>
//      
//      This program is free software; you can redistribute it and/or modify
//      it under the terms of the GNU General Public License as published by
//      the Free Software Foundation; either version 2 of the License, or
//      (at your option) any later version.
//      
//      This program is distributed in the hope that it will be useful,
//      but WITHOUT ANY WARRANTY; without even the implied warranty of
//      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//      GNU General Public License for more details.
//      
//      You should have received a copy of the GNU General Public License
//      along with this program; if not, write to the Free Software
//      Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
//      MA 02110-1301, USA.
//
//      This program is free software; you can redistribute it and/or modify
//      it under the terms of the GNU General Public License as published by
//      the Free Software Foundation; either version 2 of the License, or
//      (at your option) any later version.
//      
//      This program is distributed in the hope that it will be useful,
//      but WITHOUT ANY WARRANTY; without even the implied warranty of
//      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//      GNU General Public License for more details.
//      
//      You should have received a copy of the GNU General Public License
//      along with this program; if not, write to the Free Software
//      Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
//      MA 02110-1301, USA.
//
//		All rights ReserveD This Script Modiffed By Pedox A.K.A Fadilz On kaskuser 
//		-[PERINGATAN]- JANGAN MENGAKUI KODE INI MILIK ORANG LAIN 
//		JANGAN MODIFIKASI KODE INI SEIZIN OWNER
//		Respect To Owner 
//		Start Begin on code

function listen(evt){
var node = evt.target;if (node.nodeType == document.ELEMENT_NODE) replaceElement(node, yemo); if (node.nodeType == document.TEXT_NODE) {var parent = node.parentNode;var span = replaceTextNode(node, yemo);if (span) parent.replaceChild(span, node);}}document.body.addEventListener('DOMNodeInserted', listen, true);