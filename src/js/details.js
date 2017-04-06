define(['jquery'],function($){
    return function(){
        $('#header').load('header.html');
        $('#footer').load('footer.html');
        $('#section').load('cartup.html',function(){
            $('.cart .del').click(function(){
                $("#section").remove();
            })
        });

        //var areaBox = $("div.btn-group.pull-left");
        //var hoverHandler = $(".dropdown-toggle");
        //var closeHandler = $(".dropdown-close");
        //var targetAreaBox = $(".dropdown-menu");
        //var dropdownNav = $(".dropdown-nav li");
        //var dropdownNavBox = $(".dropdown-content .fd-area");
        //var autoClose;
        //
        ///
        //$(".area-list li a").each(function(){
        //    if($(this).text().length>4){
        //        $(this).parent().addClass("long-area");
        //    }
        //});
        //
        //
        //
        //
        //// auto close
        //areaBox.on('mouseover', function() {
        //    if (autoClose) {
        //        clearTimeout(autoClose);
        //    }
        //}).on('mouseout', function() {
        //    autoClose = setTimeout(function() {
        //        targetAreaBox.hide();
        //        hoverHandler.css('border-bottom', '1px solid #CECBCE');
        //    }, 1000);
        //});

        $('.box2').on('mouseenter',function(){
            $('.weixin').show();
        }).on('mouseleave',function(){
            $('.weixin').hide();
        });

        $('.btn-group').on('mouseenter',function(){
            console.log(88888)
            $('.dropdown-menu').show();
        })
        $('.price-info').on('click','.fr-add',function(){console.log(6666)
            $('section').show();
        });

        $('.cart .del').click(function(){
            $("#section").remove();
        })
    }
})