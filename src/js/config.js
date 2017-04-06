// 配置文件
requirejs.config({
	// baseUrl:'js',

	// 设置别名
	// 格式：别名:真实路径
	paths:{
		'jquery':'jquery-3.1.1',
		'list':'list',
		"top":"top"
		
	}
	//shim:{
	//	'ajax':{
	//		exports:'ajax'
	//	},
	//	'gdszoom':['jquery']
	//}
})
 require(['jquery','list'],function($,list){
	 var path = location.pathname;
	 console.log(path)
	if(path == '/fruitday/src/html/list.html'){
		 //商品列表页面
		list.init();
	 }else if(path == '/fruitday/src/html/index.html'){

	}
 })

// 引入其他模块
// 在requireJS中，一个模块就是一个js文件
// 引入模块的路径：
// requirejs(['jquery','ajax','gdszoom'],function($){
// 	console.log($);

// 	$('#box').gdszoom();
// });