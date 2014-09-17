// Section One Scroll Button Begins here

$(".section1-btn").click(function(){
	$window = $(window);
	$height = $window.height();
	$('html, body').animate({
        scrollTop: $height
    }, 1000);
});

$(".main-profile").mouseenter(function(){
	$(this).attr("src", "assets/images/groot.png");
}).mouseleave(function(){
	$(this).attr("src", "assets/images/profile.jpeg");
});

jQuery(document).ready(function($){
    var contentSections = $('.cd-section'),
        navigationItems = $('#cd-vertical-nav a');

    updateNavigation();
    $(window).on('scroll', function(){
        updateNavigation();
    });

    //smooth scroll to the section
    navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
        $('.touch #cd-vertical-nav').toggleClass('open');
  
    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
        $('.touch #cd-vertical-nav').removeClass('open');
    });

    function updateNavigation() {
        contentSections.each(function(){
            $this = $(this);
            var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
            if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
                navigationItems.eq(activeSection).addClass('is-selected');
                if($this.attr("id") === "section4" || $this.attr("id") === "section5" ){
                   $(".no-touch #cd-vertical-nav .cd-label").each(function(){
                    ($(this).css("color", "black"));
                   });
                } else {
                    $(".no-touch #cd-vertical-nav .cd-label").each(function(){
                    ($(this).css("color", "white"));
                   });
                }
            } else {
                navigationItems.eq(activeSection).removeClass('is-selected');
            }
        });
    }

    function smoothScroll(target) {
        $('body,html').animate(
            {'scrollTop':target.offset().top},
            600
        );
    }
});