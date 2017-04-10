define(['jquery',"top"],function($,top){
	return function(){
		top.init();
		$('#footer').load('footer.html');
		var username;
		var pasw;
		//封装函数 判断输入框失去焦点时判断输入格式是否正
		function check(ele,tex,exp){
			console.log($(ele))
			$(ele).blur(function(){
				console.log(111)
				if(!exp.test($(this).val())){
					//不正确的提示
					console.log($(this).index())
					$(this).closest('.pnum').find('.tips').text(tex);
					$(this).closest('.pps').find('.tips').text(tex);
					$(this).closest('.sps').find('.tips').text(tex);
					$(this).closest('.pcd').find('.tips').text(tex);
				}else{
					//正确
					$(this).closest('.pnum').find('.tips').text("");
					$(this).closest('.pps').find('.tips').text("");
					$(this).closest('.sps').find('.tips').text("");
					$(this).closest('.pcd').find('.tips').text("");
				}
			})
		}
		function checkReg(ele,tex){
			if($(ele).val()==''){
				$(ele).closest('.pnum').find('.tips').html(tex+'不能为空');
				$(ele).closest('.pps').find('.tips').html(tex+'不能为空');
				$(ele).closest('.sps').find('.tips').html(tex+'不能为空');
				$(ele).closest('.pcd').find('.tips').html(tex+'不能为空');
			}
		}

		check('#user','请输入正确的手机号码',/^1[34578][\d]{9}$/gi);
		check('#password','密码为6-20位字符',/^[\w]{6,20}$/gi);
		check('#code','验证码为4位数字',/^\d{4}$/gi);
		//两次输入密码一致
		$('#repassw').blur(function(){
				if(($(this).val())!==$('#password').val()){
					$(this).closest('.sps').find('.tips').text('两次密码输入不一致');
				}else{
					$(this).closest('.sps').find('.tips').text('');
				}
			})
		//注册提交
		$(':submit').click(function(){
			checkReg("#user",'手机号');
			checkReg("#password",'密码');
			checkReg("#repassw",'确认密码');
			checkReg("#code",'验证码');
			
			username=$('#user').val();
			pasw=$('#password').val();

			//发送请求，注册信息写入数据库
			console.log(username,pasw)
			// $.ajax({
			// 	url:'http://localhost/fruitday/src/php/register.php',
			// 	type:'post',
			// 	data:{
			// 		username:username,
			// 		pasw:pasw
			// 	},
				
			// 	// dataType:'json',
			// 	success:function(res){
			// 		console.log(res);

			// 	}
			// })

			if(username.trim()!=''&&username.trim()!=''){
					$.ajax({
						url:'http://localhost/fruitday/src/php/register.php',
						data:{username:username,pasw:pasw},
						// dataType:'json',
						type:'post',
						success:function(res){
							console.log(res)
							console.log(res=='ok');
							if(res=='ok'){
								setTimeout(function(){
									location.href='login.html'
								},100);
							}
						}

					});
		

				}


		});

	}	
})