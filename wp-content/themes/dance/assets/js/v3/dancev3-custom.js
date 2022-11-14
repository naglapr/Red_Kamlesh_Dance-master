/*--------------------- Copyright (c) 2017 -----------------------
------------------------------------------------------------------
[Master Javascript]

Project: Ice-Cream - ice-cream responvive Template
Version: 1.0.0
Assigned to: ThemeForest
-------------------------------------------------------------------*/
(function($) {
  "use strict";
  var dance = {
    initialised: false,
    version: 1.0,
    mobile: false,
    init: function() {
      if (!this.initialised) {
        this.initialised = true;
      } else {
        return;
      }
      /*-------------- dance Functions Calling ---------------------------------------------------
      ------------------------------------------------------------------------------------------------*/
      this.event_slider();  
      this.product_slider();  
      this.client_slider();  
      this.ds_toggle();
      this.gallery_popup();
      this.product_single_slider();
      this.responsive_menu();
      this.gallery_hover();  
      //this.scroll_effect();  
    },
    /*-------------- dance Functions definition ---------------------------------------------------
    ---------------------------------------------------------------------------------------------------*/
    event_slider: function(){
        $('.ds_event_slider').slick({
            speed: 900,
            prevArrow:'<div class="ds_arrow prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="10px" height="10px" viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;" xml:space="preserve"><g><path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0 c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744 c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z" /></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></div>',
            nextArrow:'<div class="ds_arrow next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="10px" height="10px" viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;" xml:space="preserve"><g><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z" /></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></div>'
        });
    },
    product_slider: function(){
        $('.ds_product_slider').slick({
            speed: 900,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow:'<div class="ds_product_slider_arrow ds_arrow prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="17px" height="30px" viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;" xml:space="preserve"><g><path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0 c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744 c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z" /></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></div>',
            nextArrow:'<div class="ds_product_slider_arrow ds_arrow next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="17px" height="30px" viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;" xml:space="preserve"><g><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z" /></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></div>',
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  }
                },
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
              ]
        });
    },
    client_slider: function(){
        $('.ds_client_slider').slick({
            speed: 900,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow:'<div class="ds_client_slider_arrow ds_arrow prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="17px" height="30px" viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;" xml:space="preserve"><g><path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0 c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744 c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z" /></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></div>',
            nextArrow:'<div class="ds_client_slider_arrow ds_arrow next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="17px" height="30px" viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;" xml:space="preserve"><g><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z" /></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></div>'
        });
    },
    ds_toggle:function(){
        $('.ds_toggle').click(function(){
            $(this).toggleClass('active');
            $('.ds_menu_wrapper').toggleClass('menu_open');
         });
        
    },
   gallery_popup: function(){
        $(".ds_gallery_hover>a").magnificPopup({
            type: 'image',
            gallery: {
              enabled:true
            },
            mainClass: 'mfp-with-zoom', // this class is for CSS animation below
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function(openerElement) {
                // openerElement is the element on which popup was initialized, in this case its <a> tag
                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                return openerElement.is('a') ? openerElement : openerElement.find('img');
                }
            }
            
        });
    },
    product_single_slider: function(){
        $('.ds_product_single_slider .slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            fade: true,
            asNavFor: '.slider-nav'
          });
          $('.ds_product_single_slider .slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            arrows: true,
            prevArrow:'<div class="ds_product_slider_arrow ds_arrow prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
            nextArrow:'<div class="ds_product_slider_arrow ds_arrow next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
            focusOnSelect: true
          });
    },
    responsive_menu:function(){
		var w = window.innerWidth;
		if(w <= 991){
			 $(".ds_menu>li").find('.sub-menu').parent().addClass('dropdown');
			 $(".ds_menu>li.dropdown > a").append('<div class="show-submenu"><i class="fa fa-angle-down"></i></div>');

			$(".ds_menu>li.dropdown > a").on("click", function() {
				$('.ds_menu>li.dropdown > a > .show-submenu > i').toggleClass('fa fa-angle-up');
				$('.ds_menu>li.dropdown > a > .show-submenu > i').toggleClass('fa fa-angle-down');
			});
			
			$('.ds_menu>li.dropdown>a').click(function() {
				$('.ds_menu>li.dropdown>a').not($(this)).
				parent().find('.sub-menu').hide();
				$(this).parent().find('.sub-menu').toggle();
			});
        }
    },
    gallery_hover: function(){
        $('.ds_gallery_section')
        .on('mouseenter', function(e) {
                var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
                $(this).find('span').css({top:relY, left:relX})
        })
        .on('mouseout', function(e) {
                var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top:relY, left:relX})
        });
        $('.ds_gallery_section .ds_gallery_hover > a').click(function(){return false});
    },
    /*scroll_effect: function(){
        $.scrollIt({
            upKey: 38,             // key code to navigate to the next section
            downKey: 40,           // key code to navigate to the previous section
            easing: 'linear',      // the easing function for animation
            scrollTime: 600,       // how long (in ms) the animation takes
            activeClass: 'active', // class given to the active nav element
            onPageChange: null,    // function(pageIndex) that is called when page is changed
            topOffset: 0           // offste (in px) for fixed top navigation
        });
    } */
    
   };
   
   $(document).ready(function() {
    dance.init();
   
    // contact form submision
    function checkRequire(formId , targetResp){
		targetResp.html('');
		var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
		var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
		var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
		var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
		var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
		var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
		var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
		var check = 0;
		$('#er_msg').remove();
		var target = (typeof formId == 'object')? $(formId):$('#'+formId);
		target.find('input , textarea , select').each(function(){
			if($(this).hasClass('require')){
				if($(this).val().trim() == ''){
					check = 1;
					$(this).focus();
					targetResp.html('You missed out some fields.');
					$(this).addClass('error');
					return false;
				}else{
					$(this).removeClass('error');
				}
			}
			if($(this).val().trim() != ''){
				var valid = $(this).attr('data-valid');
				if(typeof valid != 'undefined'){
					if(!eval(valid).test($(this).val().trim())){
						$(this).addClass('error');
						$(this).focus();
						check = 1;
						targetResp.html($(this).attr('data-error'));
						return false;
					}else{
						$(this).removeClass('error');
					}
				}
			}
		});
		return check;
	}
	$(".submitForm").on("click", function() {
		var _this = $(this);
		var targetForm = _this.closest('form');
		var errroTarget = targetForm.find('.response');
		var check = checkRequire(targetForm , errroTarget);
		if(check == 0){
			var formDetail = new FormData(targetForm[0]);
			$.ajax({
				method : 'post',
				url : 'ajax.php',
				data:formDetail,
				cache:false,
				contentType: false,
				processData: false
			}).done(function(resp){
				console.log(resp);
				if(resp == 1){
					targetForm.find('input').val('');
					targetForm.find('textarea').val('');
					errroTarget.html('<p style="color:green;">Mail has been sent successfully.</p>');
				}else{
					errroTarget.html('<p style="color:red;">Something went wrong please try again latter.</p>');
				}
			});
		}
	});

  });
  $(window).on('load', function(){
		setTimeout(function() {
			$('body').addClass('site_loaded');	
        }, 600);
        $('.ds_banner').woolParalax();
  });
  $(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
            $('.goto_wrapper').addClass('goto');
        } else {
            $('.goto_wrapper').removeClass('goto');
        }
  });

  $(".goto_wrapper").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false
    });
    $(document).on('click' , '.slick-arrow' , function(){
        var target = $(this).parent();
        var NimgUrl = target.find('.slick-slide.slick-active:last ').next().find('img').attr('src');
        
        var PimgUrl = target.find('.slick-slide.slick-active:first ').prev().find('img').attr('src');

        if(typeof  NimgUrl != 'undefined'){
            target.find('.slick-arrow.next').css('background-image' , 'url('+NimgUrl+')');
        }
       
        if(typeof  PimgUrl != 'undefined'){
            target.find('.slick-arrow.prev').css('background-image' , 'url('+PimgUrl+')');
        }
    });
	// smooth menu scroll
            $('.ds_menu_wrapper>li>a').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
				&& location.hostname == this.hostname) {
					var $target = $(this.hash);
					$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
					
					if ($target.length) {
						var targetOffset = $target.offset().top;
						$('html,body').animate({scrollTop: targetOffset}, 1400);
						return false;
					}
				}
			});
			
			$('.ds_menu_wrapper>ul>li a').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				  var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				  if (target.length) {
					$('html, body').animate({
					  scrollTop: target.offset().top
					}, 1000);
					return false;
				  }
				}
		  }); 
          
})(jQuery);

