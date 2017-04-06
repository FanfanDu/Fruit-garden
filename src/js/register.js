define(['jquery'],function($){
	return function(){
		$('#header').load('header.html');
		$('#footer').load('footer.html');
		var username;
		var pasw;
		
		check('#user','请输入正确的手机号码',/^1[34578][\d]{9}$/gi);
		check('#password','密码为6-20位字符',/^[\w]{6,20}$/gi);
		//两次输入密码一致
		$('#repassw').blur(function(){
				if(($(this).val())!==$('#password').val()){
					$(this).closest('.mage').find('.tips').text('两次密码输入不一致');
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
			$.ajax({
				url:'http://localhost/fruitday/src/php/register.php',
				data:{username:username,pasw:pasw},
				type:'post',
				// dataType:'json',
				success:function(res){
					console.log(res);

				}
			})
		});


		//封装函数 判断输入框失去焦点时判断输入格式是否正确
		function check(ele,tex,exp){
			$(ele).blur(function(){
				if(!exp.test($(this).val())){
					console.log($(this).val())
					$(this).closest('.mage').find('.tips').text(tex);
				}
			})
		}

		function checkReg(ele,tex){
			if($(ele).val()==''){
				$(ele).closest('.mage').find('.tips').html(tex+'不能为空');
			}
		}

	}

})