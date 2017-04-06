define(['jquery',"top"],function($,top){
        return {
            init:function(){
                //引进头部
               top.init();
                //尾部
                $('#footer').load('footer.html');
                //购物车遮罩
                $('#section').load('cartup.html');

                function List(){
                    this.listAjax(function(data){
                        console.log(data);
                        var objData = JSON.parse(data);
                        console.log(objData)

                        for(var i = 0;i < objData.length;i++){
                            var htmlstr = `<li>
                                <div class="surround">
                                <div class="s-img">
                                <a href="#" >
                                <img class="lazy" src="${objData[i].goodsImg}" alt=""/>
                                </a>
                                </div>
                                <div class="info clearfix">
                                    ${objData[i].goodsName}
                                <span class="pice pull-right ">${objData[i].goodsPrice}</span>

                                </div>
                                <div class="axe clearfix">
                                <div class="kg clearfix pull-left">
                                <span class="  pull-left">
                                    ${objData[i].goodsNumber}
                                </span>
                                </div>
                                <div class="car pull-right">

                                </div>
                                </div>
                                </div>
                                </li>`;
                            $(".leftpart ul").append(htmlstr);
                        }
                    });
                }
                List.prototype.listAjax = function(callback){
                    $.ajax({
                        url:"../php/list.php",
                        type: "GET",
                        success: function (res) {
                            console.log(res)
                        },
                        success:function(res){
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
                        },
                        dataType:"jsonp"
                    })
                }
                //实例化商品列表
                var goodList = new List();
            }
        }
})