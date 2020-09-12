
!function(e,t){"use strict";"undefined"==typeof e.smg&&(e.smg={}),"undefined"==typeof e.smg.aem&&(e.smg.aem={}),"undefined"==typeof e.smg.aem.components&&(e.smg.aem.components={}),"undefined"==typeof e.smg.aem.components.marketing&&(e.smg.aem.components.marketing={});var s=e.smg.aem.varStatic,l=e.smg.aem.util,i=(e.smg.aem.customEvent,e.smg.aem.components.marketing);i.featureFullBleed=function(){var i=document,a=t(i),n={wrap:".ma-g-c-feature-fullbleed",contentWrap:".ma-g-c-feature-fullbleed__wrap",ctaPlayBtn:".js-pop-btn",videoCloseBtn:".js-pop-close",bgVideoWrap:".s-video-bg",videoSetEl:".mp4-video.js-video",videoWrap:".mp4-video.js-video .s-video-player",carouselContainer:".js-pr-carousel-container, .js-cm-carousel-container"};return{init:function(e,t){(this.container=e).size()&&(this.opts=l.def(n,t||{}),this.setElements(),this.$wrap.length&&(this.activateMp4MobileAutoplay(),this.bindEvents()))},setElements:function(){this.$wrap=this.container.find(this.opts.wrap),this.$bgVideoWrap=this.$wrap.find(this.opts.bgVideoWrap),this.$ctaPlayBtn=this.$wrap.find(this.opts.ctaPlayBtn),this.$videoCloseBtn=this.$wrap.find(this.opts.videoCloseBtn),this.$videoSetEl=this.$bgVideoWrap.find(this.opts.videoSetEl),this.$videoWrap=this.$bgVideoWrap.find(this.opts.videoWrap),this.$body=t("body"),this.fullScreen={},this.isMobileState=!(l.winSize().w<=s.RESPONSIVE.MOBILE.WIDTH)},bindEvents:function(){this.youtubeTimeoutObj={},this.$ctaPlayBtn.off("click.featureFullBleed").on("click.featureFullBleed",t.proxy(this.ctaPlayBtnHandler,this)),this.$videoCloseBtn.off("click.featureFullBleed").on("click.featureFullBleed",t.proxy(this.videoCloseBtnHandler,this)),t(e).on("orientationchange.featureFullBleed",t.proxy(this.onOrientationchange,this)),t(e).on("load.featureFullBleed resize.featureFullBleed",t.proxy(this.onResponsiveChange,this)),a.off("mozfullscreenchange.featureFullBleed webkitfullscreenchange.featureFullBleed fullscreenchange.featureFullBleed").on("mozfullscreenchange.featureFullBleed webkitfullscreenchange.featureFullBleed fullscreenchange.featureFullBleed",t.proxy(this.fullScreenChangeEventHandler,this))},setLayoutState:function(){this.isMobileState=l.winSize().w<=s.RESPONSIVE.MOBILE.WIDTH?!0:!1},ctaPlayBtnHandler:function(e){var i=t(e.currentTarget),a=i.data("vid-data").divID,n=t("#"+a).closest(this.opts.wrap),o=this.youtubeTimeoutObj,r=i.closest(this.opts.carouselContainer),d=t("#"+a).closest(".s-video-wrap"),u=d.find(".s-video-container"),c=i.closest(this.opts.contentWrap).find(this.opts.bgVideoWrap),f=c.find("video"),h=d.find(this.opts.videoCloseBtn),p=n.hasClass("ma-g-c-feature-fullbleed--video-embed");n.addClass("s-video-on"),"youtube"===i.data("vid-type")&&(n.addClass("s-video-youtube"),o=setTimeout(function(){n.addClass("s-youtube-ready")},4500)),t(i).closest(".ma-g-feature-fullbleed").hasClass("slick-slide")||t("body").addClass(s.CSS.LAYER_OPENED),r.hasClass("slick-initialized")&&(r.slick("setOption","draggable",!1),r.slick("setOption","swipe",!1)),f.length&&(this.mp4PlayStatus=f[0].paused?!1:!0),f.length&&!f[0].paused&&f[0].pause(),u.attr("tabindex",0).off("keydown.featureFullBleed").on("keydown.featureFullBleed",function(e){t(e.target).hasClass("s-video-container")&&(!p||p&&l.winSize().w<=s.RESPONSIVE.MOBILE.WIDTH)&&9===e.which&&e.shiftKey&&(e.preventDefault(),h.focus())}),h.off("keydown.featureFullBleed").on("keydown.featureFullBleed",function(e){(!p||p&&l.winSize().w<=s.RESPONSIVE.MOBILE.WIDTH)&&(9!==e.which||e.shiftKey||(e.preventDefault(),u.focus()))})},videoCloseBtnHandler:function(e){var l=t(e.currentTarget),i=l.data("div-id"),a=t("#"+i).closest(this.opts.wrap),n=this.youtubeTimeoutObj,o=l.closest(this.opts.carouselContainer),r=t("#"+i).closest(".s-video-wrap"),d=r.find(".s-video-container"),u=t("#"+i).closest(this.opts.wrap).find(this.opts.bgVideoWrap),c=u.find("video"),f=r.find(this.opts.videoCloseBtn);clearTimeout(n),a.removeClass("s-video-on").removeClass("s-video-youtube").removeClass("s-youtube-ready"),t(l).closest(".ma-g-feature-fullbleed").hasClass("slick-slide")||t("body").removeClass(s.CSS.LAYER_OPENED),o.hasClass("slick-initialized")&&(o.slick("setOption","draggable",!0),o.slick("setOption","swipe",!0)),this.mp4PlayStatus&&c.length&&c[0].paused&&c[0].play(),d.attr("tabindex",-1).off("keydown.featureFullBleed"),f.off("keydown.featureFullBleed")},activateMp4MobileAutoplay:function(){if(this.$videoSetEl.length)for(var e=0;e<this.$videoSetEl.length;e++){var t=this.$videoSetEl.eq(e).find("video");"true"==this.$videoSetEl.eq(e).data("vid-data").controls?t.prop("controls",!0):t.prop("controls",!1),t.prop("muted",!0),t.attr("preload","auto")}},onOrientationchange:function(e){this.hasFullScreenElement()&&a.off("mozfullscreenchange.featureFullBleedOrientation webkitfullscreenchange.featureFullBleedOrientation fullscreenchange.featureFullBleedOrientation").on("mozfullscreenchange.featureFullBleedOrientation webkitfullscreenchange.featureFullBleedOrientation fullscreenchange.featureFullBleedOrientation",t.proxy(this.orientationFullScreenEventHandler,this)),this.onResponsiveChange()},hasFullScreenElement:function(){var e=this.getFullScreenTarget(),s=t(e),l=!1;return s.is("video")&&s.closest(this.opts.bgVideoWrap).length&&s.closest(this.opts.wrap)&&(l=!0),l},getFullScreenTarget:function(){return i.fullscreenElement||i.webkitFullscreenElement||i.mozFullScreenElement||i.msFullscreenElement},fullScreenChangeEventHandler:function(e){var s=this.getFullScreenTarget(),l=t(s);if(void 0==s)void 0!==this.fullScreen.target&&(this.fullScreen.target.addClass(this.fullScreen["class"]),this.fullScreen={});else if(l.is("video")&&l.closest(this.opts.bgVideoWrap).length&&l.closest(this.opts.wrap)){var i=l.closest(this.opts.wrap);i.hasClass("s-mp4-desktop-none")?(this.fullScreen.target=i,this.fullScreen["class"]="s-mp4-desktop-none",i.removeClass("s-mp4-desktop-none")):i.hasClass("s-mp4-mobile-none")?(this.fullScreen.target=i,this.fullScreen["class"]="s-mp4-mobile-none",i.removeClass("s-mp4-mobile-none")):i.hasClass("ma-g-c-feature-fullbleed--text-only")&&(this.fullScreen.target=i,this.fullScreen["class"]="ma-g-c-feature-fullbleed--text-only",i.removeClass("ma-g-c-feature-fullbleed--text-only"))}},orientationFullScreenEventHandler:function(){var e=this.getFullScreenTarget();void 0==e&&(a.off("mozfullscreenchange.featureFullBleedOrientation webkitfullscreenchange.featureFullBleedOrientation fullscreenchange.featureFullBleedOrientation"),this.onResponsiveChange())},onResponsiveChange:function(){var e="",t=l.winSize().w<=s.RESPONSIVE.MOBILE.WIDTH;this.hasFullScreenElement()||(t&&!this.isMobileState?(this.setLayoutState(),e="mobile",this.mp4ResponsiveChange(e),this.setControls(!0)):!t&&this.isMobileState&&(this.setLayoutState(),e="pc",this.mp4ResponsiveChange(e),this.setControls(!1)))},mp4ResponsiveChange:function(e){this.$bgVideoWrap.each(function(s){var l=t(this).find(".js-video"),i=l.find("video"),a="";switch(e){case"mobile":a=l.data("vid-data").videoMobileURL||l.data("vid-data").videoURL;break;case"pc":a=l.data("vid-data").videoURL}i.prop("muted",!0),""!==a&&i.find("source").attr("src")!==a&&(i.find("source").attr("src",a),i[0].load(),i.off("loadedmetadata.featureFullBleed").on("loadedmetadata.featureFullBleed",function(){t(this).data("loaded-metadata",!0)}))})},setControls:function(e){for(var t=0;t<this.$videoSetEl.length;t++){var s=this.$videoSetEl.eq(t).find("video"),l=this.$videoSetEl.eq(t).closest(this.opts.wrap);!e&&l.hasClass("ma-g-c-feature-fullbleed--center-img-over")&&"true"==this.$videoSetEl.eq(t).data("vid-data").controls?s.prop("controls",!0):e&&l.hasClass("ma-g-c-feature-fullbleed--center-img-over")&&"true"==this.$videoSetEl.eq(t).data("vid-data").controls&&s.prop("controls",!1)}}}}(),t(function(){i.featureFullBleed.init(t("body"))})}(window,window.jQuery);
!function(e,t){"use strict";"undefined"==typeof e.smg&&(e.smg={}),"undefined"==typeof e.smg.aem&&(e.smg.aem={}),"undefined"==typeof e.smg.aem.components&&(e.smg.aem.components={}),"undefined"==typeof e.smg.aem.components.marketing&&(e.smg.aem.components.marketing={});var n=(e.smg.aem.varStatic,e.smg.aem.util),s=e.smg.aem.customEvent,i=e.smg.aem.components.marketing;i.introCopy=function(){var e={wrap:".ma-g-c-intro-copy",copyFigure:".ma-g-c-intro-copy__figure .js-img-src",removeMobileTextClass:"ma-g-c-intro-copy--text-only"};return{init:function(t,s){(this.container=t).size()&&(this.opts=n.def(e,s||{}),this.setElements(),this.$wrap.length&&this.bindEvents())},setElements:function(){this.$wrap=this.container.find(this.opts.wrap),this.$figureImg=this.$wrap.find(this.opts.copyFigure),this.$body=t("body")},bindEvents:function(){this.$body.on(s.RESPONSIVE.CHANGE,t.proxy(this.onResponsiveChange,this)),this.$body.trigger(s.RESPONSIVE.GET_STATUS)},onResponsiveChange:function(e,t){var n=t.RESPONSIVE_NAME;n="desktop"===n||"tablet"===n?"desktop":"mobile",this.detectRemoveTextOnly(n)},detectRemoveTextOnly:function(e){var t=this,n=e;this.$wrap.each(function(e){var s=t.$wrap.eq(e),i=s.find(".js-img-src");i.length&&void 0===i.attr("data-src-pc")&&i.attr("data-src-mobile").length>0&&("desktop"===n?s.addClass(t.opts.removeMobileTextClass):"mobile"===n&&s.removeClass(t.opts.removeMobileTextClass))})}}}(),t(function(){i.introCopy.init(t("body"))})}(window,window.jQuery);
!function(n,t){"use strict";"undefined"==typeof n.smg&&(n.smg={}),"undefined"==typeof n.smg.aem&&(n.smg.aem={}),"undefined"==typeof n.smg.aem.components&&(n.smg.aem.components={}),"undefined"==typeof n.smg.aem.components.marketing&&(n.smg.aem.components.marketing={});var o=n.smg.aem.varStatic,e=n.smg.aem.util,a=n.smg.aem.customEvent,s=n.smg.aem.components.marketing;s.floatingNav=function(){var s=!1,i="Netscape"==navigator.appName&&-1!=navigator.userAgent.toLowerCase().indexOf("trident")||-1!=navigator.userAgent.toLowerCase().indexOf("msie"),f=null,r=".ma-floating-nav",l={prev:"prev",next:"next"},u={scrollX:!0,scrollY:!1,scrollbars:!1,disablePointer:!0,disableTouch:!1,disableMouse:!1,interactiveScrollbars:!1,preventDefaultException:{tagName:/(a|img|span)/i}},c="ma-floating-nav--mobile-scroll",d=t("body"),m=t("html").hasClass("rtl")||!1,h=t(r),g=h.find(".ma-floating-nav__wrap"),v=g.find(".ma-floating-nav__menu"),p=v.find(".ma-floating-nav__menu-list"),w=p.find("a"),C=null,S=function(){var n=function(n,t){s=t.RESPONSIVE_NAME===o.RESPONSIVE.MOBILE.NAME?!0:!1},e=function(){d.on(a.RESPONSIVE.CHANGE,t.proxy(n,this)),d.trigger(a.RESPONSIVE.GET_STATUS)},i=function(){d.off(a.RESPONSIVE.CHANGE),d.off(a.RESPONSIVE.GET_STATUS)};return{run:e,reset:i}}(),y=function(){return h.length?h:t(".ma-floating-nav")},E=function(){var o=y(),e="s-nav-fixed",a=function(){t(n).on("floating.scroll",t.proxy(function(){var n=f();n.scrollTop>n.offset?s():i()}))},s=function(){o.hasClass(e)||o.addClass(e)},i=function(){o.hasClass(e)&&o.removeClass(e)},f=function(){return{offset:o.length?o.offset().top:0,scrollTop:t(n).scrollTop()}},r=function(){t(n).off("floating.scroll")},l=function(){a(),t(n).on("scroll",t.proxy(function(){t(n).trigger("floating.scroll")}))};return{run:l,reset:r}}(),T=function(){var o=y(),a=o.find(".ma-floating-nav__menu-container"),r=a.find("li >a"),l=a.find("li.s-active >a"),u=o.find(".bar"),g=0,p=0,w=0,S=0,E=null,T=function(n){var o=parseInt(n.css("padding-left"));g=m?0:Math.abs(Number(a.css("transform").replace(/.*\(|\)| /g,"").split(",")[16===a.css("transform").replace(/.*\(|\)| /g,"").split(",").length?12:4])),p=m?n&&n.length?v.scrollLeft()+(i?-1:1)*n.parent().offset().left:0:-1*(n&&n.length?n.parent().offset().left-t(window).width()+n.parent().outerWidth(!0)+g:0),w=n&&n.length?n.position().left+o+g-parseInt(a.css("margin-left")):0,S=n.length?n.outerWidth(!0)-2*o:0},N=function(n,t){T(n),u.css("transition-duration","1s").stop()[t?"css":"animate"]({left:w,width:S},{duration:550})},x=function(n,t){setTimeout(function(){T(n),u.css("transition-duration","0s").stop()[t?"css":"animate"]({left:w,width:S},{duration:550}),n.length&&(m?n.parent().offset().left<0&&v.stop().animate({scrollLeft:p},{duration:1e3}):e.winSize().w-n.outerWidth(!0)<=n.parent().offset().left&&C.scrollTo(p,0,1e3))},100)},O=function(n,t){e.winSize().w<a.outerWidth(!0)?(clearTimeout(E),E=setTimeout(function(){T(n),m?n.parent().offset().left<0&&v.stop().animate({scrollLeft:p},{duration:1e3}):(p>0&&(p=0),C.scrollTo(p,0,1e3)),u.css("transition-duration","0s").stop()[t?"css":"animate"]({left:w,width:S},{duration:550})},250)):(clearTimeout(E),E=setTimeout(function(){T(n),u.css("transition-duration","1s").stop()[t?"css":"animate"]({left:w,width:S},{duration:550})},250))},_=function(){r.on("mouseenter",function(n){var o=t(n.currentTarget);d.hasClass("touch-device")||N(o,!0)}),a.on("mouseleave touchend",function(n){if(s){if(h.hasClass(c)){if(d.hasClass("touch-device"))return;N(l,!0)}}else N(l,!0)})},k=function(){r.off("mouseenter focusin"),a.off("mouseleave focusout")},L=function(){t(n).off("resize.maFloatingNav orientationchange.maFloatingNav").on("resize.maFloatingNav orientationchange.maFloatingNav",function(){clearTimeout(f),f=setTimeout(t.proxy(function(){O(l,!0)}),100)})},R=function(){t(n).on("load.maFloatingNav",function(){x(l,!0)})},b=function(){_(),R()};return{run:b,resize:L,reset:k,setting:N}}(),N=function(n){var t,o=y(),e=o.find(".ma-floating-nav__inner"),a=o.find(".ma-floating-nav__headline-link"),s=o.find(".ma-floating-nav__button-wrap").find(".s-snav-button"),i=o.find(".ma-floating-nav__menu-list"),f=i.find("li:last > a"),r=i.find("li:first > a");return n?void(o.hasClass(c)||(a.attr("tabIndex",0),e.off("keydown").on("keydown",function(n){t=n.shiftKey}),a.on("keydown",function(n){o.hasClass("s-nav-opened")&&(n.shiftKey||9!==n.keyCode||(n.preventDefault(),r.focus()),n.shiftKey&&9===n.keyCode&&(n.preventDefault(),s.length?s.eq(length-1).focus():f.focus()))}),i.on("focusout",function(n){o.hasClass("s-nav-opened")&&(this.contains(n.relatedTarget)||(s.length?t?a.focus():s.eq(0).focus():a.focus()))}),s.length&&s.parent().on("focusout",function(n){o.hasClass("s-nav-opened")&&(this.contains(n.relatedTarget)||(t?f.focus():a.focus()))}))):(a.removeAttr("tabIndex"),e.off("keydown"),a.off("keydown"),i.off("focusout"),void s.parent().off("focusout"))},x=function(){var o=function(){T.resize()},e=function(){o(),d.on(a.RESPONSIVE.CHANGE,t.proxy(f,this)),d.trigger(a.RESPONSIVE.GET_STATUS)},i=function(){setTimeout(function(){_.active(),_.mouseShadowLeft(),_.mouseShadowRight()},100)},f=function(){s?(N(!0),null==C&&!m&&y().hasClass(c)&&i()):(d.removeClass("layer-opened"),h.removeClass("s-nav-opened"),N(!1),null!=C||m||i())},r=function(){t(n).off("floating.resize")};return{run:e,reset:r}}(),O=function(){var n=y(),o=n.find(".ma-floating-nav__headline-link"),e="s-nav-opened",a="layer-opened";if(!n.hasClass(c)){var i=function(){o.on("click keyup",t.proxy(function(t){if(t.preventDefault(),s){if("keyup"===t.type&&13!==t.keyCode)return;n.hasClass(e)?(n.removeClass(e),d.removeClass(a)):(n.addClass(e),n.hasClass("s-nav-fixed")&&d.addClass(a))}}))},f=function(){w.off("click.maFloatingNav").on("click.maFloatingNav",t.proxy(function(t){s&&n.hasClass(e)&&(n.removeClass(e),d.removeClass(a))}))};i(),f()}},_={shadowLeftOn:function(){h.hasClass(l.prev)||h.addClass(l.prev)},shadowLeftOff:function(){h.hasClass(l.prev)&&h.removeClass(l.prev)},shadowRightOn:function(){h.hasClass(l.next)||h.addClass(l.next)},shadowRightOff:function(){h.hasClass(l.next)&&h.removeClass(l.next)},mouseShadowLeft:function(n){var n=C.x;0>n?_.shadowLeftOn():50>n&&_.shadowLeftOff()},mouseShadowRight:function(n,t){var t=C.maxScrollX,n=C.x;0>=n&&n>t?_.shadowRightOn():t>=n&&_.shadowRightOff()},tabShadowLeft:function(n){n>0?_.shadowLeftOn():_.shadowLeftOff()},tabShadowRight:function(n,t){t>=n&&_.shadowRightOn(),n>=t&&_.shadowRightOff()},reset:function(){p.css({transform:"translate(0px, 0px)"}),v.scrollLeft(0),setTimeout(function(){_.shadowLeftOff()},100)},active:function(){void 0!==n.IScroll&&(C=new IScroll(v[0],u),p.on("touchstart"+r+" mousedown"+r,function(){v.scrollLeft()>0&&(v.scrollLeft(0),C.refresh())}),p.on("touchmove"+r+" mousemove"+r+" transitionend"+r+" webkitTransitionEnd"+r+" oTransitionEnd"+r+" otransitionend"+r,function(){s&&(_.mouseShadowLeft(),_.mouseShadowRight(),w.on("click",function(n){C.moved&&n.preventDefault()}))}))}},k=function(){h.length&&(S.run(),E.run(),T.run(),O(),x.run())};return{init:k}}(),t(function(){s.floatingNav.init()})}(window,window.jQuery);