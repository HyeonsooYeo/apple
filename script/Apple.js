$(function () {
    $('.m_bar').click(function () {
        $('.m_menu_page').css("top", 0);
        // $('html').css("overflowY", 'hidden')
        // $('.m_menu_page').css("overflowY", 'scroll')
    });
    $('.m_menu_close').click(function () {
        $('.m_menu_page').css("top", '-120%');
        $('.m_menu_page').css({
            "overflow": 'hidden'
        })
        // $('html').css("overflowY", 'scroll')
    });

    //  아코디언 메뉴
    $('.footer_menu>li').click(function () {
        $('.footer_submenu').slideUp();
        if ($(this).children('.footer_submenu').is(':hidden')) {
            $(this).children('.footer_submenu').slideDown();
        } else {
            $(this).children('.footer_submenu').slideUp();
        }
    });

    // 스크롤
    let lastScroll = 0 //마지막으로 스크롤된 양
   
    $(window).resize(function(){ 
        let lastScroll = 0 //마지막으로 스크롤된 양
        if (window.innerWidth < 830) { 
            // 다바이스 크기가 480이상일때 /* 스크립트내용*/ 
            $(window).scroll(function () {
                let st = $(this).scrollTop() //실시간 스크롤 양
                lastScroll = st
                console.log(lastScroll)
        
                let con = $('#content section')
        
                $.each(con, function (index, section) {
                    if (st > $(this).offset().top - 400) {
                        $(this).addClass('on')
                    } else {
                        $(this).removeClass('on')
                    }
                })
            })
        } else { 
            /* 스크립트내용*/ 
            $(window).scroll(function () {
                let st = $(this).scrollTop() //실시간 스크롤 양
                lastScroll = st
                console.log(lastScroll)
        
                let con = $('#content section')
        
                $.each(con, function (index, section) {
                    if (st > $(this).offset().top - 500) {
                        $(this).addClass('on')
                    } else {
                        $(this).removeClass('on')
                    }
                })
            })
        } }).resize();


        // 팝업
        $('.pop_open').click(function(){
            $('#popup').css("display","block")
        })
        $('.pop_close').click(function(){
            $('#popup').css('display','none')
        })
})