//引包
// 引gulp包
var gulp = require('gulp');

// 引入gulp插件
// gulp-sass
var sass = require('gulp-sass');



// 创建任务
// 编译sass文件
gulp.task('compileSass',function(){
	// 找到sass文件
	// 得到文档流
	gulp.src('./src/sass/*.scss')

	// pipe管道方法
	.pipe(sass({
		outputStyle:'expanded'
	}))

	// 错误信息处理，不会退出整个任务
	.on('error', sass.logError)


	// 输出
	.pipe(gulp.dest('./src/css/'))
});

// 监听sass文件修改，直接编译任务
gulp.task('watchSass',function(){
	gulp.watch('./src/sass/*.scss',['compileSass']);
})



//引入browser-sync
// var browserSync = require('browser-sync');

// // 使用
// // 创建任务
// gulp.task('server',function(){
// 	browserSync({
// 		启动服务器
// 		server:{
// 			baseDir:'./src/'
// 		},

// 		// 服务器代理
// 		// proxy:'http://localhost/fruit/',

// 		// 监听文件修改，自动刷新页面
// 		files:['./src/**/*.html','./src/css/*.css','./src/**/*.php']
// 	});