$(document).ready(function(){
    $('#menu-icon').click(function(){
        //alert('ok');
        $('#site').toggleClass('open-respon-menu');
        $('#child-menu-icon').css('display', 'none');
        $('ul#respon-store-menu').slideUp(900);
        return false;
    });

    $('#wp-respon-store-menu').click(function(){
        $('#child-menu-icon').toggle();
        $('ul#respon-store-menu').slideToggle();
        $('ul#respon-store-menu li#wp-respon-store-menu.child-menu i#child-menu-icon').css('display', 'none');
        return false;
    });

    $(window).resize(function(){
        if( $(window).width() >= 768 ){
            $('#site').removeClass('open-respon-menu');
            $('#child-menu-icon').css('display', 'none');
            $('ul#respon-store-menu').css('display' , 'none');
        }
        return false;
    });

    $('#wp-respon-store-menu.child-menu').click(function(){
        $('ul#respon-store-menu li#wp-respon-store-menu.child-menu i#child-menu-icon').css('display', 'none');
        $(this).find('i#child-menu-icon').toggle();
        
        return false;
    });
});