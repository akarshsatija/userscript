// ==UserScript== 
// @name Facebook AutoLike Chromium Farsi
// @namespace AutoLike 
// @description Automaticly like facebook statuses and comments 
// @include https://www.facebook.com/* 
// ==/UserScript==

// ==Expand== 
body = document.body; 
if(body != null) { 
div = document.createElement("div"); 
div.style.position = "fixed"; 
div.style.bottom = "+122px"; 
div.style.left = "+6px"; 
div.style.backgroundColor = "#eceff5"; 
div.style.border = "2px solid #94a3c4"; 
div.style.padding = "2px"; 
div.innerHTML = "NO BI TA" 

body.appendChild(div); 

unsafeWindow.AutoExpand = function() { 

buttons = document.getElementsByTagName("input"); 
for(i = 0; i < buttons.length; i++) { 
myClass = buttons[i].getAttribute("class"); 
if(myClass != null && myClass.indexOf("") >= 0) 
if(buttons[i].getAttribute("name") == "view_all") 
buttons[i].click(); 
} 

}; 
} 
// ============== 
// ==Expand Older Posts== 
body = document.body; 
if(body != null) { 
div = document.createElement("div"); 
div.style.position = "fixed"; 
div.style.bottom = "+102px"; 
div.style.left = "+6px"; 
div.style.backgroundColor = "#eceff5"; 
div.style.border = "2px solid #94a3c4"; 
div.style.padding = "2px"; 
div.innerHTML = "[~~d H a n a n K~~']" 

body.appendChild(div); 

unsafeWindow.AutoExpandPosts = function() { 

buttons = document.getElementsByTagName("a"); 
for(i = 0; i < buttons.length; i++) { 
myClass = buttons[i].getAttribute("class"); 
if(myClass != null && myClass.indexOf("lfloat") >= 0) 
if(buttons[i].getAttribute("onclick") == "ProfileStream.getInstance().showMore();return false;") 
buttons[i].click(); 
} 

}; 
} 
// ==Statuses== 
body = document.body; 
if(body != null) { 
div = document.createElement("div"); 
div.style.position = "fixed"; 
div.style.bottom = "+72px"; 
div.style.left = "+6px"; 
div.style.backgroundColor = "#eceff5"; 
div.style.border = "2px solid #94a3c4"; 
div.style.padding = "2px"; 
div.innerHTML = "[Like All Status]" 

body.appendChild(div); 

unsafeWindow.AutoLike = function() { 

buttons = document.getElementsByTagName("button"); 
for(i = 0; i < buttons.length; i++) { 
myClass = buttons[i].getAttribute("class"); 
if(myClass != null && myClass.indexOf("like_link") >= 0) 
if(buttons[i].getAttribute("name") == "like") 
buttons[i].click(); 
} 

}; 
} 
// ==Unlike Statuses== 
body = document.body; 
if(body != null) { 
div = document.createElement("div"); 
div.style.position = "fixed"; 
div.style.bottom = "+52px"; 
div.style.left = "+6px"; 
div.style.backgroundColor = "#eceff5"; 
div.style.border = "2px solid #94a3c4"; 
div.style.padding = "2px"; 
div.innerHTML = "[Unlike All Status]" 

body.appendChild(div); 

unsafeWindow.AutoUnLike = function() { 

buttons = document.getElementsByTagName("button"); 
for(i = 0; i < buttons.length; i++) { 
myClass = buttons[i].getAttribute("class"); 
if(myClass != null && myClass.indexOf("like_link") >= 0) 
if(buttons[i].getAttribute("name") == "unlike") 
buttons[i].click(); 

} 

}; 
} 
