$(doucment).ready(function(){
    $('ul#navigation li').hover(function(){
        $(this).find('#subnav').animate({opacity:1.0, height: 'taggle' },500);
        $(this).closest('a').addClass('active');

    },function(){

        $(this).find('#subnav').animate({opacity:0, height: 'taggle' },500);
        $(this).find('a').removeClass('active');
    });
    });
