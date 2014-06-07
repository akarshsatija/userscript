// ==UserScript==
// @name        WorkflowMax Power Search
// @namespace   http://userscripts.org/users/74338
// @description Supercharge Workflowmax Select Job Popup
// @include     https://my.workflowmax.com/*
// @version     0.0.6a
// @require     https://dl.dropboxusercontent.com/u/3209117/wfmax/mutation_summary.js
// @require     https://dl.dropboxusercontent.com/u/3209117/wfmax/jquery.mutation-summary.js
// @grant       none
// ==/UserScript==

// CHANGELOG
// 0.0.1a (2013-05-09)
//  Initial Release (alpha)
// 0.0.2a (2013-05-09)
//  Updated script sources
// 0.0.3a (2013-05-10)
//  Fixed: Enter key causes timer to start
// 0.0.4a (2013-05-10)
//  Added support for search tags
//  Added shortcut: ctrl+space
//      ctrl+space shows the task popup or brings the filter textbox to focus if already shown
// 0.0.5a (2013-05-13)
//  Fixed: Filter by task doesn't always work
//  Fixed: Tag textbox doesn't display after updating tags
//  Auto select job/task id from querystring
// 0.0.6a (2013-05-24)
//      Added alert support when timer is paused for some period of time (EXPERIMENTAL)

