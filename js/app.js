$(function() {
    var startSomeGoodModal = "<div id='start-some-good'><iframe width='380' height='485' src='https://startsomegood.com/projects/help-launch-life-changing-inclusive-technology/widget' frameborder='0'></iframe></div>";
    $(".logo-text").hover(
      function() {
        $( this ).attr("src", "images/coding-autism-logo-text-092916.png");
      }, function() {
        $( this ).attr("src", "images/coding-autism-logo-text-white.png");
      }
    );

    $( "#start-some-good" ).hide().delay( 800 ).fadeIn( 600 );
    $("#close-button").click(function() {
      $( "#start-some-good" ).fadeOut( 600 );
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
