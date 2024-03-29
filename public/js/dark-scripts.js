//   all ------------------
 function initKotlis() {
     "use strict";
         jQuery(".loader-wrap").fadeOut(200, function() {
             jQuery("#main").animate({
                 opacity: "1"
             }, 500);
         });
		jQuery('.widget-block #s').attr('placeholder','Search..');  
     //   Background image ------------------
     var a = jQuery(".bg");
     a.each(function(a) {
         if (jQuery(this).attr("data-bg")) jQuery(this).css("background-image", "url(" + jQuery(this).data("bg") + ")");
     });
     //   clone ------------------
     jQuery.fn.duplicate = function(a, b) {
         var c = [];
         for (var d = 0; d < a; d++) jQuery.merge(c, this.clone(b).get());
         return this.pushStack(c);
     };
     jQuery("<div class='sb-button_point fl-wrap'></div>").duplicate(3).appendTo(".sb-button");
     //   scroll nav------------------	 
     jQuery(".scroll-init  ul ").singlePageNav({
         filter: ":not(.external)",
         updateHash: false,
         offset: 94,
         threshold: 120,
         speed: 1200,
         currentClass: "act-scrlink"
     });
     //   text rotator------------------
     jQuery.fn.extend({
         rotaterator: function(options) {
             var defaults = {
                 fadeSpeed: 500,
                 pauseSpeed: 100,
                 child: null
             };
             var options = jQuery.extend(defaults, options);

             return this.each(function() {
                 var o = options;
                 var obj = jQuery(this);
                 var items = jQuery(obj.children(), obj);
                 items.each(function() {
                     jQuery(this).hide();
                 })
                 if (!o.child) {
                     var next = jQuery(obj).children(':first');
                 } else {
                     var next = o.child;
                 }
                 jQuery(next).fadeIn(o.fadeSpeed, function() {
                     jQuery(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function() {
                         var next = jQuery(this).next();
                         if (next.length == 0) {
                             next = jQuery(obj).children(':first');
                         }
                         jQuery(obj).rotaterator({
                             child: next,
                             fadeSpeed: o.fadeSpeed,
                             pauseSpeed: o.pauseSpeed
                         });
                     })
                 });
             });
         }
     });
     jQuery('.hero-decor-let').rotaterator({
         fadeSpeed: 500,
         pauseSpeed: 3500
     });
     //   sliders ------------------		
     if (jQuery(".multi-slideshow_1").length > 0) {
         var ms1 = new Swiper(".multi-slideshow_1 .swiper-container", {
             preloadImages: false,
             loop: true,
             speed: 1400,
             spaceBetween: 0,
             effect: "slide",
             autoplay: {
                 delay: jQuery(".multi-slideshow_1 .swiper-container").data("slider-speed"),
                 disableOnInteraction: false
             },
         });
         var ms2 = new Swiper(".multi-slideshow_2 .swiper-container", {
             preloadImages: false,
             loop: true,
             speed: 1400,
             spaceBetween: 0,
             direction: "vertical",
             effect: "slide",
         });
         var ms3 = new Swiper(".multi-slideshow_3 .swiper-container", {
             preloadImages: false,
             loop: true,
             speed: 1400,
             spaceBetween: 0,
             effect: "slide",
         });
         ms1.controller.control = ms2;
         ms2.controller.control = ms1;
         ms2.controller.control = ms3;
         ms3.controller.control = ms2;
         kpsc();
         ms1.on("slideChangeTransitionStart", function() {
             eqwe();
         });
         ms1.on("slideChangeTransitionEnd", function() {
             kpsc();
         });
     }
     if (jQuery(".multi-slideshow_fs").length > 0) {
         var ms1 = new Swiper(".multi-slideshow_fs .swiper-container", {
             preloadImages: false,
             loop: true,
             speed: 1400,
             spaceBetween: 0,
             effect: "fade",
             autoplay: {
                 delay: 3500,
                 disableOnInteraction: false
             },
         });
         kpsc();
         ms1.on("slideChangeTransitionStart", function() {
             eqwe();
         });
         ms1.on("slideChangeTransitionEnd", function() {
             kpsc();
         });
     }
     function kpsc() {
         jQuery(".slide-progress").css({
             width: "100%",
             transition: "width 3000ms"
         });
     }
     function eqwe() {
         jQuery(".slide-progress").css({
             width: 0,
             transition: "width 0s"
         });
     };
    function setUpCarouselSlider() {
        jQuery('.fw-carousel .swiper-wrapper').addClass('no-horizontal-slider');
     if (jQuery(".fw-carousel").length > 0) {      
            if (jQuery(window).width() >= 640 && j2 == undefined)
            {                
         var totalSlides2 = jQuery(".fw-carousel .swiper-slide").length;
         var mouseContr = jQuery(".fw-carousel").data("mousecontrol");
         var j2 = new Swiper(".fw-carousel .swiper-container", {
             preloadImages: false,
             loop: false,
             freeMode: true,
             slidesPerView: 'auto',
			 autoplay: jQuery(".fw-carousel").data("slider-autoplay"),
             spaceBetween: 10,
             grabCursor: true,
             mousewheel: mouseContr,
             speed: jQuery(".fw-carousel").data("slider-speed"),
             direction: "horizontal",
             scrollbar: {
                 el: '.hs_init',
                 draggable: true,
             },
             effect: "slide",
             pagination: {
                 el: '.fw-carousel-counter',
                 type: 'fraction',
                 renderFraction: function(currentClass) {
                     return '<span class="' + currentClass + '"></span>' + '' + '<span class="j2total">' + totalSlides2 + '</span>';
                 }
             },
             navigation: {
                 nextEl: '.fw-carousel-button-next',
                 prevEl: '.fw-carousel-button-prev',
             },
             on: {
                 resize: function() {
                     if (jQuery(window).width() < 640) {
                         j2.update();
                     }
                 },
             }
         });
         jQuery(".fw-carousel.thumb-contr .swiper-slide img").each(function() {
             var ccasdc = jQuery(this).attr("src");
             jQuery("<div class='thumb-img'><img src='" + ccasdc + "'></div>").appendTo(".thumbnail-wrap");
         });
         jQuery(".thumb-img").on('click', function() {
             j2.slideTo(jQuery(this).index(), 500);
             hideThumbnails();
         });
            }

            if (jQuery(window).width() < 640 && j2 !== undefined)
            {
                j2.destroy();
                j2 = undefined;
                jQuery('.fw-carousel .swiper-wrapper').removeAttr('style').addClass('no-horizontal-slider');
                jQuery('.swiper-slide').removeAttr('style');

            }
        }
    }
 	setUpCarouselSlider();
     if (jQuery(".fs-slider").length > 0) {
         var mouseContr2 = jQuery(".fs-slider").data("mousecontrol2");
         var j3 = new Swiper(".fs-slider .swiper-container", {
             preloadImages: false,
             loop: true,
             grabCursor: true,
             speed: 1400,
             spaceBetween: 0,
             effect: "slide",
             mousewheel: mouseContr2,
             pagination: {
                 el: '.hero-slider-wrap_pagination',
                 clickable: true,
             },
             navigation: {
                 nextEl: '.hero-slider-button-next',
                 prevEl: '.hero-slider-button-prev',
             },
             autoplay: {
                delay: jQuery(".fs-slider .swiper-container").data("slider-speed"),
                 disableOnInteraction: false
             },
             on: {
                 init: function() {
                     var fsslideract = jQuery(".fs-slider .swiper-slide-active").data("fsslideropt1"),
                         fsslideract2 = jQuery(".fs-slider .swiper-slide-active").data("fsslideropt2"),
                         fsslideract3 = jQuery(".fs-slider .swiper-slide-active").data("fsslideropt3"),

                         fsslideurl = jQuery(".fs-slider .swiper-slide-active").data("fssurl");


                     jQuery(".opt-one").html(fsslideract);
                     jQuery(".opt-two").html(fsslideract2);
                     jQuery(".opt-three").html(fsslideract3);
                     jQuery(".hero-slider_details_url").attr("href", fsslideurl);
                 },
             }
         });

         j3.on("slideChangeTransitionStart", function() {
             sliderDetailsChangeStart();
         });
         j3.on("slideChangeTransitionEnd", function() {
             sliderDetailsChangeEnd();
         });
         j3.on('slideChange', function() {
             var csli = j3.realIndex + 1,
                 curnum = jQuery('#current');
             TweenMax.to(curnum, 0.2, {
                 force3D: true,
                 y: -10,
                 opacity: 0,
                 ease: Power2.easeOut,
                 onComplete: function() {
                     TweenMax.to(curnum, 0.1, {
                         force3D: true,
                         y: 10
                     });
                     curnum.html(csli);
                 }
             });
             TweenMax.to(curnum, 0.2, {
                 force3D: true,
                 y: 0,
                 delay: 0.3,
                 opacity: 1,
                 ease: Power2.easeOut
             });
         });
         var totalSlides = j3.slides.length - 2;
         jQuery('#total').html(totalSlides);
     }
     var sliderDetailsItem = jQuery(".hero-slider_details li");
     function sliderDetailsChangeStart() {
         TweenMax.to(sliderDetailsItem, 0.8, {
             force3D: true,
             y: "-30px",
             opacity: "0",
             ease: Power2.easeOut,
             onComplete: function() {

                 TweenMax.to(sliderDetailsItem, 0.1, {
                     force3D: true,
                     y: "30px",
                     ease: Power2.easeOut,

                 });
                 var fsslideract = jQuery(".fs-slider .swiper-slide-active").data("fsslideropt1"),
                     fsslideract2 = jQuery(".fs-slider .swiper-slide-active").data("fsslideropt2"),
                     fsslideract3 = jQuery(".fs-slider .swiper-slide-active").data("fsslideropt3"),
                     fsslideurl = jQuery(".fs-slider .swiper-slide-active").data("fssurl");
                 	jQuery(".opt-one").html(fsslideract);
                 	jQuery(".opt-two").html(fsslideract2);
                 	jQuery(".opt-three").html(fsslideract3);
                 	jQuery(".hero-slider_details_url").attr("href", fsslideurl);
             }
         });
     }
     function sliderDetailsChangeEnd() {
         sliderDetailsItem.each(function(ace) {
             var bp2 = jQuery(this);
             setTimeout(function() {
                 TweenMax.to(bp2, 0.6, {
                     force3D: true,
                     y: "0",
                     opacity: "1",
                     ease: Power2.easeOut
                 });
             }, 110 * ace);
         });
     }
     if (jQuery(".fs-slider2").length > 0) {
         jQuery(".fs-slider2.thumb-contr .swiper-slide .bg").each(function() {
             var ccasdc3 = jQuery(this).attr("data-bg");
             jQuery("<div class='thumb-img'><img src='" + ccasdc3 + "'></div>").appendTo(".thumbnail-wrap");
         });
         jQuery(".thumb-img").on('click', function() {
             fsSlider2.slideTo(jQuery(this).index() + 1, 500);
             hideThumbnails();
         });
         var mouseContr2 = jQuery(".fs-slider2").data("mousecontrol2");
         var totalSlides2 = jQuery(".fs-slider2 .swiper-slide").length;
         var fsSlider2 = new Swiper(".fs-slider2 .swiper-container", {
             preloadImages: false,
             loop: true,
             grabCursor: true,
             speed: 1400,
             spaceBetween: 0,
             effect: "slide",
             mousewheel: mouseContr2,
             pagination: {
                 el: '.fw-carousel-counter',
                 type: 'fraction',
                 renderFraction: function(currentClass) {
                     return '<span class="' + currentClass + '"></span>' + '' + '<span class="j2total">' + totalSlides2 + '</span>';
                 }
             },
             autoplay: {
                 delay: 3500,
                 disableOnInteraction: false
             },
             navigation: {
                 nextEl: '.ss-slider-cont-next',
                 prevEl: '.ss-slider-cont-prev',
             },
         });
     }

     function showfs() {
         jQuery("#wrapper").addClass("fs-mode-active");

         TweenMax.to(jQuery(".bottom-panel"), 0.3, {
             force3D: true,
             bottom: "-100px",
             ease: Power2.easeOut
         });
         TweenMax.to(jQuery("header.main-header"), 0.3, {
             force3D: true,
             top: "-100px",
             ease: Power2.easeOut,
             onComplete: function() {
                 TweenMax.to(jQuery(".close-fs"), 0.8, {
                     force3D: true,
                     bottom: 0,
                 });

             }
         });
     }
     function hidefs() {
         jQuery("#wrapper").removeClass("fs-mode-active");
         TweenMax.to(jQuery(".bottom-panel"), 0.3, {
             force3D: true,
             bottom: "0",
             ease: Power2.easeOut
         });
         TweenMax.to(jQuery("header.main-header"), 0.3, {
             force3D: true,
             top: "0",
             ease: Power2.easeOut
         });

         TweenMax.to(jQuery(".close-fs"), 0.8, {
             force3D: true,
             bottom: "-100px",
         });

     }
     jQuery(".fs-mode").on("click", function() {
         showfs();
         return false;
     });
     jQuery(".close-fs").on("click", function() {
         hidefs();
         return false;
     });
     var thumbcont = jQuery(".thumbnail-container"),
         thumbItrm = jQuery(".thumb-img"),
         stbtn = jQuery(".show_thumbnails");
     function showThumbnails() {
         TweenMax.to(thumbcont, 1.0, {
             force3D: true,
             right: 0,
             ease: Expo.easeInOut,
             onComplete: function() {
                 thumbItrm.addClass("visthumbnails");
                 thumbcont.addClass("visthumbnails");
             }
         });
         stbtn.removeClass("unvisthum");
         hideDetails();
     }
     function hideThumbnails() {
         thumbItrm.removeClass("visthumbnails");
         TweenMax.to(thumbcont, 1.0, {
             force3D: true,
             delay: 0.2,
             left: "100%",
             ease: Expo.easeInOut,
             onComplete: function() {
                 TweenMax.to(thumbcont, 0.1, {
                     force3D: true,
                     left: 0,
                     right: "100%",
                     ease: Expo.easeInOut


                 });
                 thumbcont.removeClass("visthumbnails");
             }

         });
         stbtn.addClass("unvisthum");
     }
     stbtn.on("click", function() {
         if (jQuery(this).hasClass("unvisthum")) showThumbnails();
         else hideThumbnails();
     });
     function showDetails() {
         jQuery(".det-overlay").fadeIn(400);
         TweenMax.to(jQuery(".hid-det-anim"), 0.4, {
             force3D: true,
             left: 0,
             ease: Power2.easeOut,
             onComplete: function() {
                 jQuery(".det-anim").each(function(ab) {
                     var bp3 = jQuery(this);
                     setTimeout(function() {
                         TweenMax.to(bp3, 0.6, {
                             force3D: true,
                             y: "0",
                             opacity: "1",
                             ease: Power2.easeOut
                         });
                     }, 110 * ab);
                 });
             }

         });
         jQuery(".shibtn").removeClass("unvisthum2");
         hideThumbnails();
     }
     function hideDetails() {
         jQuery(".det-overlay").fadeOut(400);
         TweenMax.to(jQuery(".hid-det-anim"), 0.4, {
             force3D: true,
             left: "-650px",
             ease: Power2.easeOut,
             onComplete: function() {
                 TweenMax.to(jQuery(".det-anim"), 0.1, {
                     force3D: true,
                     y: "50",
                     opacity: "0",
                     ease: Power2.easeOut
                 });
             }
         });
         jQuery(".shibtn").addClass("unvisthum2");
     }
     jQuery(".shibtn").on("click", function() {
         if (jQuery(this).hasClass("unvisthum2")) showDetails();
         else hideDetails();
     });

     jQuery(".act-closedet").on("click", function() {
         hideDetails();
     });
     jQuery(".initscroll").niceScroll({
         cursorwidth: "0",
         cursorborder: "none",
         cursorborderradius: "0px",
         scrollspeed: 10,
         mousescrollstep: 40,
         hwacceleration: true,
     });
     if (jQuery(".testilider").length > 0) {
         var j2 = new Swiper(".testilider .swiper-container", {
             preloadImages: false,
             slidesPerView: 2,
             spaceBetween: 20,
             loop: true,
             grabCursor: true,
             mousewheel: false,
             navigation: {
                 nextEl: '.ss-slider-next',
                 prevEl: '.ss-slider-prev',
             },
             breakpoints: {
                 640: {
                     slidesPerView: 1,
                 },

             }
         });
     }
     if (jQuery(".single-slider").length > 0) {
         var j2 = new Swiper(".single-slider .swiper-container", {
             preloadImages: false,
             slidesPerView: 1,
             spaceBetween: 0,
             loop: true,
             autoHeight: true,
             grabCursor: false,
             mousewheel: false,
             pagination: {
                 el: '.ss-slider-pagination',
                 clickable: true,
             },
             navigation: {
                 nextEl: '.ss-slider-cont-next',
                 prevEl: '.ss-slider-cont-prev',
             },
         });
     }
     //   Isotope------------------		
     function inithorizontalPortfolio() {
         if (jQuery("#portfolio_horizontal_container").length) {
             var d = jQuery("#portfolio_horizontal_container");
             d.imagesLoaded(function(a, b, e) {
                 var f = {
                     itemSelector: ".portfolio_item",
                     layoutMode: "packery",
                     packery: {
                         isHorizontal: true,
                         gutter: 0
                     },
                     resizable: true,
                     transformsEnabled: true,
                     transitionDuration: "700ms"
                 };
                 var g = {
                     itemSelector: ".portfolio_item",
                     layoutMode: "packery",
                     packery: {
                         isHorizontal: false,
                         gutter: 0
                     },
                     resizable: true,
                     transformsEnabled: true,
                     transitionDuration: "700ms"
                 };
                 if (jQuery(window).width() < 778) {
                     d.isotope(g);
                     d.isotope("layout");
                     d.removeAttr('style');
                     jQuery(".horizontal-grid-wrap").getNiceScroll().remove();
                 } else {
                     d.isotope(f);
                     d.isotope("layout");
                     jQuery(".horizontal-grid-wrap").niceScroll({
                         cursorwidth: "6px",
                         cursorborder: "none",
                         cursorborderradius: "0px",
                         touchbehavior: true,
                         autohidemode: false,
                         cursorcolor: "#4D4D4D",
                         bouncescroll: false,
                         scrollspeed: 120,
                         mousescrollstep: 90,
                         grabcursorenabled: true,
                         horizrailenabled: true,
                         preservenativescrolling: true,
                         cursordragontouch: false,
                         railpadding: {
                             top: -20,
                             right: 0,
                             left: 0,
                             bottom: 0
                         }
                     });
                 }
                 jQuery(".gallery-filters").on("click", "a", function(a) {
                     a.preventDefault();
                     var b = jQuery(this).attr("data-filter");
                     d.isotope({
                         filter: b
                     });
                     jQuery(".gallery-filters a").removeClass("gallery-filter-active");
                     jQuery(this).addClass("gallery-filter-active");
                 });
                 d.isotope("on", "layoutComplete", function(a, b) {
                     var b = a.length,
                         numalb = jQuery(".num-album");
                     TweenMax.to(numalb, 0.2, {
                         force3D: true,
                         y: -10,
                         opacity: 0,
                         ease: Power2.easeOut,
                         onComplete: function() {
                             TweenMax.to(numalb, 0.1, {
                                 force3D: true,
                                 y: 10
                             });
                             numalb.html(b);
                         }
                     });
                     TweenMax.to(numalb, 0.2, {
                         force3D: true,
                         y: 0,
                         delay: 0.3,
                         opacity: 1,
                         ease: Power2.easeOut
                     });
                 });
                 var j = jQuery(".portfolio_item").length;
                 jQuery(".all-album , .num-album").html(j);
             });
         }
     }
     inithorizontalPortfolio();
     jQuery(".filter-title").on("click", function() {
         if (jQuery(window).width() < 1064) {
             jQuery(".gallery-filters").slideToggle(100);
         }
     });
     function n() {
         if (jQuery(".gallery-items").length) {
             var jQuerygrid = jQuery(".gallery-items").isotope({
                 singleMode: true,
                 columnWidth: ".grid-sizer, .grid-sizer-second, .grid-sizer-three",
                 itemSelector: ".gallery-item, .gallery-item-second, .gallery-item-three",
                 resizable: true,
                 transformsEnabled: true,
                 transitionDuration: "700ms"
             });
             jQuerygrid.imagesLoaded(function() {
                 jQuerygrid.isotope("layout");
             });
             jQuery(".gallery-filters").on("click", "a.gallery-filter", function(b) {
                 b.preventDefault();
                 var c = jQuery(this).attr("data-filter");
                 jQuerygrid.isotope({
                     filter: c
                 });
                 jQuery(".gallery-filters a").removeClass("gallery-filter-active");
                 jQuery(this).addClass("gallery-filter-active");
             });
             jQuerygrid.isotope("on", "layoutComplete", function(a, b) {
                 var b = a.length,
                     numalb2 = jQuery(".num-album");

             });
             var b = jQuery(".gallery-item").length;
             jQuery(".all-album , .num-album").html(b);
         }
     }
     n();
     //   lightGallery------------------
     
     //   appear------------------
     jQuery(".stats").appear(function() {
         jQuery(".num").countTo();
     });
     jQuery(".skillbar-box").appear(function() {
         jQuery(this).find("div.skillbar-bg").each(function() {
             jQuery(this).find(".custom-skillbar").delay(600).animate({
                 width: jQuery(this).attr("data-percent")
             }, 1500);
         });
     });
     // Share   ------------------
     jQuery(".share-container").share({
         networks: ['facebook', 'pinterest', 'email', 'twitter', 'linkedin']
     });
     var shrcn = jQuery(".share-container"),
         swra = jQuery(".share-wrapper"),
         shic = jQuery(".share-icon"),
         ssbtn = jQuery(".showshare"),
         sbwrap = jQuery(".hiiden-sidebar-wrap"),
         sbover = jQuery(".sb-overlay"),
         sbbutton = jQuery(".sb-button");
     function showShare() {
         ssbtn.addClass("uncl-share");
         shrcn.removeClass("isShare");
         TweenMax.to(swra, 0.6, {
             force3D: false,
             right: "0",
             ease: Power2.easeOut,
             onComplete: function() {
                 shic.each(function(a) {
                     var boi = jQuery(this);
                     setTimeout(function() {
                         TweenMax.to(boi, 1.0, {
                             force3D: false,
                             opacity: "1",

                         });
                     }, 130 * a);
                 });
             }
         });
         hideSidebar();
     }
     function hideShare() {
         ssbtn.removeClass("uncl-share");
         shrcn.addClass("isShare");
         TweenMax.to(jQuery(".share-icon"), 0.2, {
             force3D: false,
             opacity: "0",

             onComplete: function() {
                 TweenMax.to(swra, 0.6, {
                     force3D: false,
                     delay: 0.2,
                     right: "-300px",
                     ease: Power2.easeOut,
                 });
             }
         });
     }
     ssbtn.on("click", function() {
         if (jQuery(".share-container").hasClass("isShare")) showShare();
         else hideShare();
     });
     function showSidebar() {
         TweenMax.to(sbwrap, 0.8, {
             force3D: true,
             right: "0",
             ease: Power2.easeOut
         });
         sbover.fadeIn(400);
         sbwrap.removeClass("outsb");
         hideShare();

     }
     function hideSidebar() {
         TweenMax.to(sbwrap, 0.8, {
             force3D: true,
             right: "-450px",
             ease: Power2.easeOut
         });
         sbwrap.addClass("outsb");
         sbover.fadeOut(400);
     }

     sbbutton.on("click", function() {
         if (sbwrap.hasClass("outsb")) showSidebar();
         else hideSidebar();
     });

     sbover.on("click", function() {
         hideSidebar();
     });
     //   Video------------------
     
     //   scroll to------------------
     jQuery(".custom-scroll-link").on("click", function() {
         var a = jQuery(".main-header").height();
         if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") || location.hostname === this.hostname) {
             var b = jQuery(this.hash);
             b = b.length ? b : jQuery("[name=" + this.hash.slice(1) + "]");
             if (b.length) {
                 jQuery("html,body").animate({
                     scrollTop: b.offset().top - a
                 }, {
                     queue: false,
                     duration: 1200,
                     easing: "easeInOutExpo"
                 });
                 return false;
             }
         }
     });
     jQuery(".to-top").on("click", function(a) {
         a.preventDefault();
         jQuery("html, body").animate({
             scrollTop: 0
         }, 800);
         return false;
     });
     //  Css------------------
     function csselem() {
         jQuery(".slideshow-container .slideshow-item").css({
             height: jQuery(".slideshow-container").outerHeight(true)
         });
         jQuery(".fs-slider-item").css({
             height: jQuery(".fs-slider").outerHeight(true)
         });
         jQuery(".fs-slider-item ").css({
             height: jQuery(".fs-slider").outerHeight(true)
         });
         jQuery(".ms_item").css({
             height: jQuery(".multi-slideshow_1").outerHeight(true)
         });
         jQuery(".ms_item2").css({
             height: jQuery(".multi-slideshow_2").outerHeight(true)
         });
         jQuery(".ms_item3").css({
             height: jQuery(".multi-slideshow_3").outerHeight(true)
         });
         jQuery(".ms-item_fs").css({
             height: jQuery(".multi-slideshow_fs").outerHeight(true)
         });
         jQuery(".half-slider-img-item").css({
             height: jQuery(".half-slider-img").outerHeight(true)
         });
         jQuery(".horizontal-grid-wrap").css({
             height: jQuery(".hor-content_padd").outerHeight(true) - 92 + "px"
         });

         jQuery(" #portfolio_horizontal_container .portfolio_item img  ").css({
             height: jQuery(".portfolio_item").outerHeight(true)
         });
     }
     csselem();
     jQuery(".nav-button-wrap").on("click", function() {
         jQuery(".main-menu").toggleClass("vismobmenu");
     });
     jQuery(".search-button").on("click", function() {
         jQuery(".search-input").slideToggle(700);
     });
     function mobMenuInit() {
         var ww = jQuery(window).width();
         if (ww < 1064) {
             jQuery(".menusb").remove();
             jQuery(".main-menu").removeClass("nav-holder");
             jQuery(".main-menu nav").clone().addClass("menusb").appendTo(".main-menu");
             jQuery(".menusb").menu();
         } else {
             jQuery(".menusb").remove();
             jQuery(".main-menu").addClass("nav-holder");
         }
     }
     mobMenuInit();
     //   css ------------------
     jQuery(window).on("resize", function() {
         csselem();
         inithorizontalPortfolio();
         mobMenuInit();
		  	setUpCarouselSlider();
     });		
     jQuery("#menu").menu();
     var mouse = {
         x: 0,
         y: 0
     };
     var pos = {
         x: 0,
         y: 0
     };
     var ratio = 0.15;
     var active = false;
     var ball = document.querySelector('.element-item');
     TweenLite.set(ball, {
         xPercent: -50,
         yPercent: -50
     });
     document.addEventListener("mousemove", mouseMove);
     function mouseMove(e) {
         var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
         mouse.x = e.pageX;
         mouse.y = e.pageY - scrollTop;
     }
     TweenMax.ticker.addEventListener("tick", updatePosition);

     function updatePosition() {
         if (!active) {
             pos.x += (mouse.x - pos.x) * ratio;
             pos.y += (mouse.y - pos.y) * ratio;
             TweenMax.set(ball, {
                 x: pos.x,
                 y: pos.y
             });
         }
     }
     jQuery("a , .btn ,   textarea,   input , .single-carousel-control_list li").on({
         mouseenter: function() {
             TweenMax.to('.element-item ', 0.4, {
                 borderColor: 'transparent',
                 scale: 0.5,
                 background: "rgba(0,0,0,0.2)",
                 left: 0,
                 top: 0
             });
         },
         mouseleave: function() {
             TweenMax.to('.element-item ', 0.4, {
                 borderColor: '#fff',
                 scale: 1.0,
                 background: "none"
             });
         }
     });
     jQuery(".sb-button , .share-btn , .fs-mode , .fw_cb , .closedet_style , .single-carousel_arrow").on({
         mouseenter: function() {
             TweenMax.to('.element-item ', 0.4, {
                 transformOrigin: '45px 45px',
                 borderWidth: '1px',
                 scale: 1.8,
                 left: 23,
                 top: 23
             });
         },
         mouseleave: function() {
             TweenMax.to('.element-item ', 0.4, {
                 transformOrigin: '30px 30px',
                 borderWidth: '2px',
                 scale: 1.0,
                 left: 0,
                 top: 0
             });
         }
     });
     jQuery(".swiper-container , .horizontal-grid-wrap").on({
         mouseenter: function() {
             TweenMax.to('.element-item ', 0.4, {
                 transformOrigin: '35px 35px',
                 borderWidth: '1px',
                 borderColor: '#fff',
                 scale: 1.8,
                 left: 23,
                 top: 23
             });
             jQuery(".element-item").addClass("swipericon");
         },
         mouseleave: function() {
             TweenMax.to('.element-item ', 0.4, {
                 transformOrigin: '30px 30px',
                 borderWidth: '2px',
                 borderColor: '#fff',
                 scale: 1.0,
                 left: 0,
                 top: 0
             });
             jQuery(".element-item").removeClass("swipericon");
         }
     });
     jQuery(".swiper-container a.box-media-zoom , .horizontal-grid-wrap .thumb-info a , .horizontal-grid-wrap a.box-media-zoom , .fs-slider_align_title a , .swiper-link").on({

         mouseleave: function() {
             TweenMax.to('.element-item ', 0.4, {
                 transformOrigin: '35px 35px',
                 borderWidth: '1px',
                 borderColor: '#fff',
                 scale: 1.8,
                 left: 23,
                 top: 23
             });
         }
     });
     jQuery(".sb-overlay , .det-overlay ").on({
         mouseenter: function() {
             TweenMax.to('.element-item ', 0.4, {
                 transformOrigin: '35px 35px',
                 borderWidth: '1px',
                 borderColor: '#fff',
                 scale: 1.8,
                 left: 23,
                 top: 23
             });
             jQuery(".element-item").addClass("closeicon");
         },
         mouseleave: function() {
             TweenMax.to('.element-item ', 0.4, {
                 transformOrigin: '30px 30px',
                 borderWidth: '2px',
                 borderColor: '#fff',
                 scale: 1.0,
                 left: 0,
                 top: 0
             });
             jQuery(".element-item").removeClass("closeicon");
         }
     });
     jQuery(".gallery-item , .column-image").on({
         mouseenter: function() {
             TweenMax.to('.element-item ', 0.4, {
                 borderColor: 'rgba(255,255,255,0.7)'
             });
         },
         mouseleave: function() {
             TweenMax.to('.element-item ', 0.4, {
                 borderColor: '#000'
             });
         }
     });
     jQuery(".gallery-item   .box-media-zoom , .gallery-item .thumb-info").on({
         mouseleave: function() {
             TweenMax.to('.element-item ', 0.4, {
                 borderColor: 'rgba(255,255,255,0.7)'
             });
         }
     });
     jQuery(".thumb-info a").on("click", function() {
         var a = jQuery(this).attr("href");
         window.location.href = a;
         return false;
     });
	 
	 //   accordion ------------------
    jQuery(".accordion a.toggle").on("click", function (a) {
        a.preventDefault();
        jQuery(".accordion a.toggle").removeClass("act-accordion");
        jQuery(this).addClass("act-accordion");
        if (jQuery(this).next('div.accordion-inner').is(':visible')) {
            jQuery(this).next('div.accordion-inner').slideUp();
        } else {
            jQuery(".accordion a.toggle").next('div.accordion-inner').slideUp();
            jQuery(this).next('div.accordion-inner').slideToggle();
        }
    });
 }
 function removideo() {
     var a = {
         Android: function() {
             return navigator.userAgent.match(/Android/i);
         },
         BlackBerry: function() {
             return navigator.userAgent.match(/BlackBerry/i);
         },
         iOS: function() {
             return navigator.userAgent.match(/iPhone|iPad|iPod/i);
         },
         Opera: function() {
             return navigator.userAgent.match(/Opera Mini/i);
         },
         Windows: function() {
             return navigator.userAgent.match(/IEMobile/i);
         },
         any: function() {
             return a.Android() || a.BlackBerry() || a.iOS() || a.Opera() || a.Windows();
         }
     };
     trueMobile = a.any();

     if (trueMobile) jQuery(".bgvid , .background-vimeo , .background-youtube-wrapper").remove();
 }


 // twitter ------------------
 jQuery(".hiiden-sidebar-wrap").niceScroll({
     cursorwidth: "0px",
     cursorborder: "none",
     cursorborderradius: "0px",
     scrollspeed: 10,
     mousescrollstep: 40,
     hwacceleration: true,
 });
 function initKotlisins() {
 }
 //   Init All Functions------------------
jQuery(window).on("load", function() {
     initKotlis();
     removideo();
	 initKotlisins();
 });