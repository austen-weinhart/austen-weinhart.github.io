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

    $(".show-more").find("a").click(function() {
      $(this).closest(".panel").addClass("full-panel");
      $(this).hide();
    });

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
});