(function(){var t,i,u,s,r,f,o,e,h,n,c;c=function(n,t){return setInterval(t,n)},r=null,f=0,n=null,e=null,i=null,t=15,o="",u="Your timer has been paused for too long.",s='<div>\n<label>Filter:<span id="filter-result"><\/span><\/label>\n<input id="task-filter" type="text"/>\n<\/div>\n<div>\n<label>\n    <input type="checkbox" id="notify-on-pause" />\n    Notify me when I forget to resume my time\n    <a id="change-timeout" href="#">Change timeout<\/a>\n<\/label>\n<\/div>',h='<div class="tags" style="margin-top: 10px">\n    <div id="current-tags"><\/div>\n    <input type="text" id="task-tags"/>\n<\/div>\n<style>\n    #filter-result {\n        margin-left: 5px;\n        color: #777;\n        font-style: italic;\n    }\n    #task-tags {\n        display: none;\n    }\n    #current-tags span {\n        padding: 3px;\n        margin-right: 5px;\n        border-radius: 3px;\n        background-color: white;\n        border: 1px solid #ccc;\n    }\n    #timer-paused-popup-background {\n        cursor: pointer;\n        display: none;\n        background-color: #000;\n        opacity: 0.2;\n        z-index: 999;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        min-height: 100px;\n        top: 0;\n        left: 0;\n    }\n\n    #timer-paused-popup {\n        cursor: pointer;\n        display: none;\n        width: 380px;\n        height: 25px;\n        padding: 20px 10px;\n        font-size: 16px;\n        font-weight: bold;\n        border: 1px solid #000;\n        position: absolute;\n        background-color: white;\n        left: 50%;\n        top: 50%;\n        margin-top: -50px;\n        margin-left: -380px;\n        z-index: 1000;\n        border-radius: 3px;\n    }\n<\/style>',function(l){var b,a,y,p,w,k,d,v,g,nt;if(p=function(n,t){var u,i,f,r;for(r=n.split(/\s/),i=0,f=r.length;i<f;i++)if(u=r[i],!t.match(u,"i"))return!1;return!0},w=function(t,i){var y,f,h,s,w,c,u,a,v,k,d,b;if(t.toLowerCase()!==o&&(o=t.toLowerCase(),s=function(){var i,o,e;for(e=[],i=0,o=r.length;i<o;i++)f=r[i],p(t,[f.search,n[f.id+"."]].concat(function(){var t,e,i,r;for(i=f.tasks,r=[],t=0,e=i.length;t<e;t++)u=i[t],r.push(n[f.id+"."+u.id]);return r}()).join(" "))&&e.push(f);return e}(),!i||s.length!==0)){for(l("#timerform_new\\[job\\]").find("option").remove().end().append(function(){var n,i,t;for(t=[],n=0,i=s.length;n<i;n++)f=s[n],t.push('<option value="'+f.id+'">'+f.name+"<\/option>");return t}().join("")),c=[],a=0,k=s.length;a<k;a++)for(h=s[a],b=h.tasks,v=0,d=b.length;v<d;v++)u=b[v],p(t,""+u.name+" "+u.id+" "+h.name+" "+n[h.id+"."+u.id])&&c.push({job:h,task:u});(c.length===1?(w=c[0],l("#timerform_new\\[task\\]").find("option").remove().end().append(function(){var n,r,t,i;for(t=w.job.tasks,i=[],n=0,r=t.length;n<r;n++)u=t[n],i.push('<option value="'+u.id+'">'+u.name+"<\/option>");return i}().join("")).val(w.task.id).change()):(y=document.createEvent("HTMLEvents"),y.initEvent("change",!0,!0),l("#timerform_new\\[job\\]")[0].dispatchEvent(y)),e!==null&&clearTimeout(e),t!=="")&&(l("#filter-result").text(""+s.length+" jobs, "+c.length+" tasks found").stop().show(),e=setTimeout(function(){return l("#filter-result").fadeOut(2e3)},1e3))}},y=function(){var n;location.search.length&&f===r.length&&(n=location.search.match(/id=(\d+)/),n!==null&&(l("#task-filter").val(n[1]),w(n[1],!0)))},d=function(n,t){l.ajax({url:"/ajaxpro/WorkFlowMax.Web.UI.AjaxLib,WorkFlowMax.Web.UI.ashx",type:"post",data:JSON.stringify({job_id:n.id,resource_id:t}),headers:{"X-AjaxPro-Method":"JobTaskListByResource"},success:function(t){var i,r;n.tasks=(r=JSON.parse(t.substr(0,t.length-3)).tasks.task)!=null?r:[],n.search+=" "+function(){var t,f,r,u;for(r=n.tasks,u=[],t=0,f=r.length;t<f;t++)i=r[t],u.push(i.name+" "+i.id);return u}().join(" "),sessionStorage.setItem(n.id,JSON.stringify({tasks:n.tasks,search:n.search}))},complete:function(){if(!n.cached)return f++,y()}})},k=function(){var n,u,t,i,e;for(u=l("#timer-resource").val(),r=function(){var t,u,i,r;for(i=l("#timerform_new\\[job\\] option"),r=[],t=0,u=i.length;t<u;t++)n=i[t],r.push(function(n){var t,i,r;return t=l(n),i=t.attr("value"),r=t.text(),{id:i,name:r,search:""+i+" "+r,tasks:[]}}(n));return r}(),i=0,e=r.length;i<e;i++)n=r[i],t=JSON.parse(sessionStorage.getItem(n.id)),t!==null&&(n.search=t.search,n.tasks=t.tasks,n.cached=!0,f++,y()),d(n,u)},g=function(i){var u,f,r,e;if(!i.length||!function(){var n,r,t;for(t=[],n=0,r=i.length;n<r;n++)u=i[n],u.added.length>0&&t.push(u);return t}().length||l("#task-filter").length){l("#timer-dropdown").mutationSummary("disconnect");return}r=null,l(h).insertBefore("#timer-dropdown .ButtonPanel"),n=JSON.parse(localStorage.getItem("tasktags"))||{},l(s).prependTo("#timer-dropdown .field-container"),k(),l("#notify-on-pause").each(function(){var n;return this.checked=((n=localStorage.getItem("notifyonpause"))!=null?n.toLowerCase():void 0)==="true"}).change(function(){return localStorage.setItem("notifyonpause",l(this).is(":checked"))}),l("#task-filter").focus().bind("keydown",function(n){if((n.which||n.keyCode)===13)return n.preventDefault(),n.stopPropagation(),l("#timerform_new_btnSave").click(),!1}).bind("change keypress",function(){var n;return r!==null&&clearTimeout(r),n=l(this),r=setTimeout(function(){return w(n.val())},500)}),l("#current-tags").click(function(){return setTimeout(function(){return l("#current-tags").hide(),l("#task-tags").show().focus(),l(document).bind("click.tags",function(n){if(!l(n.target).is("#task-tags"))return l(document).unbind("click.tags"),f(l("#task-tags").val())})},50)}),f=function(t){var i,r;return i=[l("#timerform_new\\[job\\]").val(),l("#timerform_new\\[task\\]").val()].join("."),r=l.trim(t),n[i]=r,localStorage.setItem("tasktags",JSON.stringify(n)),l("#current-tags").show(),l("#task-tags").hide(),e()},e=function(){var t,u,i,r;return t=l("#timerform_new\\[job\\]").val(),t!==null&&t.length!==0?(u=[t,l("#timerform_new\\[task\\]").val()].join("."),i=n[u]||"",l("#task-tags").val(i),l("#current-tags").html(function(){var n,f,t,u;for(t=i.split(/\s/),u=[],n=0,f=t.length;n<f;n++)r=t[n],r.length>0&&u.push("<span>"+r+"<\/span>");return u}().join("")||"<span>Click here to add tags<\/span>")):l("#current-tags").html("")},l("#timerform_new\\[job\\], #timerform_new\\[task\\]").change(e),l("#task-tags").keypress(function(n){if((n.which||n.keyCode)===13)return n.preventDefault(),n.stopPropagation(),f(l(this).val()),!1}),l("#change-timeout").click(function(){for(var n=t;;)if(n=prompt("Enter new timeout value in minutes",n),n!==null&&(t=n),!isNaN(parseInt(t)))break;return localStorage.setItem("alertTimeout",t),!1})},v=function(){l("#menu-timeclock").hasClass("timeclock-paused")&&i===null?(i=setTimeout(b,t*6e4),l("#notify-on-pause").attr("disabled","disabled"),l("#change-timeout").hide()):i&&(l("#notify-on-pause").removeAttr("disabled"),l("#change-timeout").show(),clearTimeout(i),i=null)},b=function(){var t,n,r;return t=document.title,i=null,n=0,l("#notify-on-pause").is(":checked")?(r=c(200,function(){return document.title=u.substr(n)+"   "+u.substr(0,n),n>=u.length?n=0:n++}),l("#timer-paused-popup-background, #timer-paused-popup").show(),l("body").live("click.wfmax",function(){return l("body").die("click.wfmax"),clearInterval(r),document.title=t,l("#timer-paused-popup-background, #timer-paused-popup").hide(),!1})):void 0},l("#timer-dropdown").mutationSummary("connect",g,[{element:"#timerform_new_form"}]),l(document).keypress(function(n){if(n.ctrlKey&&(n.which||n.charCode)===32)return l("#task-filter").is(":visible")?l("#task-filter").focus():WorkflowMax.UI.TimerManager.toggle()}),a=localStorage.getItem("alertTimeout"),a===null||isNaN(parseInt(a))||(t=a),WorkflowMax.UI.TimerManager.started){l("body").append('<div id="timer-paused-popup-background">'),l('<div id="timer-paused-popup">').text(u).appendTo("body"),nt=WorkflowMax.UI.TimerManager.started,WorkflowMax.UI.TimerManager.started=function(){return l("#menu-timeclock").mutationSummary("disconnect"),nt(),l("#menu-timeclock").mutationSummary("connect",v,[{attribute:"class"}])},l("#menu-timeclock").hasClass("timeclock-running")&&(v(),l("#menu-timeclock").mutationSummary("connect",v,[{attribute:"class"}]));return}}(jQuery)}).call(this)