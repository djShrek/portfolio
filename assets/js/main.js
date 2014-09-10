// Section One Scroll Button Begins here

$(".section1-btn").click(function(){
	$window = $(window);
	$height = $window.height();
	$('html, body').animate({
        scrollTop: $height
    }, 1850);
});

$(".main-profile").mouseenter(function(){
	$(this).attr("src", "assets/images/groot.png");
}).mouseleave(function(){
	$(this).attr("src", "assets/images/profile.jpeg");
});
