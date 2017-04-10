define(['jquery',"top",'common'],function($,top,common){
    return function(){
        top.init();

        $('#footer').load('footer.html');
        $('#section').load('cartup.html',function() {
            $('.cart .del').click(function () {
                $(".cover").css({
                    opacity:0
                })
                $("section").hide();
                
            })
        });
        var str=location.href;
        var num=str.indexOf('?');
        var $info=$('.product-info');

        var id=str.slice(num+1);
        var indexId= (id.split("="))[1];
        console.log(indexId)
        var arr=[];
        var data=new Promise(function(resolve,reject){
            $.ajax({
                url:"http://localhost/fruitday/src/php/lists.php",
                dataType:'json',
                success:function(res){
                    console.log(res);
                    res.forEach(function(item,index){
                        //console.log(index)
                        if(index + 1 == indexId){
                            //console.log(item);
                            $('.small li img').map(function(num,item){
                                num = num + 2;
                                if(num <= 5){
                                    var src = "../img/details/" + (index + 1) + "-1-" + num + ".jpg";
                                    item.src = src;
                                }
                                
                                
                            })	;
                            //创建第一张默认图片
                            $('.big li img').attr('src',"../img/details/" + indexId + "-1-" + 2 + ".jpg");
                            $('.focus').on('mouseenter','.small li img',function(){
                                console.log($(this).attr("src"))
                                $('.big li img').attr('src',$(this).attr("src"));
                            })
                            //减少数量
                            $('#redu').click(function(){
                                var num = $('#all').val();
                                if(num > 1){
                                    num--;
                                    $('#all').val(num)
                                }
                            })
                            //增加数量
                            $('#add').click(function(){
                               
                                var num = $('#all').val();

                                num++;
                                console.log('加的数量：'+num)
                                $('#all').val(num)

                                $('.fruitright').find('.frnum').text('x'+$('#all').val())

                            })
                            //让名字。价格，数量随数据库改变
                            $('.name').find('h3').text(item.name);
                            $('.box').find('span').text(item.price);
                            $('.weight').find('span').text(item.number);

                            $('.fruitleft img').attr('src',"../img/details/" + indexId + "-1-" + 2 + ".jpg");
                            $('.fruitright').find('h4').text(item.name);
                            $('.fruitright').find('.frpice').text(item.price);
                            // $('.fruitright').find('.frnum').text($('#all').val());

                            // $('.btn-primary').click(function() {
                            //     var sum=$('.total .num').html();
                            //     console.log(sum);
                            //     sum++;
                            //     console.log(this)
                            //    $('.total .num').html(sum);
                            //     var price = ($(".box span").html().split("￥"))[1];
                            //     var all = $("#all").val();
                            //     console.log(all)
                            //     console.log(price * all)
                            //     $('.total .price').html("￥" + (price * all));
                             
                            //     $('section').show();

                            //     return false;

                            // });
                            console.log($(".addGoods"))
                            $('.addGoods').click(function(e) {
                                //阻止a连接自动跳转
                                e.preventDefault();
                                
                               //  var sum=$('.total .num').html();
                               //  sum++;
                               //  $('.total .num').html(sum);
                               //  var price = ($(".box span").html().split("￥"))[1];
                               //  var all = $("#all").val();
                               // $('.total .price').html("￥" + parseInt(price * all));

                                //将购买信息存入cookie中 "car"--购物车cookie的名字
                                //[{username:"df",goondname:"芒果",img:"src",price:100,num:10;text:"规格"}]
                                 var username = $(".light").html() == "[ 登录 ]" ? undefined : $(".light").html();
                                //console.log(username)
                                var car = getCookie("car");
                                console.log(car)
                                var carObj = car ? JSON.parse(car) : [];
                               
                                var buyMsg = {
                                    "username":username,
                                    "goondname":$('.name h3').html(),
                                    "img":$(".small li").eq(0).find("img").attr("src"),
                                    "price":$('.box span').html(),
                                    "text":$('.weight span').html(),
                                    "num":$("#all").val()
                                }

                                //判断cookie购物车中是否已存在改商品
                                if(carObj.length == 0){
                                    //空购物车
                                     carObj.push(buyMsg);
                                }else{
                                     carObj.forEach(function(item){
                                        if(item.goondname == buyMsg.goondname){
                                            item.num = (item.num - 0)
                                            //存在
                                            item.num += (buyMsg.num - 0);
                                        }else{
                                            //不存在
                                             carObj.push(buyMsg);
                                        }
                                    })
                                }
                               
                               
                                setCookie("car",JSON.stringify(carObj),"/",7);

                                //获取购物车cookie的信息
                                var carMsg = JSON.parse(getCookie("car"));
                                var allPrice = 0;
                                var allNum = 0;//数量总数
                                for(var i = 0;i < carMsg.length;i++){
                                    allPrice += ((carMsg[i].price.split("￥"))[1] - 0) * (carMsg[i].num - 0)
                                    allNum += (carMsg[i].num - 0); 
                                }
                                $(".numm").html(allNum);
                                $(".price").html("￥" + parseInt( allPrice ));

                                $('section').show();
                                //console.log(11)
                                // return false;
                            });

                            $('.shop').click(function(){
                               $("section").show();
                                    $(".cover").css({
                                        opacity:0.5
                                    })
                            });
                            // resolve(item.uid);
                            //$info.children('.name').children('h2').text(item.name);
                            //
                            //$info.children('.prices').children('span').html('&yen'+item.price)
                        }

                    })
                }
            })
        })

        $('.box2').on('mouseenter',function(){
            $('.weixin').show();
        }).on('mouseleave',function(){
            $('.weixin').hide();
        });

        //$('.btn-group').on('mouseenter',function(){
        //    console.log(88888);
        //    $('.dropdown-menu').show();
        //});
        //地区列表显示
        var timer;
        $('.btn-group').on('mouseenter',function(){
            clearTimeout(timer);
            $('.dropdown-menu').show();

        }).on('mouseleave',function() {
            timer = setTimeout(function() {
                $('.dropdown-menu').hide();
            },50);
        })
        //将地区选入值写入
        $('.fd-area ').on('click','a',function(e){
            // console.log($('.fd-area a'))
            // console.log($('.btn-default .send-area'))
            //阻止a连接自动跳转
             e.preventDefault();
                    $('.df').html($(this).html());
                })
        // $('.price-info').on('click','.fr-add',function(){
        //     $('section').show();
        // });
        $('.good-details').on('click','.gocart',function(){

            ($('.airfruit')).is(':hidden')? "收起" : "展开";
            $(".airfruit").slideToggle();
        })
        // $('.airfruit').on('click','.sure',function(){
        //     $('section').show();
        // })

        $('.dropdown-menu').on('click','.dropdown-close',function(){
            $('.dropdown-menu').hide();
        })


        //$('.area-list').on('click','li',function(){
        //    $(this).eq(1).attr('data-id').click(function(){
        //        if()
        //    })
        //})
        
        // function Focus(interval) {
        //     var num = 0; 	
        //     var timer;
        //     timer = setInterval(touch,interval);
        //     $(".foucs").mouseenter(
        //         function(){
        //             clearInterval(timer);
        //         }
        //     );

        //     $(".foucs").mouseleave(
        //         function(){
        //             clearInterval(timer);
        //             timer = setInterval(touch,interval);
        //         }
        //     );



            
        //     function touch(){
        //         if(num < $(".foucs .big li").length - 1){
        //             num = num + 1;
        //         }else{
        //             num = 0;
        //         }
        //         change();
        //     }



        //     //Сͼ�ļ�����
        //     $(".foucs .small li").mouseenter(
        //         function(){
                    
        //             num = $(this).index();	//��ɵ�����Ǹ�li�����
        //             change();
        //         }
        //     );

        //     //���廻ͼ����
        //     function change(){
        //         //�����ź�����ֵ����big�����һ��li��cur�������liû��cur
        //         $(".foucs .big li").eq(num).addClass("cur").siblings().removeClass("cur");
        //         //�����ź�����ֵ����small�����һ��li��cur�������liû��cur
        //         $(".foucs .small li").eq(num).addClass("cur").siblings().removeClass("cur");
        //     }
        // }
    }
})





