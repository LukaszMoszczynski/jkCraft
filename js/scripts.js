$(window).on('load', function() {

	$('.loader .inner').fadeOut(500, function() {
		$('.loader').fadeOut(500);
	});

});


$(document).ready(function() {

	function changeSign() {
	
		$(".header-first").removeClass("active");				
		$(".header-second").addClass("active");
	
		setTimeout(function() {
			$(".header-second").removeClass("active");
			$(".header-first").addClass("active");
		}, 10000);

		setTimeout(changeSign, 20000);

	}

	setTimeout(changeSign, 10000);

	$('.owl-carousel').owlCarousel({
		loop:true,
	    margin:0,
	    nav: false,
	    autoplay:true,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},
			768:{
				items:3
			},
			1024:{
				items:4
			}
		}
	});

	$(document)
    .one('focus.autoExpand', 'textarea.autoExpand', function(){
        let savedValue = this.value;
        this.value = '';
        this.baseScrollHeight = this.scrollHeight;
        this.value = savedValue;
    })
    .on('input.autoExpand', 'textarea.autoExpand', function(){
        let minRows = this.getAttribute('data-min-rows')|0, rows;
        this.rows = minRows;
        rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 16);
        this.rows = minRows + rows;
    });


    $('#navigation a').click(function(e) {
		
		const targetElement = $(this).attr('href');
		const targetPosition = $(targetElement).offset().top;
		$('html, body').animate({scrollTop: targetPosition -50}, 'slow');
		
	});

    const skillsTopOffset = $('.services').offset().top;
    const aboutTopOffset = $('.about').offset().top;

	$(window).scroll(function() {
		if(window.pageYOffset > skillsTopOffset - $(window).height() + 400) {
			$('.booksy-services').addClass('booksy');
		}
	});	

	$(window).scroll(function() {
		if(window.pageYOffset > aboutTopOffset - $(window).height() + 200) {
			$('.about p').addClass('about-fade');
		}
	});

});



function initMap() {
  
  var jk = {lat: 53.4289036, lng: 14.5448369};
  
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 16, center: jk});
  
  var marker = new google.maps.Marker({position: jk, map: map});
}

initMap();



