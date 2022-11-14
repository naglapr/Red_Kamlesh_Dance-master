/*
Copyright (c) 2016
------------------------------------------------------------------
[Master Javascript]
Project: Dance html template
-------------------------------------------------------------------*/
(function($) {
    "use strict";
    var Dance = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function() {
            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }
            /*-------------- projectname Functions Calling ---------------------------------------------------
            ------------------------------------------------------------------------------------------------*/
            this.RTL();
            this.Stellar();
            this.On_scroll_menu();
            this.Search_icon();
            this.Team_slider();
            this.Client_slider();
            this.Magnific_popup();
			this.Related_Product_Slider();
            this.Greensock_animation();
            this.ColorPicker();
            this.Testimonial_slider();
            
        },
        /*-------------- projectname Functions definition ---------------------------------------------------
        ---------------------------------------------------------------------------------------------------*/
        RTL: function() {
            var rtl_attr = $("html").attr('dir');
            if (rtl_attr) {
                $('html').find('body').addClass("rtl");
            }
        },
        Stellar: function() {
            $(function() {
                $.stellar({
                    horizontalScrolling: false,
                    verticalOffset: 1
                });
            });
        },
        Search_icon: function() {
            $(".dc_search_icon").click(function() {
                $(".dc_search_wrapper").toggleClass('open_form');
            });
        },
        On_scroll_menu: function() {
            var wh = window.innerWidth;
            var h = window.innerHeight;
            var window_top = $(window).scrollTop();
            if ((wh > 991) && (window_top > 100)) {
                //$('.dc_menu_wrapper').addClass('sidebar_menu');
                $(".menu_toggle").click(function() {
                    $(".dc_menu").addClass('open_menu');
                });
                $(".menu_close").click(function() {
                    $(".dc_menu").removeClass('open_menu');
                });
            } else {}
        },
		
        Testimonial_slider: function() {
            $(".dc_testimonial_wrapper .owl-carousel").owlCarousel({
                loop: true,
                items: 1,
                dots: true,
                nav: false,
                autoHeight: true,
                touchDrag: false,
                mouseDrag: false,
                margin: 0,
                autoplay: true,
                navText: ['', ''],
                animateIn: 'flipInX',
                animateOut: 'fadeOut'
            });
        },
		Team_slider : function() {
			$(".dc_team_slider .owl-carousel").owlCarousel({
				loop: true,
				items: 3,
				dots: false,
				nav: true,
				autoHeight: true,
				touchDrag: false,
				mouseDrag: false,
				margin: 15,
				autoplay: true,
				navText: ['<i class="flaticon-direction196"></i>', '<i class="flaticon-right138"></i>'],
				responsive: {
					0: {
						items: 1,
					},
					480: {
						items: 2,
					},
					768: {
						items: 3,
					},
					1068: {
						items: 3,
					}
				}
			});
        },
		ColorPicker: function(){
                jQuery('.dc_colorchange').on("click", function() {
					var theme_url = $('input[name=dance_template_url]').val();
			                 var name = $(this).attr('id');
                                
					var new_style = theme_url + '/assets/css/color/' + name + '.css';
                                             
					jQuery('#dance-theme-change-css').attr('href', new_style);
				});
			},
        Client_slider: function() {
            $(".dc_partner_wrapper .owl-carousel").owlCarousel({
                loop: true,
                items: 4,
                dots: false,
                nav: true,
                autoHeight: true,
                touchDrag: false,
                mouseDrag: false,
                margin: 15,
                autoplay: true,
                navText: ['<i class="flaticon-direction196"></i>', '<i class="flaticon-right138"></i>'],
                responsive: {
                    0: {
                        items: 1,
                    },
                    480: {
                        items: 2,
                    },
                    768: {
                        items: 3,
                    },
                    1068: {
                        items: 4,
                    }
                }
            });
        },
		Magnific_popup: function() {
            $('.play_btn').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'video_container',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
		},
		Related_Product_Slider: function() {
            $(".dc_relatedproduct_slider .owl-carousel").owlCarousel({
                loop: true,
                items: 3,
                dots: false,
                nav: true,
                autoHeight: true,
                touchDrag: false,
                mouseDrag: false,
                margin: 15,
                autoplay: true,
                navText: ['<i class="flaticon-direction196"></i>', '<i class="flaticon-right138"></i>'],
                responsive: {
                    0: {
                        items: 1,
                    },
                    480: {
                        items: 2,
                    },
                    768: {
                        items: 2,
                    },
                    1068: {
                        items: 3,
                    }
                }
            });
        },
        
        Greensock_animation: function() {
            var controller = $.superscrollorama({
                triggerAtCenter: true,
                playoutAnimations: true
            });
            // amount of scrolling over which the tween takes place (in pixels)
            var scrollDuration = 0;
            controller.addTween('.dc_portfolio_section', TweenMax.from($('.grid-item'), 1, {
                skewX: -10,
                rotationX: 90,
                ease: Power4.easeInOut,
                y: 0
            }), scrollDuration);
            controller.addTween('.dc_portfolio_section', TweenMax.to($('.grid-item'), 1, {
                skewX: 0,
                rotationX: 0,
                ease: Power4.easeInOut,
                y: 0
            }), scrollDuration);
            controller.addTween('.dc_event_section', TweenMax.from($('.dc_event .dc_event_date'), .5, {
                scaleY: 0,
                ease: Power4.easeInOut,
                y: 0
            }), scrollDuration);
            controller.addTween('.dc_event_section', TweenMax.to($('.dc_event .dc_event_date'), .5, {
                scaleY: 1,
                ease: Power4.easeInOut,
                y: 0
            }), scrollDuration);
            // controller.addTween('.dc_blog_container', TweenMax.from($('.dc_blog_img'), .5, {
                // scaleY: 0,
                // scaleX: 0,
                // ease: Power4.easeInOut,
                // y: 0
            // }), scrollDuration);
            // controller.addTween('.dc_blog_container', TweenMax.to($('.dc_blog_img'), .5, {
                // scaleY: 1,
                // scaleX: 1,
                // ease: Power4.easeInOut,
                // y: 0
            // }), scrollDuration);
            controller.addTween('.banner_icon img', TweenMax.from($('.banner_icon img'), 3, {
                width: '0',
                ease: Quad.easeInOut,
                y: 0
            }), scrollDuration);
            controller.addTween('.banner_icon img', TweenMax.to($('.banner_icon img'), 3, {
                width: 'initial',
                ease: Quad.easeInOut,
                y: 0
            }), scrollDuration);
        },
    };
    Dance.init();
    //on scroll fixed menu
    $(window).scroll(function() {
        var wh = window.innerWidth;
        var h = window.innerHeight;
        var window_top = $(window).scrollTop();
        if (wh > 991) {
            if (window_top > 100) {
                $('.dc_menu_wrapper').addClass('sidebar_menu');
                $(".menu_toggle").click(function() {
                    $(".dc_menu").addClass('open_menu');
                });
                $(".menu_close").click(function() {
                    $(".dc_menu").removeClass('open_menu');
                });
            } else {
                $('.dc_menu_wrapper').removeClass('sidebar_menu');
                $(".dc_menu").removeClass('open_menu');
            }
        } else {
            if (window_top > 150) {
                $('.dc_menu_wrapper').addClass('sidebar_menu');
            } else {
                $('.dc_menu_wrapper').removeClass('sidebar_menu');
            }
            $(".menu_toggle").click(function() {
                $(".dc_menu").addClass('open_menu');
            });
            $(".menu_close").click(function() {
                $(".dc_menu").removeClass('open_menu');
            });
        }
    });
    // on load event
    $(window).on('load', function() {
        // preloader
        setTimeout(function() {
            $('#status').fadeOut('slow', function() {
                $('#preloader').fadeOut('slow');
            });
		//style-switcher
		$("#style-switcher .bottom a.settings").click(function(e){
			e.preventDefault();
			var div = $("#style-switcher");
			if (div.css("left") === "-180px") {
				$("#style-switcher").animate({
					left: "0px"
				}); 
			} else {
				$("#style-switcher").animate({
					left: "-180px"
				});
			}
		});
		// only for firefox browser
		var FIREFOX = /Firefox/i.test(navigator.userAgent);
	/*	if (FIREFOX) {
			alert(FIREFOX);
		}*/
// setting gear
		$('.settings').hover(
		  function () {
			$(this).children('i').removeClass("fa-spin");
		  },
		  function () {
			$(this).children('i').addClass("fa-spin");
		  }
		);
	
			
		//colorpicker
		
	$('#colorSelector').ColorPicker({
	color: '#0000ff',
	onShow: function (colpkr) {
		$(colpkr).fadeIn(500);
		return false;
	},
	onHide: function (colpkr) {
		$(colpkr).fadeOut(500);
		return false;
	},
	onChange: function (hsb, hex, rgb) {
	 $('#colorSelector div').css('backgroundColor', '#' + hex);
	 $('.sidebar_menu .nav_wrapper, .dc_search_icon, .dc_category_content, .dc_event_wrapper, .dc_partner_section, .dc_product a.woocommerce-LoopProduct-link .dc_product_image span.onsale, .dc_search_form .dc_search, .dc_product_single span.onsale, .sidebar_menu .nav_wrapper, .menu_close, .menu_close:before, .menu_close:after').css('backgroundColor', '#' + hex);
	 
	 $('.authore_name span, .dc_product .dc_product_detail a.woocommerce-LoopProduct-link span.price, .dc_product .dc_product_detail a.woocommerce-LoopProduct-link span.price ins').css('color', '#' + hex);
	 $('.dc_product').css('background-color','#'+hex);
	 
	 $('.dc_newsletter_section,.menu_close,.dc_menu_wrapper, .dc_search_icon, .dc_search_form, .dc_search, .dc_heading:after, .portfolioFilter ul li a:after, .sidebar_menu .menu_toggle, .sidebar_menu .nav_wrapper, .menu_close, .menu_close:before').css('background-color','#'+hex);
      }
    });
   });
   //portfolio  
    var $container = $('.grid');
        $container.isotope({
            layoutMode: 'fitRows',
            itemSelector: '.grid-item',
            percentPosition: true,
            filter: '*',
            animationOptions: { 
                duration: 750,
                easing: 'linear',
                queue: false,
                isFitWidth: true,
            }
        });
        $('.portfolioFilter a').click(function() {
            $('.portfolioFilter .current').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
        //preloader
        setTimeout(function() {
            $('#status').fadeOut('fast', function() {
                $('#preloader').fadeOut('fast');
            });
        }, 5000);
    });
})(jQuery);
// menu js
(function($) {
    'use strict';
    var pluginName = 'ScrollIt',
        pluginVersion = '1.0.3';
    /*
     * OPTIONS
     */
    var defaults = {
        upKey: 38,
        downKey: 40,
        easing: 'linear',
        scrollTime: 600,
        activeClass: 'active',
        onPageChange: null,
        topOffset: 0
    };
   $(window).ready(function(e) {
        $.each($('div.progress-bar'), function() {
            $(this).css('width', $(this).attr('aria-valuetransitiongoal') + '%');
        });
    });
	
	
	/**
     *start ajx recent blog shortcode
	 */
		jQuery("#em_sub_js1").click(function(){
		var ajx_auto_incriment = jQuery(".ajx_auto_incriment1").val(); 
		var ajx_blog_number = jQuery(".ajx_blog_number1").val();
		var ajx_blog_showmore = jQuery(".ajx_blog_showmore1").val();
		
		var ajx_multi = ajx_blog_showmore*ajx_auto_incriment;
		var ajx_value = +ajx_blog_number + +ajx_multi;
		
		ajx_auto_incriment++;
		jQuery(".ajx_auto_incriment1").val(ajx_auto_incriment);
		var formdata = 'click_value='+ajx_value;
			formdata += '&action=dance_recentblog_shortcode';
			jQuery.ajax({
				type : "post",
				url : jQuery('#restored_ajaxurl_id_shortcode1').val(),
				data : formdata, 
				success: function(response) {
					jQuery("#ajax_blog_shortcode").html(response);
				}
			});
		});
		 
	/**
	 *start ajx event shortcode
	 */
    jQuery("#event_load").click(function(){
		var ajx_auto_incriment = jQuery(".ajx_auto_incriment1").val(); 
		var ajx_blog_number = jQuery(".ajx_blog_number1").val();
		var ajx_blog_showmore = jQuery(".ajx_blog_showmore1").val();
		
		var ajx_multi = ajx_blog_showmore*ajx_auto_incriment;
		var ajx_value = +ajx_blog_number + +ajx_multi;
		
		ajx_auto_incriment++;
		jQuery(".ajx_auto_incriment1").val(ajx_auto_incriment);
		var formdata = 'click_value='+ajx_value;
			formdata += '&action=dance_event_shortcode';
			jQuery.ajax({
				type : "post",
				url : jQuery('#dance_event_ajaxurl_id_shortcode1').val(),
				data : formdata, 
				success: function(response) {
					jQuery("#ajax_event_shortcode").html(response);
					
				}
			});
		});
		 
	/**
	 * start ajx portfolio
	 */
	 
	 function dc_jsinitialize(){		 
		//portfolio  
        var $container = $('.grid');
        $container.isotope({
            layoutMode: 'fitRows',
            itemSelector: '.grid-item',
            percentPosition: true,
            filter: '*',
            animationOptions: { 
                duration: 750,
                easing: 'linear',
                queue: false,
                isFitWidth: true,
            }
        });
        $('.portfolioFilter a').click(function() {
            $('.portfolioFilter .current').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
	 }
	 ///  new portfolio tab ajax addedd start 
	 jQuery("#ajax_portfolio_shortcode .nav-tabs li").click(function(){ 	   
	   var catslug= $(this).attr("id"); 
	 	var ajx_auto_incriment = jQuery(".ajx_auto_incriment11").val(); 
		var ajx_blog_number = jQuery(".ajx_blog_number11").val();
		var ajx_blog_showmore = jQuery(".ajx_blog_showmore11").val();
		 var formdata = 'click_value='+ajx_blog_number;
		 formdata += '&catslug='+catslug;
		 formdata += '&ajx_blog_showmore='+ajx_blog_showmore;
			formdata += '&action=dance_portfolio_tab_shortcode';
			jQuery.ajax({
				type : "post", 
				url : jQuery('#portfolio_ajaxurl_id_shortcode1').val(),
				data : formdata, 
				success: function(response) {
					jQuery("#dance_tab_cat").html(response);
					 
                    dc_jsinitialize();
					
				} 
			});
	 
	 
	 });
	 
	 ///  new portfolio tab ajax addedd end 	
    jQuery('body').on('click','#portfolio_load',function(){ 
		var ajx_auto_incriment = jQuery(".ajx_auto_incriment1").val(); 
		var ajx_blog_number = jQuery(".ajx_blog_number1").val();
		var ajx_blog_showmore = jQuery(".ajx_blog_showmore1").val();
		var dance_portfolio_ajax_cat = jQuery(".dance_portfolio_ajax_cat").val(); 		
		//var ajx_multi = ajx_blog_showmore*ajx_auto_incriment;
		var ajx_value = +ajx_blog_number + +ajx_blog_showmore;
		//  alert(ajx_value);  
		//ajx_auto_incriment++;
		jQuery(".ajx_blog_number1").val(ajx_value);
		  var formdata = 'click_value='+ajx_value;
		 formdata += '&ajx_blog_showmore='+ajx_blog_showmore;
		 formdata += '&dance_portfolio_ajax_cat='+dance_portfolio_ajax_cat; 
			formdata += '&action=dance_portfolio_shortcode';
			jQuery.ajax({
				type : "post", 
				url : jQuery('#portfolio_ajaxurl_id_shortcode1').val(),
				data : formdata, 
				success: function(response) {
					jQuery("#dance_tab_cat #dance_p_cat").html(response);					 
                    dc_jsinitialize();					
				}
			});
		 
		});					
	   jQuery("#product_load").click(function(){		
		var ajx_auto_incriment = jQuery(".ajx_auto_incriment1").val(); 
		var ajx_blog_number = jQuery(".ajx_product_number1").val();
		var ajx_blog_showmore = jQuery(".ajx_product_showmore1").val();
		
		var ajx_multi = ajx_blog_showmore*ajx_auto_incriment;
		var ajx_value = +ajx_blog_number + +ajx_multi;
		
		ajx_auto_incriment++;
		jQuery(".ajx_auto_incriment1").val(ajx_auto_incriment);
		var formdata = 'click_value='+ajx_value;
			formdata += '&action=dance_product_shortcode';
			jQuery.ajax({
				type : "post", 
				url : jQuery('#dance_product_ajaxurl_id_shortcode1').val(),
				data : formdata, 
				success: function(response) {
					jQuery("#ajax_product_shortcode").html(response);
					 
                    dc_jsinitialize();
					
				}
			});
		 
		});
		
		jQuery(".dc_week").click(function(){
     	 var ajx_value = $(this).attr('aria-controls');
		 var formdata = 'catname='+ajx_value;
			formdata += '&action=dance_class_shedule';
			jQuery.ajax({
				type : "post", 
				url : jQuery('#dance_product_ajaxurl_id_shortcode1').val(),
				data : formdata, 
				success: function(response) {
				      
					jQuery("#class_shedul_response").html(response);
					 
                 }
			});
		 
		});
		
		 $(".booking_event").click(function() {
			var event_id = $(this).attr('event_id');
			$('#event_id').val(event_id);
		});
		jQuery(".dc_week").click(function(){
     	 var ajx_value = $(this).attr('aria-controls');
		 var formdata = 'catname='+ajx_value;
			formdata += '&action=dance_class_shedule';
			jQuery.ajax({
				type : "post", 
				url : jQuery('#dance_product_ajaxurl_id_shortcode1').val(),
				data : formdata, 
				success: function(response) {
				      
					jQuery("#class_shedul_response").html(response);
					 
                 }
			});
		  
		}); 
		$(".stripe-button-el").click(function(){
			$('.booking_popup').hide();
			$('.modal-backdrop').toggleClass('show');
			$(".dc_booking_header .close").click();
			$('BODY').css('overflow','auto');
			
		});
		$('.nav-tabs li').on( 'click',  function() {
				$('.nav-tabs li').removeClass('active');
				$(this).addClass('active');
		});
		$('#form_data_strip').on( 'submit',  function() {
		     $(".stripe-button-el").trigger("click");
                return false;
		});
		
		
		
}(jQuery));