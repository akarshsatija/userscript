﻿// ==UserScript==
// @version 1.0 
// @name Shivam toolkit
// @author Shivam <http://www.orkut.com/Profile.aspx?uid=10220982077100434103>
// @namespace
// @description:Text Toolkit for orkut
// @include http://www.orkut.com/CommMsgPost.aspx?*
// @include http://www.orkut.com/Scrapbook.aspx*
// @include http://www.orkut.com/CommMsgs.aspx?*
// ==/UserScript==

addEventListener('load', function(event) {
function getTextArea() {
	return document.getElementsByTagName('textarea')[0];
}


function mM() {
	e=getTextArea();
	s=e.value;
	r="";
	for(k=0;k<s.length;k++){
		l=s.substr(k,1);
		r+=(k%2) ? l.toLowerCase() : l.toUpperCase();
	}
	e.value=r;
}

//-----------------------------------------------------------
//--                     Encrypt                           --
//-----------------------------------------------------------
function ZP() {
   o=getTextArea();
   txt=o.value;
   var crypt = new Array();
   crypt["a"]="z";
   crypt["b"]="y";
   crypt["c"]="x";
   crypt["d"]="w";
   crypt["e"]="v";
   crypt["f"]="u";
   crypt["g"]="t";
   crypt["h"]="s";
   crypt["i"]="r";
   crypt["j"]="q";
   crypt["k"]="p";
   crypt["l"]="o";
   crypt["m"]="n";
   crypt["n"]="m";
   crypt["o"]="l";
   crypt["p"]="k";
   crypt["q"]="j";
   crypt["r"]="i";
   crypt["s"]="h";
   crypt["t"]="g";
   crypt["u"]="f";
   crypt["v"]="e";
   crypt["w"]="d";
   crypt["x"]="c";
   crypt["y"]="b";
   crypt["z"]="a";
   var r="";
   for(x=0;x<txt.length;x++) {
      t=txt.substr(x,1).toLowerCase();
      r+= (crypt[t] ? crypt[t] : t);
   }
   o.value=r;
}


//-----------------------------------------------------------
//--                     Code chk                          --
//-----------------------------------------------------------
function chr(){
   s=getTextArea();
   txt=s.value;
var n="";
  n = txt.charCodeAt(0);

   s.value=n;
}



//-----------------------------------------------------------
//--                     Style 1                           --
//-----------------------------------------------------------
function style1() {
         c = getTextArea();
         d = c.value;
         var coeiu = [["a","b","c","�","d","e","f","g","h","i","j","k",
         "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","3","6"],
         [945, 1074, 99, 962, 8706, 949, 402, 103, 1085, 953, 106, 954, 108,
         1084, 960, 920, 961, 113, 1075, 353, 964, 956, 957, 1096, 967, 947,
         122, 1079, 1073]];
         var r="";
         for(x=0;x<d.length;x++) {
             t=d.substr(x,1).toLowerCase();
             for(y=0;y<coeiu[0].length;y++) {
                 if (t == coeiu[0][y]) {
                    t = String.fromCharCode(coeiu[1][y]);
                    break;
                 }
             }
             r+=t;
         }
         c.value=r;
}


//-----------------------------------------------------------
//--                     Style 2                           --
//-----------------------------------------------------------
function style2() {
   s=getTextArea();
   txt=s.value;
   var crypt = new Array();
   crypt["A"]=String.fromCharCode(0xC3);
   crypt["B"]=String.fromCharCode(0xDF);
   crypt["C"]=String.fromCharCode(0xA9);
   crypt["D"]=String.fromCharCode(0xD0);
   crypt["E"]=String.fromCharCode(163);
   crypt["F"]="F";
   crypt["G"]="G";
   crypt["H"]="|-|";
   crypt["I"]="I";
   crypt["J"]="J";
   crypt["K"]="|<";
   crypt["L"]="|_";
   crypt["M"]="|V|";
   crypt["N"]=String.fromCharCode(0xD1);
   crypt["O"]=String.fromCharCode(0xD8);
   crypt["P"]="P";
   crypt["Q"]="Q";
   crypt["R"]=String.fromCharCode(0xAE);
   crypt["S"]=String.fromCharCode(0xA7);
   crypt["T"]="T";
   crypt["U"]=String.fromCharCode(0xDC);
   crypt["V"]="V";
   crypt["W"]="W";
   crypt["X"]="><";
   crypt["Y"]=String.fromCharCode(0xA5);
   crypt["Z"]="Z";
   crypt["a"]=String.fromCharCode(0xE3);
   crypt["b"]="b";
   crypt["c"]=String.fromCharCode(0xE7);
   crypt["d"]="d";
   crypt["e"]=String.fromCharCode(0xEA);
   crypt["f"]=String.fromCharCode(402);
   crypt["g"]="9";
   crypt["h"]="h";
   crypt["i"]=String.fromCharCode(0xEE);
   crypt["j"]="j";
   crypt["k"]="k";
   crypt["l"]="l";
   crypt["m"]="m";
   crypt["n"]=String.fromCharCode(0xF1);
   crypt["o"]=String.fromCharCode(0xF5);
   crypt["p"]=String.fromCharCode(0xDE);
   crypt["q"]=String.fromCharCode(0xB6);
   crypt["r"]="r";
   crypt["s"]="s";
   crypt["t"]=String.fromCharCode(8224);
   crypt["u"]=String.fromCharCode(0xB5);
   crypt["v"]="v";
   crypt["w"]="w";
   crypt["x"]=String.fromCharCode(0xA4);
   crypt["y"]=String.fromCharCode(0xFF);
   crypt["z"]="z";
   var r="";
   for(x=0;x<txt.length;x++) {
      t=txt.substr(x,1);
      r+= (crypt[t] ? crypt[t] : t);
   }
   s.value=r;
}
//-----------------------------------------------------------
//--                     Style 3                           --
//-----------------------------------------------------------
function style3() {
cor=new Array('u','b','i','u');var z=1;
txt=document.getElementsByTagName('textarea')[0];
txt.value=txt.value.replace(/(.)/gi,"Â§$1");txt.value=txt.value.replace(/\Â§ /gi," ");
for(y=0;y<txt.value.length;y++){txt.value=txt.value.replace(/\Â§/,'[/'+cor[z-1]+']'+'['+cor[z]+']');
z++;if(z==cor.length){z=1}}}



//-----------------------------------------------------------
//--                     Style 4                           --
//-----------------------------------------------------------
function style4() {
var txt=document.getElementsByTagName('textarea')[0];
txt.value=txt.value.replace(/a/gi,"ค"); txt.value=txt.value.replace(/b/gi,"ß");
txt.value=txt.value.replace(/N/gi,"и");txt.value=txt.value.replace(/t/gi,"т") ;
txt.value=txt.value.replace(/E/gi,"є");txt.value=txt.value.replace(/f/gi,"f");
txt.value=txt.value.replace (/p/gi,"þ");txt.value=txt.value.replace(/s/gi,"ร");
txt.value=txt.value.replace(/o/gi,"σ");txt.value=txt.value.replace(/m/gi,"м") ;
txt.value=txt.value.replace(/r/gi,"я");}


//-----------------------------------------------------------
//--                     Style 5                          --
//-----------------------------------------------------------
function style5() {
var txt=document.getElementsByTagName('textarea')[0];
txt.value=txt.value.replace(/A/gi,"Ã-");
txt.value=txt.value.replace(/B/gi,"Ãy");
txt.value=txt.value.replace(/C/gi,"Â©");
txt.value=txt.value.replace(/D/gi,"Ã"); 
txt.value=txt.value.replace(/E/gi,"Ã<");
txt.value=txt.value.replace(/F/gi,"Æ'");
txt.value=txt.value.replace(/i/gi,"Ã®");
txt.value= txt.value.replace(/s/gi,"Â§");
txt.value=txt.value.replace(/o/gi,"Ã¸");
txt.value=txt.value.replace(/u/gi,"Âµ");
txt.value=txt.value. replace(/r/gi,"Â®");}

//-----------------------------------------------------------
//--                     Style 6                         --
//-----------------------------------------------------------
function style6() {
var bold="b";var italic="i";var color="red";
var color2="navy";var cxtxt=document.getElementsByTagName('textarea')[0];
var meuString = cxtxt.value;var result = "";
for (i=0;i<meuString.length-1;i++){result += "ღ";
result += "["+bold+"]["+color2+"]"+meuString.charAt(i)+"[/"+color2+"][/"+bold+"]";
result += "♥"};
result += meuString.charAt(meuString.length - 1);
cxtxt.value="["+italic+"]["+color+"]"+result;void(0);}



//-----------------------------------------------------------
//--                     Style 7                         --
//-----------------------------------------------------------


function style7() {
cor=new Array('teal','orange','olive','violet','maroon');
var z=0;txt=document.getElementsByTagName('textarea')[0]; 
txt.value=txt.value.replace(/\n/gi,'§ ');
sp=txt.value.split(' ');txti='';
for(l=0;l<sp.length;l++){txti+="["+cor[z]+"]"+sp[l]+' ';z++;
if(z==cor.length){z=0}}; txt.value=txti;
txt.value=txt.value.replace(/\§/gi,'\n'); 
txt=document.getElementsByTagName('textarea')[0];
txt.value=txt.value.replace(/ /gi,"๑(•ิ.•ั)๑");}



//-----------------------------------------------------------
//--                     Style 8                         --
//-----------------------------------------------------------

function style8() {
var a=document.getElementsByTagName('textarea')[0];
a.value=a.value.replace(/|/g," *♥* \n*♥* ");
cor=new Array('violet','red','orange','yellow','green','blue','navy','purple');
var z=0;txt=document.getElementsByTagName('textarea')[0];
txt.value=txt.value.replace(/(.)/gi,"§$1");txt.value=txt.value.replace(/\§ /gi," ");
for(y=0;y<txt.value.length;y++){txt.value=txt.value.replace(/\§/,'['+cor[z]+']');
z++;if(z==cor.length){z=0}}}

//-----------------------------------------------------------
//--                     Style 9                         --
//-----------------------------------------------------------
function style9() {
        n=getTextArea();
	n.value="[b]"+String.fromCharCode(9617)+String.fromCharCode(9733)+String.fromCharCode(9679)+String.fromCharCode(1769)+String.fromCharCode(164)+String.fromCharCode(166)+" "+" "+n.value.replace(/|/g,String.fromCharCode(773)+String.fromCharCode(818))+" "+String.fromCharCode(166)+String.fromCharCode(164)+String.fromCharCode(1769)+String.fromCharCode(9679)+String.fromCharCode(9733)+String.fromCharCode(9617);
}
//-----------------------------------------------------------
//--                     Box                              --
//-----------------------------------------------------------

function box() {
	z=getTextArea();
	z.value="[b]"+"["+z.value.replace(/|/g,String.fromCharCode(773)+String.fromCharCode(818))+"]";
}


//-----------------------------------------------------------
//--                      Heart                           --
//-----------------------------------------------------------
function hea() {
	y=getTextArea();
	y.value="[b]"+"("+String.fromCharCode(773)+String.fromCharCode(818)+String.fromCharCode(9829)+String.fromCharCode(773)+String.fromCharCode(818)+"|"+y.value.replace(/|/g,String.fromCharCode(773)+String.fromCharCode(818))+"|"+String.fromCharCode(773)+String.fromCharCode(818)+String.fromCharCode(9829)+String.fromCharCode(773)+String.fromCharCode(818)+")";
}

//-----------------------------------------------------------
//--                      lines                            --
//-----------------------------------------------------------
function cerc() {
	v=getTextArea();
	v.value=v.value.replace(/\b/gi,"|");
}

//-----------------------------------------------------------
//--                  Colorful 1                           --
//-----------------------------------------------------------
function colorful() {
	cor=new Array('maroon','red','pink','orange','gold','gray','green','blue','navy');
	var z=0;
	cl=getTextArea();
	cl.value=cl.value.replace(/(.)/gi,"#$1");
	cl.value=cl.value.replace(/\# /gi," ");
	for(y=0;y<cl.value.length;y++){
		cl.value=cl.value.replace(/\#/,'['+cor[z]+']');
		z++;
		if(z==cor.length)
			z=0;
	}
var cd=cl.value;
cl.value="[silver]"+cd+"[/silver]";
}


//-----------------------------------------------------------
//--                  Written links                        --
//-----------------------------------------------------------
	function ShivamStyle() {
	text=getTextArea();
	if (!text) return;
	c=text.parentNode;
	d=document.createElement("div");
	d.className="T";
	d.style.fontSize="11px";
	d.align="left";
	d.innerHTML="<b>šнιναм'š шгιτιπg τoolš!!!</b><br />";
	d.style.marginTop="10px";
	c.appendChild(d);

	zp=document.createElement("a");
	zp.href="javascript:;";
	zp.innerHTML="En/Decrypt";
	zp.addEventListener("click", ZP, true);
        d.appendChild(zp);


	SPA=document.createElement("b");
	SPA.innerHTML=" - ";
        d.appendChild(SPA);
	

	mm=document.createElement("a");
	mm.href="javascript:;";
	mm.innerHTML="aLtEr";
	mm.addEventListener("click", mM, true);
	d.appendChild(mm);

	SPB=document.createElement("b");
	SPB.innerHTML=" - ";
        d.appendChild(SPB);

	ce=document.createElement("a");
	ce.href="javascript:;";
	ce.innerHTML="|Line|";
	ce.addEventListener("click", cerc, true);
	d.appendChild(ce);

	SPC=document.createElement("b");
	SPC.innerHTML=" - ";
        d.appendChild(SPC);
	
	ss=document.createElement("a");
	ss.href="javascript:;";
	ss.innerHTML=String.fromCharCode(353)+String.fromCharCode(964)+String.fromCharCode(947)+String.fromCharCode(108)+String.fromCharCode(949);
	ss.addEventListener("click", style1, true);
	d.appendChild(ss);

	SPD=document.createElement("b");
	SPD.innerHTML=" - ";
        d.appendChild(SPD);

	s2=document.createElement("a");
	s2.href="javascript:;";
	s2.innerHTML=String.fromCharCode(0xA7)+String.fromCharCode(964)+String.fromCharCode(947)+String.fromCharCode(108)+String.fromCharCode(949);
	s2.addEventListener("click", style2, true);
	d.appendChild(s2);

        SPE=document.createElement("b");
	SPE.innerHTML=" - ";
        d.appendChild(SPE);

        st3=document.createElement("a");
	st3.href="javascript:;";
	st3.innerHTML="Italbold ";
	st3.addEventListener("click", style3, true);
	d.appendChild(st3);

        SPF=document.createElement("b");
	SPF.innerHTML=" - ";
        d.appendChild(SPF);
         
        st4=document.createElement("a");
	st4.href="javascript:;";
	st4.innerHTML="sтYLє 4 ";
	st4.addEventListener("click", style4, true);
	d.appendChild(st4);

	SPG=document.createElement("b");
	SPG.innerHTML=" - ";
        d.appendChild(SPG);
 
        
        st5=document.createElement("a");
	st5.href="javascript:;";
	st5.innerHTML="Â§tylÃ< 5 ";
	st5.addEventListener("click", style5, true);
	d.appendChild(st5);

	SPz=document.createElement("b");
	SPz.innerHTML=" - ";
        d.appendChild(SPz);


        st6=document.createElement("a");
	st6.href="javascript:;";
	st6.innerHTML="H♥E♥A♥R♥T";
	st6.addEventListener("click", style6, true);
	d.appendChild(st6);

	SPY=document.createElement("b");
	SPY.innerHTML=" - ";
        d.appendChild(SPY);


        st7=document.createElement("a");
	st7.href="javascript:;";
	st7.innerHTML="eyes(•.•)";
	st7.addEventListener("click", style7, true);
	d.appendChild(st7);

	SPX=document.createElement("b");
	SPX.innerHTML=" - ";
        d.appendChild(SPX);


        st8=document.createElement("a");
	st8.href="javascript:;";
	st8.innerHTML="Special";
	st8.addEventListener("click", style8, true);
	d.appendChild(st8);

	SPW=document.createElement("b");
	SPW.innerHTML=" - ";
        d.appendChild(SPW);

        bo=document.createElement("a");
	bo.href="javascript:;";
	bo.innerHTML="["+String.fromCharCode(773)+String.fromCharCode(818)+"B"+String.fromCharCode(773)+String.fromCharCode(818)+"o"+String.fromCharCode(773)+String.fromCharCode(818)+"x"+String.fromCharCode(773)+String.fromCharCode(818)+"]";
	bo.addEventListener("click", box, true);
	d.appendChild(bo);

	SPU=document.createElement("b");
	SPU.innerHTML=" - ";
        d.appendChild(SPU);

        he=document.createElement("a");
	he.href="javascript:;";
	he.innerHTML="("+String.fromCharCode(9829)+String.fromCharCode(773)+String.fromCharCode(818)+"H"+String.fromCharCode(773)+String.fromCharCode(818)+"e"+String.fromCharCode(773)+String.fromCharCode(818)+"a"+String.fromCharCode(773)+String.fromCharCode(818)+"r"+String.fromCharCode(773)+String.fromCharCode(818)+"t"+String.fromCharCode(773)+String.fromCharCode(818)+String.fromCharCode(9829)+")";
	he.addEventListener("click", hea, true);
	d.appendChild(he);

        SPT=document.createElement("b");
	SPT.innerHTML=" - ";
        d.appendChild(SPT);


        st9=document.createElement("a");
	st9.href="javascript:;";
	st9.innerHTML=String.fromCharCode(9617)+String.fromCharCode(9733)+String.fromCharCode(9679)+String.fromCharCode(1769)+String.fromCharCode(164)+String.fromCharCode(166)+"  "+String.fromCharCode(773)+String.fromCharCode(818)+"S"+String.fromCharCode(773)+String.fromCharCode(818)+"T"+String.fromCharCode(773)+String.fromCharCode(818)+"Y"+String.fromCharCode(773)+String.fromCharCode(818)+"L"+String.fromCharCode(773)+String.fromCharCode(818)+"E"+" "+String.fromCharCode(166)+String.fromCharCode(164)+String.fromCharCode(1769)+String.fromCharCode(9679)+String.fromCharCode(9733)+String.fromCharCode(9617);
	st9.addEventListener("click", style9, true);
	d.appendChild(st9);

	SPW=document.createElement("b");
	SPW.innerHTML=" - ";
        d.appendChild(SPW);


	color=document.createElement("a");
	color.href="javascript:;";
	color.innerHTML="<span style='color:yellow;'>C</span>o<span style='color:red'>l</span>o<span style='color:green'>r</span>f<span style='color:orange'>u</span>l<span style='color:blue'>l</span>";
	color.addEventListener("click", colorful, true);
	d.appendChild(color);

	SPH=document.createElement("b");
	SPH.innerHTML=" - ";
        d.appendChild(SPH);

	az=document.createElement("a");
	az.href="http://www.orkut.com/Profile.aspx?uid=10220982077100434103";
        az.innerHTML="απγ ρгoвš?нεlρ!!";
        az.target="_blank";
        d.appendChild(az);

	SPI=document.createElement("b");
	SPI.innerHTML=" - ";
        d.appendChild(SPI);

	ad=document.createElement("a");
	ad.href="http://www.orkut.com/Profile.aspx?uid=10220982077100434103";
	ad.innerHTML="~Visit me~";
	ad.target="_blank";
	d.appendChild(ad);
}

ShivamStyle();
}, false);

//-----------------------------------------------------------
//--                  Change Link to Image                 --
//-----------------------------------------------------------

var i=0;
function chngimg(){
doc=document;
lnk=doc.links;

for (i=0;i<lnk.length;i++){
getload="document.getElementById('loadi"+i+"')"
this2="document.getElementById('bfimg"+i+"')"

var sb=lnk[i].href.substring(lnk[i].href.length-4,lnk[i].href.length);sb=sb.toLowerCase()
if(sb=='.jpg' || sb=='.gif' || sb=='.png' || sb=='jpeg'){
lnk[i].innerHTML="<b id=loadi"+i+" onclick=\""+this2+".style.display='';"+getload+".style.display='none';return false;\"><font size=1 color=Blue id=load"+i+">Loading....</font></b><img onError=\"document.links["+i+"].innerHTML='<font size=1 color=red>Image Not Found</font>'\" oncontextmenu=\"if(aa"+i+"==0){if(imgh"+i+">imgw"+i+"){document.getElementById('bfimg"+i+"').height=imgh"+i+"};if(imgw"+i+">imgh"+i+"){document.getElementById('bfimg"+i+"').width=imgw"+i+"};aa"+i+"=1}else{if(this.height>200 && this.height>=this.width){this.height=200};if(this.width>200 && this.width>=this.height){this.width=200};aa"+i+"=0};return false\" src="+lnk[i].href+" style='display: none' id=bfimg"+i+" border=0 onload=\"aa"+i+"=0;imgh"+i+"=this.height;imgw"+i+"=this.width;if(this.height>200 && this.height>=this.width){this.height=200}else if(this.width>200 && this.width>=this.height){this.width=200;};this.style.display='';"+getload+".style.display='none';\">"
}}
}
chngimg()


//-----------------------------------------------------------
//--                         Tags                          --
//-----------------------------------------------------------
function changetags(){
br=document.body.innerHTML
if(br.indexOf("[img]") > -1 && br.indexOf("[/img]") > -1){
br=br.replace(/\[img\]/gi,'');
br=br.replace(/\[\/img\]/gi,'');
document.body.innerHTML = br;
}
}
changetags()