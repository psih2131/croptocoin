$(function() {

	  //FAQ open/close
	  $('.faqBox_header').on('click', function () {
        var updateClass = function () {
            if ($(this).is(':visible')) {
                $(this).closest('.faqBox').find('.faqBox_header').addClass('openFaq');
                $(this).closest('.faqBox').addClass("active");
            } else {
                $(this).closest('.faqBox').find('.faqBox_header').removeClass('openFaq');
                $(this).closest('.faqBox').removeClass('active');
            }
        };
        $('.faqBox_body').not($(this).next()).slideUp(500, updateClass);
        $(this).addClass('openFaq').next().slideToggle(500, updateClass);
    });


		$(".play-btn").click(function(){
			$(this).parent().find("video")[0].play();
			$(this).parent().find("video")[0].controls = true;
			$(this).fadeIn();
		})


		$(".tab").on("click", function (e) {
			e.preventDefault();
			$(this)
			  .addClass("active")
			  .siblings()
			  .removeClass("active")
			  .closest(".started__line")
			  .find(".started__box")
			  .removeClass("active")
			  .eq($(this).index())
			  .addClass("active");

			  $(".started__box").each(function(){
				$(this).not("active").find("video")[0].pause();
				$(this).not("active").find("video")[0].currentTime = 0;
			  })
		  });
		  


		  $(".team__slider").slick({
			dots: false,
			arrows: true,
			infinite: true,
			speed: 700,
			slidesToShow: 4,
			slidesToScroll: 1,
			prevArrow: $('.prev__team'),
			nextArrow: $('.next__team'),
			autoplay: true,
			responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3
				}
			},{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},{
				breakpoint: 500,
				settings: {
					slidesToShow: 1
				}
			}
			]
		  })


		  $(".blog__slider").slick({
			dots: false,
			arrows: true,
			infinite: true,
			speed: 700,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: $('.prev__blog'),
			nextArrow: $('.next__blog'),
			autoplay: true,
		  })

		  $(".partners__slider").slick({
			dots: false,
			arrows: true,
			infinite: true,
			speed: 700,
			slidesToShow: 3,
			slidesToScroll: 1,
			prevArrow: $('.prev__partners'),
			nextArrow: $('.next__partners'),
			autoplay: true,
			responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},{
				breakpoint: 500,
				settings: {
					slidesToShow: 1
				}
			}
			]
		  })

		  $(".whyuse__slider").slick({
			dots: false,
			arrows: true,
			infinite: true,
			speed: 700,
			slidesToShow: 4,
			slidesToScroll: 1,
			prevArrow: $('.prev__whyuse'),
			nextArrow: $('.next__whyuse'),
			autoplay: true,
			responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3
				}
			},{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},{
				breakpoint: 500,
				settings: {
					slidesToShow: 1
				}
			}
			]
		  })


		$(".header__mobile .close-btn").click(function (e){
			e.preventDefault();
			$(".header__mobile").removeClass("active");
			$("html").removeClass("static")
		})
		$(".burger-btn").click(function (e){
			e.preventDefault();
			$(".header__mobile").addClass("active");
			$("html").addClass("static")
		})

		let tableSlider = $(".table__slider")
		let standartSlider = $(".standart__line")
		  	  
		
		$(document).ready(function(){
			if($(window).width() < 1024){
			 initializeSlick()
			}
		  
		  
			$(window).on('resize', function(){
			  if($(window).width() > 1024){
				$(".table__slider.slick-initialized").slick("unslick");
			  } else if(!$('.table__slider').hasClass('slick-initialized')) {
				initializeSlick()
			  }
			});
		  
		  
			  function initializeSlick() {
				tableSlider.slick({
					infinite: true,
					prevArrow: false,
					nextArrow: false,
					speed: 700,
					slidesToShow: 2,
					slidesToScroll:1,
					autoplay:false,
					dots: true,
					autoplay: true,
					responsive: [{
						breakpoint: 670,
						settings: {
							slidesToShow: 1
						}
					}]
				  });
				}
			});


			$(document).ready(function(){
				if($(window).width() < 768){
					initializeStandartSlick()
				}
			  
			  
				$(window).on('resize', function(){
				  if($(window).width() > 768){
					$(".standart__line.slick-initialized").slick("unslick");
				  } else if(!$('.standart__line').hasClass('slick-initialized')) {
					initializeStandartSlick()
				  }
				});
				  function initializeStandartSlick() {
					standartSlider.slick({
						infinite: true,
						prevArrow: false,
						nextArrow: false,
						speed: 700,
						slidesToShow: 2,
						slidesToScroll:1,
						autoplay:false,
						dots: false,
						autoplay: true,
						responsive: [{
							breakpoint: 600,
							settings: {
								slidesToShow: 1
							}
						}]
					  });
					}
				});

		let createSlider = $(".create__in")
				
				$(document).ready(function(){
					if($(window).width() < 1024){
						initializeCreateSliderSlick()
					}
				  
				  
					$(window).on('resize', function(){
					  if($(window).width() > 1024){
						$(".create__in.slick-initialized").slick("unslick");
					  } else if(!$('.standart__line').hasClass('slick-initialized')) {
						initializeCreateSliderSlick()
					  }
					});
				  
				
					  function initializeCreateSliderSlick() {
						
						createSlider.slick({
							infinite: true,
							prevArrow: false,
							nextArrow: false,
							speed: 700,
							slidesToShow: 4,
							slidesToScroll:1,
							autoplay:false,
							dots: false,
							autoplay: true,
							responsive: [{
								breakpoint: 1024,
								settings: {
									slidesToShow: 3
								}
							},{
								breakpoint: 768,
								settings: {
									slidesToShow: 2
								}
							},{
								breakpoint: 500,
								settings: {
									slidesToShow: 1
								}
							}
							]
						  });
						}
					});

			$(".btn-see").click(function(){
				$(".allcrypto__line").toggleClass("active");
				$(this).toggleClass("active")
				$(this).hasClass("active") ? $(this).text("Hide") : $(this).text("See all")
			})

			$(".read-more-btn").click(function(e){
				e.preventDefault();
				$(this).parent().prev().toggleClass("open");
				$(this).toggleClass("open")
				if($(this).hasClass("open")){
					$(this).find("span").text("Read less")
				} else{
					$(this).find("span").text("Read more")
				}
			})

			$('.liLang').on('click',function(){
				if($(this).hasClass('activLang')){
				  $('.liLang').show(200);
				}
				else{
				  $('.liLang').removeClass('activLang');
				  $('.liLang').hide(0);
				  $(this).addClass('activLang');
				  $('.activLang').show(0);
				}
			  });


			  $('.liCurrency').on('click',function(){
				if($(this).hasClass('activeCurrency')){
				  $('.liCurrency').show(200);
				}
				else{
				  $('.liCurrency').removeClass('activeCurrency');
				  $('.liCurrency').hide(0);
				  $(this).addClass('activeCurrency');
				  $('.activeCurrency').show(0);
				}
			  });


			  $('.liAmount').on('click',function(){
				if($(this).hasClass('activeAmount')){
				  $('.liAmount').show(200);
				}
				else{
				  $('.liAmount').removeClass('activeAmount');
				  $('.liAmount').hide(0);
				  $(this).addClass('activeAmount');
				  $('.activeAmount').show(0);
				}
			  });

			  // let lang = ['en','ru']
			  // fetch(`/lang/${lang[0]}.js`)
			  // .then(e=>e.json())
			  // .then(data=>init(data))
			  // .catch(e=>console.error(e))


			  // let init = (data) =>{
				 //  $('.nav').text(data[`Title`]);
				 //  $('.notice-title').text(data[`notice-title`])
				 //  $('.footer__copy').text(data['copyright'])
			  // }
			  // init

			 //  $(".liLang").click(function(){
				//   if($(this).hasClass("activLang") !== false){
				// 	fetch(`/lang/${$(this).data("value")}.js`)
				// 	.then(e=>e.json())
				// 	.then(data=>init(data))
				// 	.catch(e=>console.error(e))		
				// }
					
   
			 //  })
});



