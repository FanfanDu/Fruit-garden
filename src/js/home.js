define(['jquery',"top"],function($,top){
    return function(){
        top.init();
        $('#footer').load('footer.html');
        $('#section').load('cartup.html',function() {
            $('.cart .del').click(function () {
                $(".cover").css({
                    opacity:0
                })
                $("section").hide();
                $('.s-car').css({"backgroundPosition":"-517px -243px"})
            })
        });
        var times;
        var idx=0;
        var $banner=$('.banner');
        var len=$banner.children('ul').children().length;
        var width=$banner.width();
        //var height=$banner.height();
        //ÉèÖÃÍ¼Æ¬¿í¶È ul¿í¶È
        $banner.find('img').css({'width':width});
        $banner.children('ul').css({'width':len*width});

        //ÉèÖÃÍ¼Æ¬¿í¶È ul¸ß¶È
        //$banner.find('img').css({'height':height});
        //$banner.children('ul').css({'height':height});

        //ÂÖ²¥Í¼
        times=setInterval(autoplay,3000);

        //Ìí¼Ó·ÖÒ³
        var $page=$('<div/>');
        $page.addClass('page');
        $('.banner').append($page);
        for(var i=0;i<len;i++){
            $('<span/>').appendTo($page);
        }

        function autoplay(){
            idx++;
            if(idx>len-1){
                idx=0
            }
            if(idx<0){
                idx=len-1;
            }
            show();
        }
        $('.page').children('span').eq(idx).addClass('active');
        function show(){
            $('.page').children('span').eq(idx).addClass('active')
                .siblings('span').removeClass('active');
            $('.banner').children('ul').animate({left:-idx*width});
        }

        $('.good-list').on('click','.s-car',function(){
            //console.log($(this))
            //$(this). animate({
            //    "backgroundPosition":"-519px -291px"
            //},'slow');
            $(this).css({
                "backgroundPosition":"-514px -291px"
            })
            console.log( $("section"))
            $("section").show();
            $(".cover").css({
                opacity:0.5
            })
        });



    }
})