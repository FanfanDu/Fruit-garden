define(['jquery',"top"],function($,top){
        return {
            init:function(){
                //引进头部
               top.init();
                //尾部
                $('#footer').load('footer.html');
                //购物车遮罩
                   $('#section').load('cartup.html',function() {
                        $('.cart .del').click(function () {
                            $(".cover").css({
                                opacity:0
                            })
                            $("section").hide();
                            $('.s-car').css({"backgroundPosition":"-517px -243px"})
                        })
                    });

                function List(){
                    this.listAjax(function(data){
                       // console.log(data);
                        var objData = JSON.parse(data);
                       // console.log(objData)
                           
                        for(var i = 0;i < objData.length-1;i++){
                            var htmlstr = `<li>
                                <div class="surround">
                                <div class="s-img">
                                <a href="details.html?id=${i + 1}" >
                                <img class="lazy" src="${objData[i].goodsImg}" alt=""/>
                                </a>
                                </div>
                                <div class="info clearfix">
                                   <span class='fname pull-left'> ${objData[i].goodsName}</span>
                                <span class="pice pull-right ">${objData[i].goodsPrice}</span>

                                </div>
                                <div class="axe clearfix">
                                <div class="kg clearfix pull-left">
                                <span class="  pull-left">
                                    ${objData[i].goodNumber}
                                </span>
                                </div>
                                <div class="car pull-right">
                                    <div class="buy-car" style="background:url('${objData[i].goodsCar}') no-repeat -518px -243px;width: 34px;height:40px;position: absolute;
                       bottom: 3px; right: 5px;" ></div>
                                </div>
                                </div>
                                </div>
                                </li>`;
                            $(".leftpart ul").append(htmlstr);
                             // $(".leftpart ul").get(0).innerHTML=htmlstr;
                        }
                    });
                };
               
                List.prototype.listAjax = function(callback){
                    $.ajax({
                        url:"../php/list.php",
                        type: "GET",
                        datatype:"jsonp",
                        success:function(res){
                           // console.log(6666)
                            //console.log(res)
                            if(callback){
                                callback(res);
                            }else{
                                console.log(res);
                            }
                        },
                        complete:function(){
                            console.log("正在请求")
                        },
                        error:function(){
                            console.log(arguments);
                        }
                       
                    })
                }
                //实例化商品列表
                var goodList = new List();
            }
        }
})