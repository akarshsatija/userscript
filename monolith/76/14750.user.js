// ==UserScript==
// @name CazaFirmasMetalDamageEs
// @description Remarcador de firmas ilegales
// @include http://board.metaldamage.*
// ==UserScript==
// Modificado por Crispy

var iLst;
var i;
var wh;
var ht;
var pth;
var brd;
var tblLst
var j;
var img;

function delOnet()
 {
  tblLst = document.getElementsByTagName('table');
  for (j=0; j < tblLst.length; j++)
  {
  if(tblLst[j].width == 857)
   {
   tblLst[j].parentNode.removeChild(tblLst[j]);
   break
   }
  }
 }

function CazaFirmas()
 {
 iLst = document.evaluate('//img', document, null, 6, null);
 for (i=0; i < iLst.snapshotLength; i++)
  {
   img = iLst.snapshotItem(i)
   pth = img.src;
   brd = pth.substr(0, 19)
   if (brd != "http://board.metaldamage.")
    {
	 wh = img.width;
	 ht = img.height;
	 if (wh > 501 || ht > 101)
	 if (wh > 451 || ht > 151)
      {
       img.border = 14;
	   img.style.borderColor = '#00FF00';
      }
    }
  }
 }

delOnet();
if (window.location.href.match(/thread/))
 {
  CazaFirmas();
 }