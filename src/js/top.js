/**
 * Created by Administrator on 2017/4/5 0005.
 */
define(["jquery"], function ($) {
    return {
        init: function () {
            $("#header").load("../html/header.html",function(){
                console.log($('.topnav'));

                var timer;
                $('.topnav').on('mouseenter','.address',function(){
                    clearTimeout(timer);

                    //console.log(666)
                    $('.hotCity').show();
                }).on('mouseleave','.address',function() {
                    timer = setTimeout(function() {
                        $('.hotCity').hide();
                    },300);
                })

                var timer;
                $('.topnav').on('mouseenter','.announcement',function(){
                    clearTimeout(timer);

                    $('.fruitAnnouncement').show();
                }).on('mouseleave','.announcement',function() {
                    timer = setTimeout(function() {
                        $('.fruitAnnouncement').hide();
                    },50);
                })

                var timer;
                $('.topnav').on('mouseenter','.phoneFruit',function(){
                    clearTimeout(timer);

                    $('.phoneList').show();
                }).on('mouseleave','.phoneFruit',function() {
                    timer = setTimeout(function() {
                        $('.phoneList').hide();
                    },50);
                })
                //    $('.hotCity').on('click','.provicesel',function(){
                //    console.log(111)
                //    $(this).siblings('.citysel').show();
                //})
                //$(' .provicesel').toggle(function(){
                //    $(this).siblings(".citysel").animate({height: 'toggle', opacity: 'toggle'}, "slow");
                //},function(){
                //    $(this).siblings(".citysel").animate({height: 'toggle', opacity: 'toggle'});
                //});
                $(' .provicesel').click(function(){
                    $(this).siblings($(".citysel")).is(':hidden') ? "收起" : "展开";
                     $(".citysel").slideToggle();
                })

                $('.hotCity').on('click','a',function(){
                    $('.locat').html($(this).html());
                })

            })
        }
    }
})