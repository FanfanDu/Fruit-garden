define(['jquery'],function($){
    return function(){
        $('#header').load('header.html');
        $('#footer').load('footer.html');
        $('#section').load('cartup.html');
        var times;
        var idx=0;
        var $banner=$('.banner');
        var len=$banner.children('ul').children().length;
        var width=$banner.width();
        //var height=$banner.height();
        //设置图片宽度 ul宽度
        $banner.find('img').css({'width':width});
        $banner.children('ul').css({'width':len*width});

        //设置图片宽度 ul高度
        //$banner.find('img').css({'height':height});
        //$banner.children('ul').css({'height':height});

        //轮播图
        times=setInterval(autoplay,3000);

        //添加分页
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

        $('.good-list').on('click','.s-car',function(){console.log(6666)
                $('section').show();
        });
        $('.cart').click(function(){
            console.log(11111)
        })


    }
})