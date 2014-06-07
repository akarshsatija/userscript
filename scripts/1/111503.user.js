// ==UserScript==
// @name        The West - Raccourcis [SOM] [BETA] - (multilingue)
// @description The West - Raccourcis [SOM - Scripts-O-Maniacs]
// @author      Gzahab
// @author      Danosaure
// @release     Danosaure
// @namespace   http://scripts-o-maniacs.leforum.eu/
// @include     http://*.the-west.*/game.php*
// @include     http://userscripts.org/scripts/review/111503*
// @include     http://userscripts.org/scripts/source/111503.meta.js*
// @version     1.36
// @copyright   2011, Danosaure (http://scripts-o-maniacs.leforum.eu/)
// @copyright   2011, Gzahab (http://www.gzahab.fr)
// @website     http://scripts-o-maniacs.leforum.eu
// @licence     (CC); http://creativecommons.org/licenses/by-nc/2.0/fr/
//
// @history     1.36|2012.05.15     Added compatibility with server 1.36.
// @history     1.36|2012.05.15     Corrected shortcut border.
// @history     1.36|2012.05.15     Removed NPC quest as corrected in-game.
// @history     1.35|2012.04.08     Added "east2" and "west2" NPC.
// @history     1.35|2012.04.08     Lower top-right position under buffer.
// @history     1.35|2012.03.25     Greater merchant delay to avoid blocking calls.
// @history     1.34|2012.02.25     Code refactoring to use new SOM-CommonTools.
// @history     1.34|2012.02.25     TheWestApi.register().
// @history     1.34|2012.02.25     Deprecated server < 1.34.
// @history     1.33i|2011.12.25    Utilisation SOM-Tools.
// @history     1.33h|2011.12.15    Correction nom variable.
// @history     1.33g|2011.12.15    Correction affichage temps marchand lorsque changement menu.
// @history     1.33f|2011.12.15    Correction temps marchand.
// @history     1.33e|2011.12.12    Personnalisation icônes.
// @history     1.33d|2011.12.04    Rien afficher si pas artisanat.
// @history     1.33c|2011.12.04    Afficher points artisanat.
// @history     1.33b|2011.12.03    Correction anciens buildings.
// @history     1.33a|2011.12.03    Adaptation pour serveur version 1.34.
// @history     1.33    Passage de la version 1.32e en production.
// @history     1.32e   Correct sur le DOMready.
// @history     1.32d   Réusinage code javascript.
// @history     1.32c   Correction contour du marchand.
// @history     1.32b   Correction artisanat SDF. Artisanat personnalisé.
// @history     1.32a   Correction pour v1.33 cityhall.
// @history     1.32    Nouvelle fenêtre pour l'artisanat.
// @history     1.31b   Arrivée de la fenêtre de configuration (config de la bordure et du fond de case)
// @history     1.31a   Déplacement barre raccourcis du haut_droite suite icône buff + icône artisan
// @history     1.29l-O Correctif erreur addEvent dans le chgt image ville
// @history     1.29l-N Correctif décompte marchand sous chrome
// @history     1.29l-M Ultime tentative de correction du 59 min après l'ouverture du marchand
// @history     1.29l-L Nouvelle tentative de correction du 59 min après l'ouverture du marchand
// @history     1.29l-K Correction du 59 min après l'ouverture du marchand en automatique
// @history     1.29l-J Nouveau système de récupération du temps du marchand
// @history     1.29l-H Les boutons sont multi-langue
// @history     1.29l-H Les mises à jour devraient marcher avec différents scripts
// @history     1.29l-G Correctif pour Chrome qui contient le terme "safari"
// @history     1.29l-F Différenciation entre safari et les autres qui fonctionnent avec le meta.js
// @history     1.29l-E Pop-up pour les gens sur safari si besoin màj
// @history     1.29l-E Amélioration du code de la partie màj
// @history     1.29l-D Fermeture de la fenêtre lorsque l'on clique sur installer
// @history     1.29l-C Gestion de mise à jour normalement complet (sauf la langue)
// @history     1.29l-C Changement des variables de stockage
// @history     1.29l-B Correctif pour safari (merci Dun)
// @history     1.29l-A Fenêtre type TW
// @history     1.29l   Mise en place de la mise à jour en automatique indépendante
// @history     1.29k   Correctif décompte à 2 h + commentaire case réglage
// @history     1.29j   Ajout décompte marchand ambulant + correctif icône marchand sur la beta
// @history     1.29i   Correction barre pour SDF + ajout position centrée + ajout icône marchand et profil + sauvegarde position
// @history     1.29h   Ajout de la flèche de déplacement
// ==/UserScript==

