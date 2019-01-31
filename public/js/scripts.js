$(document).ready(function(){
    var navOffset = $('#snap-to-top').offset().top;

    $('#snap-to-top').wrap('<div class="nav-placeholder"></div>');
    $('.nav-placeholder').height($('#snap-to-top').outerHeight());

    $(window).scroll(function(){
        var scrollPos = $(window).scrollTop();

        if(scrollPos >= navOffset){
            $('#snap-to-top').addClass('fixed');
        }
        else{
            $('#snap-to-top').removeClass('fixed');
        }
    });
    $('.toggle-drop').hover(function(){
        $(this).find('ul').toggle();
    });
});
