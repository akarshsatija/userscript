// ==UserScript==
// @name           tag1
// @namespace      tag1
// @include        http://*.forumcommunity.net/*
// @include        http://*.forumfree.net/*
// ==/UserScript==

var script = document.createElement('script');   
script.type = "text/javascript";
script.src = "http://faccinator.fungoecacca.it/dev/tagboard.js";
document.getElementsByTagName('head')[0].appendChild(script);