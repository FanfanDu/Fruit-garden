// 配置文件
requirejs.config({
	baseUrl:'js',

	// 设置别名
	// 格式：别名:真实路径
	paths:{
		'jquery':'jquery-3.1.1',
		'common':'common',
		'login':'login',
		'home':'home',
		'list':'list'
	}
	//shim:{
	//	'ajax':{
	//		exports:'ajax'
	//	},
	//	'gdszoom':['jquery']
	//}
})
require(['jquery','common','login','home','list'],function($,common,login,home,list){
		home();
		list()
		login();
})

// 引入其他模块
// 在requireJS中，一个模块就是一个js文件
// 引入模块的路径：
// requirejs(['jquery','ajax','gdszoom'],function($){
// 	console.log($);

// 	$('#box').gdszoom();
// });