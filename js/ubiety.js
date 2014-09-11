//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar").addClass("nav-black");
    } else {
        $(".navbar").removeClass("nav-black");
    }
});



