$(function() {
    $("#ca-promo-banner").hide().fadeIn(1000);
    $(window).scroll(function() {
      $("#ca-promo-banner").hide();
    });
    $(".logo-text").hover(
      function() {
        $( this ).attr("src", "images/coding-autism-logo-text-092916.png");
      }, function() {
        $( this ).attr("src", "images/coding-autism-logo-text-white.png");
      }
    );

    $('a[href*="#"]:not([href="#"])').click(function() {
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

    // $(".about-person-text").hide();
    // $(".about-text").hover(
    //   function() {
    //     $( this ).find(".about-person").hide();
    //     $( this ).find(".about-person-text").show();
    //   }, function() {
    //     $( this ).find(".about-person").show();
    //     $( this ).find(".about-person-text").hide();
    //   }
    // );
});