//define(['jquery',"top"],function($,top){
//    return {
//        init: function () {
//                //����ͷ��
//                top.init();
//                //β��
//                $('#footer').load('footer.html');
//                //���ﳵ����
//                $('#section').load('cartup.html',function() {
//                    $('.cart .del').click(function () {
//                        $("#section").remove();
//                    })
//                })
//
//            function Det(){
//
//                    var self = this;
//                    this.detAjax(function(res){
//                        var delData = JSON.parse(res);
//
//
//                        //���¼�
//                        $('.focus').on("click",'img',function(){
//                             console.log(11);
//
//
//                        });

                        //$('.redu').click(function(){
                        //    var num = $('#all').val();
                        //
                        //    if(num > 1){
                        //        num--;
                        //        $('#all').val(num)
                        //    }
                        //})
                        //$('.add').click(function(){
                        //    var num = $('#all').val();
                        //    num++;
                        //    $('#all').val(num)
                        //})
//
//
//                        $('.box2').on('mouseenter',function(){
//                                $('.weixin').show();
//                            }).on('mouseleave',function(){
//                                $('.weixin').hide();
//                            });
//
//                            $('.btn-group').on('mouseenter',function(){
//                                console.log(88888);
//                                $('.dropdown-menu').show();
//                            });
//                            $('.price-info').on('click','.fr-add',function(){console.log(6666);
//                                $('section').show();
//                            });
//                        $('.good-details').on('click','.gocart',function(){
//
//                           ($('.airfruit')).is(':hidden') ? "����" : "չ��";
//                            $(".airfruit").slideToggle();
//                        })
//                $('.airfruit').on('click','.sure',function(){
//                    $('section').show();
//                })
//
//
//                })
//
//            Det.prototype.detAjax = function(callback){
//                $.ajax({
//                    url:"../php/details.php",
//                    type: "GET",
//                    success: function (res) {
//                        console.log(res)
//                    },
//                    success:function(res){
//                        if(callback){
//                            callback(res);
//                        }else{
//                            console.log(res);
//                        }
//                    },
//                    complete:function(){
//                        console.log("��������")
//                    },
//                    error:function(){
//                        console.log(arguments);
//                    },
//                    dataType:"jsonp"
//                })
//            }
//
//            var detaList = new Det();
//
//        }
//    }
//    }
//})
    //return function(){
    //    $('#header').load('header.html');
    //    $('#footer').load('footer.html');
    //    $('#section').load('cartup.html',function(){
    //        $('.cart .del').click(function(){
    //            $("#section").remove();
    //        })
    //    });

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

//        $('.box2').on('mouseenter',function(){
//            $('.weixin').show();
//        }).on('mouseleave',function(){
//            $('.weixin').hide();
//        });
//
//        $('.btn-group').on('mouseenter',function(){
//            console.log(88888)
//            $('.dropdown-menu').show();
//        })
//        $('.price-info').on('click','.fr-add',function(){console.log(6666)
//            $('section').show();
//        });
//
//        $('.cart .del').click(function(){
//            $("#section").remove();
//        })
//    }
//})