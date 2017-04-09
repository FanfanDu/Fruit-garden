define(['jquery',"top","common"],function($,top,common){
	return function(){
        top.init();

        $('#footer').load('footer.html');

        // 用于保存购物车中的商品列表
        var carList=getCookie('car');
   //      	var cookie = document.cookie.split('; ');
			// cookie.forEach(function(item){
			// 	var arr = item.split('=');
			// 	if(arr[0] === 'carlist'){
					
			// 		// 换成数组/对象
			// 		carlist = JSON.parse(arr[1]);
			// 	}
			// });

		console.log(carList);
			
		render();
		function render(){
			var sumPrice = 0;
			
			// // 遍历carlist，把内容写入#carList元素
			(JSON.parse(carList)).forEach(function(goods){
				// 计算价格
				var htmlStr = `<li >
                        <div class="cartbox clearfix">
                            <div class="cimg pull-left">
                                <a href="#" >
                                  <img src="${goods.img}" alt="">
                                </a>
                               
                            </div>
                            <div class="cname pull-left">
                                <p><a href="" >${goods.goondname}</a></p>
                            </div>
                            <div class="kg pull-left">
                                <p>${goods.text}</p>					</div>
                            <div class="cprice pull-left">
                                <p>${goods.price}</p>
                            </div>
                            <div class="number pull-left clearfix">
                                <span class="redu num pull-left">-</span>
                                <input class="sumTotal pull-left" type="tel" disabled="" name='qty' autocomplete='on' value="${goods.num}"  >
                                <span class="add num pull-left">+</span>
                            </div>
                            <div class="csum pull-left">
                                <p>${goods.price}</p>
                            </div>
                            <div class="del pull-left">
                                <p >删除</p>
                            </div>
                        </div>
                    </li>`

                    $('.commodity ul').append(htmlStr);
			});

			//原价格
			// var cprice =( $(".cprice p").html().split("￥"))[1];
			// var cnum = $(".cprice p").closest('li').find('.sumTotal').val();
			// $(".csum p").html("￥"+(cnum - 0) * (cprice - 0))
			var cprice;
			var cnum;
			$(".cprice").each(function(index,item){
				cprice = ($(item).find('p').html().split("￥"))[1];
				cnum = $(item).find("p").closest('li').find('.sumTotal').val();
				$(item).closest('li').find(".csum p").html("￥"+(cnum - 0) * (cprice - 0))
			})
			//计算价格
			function calu(){


				//改变总数
				var allNum = 0;
				
				// console.log($(".sumTotal"))
				$(".sumTotal").each(function(index,item){
					// console.log(item)
					allNum += ($(item).val() - 0);

					
					console.log(allNum)
				})
				$(".msg span em").html(allNum)

					//改变总价格
					var allPrice=0;
					$('.csum p').each(function(index, item) {
						var aprice=($(item).html().split('￥'))[1];
						console.log(aprice);
						allPrice+=(aprice - 0)

					});
					$('.msg .all').html(allPrice);
			}
			calu();
				//减少数量
			  $('.redu').click(function(e){
			  	var price =(( $(e.target).closest('li').find(".cprice p").html() ).split("￥"))[1];
				var num = $(e.target).closest('li').find('.sumTotal ').val();
					if(num > 1){
						num--;
						
						$(e.target).closest('li').find('.sumTotal ').val(num);
						$($(e.target).closest('li').find(".csum p")).html('￥'+parseInt($(e.target).closest('li').find('.sumTotal ').val() * (price - 0)))
					}

				})
		  		//增加数量
				$('.add').click(function(e){
					// console.log($(e.target).closest('li').find(".csum p").html())
					var price =(( $(e.target).closest('li').find(".cprice p").html() ).split("￥"))[1];
					// console.log(price)
					var num = $(e.target).closest('li').find('.sumTotal ').val();
					// console.log(num)
					num++;

					$(e.target).closest('li').find('.sumTotal ').val(num);
					// console.log($('.sumTotal').val())
					// var asum=($('.cprice p').html().split('￥'))[1];
					// console.log(asum)

					// console.log(parseInt(asum*$('.sumTotal').val()))
					$($(e.target).closest('li').find(".csum p")).html('￥'+parseInt($(e.target).closest('li').find('.sumTotal ').val() * (price - 0)))
					
					//计算总价
					calu();

				})
				//删除
				$(".del").click(function(event) {
					$(event.target).closest('li').remove();
				});
		}
    }
})