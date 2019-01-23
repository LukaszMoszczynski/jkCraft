$(document).ready(function() {

	setTimeout(function() {
		$(".header-first").fadeOut();
	}, 5000);

	setTimeout(function() {
		$(".header-second").fadeIn();
	}, 5400);

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
			},
			1600: {
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
});



function initMap() {
  
  var jk = {lat: 53.4289036, lng: 14.5448369};
  
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 16, center: jk});
  
  var marker = new google.maps.Marker({position: jk, map: map});
}

initMap();



