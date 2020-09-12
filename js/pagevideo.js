
!function(e,t,i){"use strict";"undefined"==typeof e.smg&&(e.smg={}),"undefined"==typeof e.smg.aem&&(e.smg.aem={}),"undefined"==typeof e.smg.aem.components&&(e.smg.aem.components={}),"undefined"==typeof e.smg.aem.components.video&&(e.smg.aem.components.video={}),t().jquery!==i().jquery&&i.fn.bcChromePlayer&&(t=i);var o=(e.smg.aem.varStatic,e.smg.aem.util),s=e.smg.aem.components;s.video=function(){var i={videos:".js-video",ctaPlayVideo:".js-pop-btn, button.js-video",youtube:{iframe:"<iframe src='about:blank' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>",embedSrc:"https://www.youtube.com/embed/{{VIDEO_ID}}?wmode=opaque&rel=0&enablejsapi=1&version=3",autoPlay:"false"},brightcove:{playerType:"",countryCode:"",divID:"",videoTagID:"",videoID:"",videoWidth:"100%",videoHeight:"100%",autoPlay:"false",captionURL:""},mp4:{videoElement:'<video playsinline class="s-video" controlsList="nodownload"><source src="" type="video/mp4"></video>',title:"",videoURL:"",imgURL:"",autoplay:"false",mute:"false",controls:"false",playBtn:".s-mp4-video-play, .js-pop-btn"},aparat:{iframe:"<iframe src='about:blank' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>",embedSrc:"https://www.aparat.com/video/video/embed/vt/frame/pid/0/showadstart/no/showvideo/yes/videohash/{{VIDEO_ID}}",autoPlay:"false"}};return{init:function(e,s){(this.container=e).size()&&(i.brightcove.templateReadyHandler=t.proxy(this.onBrightCoveTemplateReadyHandler,this),this.opts=o.def(i,s||{}),this.youtubeOpt=this.opts.youtube,this.brightcoveOpt=this.opts.brightcove,this.mp4Opt=this.opts.mp4,this.aparatOpt=this.opts.aparat,this._brightcoveOpt=null,this.youtubeIframe=null,this.aparatIframe=null,this.mp4VideoElement=null,this.setElements(),this.bindEventHandlers(),this.setCreateEmbedVideo())},setElements:function(){this.$body=t("body"),this.videosEmbed=this.container.find(this.opts.videos).filter(function(){return"embed"===t(this).attr("data-vid-view")}),this.videosLayer=this.container.find(this.opts.videos).filter(function(){return"layer"===t(this).attr("data-vid-view")})},bindEventHandlers:function(){document.documentMode<=10&&t(this.opts.ctaPlayVideo).on("click.checkOldBrowserLayerVideo",t.proxy(this.checkOldBrowserLayerVideo,this)),t(document).on("click",this.opts.videos,t.proxy(this.setCreateLayerVideo,this))},setCreateEmbedVideo:function(){for(var e=this,t=0,i=this.videosEmbed.length;i>t;t++)!function(i){var o=e.videosEmbed.eq(i),s=o.data("vid-view"),a=o.data("vid-type"),n=o.data("vid-data");switch(a){case"youtube":e.setYoutube(n,s);break;case"brightcove":e.setBrightCove(n);break;case"mp4":e.setMp4Player(n,s,o,t);break;case"aparat":e.setAparat(n)}}(t)},setCreateLayerVideo:function(e){e.stopPropagation();var i=t(e.currentTarget),o=i.data("vid-view"),s=i.data("vid-type"),a=i.data("vid-data"),n=i.closest(".js-home-components");if("embed"!==o){switch(i.attr("data-vid-btn-idx",this.videosLayer.index(i)),t("#"+a.divID).attr("data-vid-btn-idx",i.attr("data-vid-btn-idx")),s){case"youtube":this.setYoutube(a,o);break;case"brightcove":this.setBrightCove(a);break;case"mp4":this.setMp4Player(a,o,i,i.attr("data-vid-btn-idx"));break;case"aparat":this.setAparat(a)}n.size()&&n.addClass("s-video-open"),"layer"===o&&this.container.addClass("video-layer-open"),t("#"+a.divID).closest(".video-area_5").off("aem_hide",t.proxy(this.onAemHide,this)),t("#"+a.divID).closest(".video-area_5").on("aem_hide",t.proxy(this.onAemHide,this))}},checkOldBrowserLayerVideo:function(e){var i=t(e.currentTarget),o=i.data("vid-type");switch(o){case"youtube":if(this.alertOldIeBrowser(10,"Youtube"))return void e.stopImmediatePropagation();break;case"brightcove":if(this.alertOldIeBrowser(8,"Brightcove"))return void e.stopImmediatePropagation();break;case"mp4":if(this.alertOldIeBrowser(8,"Mp4"))return void e.stopImmediatePropagation();break;case"aparat":if(this.alertOldIeBrowser(8,"Aparat"))return void e.stopImmediatePropagation()}},alertOldIeBrowser:function(e,t){if(document.documentMode&&document.documentMode<=e){var i=window.alert;return i("Internet Explorer "+document.documentMode+" doesn't support "+t+" video."),!0}},setYoutube:function(e,i){this.youtubeIframe=t(this.youtubeOpt.iframe),this.youtubeIframe.attr({id:"youtubePlayer_"+e.videoID.split("-").join("_"),src:this.youtubeOpt.embedSrc.replace("{{VIDEO_ID}}",e.videoID)+"&autoplay="+(e.autoPlay&&"true"===e.autoPlay.toLowerCase()?"1":"0")}),t("#"+e.divID).prepend(this.youtubeIframe).closest(".video-area_5").show().closest(".js-video-area").show(),t("#"+e.divID).closest(".video-area_5").off("click",".js-pop-close",t.proxy(this.onCloseBtnClick,this)).on("click",".js-pop-close",t.proxy(this.onCloseBtnClick,this)),this.container.addClass("video-open");var o=t("#"+e.divID).data("video-title");t("#"+e.divID).find("iframe").attr("title",o),"embed"!=i&&t("#"+e.divID).attr("tabindex",0).focus();var s=t("#"+e.divID).closest(".video-area_5"),a={};s.length&&(s.addClass("s-video-youtube"),a=setTimeout(function(){s.addClass("s-youtube-ready")},4500),s.data("timer",a))},setAparat:function(e,i){this.aparatIframe=t(this.aparatOpt.iframe),this.aparatIframe.attr({id:"aparatPlayer_"+e.videoID.split("-").join("_"),src:this.aparatOpt.embedSrc.replace("{{VIDEO_ID}}",e.videoID)+(e.autoPlay&&"true"===e.autoPlay.toLowerCase()?"?data[as]=1":"")}),t("#"+e.divID).closest(".video-area_5").addClass("s-aparat-area"),t("#"+e.divID).prepend(this.aparatIframe).closest(".video-area_5").show().closest(".js-video-area").show(),t("#"+e.divID).closest(".video-area_5").off("click",".js-pop-close",t.proxy(this.onCloseBtnClick,this)).on("click",".js-pop-close",t.proxy(this.onCloseBtnClick,this)),this.container.addClass("video-open");var o=t("#"+e.divID).data("video-title");t("#"+e.divID).find("iframe").attr("title",o)},onCloseBtnClick:function(e,i){var o=t(e.currentTarget),s=o.closest(".video-area_5"),a=s.find(".brightCoveArea"),n=t("#"+o.data("div-id")).attr("data-vid-btn-idx"),r=t('[data-vid-view="layer"][data-vid-btn-idx="'+n+'"]'),d=r.closest(".js-home-components"),c=i;if(r.size())if(r.length>1){var l=r.length-1,p=t(r[l]).closest(".slick-slide");"undefined"!=typeof p?r.each(function(e,i){l===e?t(p).hasClass("slick-cloned")||c||t(i).focus():c||t(i).focus()}):c||r.focus()}else c||r.focus();d.size()&&d.removeClass("s-video-open"),this.container.removeClass("video-layer-open"),s.css("display","none"),s.hasClass("s-aparat-area")&&s.find("iframe").attr("src","about:blank"),a.html(""),o.off("click",t.proxy(this.onCloseBtnClick,this)),clearTimeout(s.data("timer")),s.removeClass("s-video-youtube").removeClass("s-youtube-ready")},onAemHide:function(e){var i=t(e.currentTarget).find(".brightcove-bcc-btn-close, .brightcove-bc5-btn-close"),o=t("#"+i.data("div-id")).attr("data-vid-btn-idx"),s=t('[data-vid-view="layer"][data-vid-btn-idx="'+o+'"]'),a=s.closest(".js-home-components");if(s.size()&&!t(e.target).hasClass("vjs-big-play-button"))if(s.length>1){var n=s.length-1,r=t(s[n]).closest(".slick-slide");"undefined"!=typeof r?s.each(function(e,i){n===e?t(r).hasClass("slick-cloned")||t(i).focus():t(i).focus()}):s.focus()}else s.focus();i.closest(".s-video-area").is(":visible")||a.removeClass("s-video-open")},setBrightCove:function(i){switch(this._brightcoveOpt=t.extend({},this.brightcoveOpt,i),this._brightcoveOpt.playerType){case"brightcoveBc5PlayerLayer":e.brightcoveBc5PlayerLayer(this._brightcoveOpt.countryCode,this._brightcoveOpt.divID,this._brightcoveOpt.videoTagID,this._brightcoveOpt.videoID,this._brightcoveOpt.videoWidth,this._brightcoveOpt.videoHeight,this._brightcoveOpt.autoPlay,this._brightcoveOpt.captionURL);break;case"bcHtml5Player":t("#"+this._brightcoveOpt.divID).bcHtml5Player(this._brightcoveOpt.countryCode,this._brightcoveOpt.videoTagID,this._brightcoveOpt.videoID,this._brightcoveOpt.videoWidth,this._brightcoveOpt.videoHeight,this._brightcoveOpt.autoPlay,this._brightcoveOpt.captionURL)}},setMp4Player:function(e,i,s,a){var n=s,r=null,d=s.data("use-video");if(void 0!==d&&"embed"===i&&"L"==o.cookie.getCookie("__COM_SPEED")){var c=s.closest("[data-use-lowband]");return"false"==c.attr("data-use-lowband")&&c.attr("data-use-lowband","true"),void s.attr("data-use-video","false")}if(this.mp4VideoElement=t(this.mp4Opt.videoElement),this.mp4VideoElement.attr({width:e.videoWidth,height:e.videoHeight}),this.mp4VideoElement.find("source").attr("src",this.getScene7Path(e.videoURL,t(s))),r=n.find(this.mp4Opt.playBtn),r.off("click.mp4Play").on("click.mp4Play",function(e){var i=t(e.currentTarget),o=t("#"+i.closest(".js-video").find(".s-video-player, .s-show-video").attr("id"));e.preventDefault(),e.stopPropagation(),o.find("video")[0].play(),o.find("video").prop("controls",!0),i.css("display","none")}),"true"===e.mute&&this.mp4VideoElement.prop("muted",!0),"true"===e.autoPlay&&this.mp4VideoElement.prop("autoplay",!0),"layer"===i&&("false"===e.controls?this.mp4VideoElement.prop("controls",!1):this.mp4VideoElement.prop("controls",!0)),"embed"===i&&"true"===e.autoPlay&&this.mp4VideoElement.prop("controls",!0),"true"===e.controls&&this.mp4VideoElement.prop("controls",!0),"embed"===i&&"true"===e.scrollPlay&&(r.css("display","none"),this.mp4VideoElement.prop("controls",!1),this.mp4VideoElement.prop("muted",!0),this.mp4VideoElement.prop("autoplay",!0),this.mp4VideoElement.attr("preload","auto")),"true"===e.loop&&this.mp4VideoElement.prop("loop",!0),8===document.documentMode&&"embed"===i&&"true"===e.scrollPlay)this.$body.hasClass("device-without-autoplay")||this.$body.addClass("device-without-autoplay");else{t("#"+e.divID).prepend(this.mp4VideoElement).closest(".video-area_5").show().closest(".js-video-area").show(),t("#"+e.divID).closest(".video-area_5").off("click",".js-pop-close",t.proxy(this.onCloseBtnClick,this)).on("click",".js-pop-close",t.proxy(this.onCloseBtnClick,this)),this.container.addClass("video-open");var l=t("#"+e.divID).data("video-title");t("#"+e.divID).closest(".js-video").find(".s-mp4-video-play").length&&t("#"+e.divID).closest(".js-video").find(".s-mp4-video-play").attr("title",l),s.trigger("bgMp4Ready",a)}},getScene7Path:function(e,i){var o=t("#gnbRunmodeInfo"),s=t("#scene7domain").val(),a=e||"",n="";if(o.length)if("qa"===o.val()||"live"===o.val()){n=a.replace("/content/dam/samsung/",s+"p5/"),n=n.replace("/is/image/","/is/content/");var r=i.attr("data-vid-data").toString();r=r.replace(a,n),i.attr("data-vid-data",r)}else n=a;else n=a;return n}}}(),t(function(){t.each(["show","hide"],function(e,i){var o=t.fn[i];t.fn[i]=function(){return this.trigger("aem_"+i),o.apply(this,arguments)}}),s.video.init(t("body"))})}(window,window.$,window.jQuery),function(e,t){"use strict";"undefined"==typeof e.smg&&(e.smg={}),"undefined"==typeof e.smg.aem&&(e.smg.aem={}),"undefined"==typeof e.smg.aem.components&&(e.smg.aem.components={}),"undefined"==typeof e.smg.aem.components.video&&(e.smg.aem.components.video={});var i=e.smg.aem.components.video;i.mp4AutoPlay=function(){var i={body:"body",evt:{connect:{},responsiveMgr:{responsiveChange:"responsiveChange"}}},o={getObjectInfo:function(){return{responsiveName:this.responsiveName,device:this.device}},init:function(){this.constants(),this.bindEvts(),this.defSetup()},constants:function(){this.device={mobile:{support:!0,name:"mobile",width:768},tablet:{support:!1,name:"tablet",width:1280},desktop:{support:!0,name:"desktop"}},this.evt=i.evt.responsiveMgr},bindEvts:function(){this.resizeListener()},defSetup:function(){this.responsiveChange()},resizeListener:function(){t(e).on("resize",t.proxy(this.responsiveChange,this))},responsiveChange:function(){var o,s=e.document,a=e.innerWidth||s.documentElement.clientWidth||s.body.clientWidth;if(this.device.mobile.support&&a<=this.device.mobile.width)o=this.device.mobile.name;else if(this.device.tablet.support&&a<=this.device.tablet.width)o=this.device.tablet.name;else{if(!this.device.desktop.support)return;o=this.device.desktop.name}var n={responsiveName:""};this.responsiveName?this.responsiveName!==o&&(this.responsiveName=o,n.responsiveName=this.responsiveName,t(i.evt.connect).trigger(this.evt.responsiveChange,n)):(this.responsiveName=o,n.responsiveName=this.responsiveName,t(i.evt.connect).trigger(this.evt.responsiveChange,n))}},s={init:function(){this.orientationchangeListener()},orientationchangeListener:function(){t(e).on("orientationchange",function(i){t(e).trigger("resize.mp4AutoPlay")})}},a={init:function(){this.setElmts(),this.videos&&(s.init(),o.init(),this.defSetup(),this.bindEvts())},setElmts:function(){var e=this;this.videos=null,t(".mp4-video").each(function(i){var o=t(this),s=o.data("vid-data");"true"===s.scrollPlay&&(e.videos=e.videos?e.videos.add(t("#"+s.divID).find("video")):t("#"+s.divID).find("video"),"true"===s.playOnce&&e.videos.eq(i).data("play-once",!0))}),this.playStatus=[],this.support={mobile:t("body").hasClass("device-without-autoplay")?!1:!0,desktop:!0}},bindEvts:function(){this.responsiveListener(),this.videos.each(function(e){var i=t(this);i.on("loadedmetadata",function(){i.attr("data-loaded-metadata",!0),a.matching()})})},defSetup:function(){this.responsiveSupport()},responsiveListener:function(){t(i.evt.connect).on(i.evt.responsiveMgr.responsiveChange,t.proxy(this.responsiveSupport,this))},triggerResponse:function(){t(i.evt.connect).trigger(i.evt.responsiveMgr.responsiveChange)},responsiveSupport:function(){var e=this,t=o.getObjectInfo(),i=function(t){t?(e.bindResizeListener(),e.bindScrollListener()):(e.unbindResizeListener(),e.unbindScrollListener())};switch(t.responsiveName){case t.device.mobile.name:i(this.support.mobile);break;case t.device.desktop.name:i(this.support.desktop)}},bindScrollListener:function(){t(e).off("scroll.mp4AutoPlay").on("scroll.mp4AutoPlay",t.proxy(this.matching,this))},bindResizeListener:function(){t(e).off("scroll.mp4AutoPlay").on("resize.mp4AutoPlay",t.proxy(this.matching,this))},unbindScrollListener:function(){t(e).off("scroll.mp4AutoPlay",t.proxy(this.matching,this))},unbindResizeListener:function(){t(e).off("resize.mp4AutoPlay",t.proxy(this.matching,this))},matching:function(){var e=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,i=(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight)+e,o=this;this.videos.each(function(s){var a=t(this),n=a.outerHeight(),r=a.offset().top,d=r+n;a.data("play-once")&&o.playStatus[s]||(d>=e&&i>=r?o.playStatus[s]||a.data("loaded-metadata")&&(a[0].currentTime=0,a[0].play(),o.playStatus[s]=!0):o.playStatus[s]&&a.data("loaded-metadata")&&(a[0].pause(),o.playStatus[s]=!1))})}},n=function(e){(this.container=e).size()&&a.init()};return{init:n,videoManager:a}}(),t(function(){i.mp4AutoPlay.init(t("body"))})}(window,window.jQuery);
function bccLayerClose(a){var e=bcjQuery("#"+bcjQuery(a).data(void 0===bcjQuery(a).data("div-id")?"video-id":"div-id")),t=e.closest(".video-area_5"),r=(e.closest(".video-wrap"),!1);if(window.videojs){var o=e.find(".video-js").attr("id");o&&videojs(document.getElementById(o)).dispose()}t.hide(0),e.html(""),$.each(bcjQuery(".video-area_5"),function(){return $(this).is(":visible")?(r=!0,!1):void 0}),t.find(".video-wrap .vjs-big-play-button").focus(),(!r||bcjQuery("body").hasClass("video-layer-open"))&&(bcjQuery("body").removeClass("video-open"),bcjQuery("body").removeClass("video-layer-open"))}function brightcoveBc5PlayerLayer(a,e,t,r,o,c,d,n){if(!bcjQuery("body").hasClass("video-layer-open")||!$("#"+e).is(":visible")){bcjQuery("#"+e).bcHtml5Player(a,t,r,o,c,d,n),area=bcjQuery("#"+e).parents(".video-area_5").wrapAll("<div/>").parent(),area.find(".video-area_5").show(),area.find(".brightCoveArea").show(),bcjQuery("body").addClass("video-open"),_video_wrap_5=area.find(".video-wrap_5");var l=Math.max(0,(bcjQuery(window).height()-_video_wrap_5.outerHeight())/2+bcjQuery(window).scrollTop()),i=Math.max(0,(bcjQuery(window).width()-_video_wrap_5.outerWidth())/2+bcjQuery(window).scrollLeft());_video_wrap_5.css({left:i+"px",top:l+"px"}).show().focus()}}function bc5LayerClose(a){var e=bcjQuery("#"+bcjQuery(a).data(void 0===bcjQuery(a).data("div-id")?"video-id":"div-id")),t=e.closest(".video-area_5"),r=(e.closest(".video-wrap"),!1);if(window.videojs){var o=e.find(".video-js").attr("id");o&&videojs(document.getElementById(o)).dispose()}t.hide(0),e.html(""),$.each(bcjQuery(".video-area_5"),function(){return $(this).is(":visible")?(r=!0,!1):void 0}),t.find(".video-wrap .vjs-big-play-button").focus(),(!r||bcjQuery("body").hasClass("video-layer-open"))&&(bcjQuery("body").removeClass("video-open"),bcjQuery("body").removeClass("video-layer-open"))}function getIeVersion(){var a=-1;if("Microsoft Internet Explorer"==navigator.appName){var e=navigator.userAgent,t=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");null!=t.exec(e)&&(a=parseFloat(RegExp.$1))}return a}function bcCLog(a){}var bcc_idx=0,areaLiveTimer,bcjQuery=window.$,bccMsg=new Array,bcBrowser=null;bcBrowser=navigator.userAgent.match(/Android|Mobile|iP(hone|od|ad)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/)?!1:!0;var bcProtocol=null;bcProtocol="http:"==location.protocol?!0:!1,BcHashMap=function(){this.map=new Array},BcHashMap.prototype={put:function(a,e){this.map[a]=e},get:function(a){return this.map[a]}};var bc5playerData={DEV:{accountId:"901961867001",playerId:"Skefq0fEUZ"},DEV2:{accountId:"901961867001",playerId:"Vylv7fdWKl"},LIVE:{accountId:"901973578001",playerId:"rkHiJmE8b"},LIVE_CES:{accountId:"5629323166001",playerId:"yDnIjROR0b"},GLOBAL:{accountId:"2933392367001",playerId:"HyinAQ4IW"},EG:{accountId:"923162680001",playerId:"r1Wa9zBQ8Z"},CN:{accountId:"923270636001",playerId:"SylXp4rXLb"},PK:{accountId:"923227816001",playerId:"rkx4vzBm8b"},LEVANT:{accountId:"923227815001",playerId:"BkuGfH7IZ"},CO:{accountId:"923162663001",playerId:"H1R4Pm7UW"},SG:{accountId:"923162665001",playerId:"Syz3FXQLW"},VN:{accountId:"923136705001",playerId:"ryMuHjmm8W"},US:{accountId:"923227797001",playerId:"B1lhu4BX8Z"},HR:{accountId:"923270646001",playerId:"rJ0SpNX8W"},RS:{accountId:"923162676001",playerId:"Skf0W64mUW"},SI:{accountId:"3855502820001",playerId:"ryKYpN7Lb"},AT:{accountId:"923227809001",playerId:"SJqA5VQUb"},CH_FR:{accountId:"923227810001",playerId:"SJH8oEQIW"},CH:{accountId:"923162673001",playerId:"SyIfiVmUZ"},AR:{accountId:"923270634001",playerId:"SkoYw7mLZ"},PY:{accountId:"4455299568001",playerId:"SyZFOmXIZ"},UR:{accountId:"4455299570001",playerId:"ryezNOmXUZ"},AU:{accountId:"923162666001",playerId:"H12xqm7Ub"},NZ:{accountId:"923136704001",playerId:"BJ7brcXm8W"},EE:{accountId:"923227812001",playerId:"rytC3E7LW"},LV:{accountId:"923270644001",playerId:"rylCU2NmLW"},LT:{accountId:"923227813001",playerId:"BkR5nNXUW"},BE:{accountId:"923136716001",playerId:"H1gxqi4Q8b"},BE_FR:{accountId:"923162674001",playerId:"rkERsVX8Z"},NL:{accountId:"923136717001",playerId:"SklAMhEQ8Z"},JP:{accountId:"923162668001",playerId:"H1elEC7Q8W"},SEC:{accountId:"923136708001",playerId:"BJmCHrmIb"},CA:{accountId:"923270632001",playerId:"BJ04MQXLb"},CA_FR:{accountId:"923227798001",playerId:"rkjclX78W"},CL:{accountId:"923227801001",playerId:"Sy8mK7Q8Z"},CZ:{accountId:"923270642001",playerId:"rJ1TKEXLW"},SK:{accountId:"923227808001",playerId:"rylQe94mIb"},BR:{accountId:"923162661001",playerId:"rkrg7XmUW"},FR:{accountId:"923227807001",playerId:"SkXZOV7Ub"},GR:{accountId:"923136713001",playerId:"HJZ0dEmUZ"},DE:{accountId:"923227805001",playerId:"HylzJLVQLW"},HU:{accountId:"923270637001",playerId:"H14LrEQLb"},HK:{accountId:"923227804001",playerId:"S1e6xSr7Ib"},HK_EN:{accountId:"923136709001",playerId:"BJnNrrmLZ"},IT:{accountId:"923136712001",playerId:"rkgapeE78W"},ID:{accountId:"923162667001",playerId:"ryx3c97XUZ"},KZ_UR:{accountId:"923270647001",playerId:"HJZfeBQLZ"},LATIN:{accountId:"923136703001",playerId:"BJxSu7XQUb"},LATIN_EN:{accountId:"923227800001",playerId:"r1WoKH7QIW"},VE:{accountId:"923162662001",playerId:"rJhxEsPMz"},MX:{accountId:"923227799001",playerId:"SJX05MXQUb"},N_AFRICA:{accountId:"923227817001",playerId:"ByImXr78W"},DK:{accountId:"923270638001",playerId:"Hyb1DEQ8W"},FI:{accountId:"923162672001",playerId:"HkUXD4XUZ"},NO:{accountId:"923227806001",playerId:"B1I2PVmLb"},SE:{accountId:"923162671001",playerId:"B1jKIVQ8b"},PT:{accountId:"923270640001",playerId:"SJburdEmUZ"},PH:{accountId:"923136707001",playerId:"r1Mnk67XUZ"},PL:{accountId:"923270641001",playerId:"BkjYdNQUZ"},PE:{accountId:"923162664001",playerId:"rkXuK77UZ"},RU:{accountId:"923136718001",playerId:"BkZBHJrXUW"},BG:{accountId:"923270643001",playerId:"r1cK5EmIW"},RO:{accountId:"923136715001",playerId:"r1gR45NXIZ"},ES:{accountId:"923162670001",playerId:"H1xJrNQUW"},TW:{accountId:"923270635001",playerId:"BywFHHmUZ"},TR:{accountId:"923136721001",playerId:"r175Zrm8Z"},UA:{accountId:"923162678001",playerId:"S1SKkrQIb"},UA_RU:{accountId:"923162677001",playerId:"B1Ba1rX8Z"},IE:{accountId:"923136711001",playerId:"B1DVe4m8Z"},UK:{accountId:"923136710001",playerId:"SycJx4QLW"},AE:{accountId:"923227814001",playerId:"BygNUlrX8b"},AE_ARABIC:{accountId:"923136719001",playerId:"BJjKlS7UZ"},IN:{accountId:"923162669001",playerId:"S1KRCQX8W"},MY:{accountId:"923136706001",playerId:"B1EqjmQIW"},ZA:{accountId:"2571515531001",playerId:"S1fb7VSQUb"},AFRICA_EN:{accountId:"923270648001",playerId:"HJKv7H7UZ"},AFRICA_FR:{accountId:"923227818001",playerId:"SkmimH7LZ"},AFRICA_PT:{accountId:"923136723001",playerId:"S1b8yEBXLb"},IRAN:{accountId:"923270650001",playerId:"r1YRZSmIZ"},IL:{accountId:"923162679001",playerId:"ryloagBXLb"},SA:{accountId:"923136720001",playerId:"HyItbbS7Ub"},SA_EN:{accountId:"2571515532001",playerId:"SJpHbr7Ub"},TH:{accountId:"923227802001",playerId:"ryoyiQXIZ"},AL:{accountId:"5395474900001",playerId:"S1WPmS4Rg"},LB:{accountId:"5359769185001",playerId:"By5uztNAe"},MM:{accountId:"5395474902001",playerId:"BJWPXt4Al"},GCS:{accountId:"1852113008001",playerId:"B1HX3oXbG"},SC:{accountId:"1275380501001",playerId:"rJUZMbBZG"},LED:{accountId:"2172563229001",playerId:"SJEqMbSWM"},UK_CS:{accountId:"5675787969001",playerId:"Hkmjd40bM"},DE_CS:{accountId:"5675787970001",playerId:"ByxCBuECZG"},BE_CS:{accountId:"5675787971001",playerId:"r1SZIVRWf"},BE_FR_CS:{accountId:"5675787972001",playerId:"r16xOECbz"},NL_CS:{accountId:"5675788007001",playerId:"HymXOVAWf"},ACE:{accountId:"5685289444001",playerId:"Byn7wEUzz"},US_CS:{accountId:"5709700875001",playerId:"SJC96gsNf"},CA_FR_CS:{accountId:"5709700876001",playerId:"rye60eiNG"},CA_CS:{accountId:"5709700877001",playerId:"BJJnCxi4z"},MX_CS:{accountId:"5709700878001",playerId:"SyFThbi4G"},BR_CS:{accountId:"5709700879001",playerId:"rypXhbjEf"},LATIN_CS:{accountId:"5709700880001",playerId:"rJ3qnZoVz"},LATIN_EN_CS:{accountId:"5709700881001",playerId:"rJSnnZjNz"},VE_CS:{accountId:"5709700882001",playerId:"HyyTnWo4M"},CO_CS:{accountId:"5709700883001",playerId:"B1sd6ejEf"},AR_CS:{accountId:"5709700884001",playerId:"ByGBCloVz"},CL_CS:{accountId:"5709700885001",playerId:"HyjTClsVf"},PE_CS:{accountId:"5709700887001",playerId:"H1qXpZs4z"},SG_CS:{accountId:"5709700888001",playerId:"BywY6goNz"},AU_CS:{accountId:"5709700889001",playerId:"rkZZPClsEf"},NZ_CS:{accountId:"5709700890001",playerId:"H1jD0xsVf"},ID_CS:{accountId:"5709700891001",playerId:"rJnOhZi4f"},TH_CS:{accountId:"5711373553001",playerId:"SkiJkGsNG"},VN_CS:{accountId:"5711373555001",playerId:"rJmcTxiEz"},MY_CS:{accountId:"5711373556001",playerId:"SJxYtAZiVG"},PH_CS:{accountId:"5711373557001",playerId:"BJ8M6Wj4M"},TW_CS:{accountId:"5711373558001",playerId:"rJxptpbo4f"},JP_CS:{accountId:"5711373559001",playerId:"Bk4j0ljVG"},IN_CS:{accountId:"5711373560001",playerId:"Sk7CdCZjNG"},CN_CS:{accountId:"5711373561001",playerId:"S1xr6gsNz"},HK_CS:{accountId:"5711373562001",playerId:"HJsUhboVf"},HK_EN_CS:{accountId:"5711373563001",playerId:"H1vvhboNf"},IE_CS:{accountId:"5711373564001",playerId:"HJgpICZjVM"},IT_CS:{accountId:"5711373565001",playerId:"H1Md2boEf"},ES_CS:{accountId:"5711373566001",playerId:"By1FaWoNG"},HU_CS:{accountId:"5711373567001",playerId:"Bye0rnZoVG"},SE_CS:{accountId:"5711373568001",playerId:"Skhl6biEf"},DK_CS:{accountId:"5711373569001",playerId:"HkxTRhWjVG"},FI_CS:{accountId:"5711373571001",playerId:"Bydk6ZiNM"},NO_CS:{accountId:"5711373572001",playerId:"rkMeTWjEz"},FR_CS:{accountId:"5711373573001",playerId:"S1ONnWs4G"},PT_CS:{accountId:"5711373574001",playerId:"rkZwWaWiVz"},PL_CS:{accountId:"5711373575001",playerId:"HyxXTWiVG"},GR_CS:{accountId:"5711373576001",playerId:"Hkx7S3WsNM"},CZ_CS:{accountId:"5711373577001",playerId:"SJOfnWjEf"},SK_CS:{accountId:"5711373578001",playerId:"rkm7hZoNG"},RO_CS:{accountId:"5711373579001",playerId:"Sk2D6ZoEG"},BG_CS:{accountId:"5711373580001",playerId:"BkzvaZjVG"},AT_CS:{accountId:"5711373581001",playerId:"SkaMRgjEz"},CH_CS:{accountId:"5711373582001",playerId:"SJumAxjEG"},CH_FR_CS:{accountId:"5711373583001",playerId:"BylOVAxoVM"},LV_CS:{accountId:"5711373584001",playerId:"B1CFCloEG"},LT_CS:{accountId:"5711373585001",playerId:"rytcRljEz"},EE_CS:{accountId:"5711373586001",playerId:"ryfYAljEG"},RS_CS:{accountId:"5711373587001",playerId:"Skmu3agsEf"},HR_CS:{accountId:"5711373588001",playerId:"Bkcials4G"},RU_CS:{accountId:"5711373589001",playerId:"BJxrLabiNz"},UA_CS:{accountId:"5711373590001",playerId:"SylNBRZiVG"},UA_RU_CS:{accountId:"5711373592001",playerId:"rygURWsNM"},KZ_RU_CS:{accountId:"5711373593001",playerId:"BJq31zoVG"},AE_CS:{accountId:"5711373594001",playerId:"HJgEORWiNz"},AE_ARABIC_CS:{accountId:"5711373595001",playerId:"H1ecP0biEG"},IL_CS:{accountId:"5711373596001",playerId:"SyyCCZs4G"},SA_CS:{accountId:"5711373597001",playerId:"Skd0AboVz"},SA_EN_CS:{accountId:"5711373598001",playerId:"BJfkyGoEM"},TR_CS:{accountId:"5711373599001",playerId:"Hku9aWi4M"},IRAN_CS:{accountId:"5711373600001",playerId:"HkVTCWjVz"},LEVANT_CS:{accountId:"5711373601001",playerId:"HkHwplo4M"},PK_CS:{accountId:"5711373602001",playerId:"S12rTgoEG"},EG_CS:{accountId:"5711373603001",playerId:"SkoQTljVG"},N_AFRICA_CS:{accountId:"5711373604001",playerId:"SyeMCnZjNG"},AFRICA_EN_CS:{accountId:"5711373605001",playerId:"By1sAbiVM"},AFRICA_FR_CS:{accountId:"5711373606001",playerId:"S1MhiRbjEf"},AFRICA_PT_CS:{accountId:"5711373607001",playerId:"SyZtnCbs4M"},ZA_CS:{accountId:"5711373608001",playerId:"SJNq0Wi4G"},SI_CS:{accountId:"5711373609001",playerId:"rJzfRxsVf"},PY_CS:{accountId:"5711373610001",playerId:"SkTHCgo4f"},UR_CS:{accountId:"5711373612001",playerId:"ByII0eiNf"},LB_CS:{accountId:"5711373613001",playerId:"HJK8TlsVz"},AL_CS:{accountId:"5711373614001",playerId:"HJjongoEf"},MM_CS:{accountId:"5711373615001",playerId:"rkyO6xiNM"}},bcHtml5Player=new function(){function ie9CallBack(vodId){bcCLog("html5 ie9 callback !!!!!!!"+vodId);var bc5Info=bc5PlayerMap.get(vodId);bcCLog(bc5Info),bcCLog("html5 ie9 callback End !!!!!!!"+bc5Info.id),videojs(bc5Info.id).ready(function(){bc5MyPlayer=this,bc5MyPlayer.autoplay(eval(bc5Info.autoplay)),bc5MyPlayer.on("play",function(){bcjQuery("#"+bc5Info.id).find(".vjs-big-play-button").hide()}),bcjQuery(bc5Info.targetId+" .vjs-volume-menu-button").keydown(function(a){if(32==a.keyCode){var e=bc5MyPlayer.muted();bc5MyPlayer.muted(1==e?!1:!0)}}),bcjQuery(".video-area").find(".vjs-big-play-button").on("keydown",function(a){return 9==a.which&&a.shiftKey?!1:void 0})})}function fnTabIndexSort(a){bcCLog("html5 fnTabIndexSort !!!!!!!"+a);var e=bc5PlayerMap.get(a);bcCLog(e),bcCLog("html5 fnTabIndexSort End !!!!!!!");var t=navigator.userAgent.toLowerCase();"Netscape"==navigator.appName&&-1!=navigator.userAgent.search("Trident")||-1!=t.indexOf("msie")||(bcjQuery(e.targetId+" .vjs-captions-button").keydown(function(a){13==a.keyCode&&bcjQuery(e.targetId+" .vjs-modal-overlay").hide()}),bcjQuery(e.targetId+" .vjs-texttrack-settings").keydown(function(){bcjQuery(e.targetId+" .vjs-modal-overlay").css("style","")}))}var bc5PlayerMap=new BcHashMap;this.myBc5playerData,this.html5playerData,this.bc5MyPlayer,function($){$.fn.bcHtml5Player=function(alais){var bc5=bcHtml5Player,arr=Array.prototype.slice.call(arguments,1);return bc5.checkNull(arr[0])&&(arr[0]=""),bc5.checkNull(arr[1])&&(arr[1]=""),bc5.checkNull(arr[2])&&(arr[2]="100%"),bc5.checkNull(arr[3])&&(arr[3]="100%"),bc5.checkNull(arr[4])&&(arr[4]="false"),bc5.checkNull(arr[5])&&(arr[5]="false"),myBc5playerData=eval("bc5playerData."+alais.toUpperCase()),"undefined"!=typeof myBc5playerData?(html5playerData={targetId:this.selector,alais:alais,id:arr[0]+"_videoTagID",videoId:arr[1],width:arr[2],height:arr[3],autoplay:arr[4],ccUrl:arr[5],accountId:myBc5playerData.accountId,playerId:myBc5playerData.playerId},bc5PlayerMap.put(html5playerData.videoId,html5playerData),arr=[bcjQuery(this)].concat(arr),bc5.run.apply(bc5,arr)):void 0}}(bcjQuery),this.run=function(a,e,t){bcCLog("html5 Run!! "+t);var r=bc5PlayerMap.get(t);bcCLog(r),bcCLog("html5 Run End!! ");var o=".vjs-menu li:focus{border:white dashed 1px}.vjs-mouse.vjs-has-started.vjs-user-inactive .vjs-control,.vjs-mouse.vjs-has-started.vjs-user-inactive .vjs-control-bar,.vjs-mouse.vjs-has-started.vjs-user-inactive .vjs-progress-control,.vjs-mouse.vjs-has-started.vjs-user-inactive .vjs-time-divider {transition-delay: 0s!important;-webkit-transition-delay: 0s!important;-moz-transition-delay: 0s!important;-ms-transition-delay: 0s!important;-o-transition-delay: 0s!important;}.vjs-big-play-button {top:0px!important; left:0px!important; right:0px!important; bottom:0px!important; margin:auto!important;}.vjs-big-play-button:focus { border:white dashed 1px }.vjs-play-control:focus{ border:white dashed 1px }.vjs-progress-holder:focus { border:white dashed 1px }.vjs-volume-menu-button:focus { border:white dashed 1px }.vjs-captions-button:focus { border:white dashed 1px }.vjs-fullscreen-control:focus { border:white dashed 1px }.vjs-volume-bar:focus{ border:white dashed 1px }.vjs-control-bar.ie8 {display:none !important;}.vjs-fade-out {display: block;visibility: hidden;opacity: 0;-webkit-transition: visibility 1.5s, opacity 1.5s;-moz-transition: visibility 1.5s, opacity 1.5s;-ms-transition: visibility 1.5s, opacity 1.5s;-o-transition: visibility 1.5s, opacity 1.5s;transition: visibility 1.5s, opacity 1.5s;-webkit-transition-delay: 2s;-moz-transition-delay: 2s;-ms-transition-delay: 2s;-o-transition-delay: 2s;transition-delay: 2s;}";o+="/* for IE */ #brightCoveArea2 span {display:inline !important}/* fix bc html5 player */#brightCoveArea2 .vjs-control-text{display:none !important;}.single-area.video-KV.on {max-height: 810px; overflow: hidden;}.vjs-big-play-button{left:0 !important; right:0 !important; top:0 !important; bottom:0 !important; margin: auto;}.vjs-playing .vjs-big-play-button{display:none !important;}.rtl .vjs-control-bar, .rtl .vjs-control-bar *{direction:ltr !important;}";var c,d,n;n=document.getElementsByTagName("head")[0],document.createStyleSheet?(c=document.createStyleSheet(),c.cssText=o):(d=document.createElement("style"),d.type="text/css",d.styleSheet?d.styleSheet.cssText=o:d.appendChild(document.createTextNode(o)),n.appendChild(d)),"8.0"==getIeVersion()&&(document.createElement("video"),document.createElement("track"));var l=this;bcjQuery(a).append(this.markup(t));var i=document.createElement("script");i.type="text/javascript",i.src="//players.brightcove.net/"+r.accountId+"/"+r.playerId+"_default/index.min.js",-1===getIeVersion()?(i.onload=function(){setTimeout(function(){l.callback(t)},500)},document.body.appendChild(i)):8===getIeVersion()?(i.onreadystatechange=function(){("loaded"==i.readyState||"complete"==i.readyState)&&setTimeout(function(){l.callback(t)},500)},document.body.appendChild(i)):9===getIeVersion()?(i.onload=function(){setTimeout(function(){l.callback(t)},500)},bcjQuery(r.targetId).append(i)):10===getIeVersion()&&(i.onload=function(){setTimeout(function(){l.callback(t)},500)},document.body.appendChild(i))},this.markup=function(a){bcCLog("html5 markup !!!!!!!");var e=bc5PlayerMap.get(a);bcCLog(e),bcCLog("html5 markup End !!!!!!!");var t="";return t+='<div style="display:block;position:relative;max-width:100%;width:'+e.width+";height:"+e.height+';">',t+='<div style="padding-top: 56.25%;">',t+='<video id="'+e.id+'"',t+=' data-video-id="'+e.videoId+'"',t+=' data-account="'+e.accountId+'"',t+=' data-player="'+e.playerId+'"',t+=' data-embed="default"',t+=' class="video-js"',t+=' style="width: '+e.width+"; height: "+e.height+';  position: absolute; top: 0px; bottom: 0px; right: 0px; left: 0px;"',t+=" controls>","false"!=e.ccUrl&&(t+=' <track kind="captions" src="'+e.ccUrl+'" srclang="en" label="English" default>'),t+=" </video>",t+=" </div></div>"},this.callback=function(a){bcCLog("html5 callback !!!!!!!"+a);var e=bc5PlayerMap.get(a);bcCLog(e.id),bcCLog("html5 callback End !!!!!!!"),videojs(e.id).ready(function(){bc5MyPlayer=this;var a="true"===e.autoplay;bcCLog(bc5MyPlayer),bcCLog("html5 callback bc5MyPlayer !!!!!!!");var t=bcjQuery("#"+e.id),r=(t.find(".vjs-dock-text"),t.find(".vjs-dock-title"),t.find(".vjs-control-text"),t.find(".vjs-control-bar"),t.find(".vjs-big-play-button")),o=t.find(".vjs-progress-holder"),c=t.find(".vjs-tooltip-progress-bar"),d=t.find(".vjs-menu-button"),n=t.find(".vjs-text-track-display");if(o.attr({"aria-valuenow":"0"}),c.attr({role:"slider","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"0"}),d.attr("role","menu"),n.attr("tabIndex",0),t.closest(".s-video-player, .s-video-container").length&&r.attr("title",t.closest(".s-video-player, .s-video-container").data("video-title")),(9===getIeVersion()||10===getIeVersion())&&t.find(".vjs-captions-button").on("mouseenter",function(a){a.stopPropagation(),bcjQuery(a.currentTarget).find(".vjs-menu-content").css("background-color","rgba(43, 51, 63, 0.7)")}),navigator.userAgent.toLowerCase().indexOf("firefox")>-1){var l=t.closest(".video-area_5").find(".brightcove-bcc-btn-close, .brightcove-bc5-btn-close");l.length&&(l.off("ffoutline").on("focusin.ffoutline",function(a){l.css("outline","1px solid #4d90fe")}),l.off("ffoutline").on("focusout.ffoutline",function(a){l.css("outline","unset")}))}if(t.hasClass("vjs-v5")){var i="",I="",y="",u=null;i=".vjs-control-bar button { font-family: VideoJS !important; } .vjs-big-play-button { font-family: VideoJS !important; }",u=document.getElementsByTagName("head")[0],document.createStyleSheet?(I=document.createStyleSheet(),I.cssText=i):(y=document.createElement("style"),y.type="text/css",y.styleSheet?y.styleSheet.cssText=i:y.appendChild(document.createTextNode(i)),u.appendChild(y))}var p=!1;n.length&&(n.off("DOMSubtreeModified.indexable propertychange.indexable").on("DOMSubtreeModified.indexable propertychange.indexable",function(a){a.stopPropagation(),n.find("div").length>2?p||(n.attr("tabindex",0),p=!0):p&&(p=!1,n.removeAttr("tabindex"))}),n.trigger("DOMSubtreeModified.indexable propertychange.indexable")),a&&r.trigger("click"),bcjQuery(e.targetId+" .vjs-volume-menu-button").keydown(function(a){if(32==a.keyCode){var e=bc5MyPlayer.muted();bc5MyPlayer.muted(1==e?!1:!0)}}),bcjQuery(".video-area").find(".vjs-big-play-button").on("keydown",function(a){return 9==a.which&&a.shiftKey?!1:void 0});/iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase())})},this.checkNull=function(a){return null==a||""==a},bcjQuery(".brightcove-bcc-btn-close, .brightcove-bc5-btn-close").on("click",function(){bc5LayerClose(this)})};
