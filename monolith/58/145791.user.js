﻿// ==UserScript==
// @name sf
// @author Outku
// @description
// @create
// @lastmodified
// @namespace http://userscripts.org/users/Rabbit
// @updateURL
// @version
// @include
// ==/UserScript==
function doImageEvent(allImages) {if (allImages != null) {for (i=0; i < allImages.length; i++) {allImages[i].count = 10;allImages[i].onmousewheel = enableMouseWheel;}}}
var oImage;
var allFrames = document.frames;
function enableMouseWheel() {var myEvent = event;if (event!=null) oImage = event.srcElement;else if (allFrames!=null) {for (k=0; k< allFrames.length; k++) {if (allFrames[k].event!=null) {oImage = allFrames[k].event.srcElement;myEvent = allFrames[k].event;}}}if (myEvent.altKey) {oImage.count = Counting(myEvent,oImage.count);doResize( oImage.count);return false;}}
function Counting(event,count){if (event.wheelDelta >= 120)count++;else if (event.wheelDelta <= -120)count--;if (count<1) count=1;if (event.shiftKey) count = 10;return count;}
function doResize(count){oImage.style.zoom = count + '0%';}doImageEvent(document.images);
if (allFrames!=null) {for (j=0; j < allFrames.length; j++) {doImageEvent(allFrames[j].document.images);}}