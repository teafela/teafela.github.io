jQuery(document)(function() {

    var $navbar = $("#nav-bar");
    var y_pos = $navbar.offset().top;
    var height = $navbar.height();

    alert(y_pos);

    // $(document).scroll(function() {
    //     var scrollTop = $(this).scrollTop();

    //     if (scrollTop > y_pos + height) {
    //         $navbar.addClass("navbar-fixed").animate({
    //             top: 0
    //         });
    //     } else if (scrollTop <= y_pos) {
    //         $navbar.removeClass("navbar-fixed").clearQueue().animate({
    //             top: "-48px"
    //         }, 0);
    //     }
    // });

});