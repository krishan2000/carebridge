setTimeout(function(){
	$(".cb-transition-loader").hide(2000);
},2000);

$("#biggest_fan_slider").owlCarousel({
	items: 1,
	autoplay: false,
	autoplayTimeout: 4000,
	smartSpeed: 2000,
	lazyLoad: true,
	navigation: true,
	dots: false,
	nav: true,
	navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
	loop: true
});

$(document).ready(function() { 
    $('.main_tab ul.tab_btn').addClass('active').find('> li:eq(0)').addClass('active_tab_btn');  
    $('.main_tab ul.tab_btn li a').click(function (g) { 
        var main_tab = $(this).closest('.main_tab'), 
        index = $(this).closest('li').index();
        main_tab.find('ul.tab_btn > li').removeClass('active_tab_btn');
        $(this).closest('li').addClass('active_tab_btn');
        main_tab.find('.tab_content_area').find('.tab_item').not('.tab_item:eq(' + index + ')').slideUp();
        main_tab.find('.tab_content_area').find('.tab_item:eq(' + index + ')').slideDown(); 
        g.preventDefault();
    });
});


$('.close-btn, .overlay').on('click', function () {
  $('.navbar-collapse').removeClass('show');
  $('.overlay').removeClass('active');
  jQuery('body').removeClass('bodyactive');
});
$('.navbar-toggler').on('click', function () {
  $('.overlay').addClass('active');
  jQuery('body').addClass('bodyactive');
});

// Wow Js
wow = new WOW()
wow.init();