if((window.location.href.indexOf(".the-west.")!==-1)&&(window.location.href.indexOf("game.php")!==-1)){(function(b){var c=document;var a=c.createElement("script");a.type="application/javascript";a.textContent="("+b.toString()+")()";(c.body||c.head||c.documentElement).appendChild(a);a.parentNode.removeChild(a);})(function(){var a=function(){SOM.Shortcuts=SOM.Tools.enregistrer("Raccourcis","1.36","111503","Danosaure");if(null==SOM.Shortcuts){return;}SOM.Shortcuts.POSITIONS=new Object();SOM.Shortcuts.POSITIONS.defaut="haut_gauche";SOM.Shortcuts.POSITIONS.haut_gauche={position:"top:6px; left:33px;",style:"0px 0px",next:"haut_centre"};SOM.Shortcuts.POSITIONS.haut_centre={position:"top:6px; left:50%;",style:"0px 0px",next:"haut_droite"};SOM.Shortcuts.POSITIONS.haut_droite={position:"top:70px; right:35px;",style:"20px 0px",next:"bas_droite"};SOM.Shortcuts.POSITIONS.bas_droite={position:"bottom:128px; right:15px;",style:"20px 0px",next:"bas_centre"};SOM.Shortcuts.POSITIONS.bas_centre={position:"bottom:86px; left:50%;",style:"20px 20px",next:"bas_gauche"};SOM.Shortcuts.POSITIONS.bas_gauche={position:"bottom:98px; left:12px;",style:"0px 20px",next:"haut_gauche"};SOM.Shortcuts.ICONES=new Object();SOM.Shortcuts.ICONES.DEFAUT={bank:true,church:true,cityhall:true,crafting:true,fingerboard:true,general:true,gunsmith:true,hotel:true,invitation:true,market:true,merchant:true,mortician:true,profile:true,saloon:true,sheriff:true,tailor:true};SOM.Shortcuts.ICONES.AVEC_VILLE=new Array("gunsmith","tailor","general","hotel","bank","church","mortician","cityhall","saloon","sheriff","market","merchant","fingerboard","profile","crafting");SOM.Shortcuts.ICONES.SANS_VILLE=new Array("invitation","merchant","profile","crafting");SOM.Shortcuts.ICONES.bank={name:"building_bank",image:"images/items/yield/bag.png"};SOM.Shortcuts.ICONES.church={name:"building_church",image:"images/items/neck/mini/cross_bronze.png"};SOM.Shortcuts.ICONES.cityhall={name:"building_cityhall",image:"images/bank/city.png"};SOM.Shortcuts.ICONES.crafting={name:"crafting",image:"images/items/recipe/recipe_smith.png"};switch(Character.profession){case 1:SOM.Shortcuts.ICONES.crafting.image="images/items/recipe/recipe_cook.png";break;case 2:SOM.Shortcuts.ICONES.crafting.image="images/items/recipe/recipe_quack.png";break;case 3:SOM.Shortcuts.ICONES.crafting.image="images/items/recipe/recipe_smith.png";break;case 4:SOM.Shortcuts.ICONES.crafting.image="images/items/recipe/recipe_sattle.png";break;}SOM.Shortcuts.ICONES.fingerboard={name:"fingerboard",image:"images/items/yield/flag.png"};SOM.Shortcuts.ICONES.general={name:"building_general",image:"images/items/neck/mini/kerchief_blue.png"};SOM.Shortcuts.ICONES.gunsmith={name:"building_gunsmith",image:"images/items/right_arm/mini/deringer_accurate.png"};SOM.Shortcuts.ICONES.hotel={name:"building_hotel",image:"images/items/right_arm/mini/pillow.png"};SOM.Shortcuts.ICONES.invitation={name:"invitations",image:"images/items/yield/letter.png"};SOM.Shortcuts.ICONES.market={name:"building_market",image:"images/items/yield/stolen_goods.png"};SOM.Shortcuts.ICONES.merchant={name:"item_trader",image:"images/itemtrader/haendler_btn.jpg"};SOM.Shortcuts.ICONES.mortician={name:"building_mortician",image:"images/items/yield/testament.png"};SOM.Shortcuts.ICONES.profile={name:"profile",image:"images/items/yield/photo.png"};SOM.Shortcuts.ICONES.saloon={name:"building_saloon",image:"images/items/yield/beer.png"};SOM.Shortcuts.ICONES.sheriff={name:"building_sheriff",image:"images/items/yield/sheriffstar.png"};SOM.Shortcuts.ICONES.tailor={name:"building_tailor",image:"images/items/body/mini/tuetue.png"};SOM.Shortcuts.ICONES.bag={image:"images/inventory/bag.png"};SOM.Shortcuts.ICONES.cancel={image:"images/icons/cancel.png"};SOM.Shortcuts.ICONES.config={image:"images/items/yield/picture.png"};SOM.Shortcuts.ICONES.empty={image:"images/transparent.png"};SOM.Shortcuts.ICONES.map_arrow={image:"images/main/map_arrows.png"};SOM.Shortcuts.ICONES.ok={image:"images/icons/accept.png"};SOM.Shortcuts.ICONES.BORDURE={"true":"2px solid green","false":"2px solid red"};SOM.Shortcuts.CADRE_BORDURE_DEFAUT="2px solid #3B240B";SOM.Shortcuts.CADRE_image_carre=40;SOM.Shortcuts.CADRE_image_fleche=SOM.Shortcuts.CADRE_image_carre/2;SOM.Shortcuts.StorageNames=new Object();SOM.Shortcuts.StorageNames.CASE="SOM_SHORTCUTS_CASE_"+Character.playerId;SOM.Shortcuts.StorageNames.POSITION="SOM_SHORTCUTS_POSITION_"+Character.playerId;SOM.Shortcuts.StorageNames.BORDURE="SOM_SHORTCUTS_BORDURE_"+Character.playerId;SOM.Shortcuts.StorageNames.MAJ="SOM_SHORTCUTS_"+SOM.Shortcuts.NUMERO_SCRIPT+"_MAJ";SOM.Shortcuts.StorageNames.ANNULER="SOM_SHORTCUTS_ANNULER";SOM.Shortcuts.StorageNames.CHERCHER="SOM_SHORTCUTS_CHERCHER";SOM.Shortcuts.StorageNames.ICONES="SOM_SHORTCUTS_ICONES_"+Character.playerId;var f=function(){Trader.open(SOM.Shortcuts.ICONES.merchant.name);};id_fleche_url="id_fleche_url";id_fleche_style="id_fleche_style";var e="";var d="";SOM.Shortcuts.inserer_icone=function(i,g){switch(g){case"bank":case"fingerboard":case"saloon":case"sheriff":SOM.Shortcuts.inserer_icone_image(i,g,function(){AjaxWindow.show(SOM.Shortcuts.ICONES[g].name,{town_id:Character.get_home_town_id()},Character.get_home_town_id());});break;case"church":SOM.Shortcuts.inserer_icone_image(i,g,function(){ChurchWindow.open(Character.get_home_town_id());});break;case"cityhall":SOM.Shortcuts.inserer_icone_image(i,"cityhall",function(){CityhallWindow.open(Character.get_home_town_id());});break;case"crafting":SOM.Shortcuts.ajoute_icone_Crafting(i);break;case"general":case"gunsmith":case"tailor":SOM.Shortcuts.inserer_icone_image(i,g,function(){Trader.open(g,Character.get_home_town_id());});break;case"hotel":SOM.Shortcuts.inserer_icone_image(i,g,function(){HotelWindow.open(Character.get_home_town_id());});break;case"invitation":SOM.Shortcuts.inserer_icone_image(i,"invitation",function(){AjaxWindow.show("invitations");});break;case"market":SOM.Shortcuts.inserer_icone_image(i,g,function(){MarketWindow.open(Character.get_home_town_id(),10);});break;case"merchant":SOM.Shortcuts.ajoute_icone_marchand(i);break;case"mortician":SOM.Shortcuts.inserer_icone_image(i,g,function(){MorticianWindow.open(Character.get_home_town_id());});break;case"profile":SOM.Shortcuts.inserer_icone_image(i,g,function(){AjaxWindow.show("profile",{char_id:Character.playerId},Character.playerId);});break;case"config":SOM.Shortcuts.ajoute_case_config(i);break;case"map_arrows":SOM.Shortcuts.ajoute_fleche(i,"javascript:SOM.Shortcuts.deplace_barre('haut_centre');");break;}};SOM.Shortcuts.generer_menu_raccourcis=function(){jQuery("div#menu_raccourcis").empty();var k=SOM.Shortcuts.getItem("ICONES",SOM.Shortcuts.ICONES.DEFAUT);var g;if(null==Character.home_town){g=SOM.Shortcuts.ICONES.SANS_VILLE;}else{g=SOM.Shortcuts.ICONES.AVEC_VILLE;}var l=0;for(var j=0;j<g.length;j++){if(k[g[j]]){SOM.Shortcuts.inserer_icone(l,g[j]);l++;}}SOM.Shortcuts.inserer_icone(l,"config");SOM.Shortcuts.inserer_icone(l,"map_arrows");SOM.Shortcuts.deplace_barre(SOM.Shortcuts.getItem("POSITION",SOM.Shortcuts.POSITIONS.defaut));SOM.Shortcuts.affectation_style();if(e!=""){SOM.Shortcuts.affiche_decompte_marchand();}};SOM.Shortcuts.inserer_icone_image=function(l,k,j){var g=SOM.Shortcuts.CADRE_image_carre;var i=SOM.jqElement("img",jQuery("div#menu_raccourcis")).attr("src",SOM.Shortcuts.ICONES[k].image).attr("width",g).attr("height",g).css({backgroundImage:"url({0})"._format(SOM.Shortcuts.getItem("CASE",SOM.Shortcuts.ICONES.bag.image)),backgroundSize:g+"px "+g+"px",cursor:"pointer",zIndex:2}).click(j);if(typeof(j)=="string"){i.attr("onclick",j);}else{i.click(j);}SOM.popup(i,AjaxWindow.possibleValues[SOM.Shortcuts.ICONES[k].name]);return i;};SOM.Shortcuts.ajoute_icone_Crafting=function(i){if(Character.profession!=0){var g=SOM.jqElement("div",jQuery("div#menu_raccourcis")).attr("id","div_pts_artisanat").css({display:"block",textAlign:"center",verticalAlign:"middle",position:"absolute",zIndex:3,left:"{0}px"._format(i*SOM.Shortcuts.CADRE_image_carre),top:"0px",fontWeight:"bolder",paddingTop:"{0}px"._format((SOM.Shortcuts.CADRE_image_carre/2)+3),color:"white",width:"{0}px"._format(SOM.Shortcuts.CADRE_image_carre),height:"{0}px"._format((SOM.Shortcuts.CADRE_image_carre/2)-3),cursor:"pointer"}).text(Character.profession_skill).click(function(){CharacterWindow.open();CharacterWindow.showTab("crafting");});SOM.popup(g,AjaxWindow.possibleValues[SOM.Shortcuts.ICONES.crafting.name]);}SOM.Shortcuts.inserer_icone_image(i,"crafting",function(){jQuery("div#div_pts_artisanat").text(Character.profession_skill);CharacterWindow.open();CharacterWindow.showTab("crafting");});};SOM.Shortcuts.ajoute_fleche=function(k,i){var j=SOM.jqElement("a",jQuery("div#menu_raccourcis")).attr("href",i).attr("name",id_fleche_url);var g=SOM.jqElement("img",j).attr("name",id_fleche_style).attr("src",SOM.Shortcuts.ICONES.empty.image).css({backgroundImage:"url({0})"._format(SOM.Shortcuts.ICONES.map_arrow.image),width:SOM.Shortcuts.CADRE_image_fleche+"px",height:SOM.Shortcuts.CADRE_image_fleche+"px",position:"absolute",zIndex:2,left:"{0}px"._format(k*SOM.Shortcuts.CADRE_image_carre),top:"{0}px"._format(SOM.Shortcuts.CADRE_image_carre-SOM.Shortcuts.CADRE_image_fleche)});};SOM.Shortcuts.fenetre_config_alterner_icone=function(g,i){return function(j){var k=SOM.Shortcuts.getItem("ICONES");k[g]=(!k[g]);SOM.setObject(SOM.Shortcuts.StorageNames.ICONES,k);i.css({border:SOM.Shortcuts.ICONES.BORDURE[k[g]]});SOM.Shortcuts.generer_menu_raccourcis();};};SOM.Shortcuts.fenetre_config_icones=function(g){var q,l,o,j,m;q=SOM.jqElement("table",g).attr("width","100%").attr("cellspacing","5").attr("cellpadding","0");l=SOM.jqElement("tbody",q);var n;if(Character.home_town==null){n=SOM.Shortcuts.ICONES.SANS_VILLE;}else{n=SOM.Shortcuts.ICONES.AVEC_VILLE;}var p=SOM.Shortcuts.getItem("ICONES");for(var k=0;k<n.length;k++){if((k%8)==0){o=SOM.jqElement("tr",l);}j=SOM.jqElement("td",o);g=SOM.jqElement("div",j).css({width:SOM.Shortcuts.CADRE_image_carre+"px",height:SOM.Shortcuts.CADRE_image_carre+"px",border:SOM.Shortcuts.ICONES.BORDURE[p[n[k]]],cursor:"pointer"});g.click(SOM.Shortcuts.fenetre_config_alterner_icone(n[k],g));SOM.popup(g,AjaxWindow.possibleValues[SOM.Shortcuts.ICONES[n[k]].name]);m=SOM.jqElement("img",g).attr("src",SOM.Shortcuts.ICONES[n[k]].image).attr("width",SOM.Shortcuts.CADRE_image_carre).attr("height",SOM.Shortcuts.CADRE_image_carre).css({zIndex:"2",backgroundImage:"url({0})"._format(SOM.Shortcuts.ICONES.bag.image),backgroundSize:"{0}px {1}px"._format(SOM.Shortcuts.CADRE_image_carre,SOM.Shortcuts.CADRE_image_carre)});}};SOM.Shortcuts.fenetre_config=function(){AjaxWindow.show("Configuration",undefined,SOM.Shortcuts.NUMERO_SCRIPT,"",{title:"[SOM] TW - Raccourcis {0} : {1}"._format(SOM.Shortcuts.VERSION,AjaxWindow.possibleValues.settings)},true);jQuery("h2#window_Configuration_{0}_title"._format(SOM.Shortcuts.NUMERO_SCRIPT)).css({textAlign:"center"});var m,j,i,k,l,g;m=SOM.jqElement("div",jQuery("div#window_Configuration_{0}_content"._format(SOM.Shortcuts.NUMERO_SCRIPT))).css({overflow:"auto",height:"350px"});j=SOM.jqElement("table",m).attr("width","100%").attr("cellspacing","0").attr("cellpadding","0");i=SOM.jqElement("tbody",j);k=SOM.jqElement("tr",i).css({textAlign:"center"});l=SOM.jqElement("td",k).attr("width","30%");l=SOM.jqElement("td",k);g=SOM.jqElement("img",l).attr("src",SOM.Shortcuts.ICONES.bag.image);l=SOM.jqElement("td",k).css({verticalAlign:"bottom"});g=SOM.jqElement("img",l).attr("name","IMG_Etat_icone_case").attr("src",(SOM.Shortcuts.getItem("CASE",SOM.Shortcuts.ICONES.bag.image)==SOM.Shortcuts.ICONES.empty.image)?SOM.Shortcuts.ICONES.cancel.image:SOM.Shortcuts.ICONES.ok.image).css({cursor:"pointer"});g.click(SOM.Shortcuts.inverse_menu_case(g));l=SOM.jqElement("td",k).attr("width","30%");l=SOM.jqElement("td",k).css({border:SOM.Shortcuts.CADRE_BORDURE_DEFAUT});g=SOM.jqElement("img",l).attr("width",73).attr("src",SOM.Shortcuts.ICONES.empty.image);l=SOM.jqElement("td",k).css({verticalAlign:"bottom"});g=SOM.jqElement("img",l).attr("name","IMG_Etat_bordure").attr("src",(SOM.Shortcuts.getItem("BORDURE",SOM.Shortcuts.CADRE_BORDURE_DEFAUT)=="")?SOM.Shortcuts.ICONES.cancel.image:SOM.Shortcuts.ICONES.ok.image).css({cursor:"pointer"});g.click(SOM.Shortcuts.inverse_menu_bordure(g));l=SOM.jqElement("td",k).attr("width","30%");SOM.jqElement("hr",m);SOM.Shortcuts.fenetre_config_icones(m);SOM.jqElement("hr",m);};SOM.Shortcuts.ajoute_case_config=function(j){var g=SOM.Shortcuts.CADRE_image_carre/2;var i=SOM.jqElement("img",jQuery("div#menu_raccourcis")).attr("src",SOM.Shortcuts.ICONES.config.image).attr("width",g).attr("height",g).click(SOM.Shortcuts.fenetre_config).css({backgroundImage:"url({0})"._format(SOM.Shortcuts.getItem("CASE",SOM.Shortcuts.ICONES.bag.image)),cursor:"pointer",position:"absolute",left:"{0}px"._format(j*SOM.Shortcuts.CADRE_image_carre),zIndex:2});SOM.popup(i,AjaxWindow.possibleValues.settings);};SOM.Shortcuts.inverse_menu_bordure=function(g){return function(j){var i;if(SOM.Shortcuts.getItem("BORDURE",SOM.Shortcuts.CADRE_BORDURE_DEFAUT)==""){i=SOM.Shortcuts.CADRE_BORDURE_DEFAUT;g.attr("src",SOM.Shortcuts.ICONES.ok.image);}else{i="";g.attr("src",SOM.Shortcuts.ICONES.cancel.image);}SOM.setObject(SOM.Shortcuts.StorageNames.BORDURE,i);jQuery("div#menu_raccourcis").css({border:i});};};SOM.Shortcuts.inverse_menu_case=function(g){return function(m){var j,l,n;if(SOM.Shortcuts.getItem("CASE",SOM.Shortcuts.ICONES.bag.image)==SOM.Shortcuts.ICONES.empty.image){j=SOM.Shortcuts.ICONES.bag.image;g.attr("src",SOM.Shortcuts.ICONES.ok.image);}else{j=SOM.Shortcuts.ICONES.empty.image;g.attr("src",SOM.Shortcuts.ICONES.cancel.image);}SOM.setObject(SOM.Shortcuts.StorageNames.CASE,j);l=$("menu_raccourcis");for(var k=0;k<l.children.length;k++){n=l.children[k];if(n.tagName=="IMG"){n.style.backgroundImage="url("+j+")";}}};};SOM.Shortcuts.deplace_barre=function(g){if(typeof(SOM.Shortcuts.POSITIONS[g])=="undefined"){g=SOM.Shortcuts.POSITIONS.defaut;}SOM.setObject(SOM.Shortcuts.StorageNames.POSITION,g);var i=SOM.Shortcuts.POSITIONS[g];window.document.links[id_fleche_url].href='javascript:SOM.Shortcuts.deplace_barre("'+i.next+'");';window.document[id_fleche_style].style.backgroundPosition=i.style;SOM.Shortcuts.affectation_style();};SOM.Shortcuts.affectation_style=function(){var l,g,k,n,m;l=$("menu_raccourcis");if(l==null){return;}g=SOM.Shortcuts.getItem("POSITION",SOM.Shortcuts.POSITIONS.defaut);n=0;for(var j=0;j<l.children.length;j++){m=l.children[j];if(m.tagName=="IMG"){n++;}}k=(SOM.Shortcuts.CADRE_image_carre*(n-0.5));jQuery("div#menu_raccourcis").attr("style",SOM.Shortcuts.POSITIONS[g].position).css({border:SOM.Shortcuts.getItem("BORDURE",SOM.Shortcuts.CADRE_BORDURE_DEFAUT),position:"absolute",zIndex:2,height:"{0}px"._format(SOM.Shortcuts.CADRE_image_carre),width:"{0}px"._format(k),opacity:0.7});if((g=="haut_centre")||(g=="bas_centre")){jQuery("div#menu_raccourcis").css({marginLeft:"-"+(k/2)+"px"});}};SOM.Shortcuts.ajoute_icone_marchand=function(i){span_marchand=SOM.Shortcuts.inserer_icone_image(i,"merchant",f);span_marchand.id="icone_marchand";var g=SOM.jqElement("div",jQuery("div#menu_raccourcis")).attr("id","temps_marchand").click(f).css({display:"block",textAlign:"center",verticalAlign:"middle",position:"absolute",zIndex:3,left:"{0}px"._format((i*SOM.Shortcuts.CADRE_image_carre)),top:"0px",fontWeight:"bolder",paddingTop:"{0}px"._format(((SOM.Shortcuts.CADRE_image_carre/2)+3)),color:"white",width:"{0}px"._format(SOM.Shortcuts.CADRE_image_carre),height:"{0}px"._format(((SOM.Shortcuts.CADRE_image_carre/2)-3)),cursor:"pointer",});SOM.popup(g,AjaxWindow.possibleValues[SOM.Shortcuts.ICONES.merchant.name]);};SOM.Shortcuts.affiche_decompte_marchand=function(){var p=new Date().getTime()/1000;var j=parseInt(e-p);var m=j/3600;var k=parseInt(m);var o=(m-k)*60;var l=parseInt(o);var n=Math.ceil((o-l)*60);var i,g;if(k>2){jQuery("div#temps_marchand").css({outline:""});i="> {0} h"._format(k);g=(l*60+n)*1000;}else{if(k>=1){jQuery("div#temps_marchand").css({outline:"thin dashed yellow"});i="> {0} h"._format(k);g=(l*60+n)*1000;}else{if(l>=1){jQuery("div#temps_marchand").css({outline:"medium dotted orange"});l=l+1;i="{0} min"._format(l);g=(n+1)*1000;}else{if(n>0){jQuery("div#temps_marchand").css({outline:"thick solid red"});n=n+1;i="{0} s"._format(n);g=500;}else{i="{0} s"._format(n);g=10*1000;Trader.open(SOM.Shortcuts.ICONES.merchant.name);setTimeout(SOM.Shortcuts.recup_tps_marchand,g);}}}}jQuery("div#temps_marchand").text(i);setTimeout(SOM.Shortcuts.affiche_decompte_marchand,g);};SOM.Shortcuts.init_langue=function(){if(SOM.Shortcuts.getItem("ANNULER")==null){new Ajax("game.php?window=skill",{method:"post",data:{},onComplete:function(g){SOM.setObject(SOM.Shortcuts.StorageNames.ANNULER,g.match("skill_reskill_cancel_button.*button_middle.*>(\\w+)<.*button_right")[1]);}}).request();}if(SOM.Shortcuts.getItem("CHERCHER")==null){new Ajax("game.php?window=ranking",{method:"post",data:{},onComplete:function(g){SOM.setObject(SOM.Shortcuts.StorageNames.CHERCHER,g.match("Ranking.rank_choose.*button_middle.*>(\\w+)<.*button_right")[1]);}}).request();}};SOM.Shortcuts.recup_tps_marchand=function(){new Ajax("game.php?window=item_trader&action=index&h="+h,{method:"post",data:{},onComplete:function(g){var i=JSON.parse(g);e=i.time;SOM.Shortcuts.affiche_decompte_marchand();}}).request();};SOM.Shortcuts.getItem=function(i,j){var g=SOM.getObject(SOM.Shortcuts.StorageNames[i]);if((g==null)&&(j)){SOM.setObject(SOM.Shortcuts.StorageNames[i],j);return j;}return g;};footer_menu_left=jQuery("div#footer_menu_left");if(footer_menu_left){SOM.Shortcuts.init_langue();menu_raccourcis=SOM.jqElement("div").attr("id","menu_raccourcis").insertAfter(footer_menu_left);SOM.Shortcuts.generer_menu_raccourcis();SOM.Shortcuts.recup_tps_marchand();}};var c=function(d){if(undefined===d){setTimeout(c(1),500);}else{return function(){if(typeof(SOM)=="undefined"){if(3<d){var e=function(){try{var g=navigator.userAgent.toLowerCase();if((g.indexOf("chrome")===-1)&&(g.indexOf("safari")!==-1)){window.open("http://userscripts.org/scripts/show/120825");}else{location.href="http://userscripts.org/scripts/source/120825.user.js";}}catch(i){}};var f='<div><p>This script requires:</p><p style="text-align:center; font-weight:bold;"><b>The West - Common tools [SOM]</b></p><p>Install?</p></div>';showMessage(f,"SOM-Tools Missing",500,undefined,[["Yes",e],["No"]]);}else{setTimeout(c(d+1),500);}}else{a();}};}};try{window.addEvent("domready",c);}catch(b){alert("SOM-Raccourcis :: ERREUR :: "+b);}});}else{(function(b){var c=document;var a=c.createElement("script");a.type="application/javascript";a.textContent="("+b.toString()+")()";(c.body||c.head||c.documentElement).appendChild(a);a.parentNode.removeChild(a);})(function(){if(window.parent.postMessage){window.parent.postMessage("111503"+String(escape(document.body.textContent)),"*");}});}