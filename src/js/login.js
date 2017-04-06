define(['jquery'],function($){
	// return一个函数/对象
	return function(){
		$(function(){
			$('#header').load('header.html');
			$('#footer').load('footer.html');
			var username;
			var pasw;

			// 页面刷新时，判断cookie中是否有username和password
			// 如果有，则跳转
			var cookie = document.cookie.split('; ');
			cookie.forEach(function(item){
				var arr = item.split('=');
				if(arr[0] === 'username'){
					username=arr[1]
					$('#phone').val(username);
				}
			});
			
				//用户名和密码不能为空
				$('#phone').blur(function(){
					username=$('#phone').val();
					if(username.trim()==''){
						$('#phone').next('p').show();
					}else{
						$('#phone').next('p').hide();
					}
				});
				$('#pasw').blur(function(){
					pasw=$('#pasw').val();
					if(username.trim()==''){
						$('#pasw').next('p').show();
					}else{
						$('#pasw').next('p').hide();
					}
				});
			//提交验证用户名和密码
			$('#btnSubmit').on('click',function(e){
				username=$('#phone').val();
				pasw=$('#pasw').val();
				e.stopPropagation();
				//发送请求，查看用户名和密码是否正确
				if(username.trim()!=''&&username.trim()!=''){
					$.ajax({
						url:'http://localhost/fruitday/src/php/login.php',
						data:{username:username,pasw:pasw},
						// dataType:'json',
						type:'post',
						success:function(res){
							console.log(res=='ok');
							if(res=='ok'){
								setTimeout(function(){
									location.href='home.html'
								},100);
							}
						}

					});
				//若勾选了记住用户名选择框的，则把用户名写入cookie
					if($(':checkbox').prop('checked')){
						var now=new Date();
						now.setDate(now.getDate()+30);
						document.cookie='username='+username+';expires=' + now;
					}
				}
				

				
			});
	
			
		});
	}
});
