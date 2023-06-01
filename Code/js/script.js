/*===================================
            Preloader
  ===================================*/
  $(window).on('load', function () { // makes sure that whole site is loaded
  
$('#status').fadeOut();
$('#preloader').fadeOut();
});          

/*====================== Animation ===============================*/

//animate on scroll
$(function(){
  new WOW().init();
});

//how animate on page load
$(window).on('load' , function (){
  $("#home-heading-1").addClass("animated-fadeInDown");
  $("#home-heading-2").addClass("animated-fadeInLeft");
  $("#home-text").addClass("animated zoomIn");
  $("#home-btn").addClass("animated zoomIn");
  $("#arrow-down i").addClass("animated fadeInDown infinite");
});

/*============= team ======================*/

$(function(){
  $("#team-members").owlCarousel({
     items: 2,
     autoplay: true,
     smartSpeed: 700,
     loop: true,
     autoplayHoverPause: true,
     nav: true,
     dots: false,
     navText: [' <i class="fa fa-angle-left"></i>' ,  ' <i class="fa fa-angle-right"></i>' ],
     responsive: {
        // breakpoint from 0 up 
        0: {
           items:1
        },

        // breakpoint from 480 up 
        480: {
           items:2
        }
     }

  });
});

/*=============== progress bar===================*/

$(function (){
  $("#progress-elements").waypoint(function(){

     $(".progress-bar").each(function(){

        $(this).animate({
           width: $(this).attr("aria-valuenow") + "%"
        },2000);
     });

     this.destroy();
  }, {
     offset: "bootom-in-view"  

  });
});

/*=========================
        responsive tabs
 ========================*/
 $(function (){

    $("#services-tabs").responsiveTabs({
       Animation: 'slide'
    });
 });       
 

 /*=================================
            Portfolio
================================== */
$(window).on('load',function(){
   //Intialize Isotope
   $("#isotope-container").isotope({});
   //Filter Items on button CLick
   $("#isotope-filters").on('click', 'button', function(){
       //Get Filter value
       var filterValue = $(this).attr('data-filter');
       //FIlter Portfolio
       $("#isotope-container").isotope({
           filter: filterValue
       });
       //active button
       $("#isotope-filters").find('.active').removeClass('active');
       $(this).addClass('active');
     
   });
});


/*==================================================================
                    Testimonial
==================================================================*/

$(function () {
   $("#testimonial-slider").owlCarousel({
       items: 1,
       autoplay: false,
       smartSpeed: 700,
       loop: true,
       autoplayHoverPause: true,
       nav: true,
       dots: false,
       navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
   });
});

/*===========================================
           Stats
===========================================*/

$(function () {
   $(".counter").counterUp({
       delay: 10,
       time: 2000
   });
});
/*=================================
              Clients
==================================*/
$(function () {

   $("#clients-list").owlCarousel({
       items: 6,
       autoplay: false,
       smartSpeed: 700,
       autoplayHoverPause: true,
       loop: true,
       nav: true,
       dots: false,
       navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
       responsive: { 
           // breakpoint from 0 up
           0: {
               items: 2
           },
           // breakpoint from 480 up
           480: {
               items: 3
           },
           768: {
               items: 6
           }
       }
   });
});


/*=======================================
         navigation
========================================*/
/show and hide white navigation/
$(function() {

    //show/hide on page load
    showHideNav();

    $(Window).scroll(function() {

        //show hide nav on window scroll
        showHideNav();
    });

    function showHideNav() {

        if ($(Window).scrollTop() > 50) {

            //show white nav
            $("nav").addClass("white-nav-top");

            //show dark logo
            $(".navbar-brand img").attr("src", "IMG/logo/logo-dark.png");

            //show back to top button 
            $(".back-to-top").fadeIn();
        } else {
            //hide white nav
            $("nav").removeClass("white-nav-top");

            //show logo
            $(".navbar-brand img").attr("src", "IMG/logo/logo.png");

            //Hide back to top
            $("#back-to-top").fadeOut();
        }
    }
});

//smooth scroll

$(function() {

    $("a.smooth-scroll").click(function(event) {

        event.preventDefault();




        //get section id like #about, #services, #work, #team and etc.
        var section_id = $(this).attr("href");

        $("html,body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");


    });
});


/*=======================================================
                Mobile Menu
========================================================*/
$(function (){

    //show mobile nav
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    //Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });

});

/*==========================================================
                        Google Map
============================================================*/
$(window).on('load', function () {

    //Map Variables
    var addressStrinhg ='230 Broadway, NY, New York 10007, USA';
    var myLatlng = {
        lat: 40.712685,
        lng: -74.005920
    };

    //1. Render Map
    var map = new google.maps.map(document.getElementById('map'), {
        zoom: 11,
        center: myLatlng
    });

    //2.Add Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Click To See Address"
    });

    // 3.Add Info Window
    var infowindow = new google.maps.InfoWindow({
        content: addressStrinhg
    });

    //Show info window when user clicks marker
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    //4.Resize Function
    google.maps.event.addDomListener(window, 'resize', function () {

        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
    });
});