$(function(){
    //show hide dropdown menue 
    $('.ele .showing_message').on('click',function(){
        $('.main_down').toggleClass('show_down');
        $(this).toggleClass('back_green');
        $(this).children('i').toggleClass('for_rotate');
        $(this).children('i').toggleClass('wight_color');
    });

   

    //to print inside a 
    $('.main_down .menus .menu .inside_ul a').on('click',function(){
        $('.menus .menu ul').removeClass('show_down');//شيل الكل الاول
        $('.ele .showing_message p').text($(this).text())
        $('.down').removeClass('show_down');
        $('.menus .menu .header .icons .up').fadeIn(.1);
        $('.main_down').removeClass('show_down');
    });

    //to print main titile
    $('.main_down .menus .menu .header .title').on('click',function(){
        $('.ele .showing_message p').text($(this).children('a').text());
        $('.main_down').removeClass('show_down');
    })

    //when click on down button
    $('.menus .menu .header .icons .down').on('click',function(){
        $('.menus .menu ul').removeClass('show_down');//شيل الكل الاول
            $(this).parent('.icons').parent('.header').next('ul').addClass('show_down');
            $(this).fadeOut(.1).removeClass('show_down');
            $(this).siblings('.up').fadeIn(.1);  
            $(this).parent('.icons').parent('.header').parent('.menu').siblings('.menu').children('.header').children('.icons').children('.up').fadeOut(.1);
            $(this).parent('.icons').parent('.header').parent('.menu').siblings('.menu').children('.header').children('.icons').children('.down').fadeIn(.1)
    });
    
    //when click on up button
    $('.menus .menu .header .icons .up').on('click',function(){
        $('.menus .menu ul').removeClass('show_down')
        $(this).parent('.icons').parent('.header').next('ul').removeClass('show_down');
            $(this).fadeOut(.1).removeClass('show_down');
            $(this).siblings('.down').fadeIn(.1);
    });

    //trick
    $('.menus .menu ul li').on('click',function(){
        $('.menus .menu .header .icons .down').addClass('show_down').fadeIn(.2);
        $('.menus .menu .header .icons .up').removeClass('show_down').fadeOut(.2);
    });

    //for select
    $('.select .sele_header').on('click',function(){
        $(this).parent('.select').toggleClass('green_border');
        $('.select ul').toggleClass('show_down');
        $(this).children('i').toggleClass('for_select_rotate');
    });

    $('.select .sele_header').on('move',function(){
        $(this).parent('.select').removeClass('green_border');
    })

    //for select print value
    $('.select ul li').on('click',function(){
        $('.select .sele_header p').text($(this).text());
        $('.select ul').removeClass('show_down');
        $('.select').removeClass('green_border')
    });

    //for add class green
    $('.search_one input').on('click',function(){
        $(this).parent('.search_one').toggleClass('green_border');
    });
    $('.search_one input').on('blur',function(){
        $(this).parent('.search_one').removeClass('green_border');
    });
    $('.search_two input').on('click',function(){
        $(this).parent('.search_two').toggleClass('green_border');
    });
    $('.search_two input').on('blur',function(){
        $(this).parent('.search_two').removeClass('green_border');
    });
})//end page