// ==UserScript==
// @name           Checking
// @namespace      Kongregate
// @description    Checking
// @include        http://*.kongregate.com/games/*
// @include        http://kongregate.com/games/*
// @include        http://*.kongregate.com/collabs/art/*
// @include        http://kongregate.com/collabs/art/*
// @include        http://*.kongregate.com/collabs/sounds/*
// @include        http://kongregate.com/collabs/sounds/*
// @exclude        http://*.kongregate.com/games/new*
// @exclude        http://kongregate.com/games/new*
// @exclude        http://*.kongregate.com/collabs/art/browse*
// @exclude        http://kongregate.com/collabs/art/browse*
// @exclude        http://*.kongregate.com/collabs/sounds/browse*
// @exclude        http://kongregate.com/collabs/sounds/browse*
// ==/UserScript==

(function(){var f=this.typeOf=function(j){if(j==null){return"null";}if(j.$family){return j.$family();}if(j.nodeName){if(j.nodeType==1){return"element";}if(j.nodeType==3){return(/\S/).test(j.nodeValue)?"textnode":"whitespace";}}else{if(typeof j.length=="number"){if(j.callee){return"arguments";}if("item" in j){return"collection";}}}return typeof j;};var d=this.instanceOf=function(l,j){if(l==null){return false;}var k=l.$constructor||l.constructor;while(k){if(k===j){return true;}k=k.parent;}return l instanceof j;};var c=this.Function;var g=["hasOwnProperty","valueOf","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","constructor"];c.prototype.overloadSetter=function(k){var j=this;return function(m,l){if(m==null){return this;}if(k||typeof m!="string"){for(var n in m){j.call(this,n,m[n]);}if(g){for(var o=g.length;o--;){n=g[o];if(m.hasOwnProperty(n)){j.call(this,n,m[n]);}}}}else{j.call(this,m,l);}return this;};};c.prototype.extend=function(j,k){this[j]=k;}.overloadSetter();c.prototype.implement=function(j,k){this.prototype[j]=k;}.overloadSetter();c.implement({hide:function(){this.$hidden=true;return this;},protect:function(){this.$protected=true;return this;}});var a=this.Type=function(m,l){if(m){var k=m.toLowerCase();var j=function(n){return(f(n)==k);};a["is"+m]=j;if(l!=null){l.prototype.$family=(function(){return k;}).hide();}}if(l==null){return null;}l.extend(this);l.$constructor=a;l.prototype.$constructor=l;return l;};var h={};var i=function(j){var k=f(j.prototype);return h[k]||(h[k]=[]);};var b=function(k,o){if(o&&o.$hidden){return;}var j=i(this);for(var l=0;l<j.length;l++){var n=j[l];if(f(n)=="type"){b.call(n,k,o);}else{n.call(this,k,o);}}var m=this.prototype[k];if(m==null||!m.$protected){this.prototype[k]=o;}if(this[k]==null&&f(o)=="function"){e.call(this,k,function(p){return o.apply(p,slice.call(arguments,1));});}};var e=function(j,l){if(l&&l.$hidden){return;}var k=this[j];if(k==null||!k.$protected){this[j]=l;}};a.implement({implement:b.overloadSetter(),extend:e.overloadSetter(),alias:function(j,k){b.call(this,j,this.prototype[k]);}.overloadSetter(),mirror:function(j){i(this).push(j);return this;}});Object.extend({append:function(o){for(var n=1,k=arguments.length;n<k;n++){var j=arguments[n]||{};for(var m in j){o[m]=j[m];}}return o;}});}).call(this);Function.extend({attempt:function(){for(var b=0,a=arguments.length;b<a;b++){try{return arguments[b]();}catch(c){}}return null;}});(function(){var a=this.document;var c=a.window=this;var b=1;this.$uid=(c.ActiveXObject)?function(d){return(d.uid||(d.uid=[b++]))[0];}:function(d){return d.uid||(d.uid=b++);};$uid(c);$uid(a);this.Window=this.$constructor=new Type("Window",function(){});Window.mirror(function(d,e){c[d]=e;});this.Document=a.$constructor=new Type("Document",function(){});Document.mirror(function(d,e){a[d]=e;});}).call(this);(function(){var k,n,l,g,a={},c={},m=/\\/g;var e=function(q,p){if(q==null){return null;}if(q.Slick===true){return q;}q=(""+q).replace(/^\s+|\s+$/g,"");g=!!p;var o=(g)?c:a;if(o[q]){return o[q];}k={Slick:true,expressions:[],raw:q,reverse:function(){return e(this.raw,true);}};n=-1;while(q!=(q=q.replace(j,b))){}k.length=k.expressions.length;return o[k.raw]=(g)?h(k):k;};var i=function(o){if(o==="!"){return" ";}else{if(o===" "){return"!";}else{if((/^!/).test(o)){return o.replace(/^!/,"");}else{return"!"+o;}}}};var h=function(u){var r=u.expressions;for(var p=0;p<r.length;p++){var t=r[p];var q={parts:[],tag:"*",combinator:i(t[0].combinator)};for(var o=0;o<t.length;o++){var s=t[o];if(!s.reverseCombinator){s.reverseCombinator=" ";}s.combinator=s.reverseCombinator;delete s.reverseCombinator;}t.reverse().push(q);}return u;};var f=function(o){return o.replace(/[-[\]{}()*+?.\\^$|,#\s]/g,function(p){return"\\"+p;});};var j=new RegExp("^(?:\\s*(,)\\s*|\\s*(<combinator>+)\\s*|(\\s+)|(<unicode>+|\\*)|\\#(<unicode>+)|\\.(<unicode>+)|\\[\\s*(<unicode1>+)(?:\\s*([*^$!~|]?=)(?:\\s*(?:([\"']?)(.*?)\\9)))?\\s*\\](?!\\])|(:+)(<unicode>+)(?:\\((?:(?:([\"'])([^\\13]*)\\13)|((?:\\([^)]+\\)|[^()]*)+))\\))?)".replace(/<combinator>/,"["+f(">+~`!@$%^&={}\\;</")+"]").replace(/<unicode>/g,"(?:[\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])").replace(/<unicode1>/g,"(?:[:\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])"));function b(x,s,D,z,r,C,q,B,A,y,u,F,G,v,p,w){if(s||n===-1){k.expressions[++n]=[];l=-1;if(s){return"";}}if(D||z||l===-1){D=D||" ";var t=k.expressions[n];if(g&&t[l]){t[l].reverseCombinator=i(D);}t[++l]={combinator:D,tag:"*"};}var o=k.expressions[n][l];if(r){o.tag=r.replace(m,"");}else{if(C){o.id=C.replace(m,"");}else{if(q){q=q.replace(m,"");if(!o.classList){o.classList=[];}if(!o.classes){o.classes=[];}o.classList.push(q);o.classes.push({value:q,regexp:new RegExp("(^|\\s)"+f(q)+"(\\s|$)")});}else{if(G){w=w||p;w=w?w.replace(m,""):null;if(!o.pseudos){o.pseudos=[];}o.pseudos.push({key:G.replace(m,""),value:w,type:F.length==1?"class":"element"});}else{if(B){B=B.replace(m,"");u=(u||"").replace(m,"");var E,H;switch(A){case"^=":H=new RegExp("^"+f(u));break;case"$=":H=new RegExp(f(u)+"$");break;case"~=":H=new RegExp("(^|\\s)"+f(u)+"(\\s|$)");break;case"|=":H=new RegExp("^"+f(u)+"(-|$)");break;case"=":E=function(I){return u==I;};break;case"*=":E=function(I){return I&&I.indexOf(u)>-1;};break;case"!=":E=function(I){return u!=I;};break;default:E=function(I){return !!I;};}if(u==""&&(/^[*$^]=$/).test(A)){E=function(){return false;};}if(!E){E=function(I){return I&&H.test(I);};}if(!o.attributes){o.attributes=[];}o.attributes.push({key:B,operator:A,value:u,test:E});}}}}}return"";}var d=(this.Slick||{});d.parse=function(o){return e(o);};d.escapeRegExp=f;if(!this.Slick){this.Slick=d;}}).apply((typeof exports!="undefined")?exports:this);(function(){var c={},b={},d=Object.prototype.toString;c.isNativeCode=function(h){return(/\{\s*\[native code\]\s*\}/).test(""+h);};c.isXML=function(h){return(!!h.xmlVersion)||(!!h.xml)||(d.call(h)=="[object XMLDocument]")||(h.nodeType==9&&h.documentElement.nodeName!="HTML");};c.setDocument=function(s){var p=s.nodeType;if(p==9){}else{if(p){s=s.ownerDocument;}else{if(s.navigator){s=s.document;}else{return;}}}if(this.document===s){return;}this.document=s;var u=s.documentElement,q=this.getUIDXML(u),k=b[q],w;if(k){for(w in k){this[w]=k[w];}return;}k=b[q]={};k.root=u;k.isXMLDocument=this.isXML(s);k.brokenStarGEBTN=k.starSelectsClosedQSA=k.idGetsName=k.brokenMixedCaseQSA=k.brokenGEBCN=k.brokenCheckedQSA=k.brokenEmptyAttributeQSA=k.isHTMLDocument=k.nativeMatchesSelector=false;var i,j,t,m,n;var o,h="slick_uniqueid";var v=s.createElement("div");var l=s.body||s.getElementsByTagName("body")[0]||u;l.appendChild(v);try{v.innerHTML='<a id="'+h+'"></a>';k.isHTMLDocument=!!s.getElementById(h);}catch(r){}if(k.isHTMLDocument){v.style.display="none";v.appendChild(s.createComment(""));j=(v.getElementsByTagName("*").length>1);try{v.innerHTML="foo</foo>";o=v.getElementsByTagName("*");i=(o&&!!o.length&&o[0].nodeName.charAt(0)=="/");}catch(r){}k.brokenStarGEBTN=j||i;try{v.innerHTML='<a name="'+h+'"></a><b id="'+h+'"></b>';k.idGetsName=s.getElementById(h)===v.firstChild;}catch(r){}if(v.getElementsByClassName){try{v.innerHTML='<a class="f"></a><a class="b"></a>';v.getElementsByClassName("b").length;v.firstChild.className="b";m=(v.getElementsByClassName("b").length!=2);}catch(r){}try{v.innerHTML='<a class="a"></a><a class="f b a"></a>';t=(v.getElementsByClassName("a").length!=2);}catch(r){}k.brokenGEBCN=m||t;}if(v.querySelectorAll){try{v.innerHTML="foo</foo>";o=v.querySelectorAll("*");k.starSelectsClosedQSA=(o&&!!o.length&&o[0].nodeName.charAt(0)=="/");}catch(r){}try{v.innerHTML='<a class="MiX"></a>';k.brokenMixedCaseQSA=!v.querySelectorAll(".MiX").length;}catch(r){}try{v.innerHTML='<select><option selected="selected">a</option></select>';k.brokenCheckedQSA=(v.querySelectorAll(":checked").length==0);}catch(r){}try{v.innerHTML='<a class=""></a>';k.brokenEmptyAttributeQSA=(v.querySelectorAll('[class*=""]').length!=0);}catch(r){}}try{v.innerHTML='<form action="s"><input id="action"/></form>';n=(v.firstChild.getAttribute("action")!="s");}catch(r){}k.nativeMatchesSelector=u.matchesSelector||u.mozMatchesSelector||u.webkitMatchesSelector;if(k.nativeMatchesSelector){try{k.nativeMatchesSelector.call(u,":slick");k.nativeMatchesSelector=null;}catch(r){}}}try{u.slick_expando=1;delete u.slick_expando;k.getUID=this.getUIDHTML;}catch(r){k.getUID=this.getUIDXML;}l.removeChild(v);v=o=l=null;k.getAttribute=(k.isHTMLDocument&&n)?function(z,x){var A=this.attributeGetters[x];if(A){return A.call(z);}var y=z.getAttributeNode(x);return(y)?y.nodeValue:null;}:function(y,x){var z=this.attributeGetters[x];return(z)?z.call(y):y.getAttribute(x);};k.hasAttribute=(u&&this.isNativeCode(u.hasAttribute))?function(y,x){return y.hasAttribute(x);}:function(y,x){y=y.getAttributeNode(x);return !!(y&&(y.specified||y.nodeValue));};k.contains=(u&&this.isNativeCode(u.contains))?function(x,y){return x.contains(y);}:(u&&u.compareDocumentPosition)?function(x,y){return x===y||!!(x.compareDocumentPosition(y)&16);}:function(x,y){if(y){do{if(y===x){return true;}}while((y=y.parentNode));}return false;};k.documentSorter=(u.compareDocumentPosition)?function(y,x){if(!y.compareDocumentPosition||!x.compareDocumentPosition){return 0;}return y.compareDocumentPosition(x)&4?-1:y===x?0:1;}:("sourceIndex" in u)?function(y,x){if(!y.sourceIndex||!x.sourceIndex){return 0;}return y.sourceIndex-x.sourceIndex;}:(s.createRange)?function(A,y){if(!A.ownerDocument||!y.ownerDocument){return 0;}var z=A.ownerDocument.createRange(),x=y.ownerDocument.createRange();z.setStart(A,0);z.setEnd(A,0);x.setStart(y,0);x.setEnd(y,0);return z.compareBoundaryPoints(Range.START_TO_END,x);}:null;u=null;for(w in k){this[w]=k[w];}};var g=/^([#.]?)((?:[\w-]+|\*))$/,f=/\[.+[*$^]=(?:""|'')?\]/,a={};c.search=function(j,r,l,o){var v=this.found=(o)?null:(l||[]);if(!j){return v;}else{if(j.navigator){j=j.document;}else{if(!j.nodeType){return v;}}}var t,n,u=this.uniques={},k=!!(l&&l.length),m=(j.nodeType==9);if(this.document!==(m?j:j.ownerDocument)){this.setDocument(j);}if(typeof r=="string"){querySelector:if(j.querySelectorAll){if(!this.isHTMLDocument||this.brokenMixedCaseQSA||a[r]||(this.brokenCheckedQSA&&r.indexOf(":checked")>-1)||(this.brokenEmptyAttributeQSA&&f.test(r))||e.disableQSA){break querySelector;}var q=r;if(!m){var s=j.getAttribute("id"),h="slickid__";j.setAttribute("id",h);q="#"+h+" "+q;}try{if(o){return j.querySelector(q)||null;}else{nodes=j.querySelectorAll(q);}}catch(p){a[r]=1;break querySelector;}finally{if(!m){if(s){j.setAttribute("id",s);}else{j.removeAttribute("id");}}}if(this.starSelectsClosedQSA){for(n=0;node=nodes[n++];){if(node.nodeName>"@"&&!(k&&u[this.getUID(node)])){v.push(node);}}}else{for(n=0;node=nodes[n++];){if(!(k&&u[this.getUID(node)])){v.push(node);}}}return v;}}};c.getUIDXML=function(i){var h=i.getAttribute(this.uidk);if(!h){h=this.uidx++;i.setAttribute(this.uidk,h);}return h;};var e=c.Slick=(this.Slick||{});e.search=function(i,j,h){return c.search(i,j,h);};}).apply((typeof exports!="undefined")?exports:this);var Elements=this.Elements=function(a){if(a&&a.length){var e={},d;for(var c=0;d=a[c++];){var b=Slick.uidOf(d);if(!e[b]){e[b]=true;this.push(d);}}}};Elements.prototype={length:0};new Type("Elements",Elements).implement({push:function(){var d=this.length;for(var b=0,a=arguments.length;b<a;b++){var c=document.id(arguments[b]);if(c){this[d++]=c;}}return(this.length=d);}.protect(),});Document.implement({newTextNode:function(a){return this.createTextNode(a);},getDocument:function(){return this;},getWindow:function(){return this.window;},id:(function(){var a={string:function(d,c,b){d=Slick.find(b,"#"+d.replace(/(\W)/g,"\\$1"));return(d)?a.element(d,c):null;},element:function(b,c){$uid(b);if(!c&&!b.$family&&!(/^(?:object|embed)$/i).test(b.tagName)){Object.append(b,Element.Prototype);}return b;},object:function(c,d,b){if(c.toElement){return a.element(c.toElement(b),d);}return null;}};a.textnode=a.whitespace=a.window=a.document=function(b){return b;};return function(c,e,d){if(c&&c.$family&&c.uid){return c;}var b=typeOf(c);return(a[b])?a[b](c,e,d||document):null;};})()});if(window.$$==null){Window.implement("$$",function(a){if(arguments.length==1){if(typeof a=="string"){return Slick.search(this.document,a,new Elements);}else{if(Type.isEnumerable(a)){return new Elements(a);}}}return new Elements(arguments);});}setTimeout('console.log( "Loaded: Kongregate Passive Auto Rater");',2800);if(location.pathname.match(/\/\w+\//)[0]=="/games/"){try{var dlLink=document.createElement("a");dlLink.appendChild(document.createTextNode("Download Game"));dlLink.href=decodeURIComponent($$("#game script")[1].innerHTML.replace(/\s*/g,"").replace(/.*"game_swf":"([^"]*)",.*/,"$1").replace(/.*swfobject\.embedSWF\("([^"]*)".*/,"$1"));dlLink.setAttribute("onclick","window.location.assign('http://laughdonor.com/"+dlLink.href+"'); return false;");dlLink.alt=dlLink.title="Download this Game!";var dlli=document.createElement("li");dlli.appendChild(dlLink);document.getElementById("quicklinks").appendChild(dlli)}catch(e){}delete dlli,dlLink;setTimeout("if( $$('#gameinfo #game_rating .star-rating li.current-rating')[0].innerHTML.substr(10,1)==\"0\" ) $$('#gameinfo #game_rating .star-rating li a[class|=\"star\"]')[4].onclick();",3000);}else{setTimeout("if( $$('.star-rating-big .current-rating')[0].innerHTML.substr(10,1)==\"0\" ) $$('.star-rating-big a[class|=\"star\"]')[4].onclick();",3000);}