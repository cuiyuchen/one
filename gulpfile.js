var gulp = require('gulp');   // 引入依赖包
var sass = require('gulp-sass'); //引入依赖包
var px2rem = require('gulp-px2rem-plugin');
gulp.task('sass', function(){
    //sass()方法用于转换sass到css
  return gulp.src('./scss/*.scss')   //执行sass文件的路径
    .pipe(sass())
    .pipe(px2rem({'width_design':750})) // 将Sass转换为带有gulp-Sass的CSS
    .pipe(gulp.dest('./css')) //输出css文件的路径
});


//执行gulp 命令的入口
// gulp.task('sass:watch', function(){
//   gulp.watch('./app/*.scss', ['sass']); 
//   // 监听指定路径的sass文件并编译
// })

gulp.task('default',function(){
	gulp.watch('./scss/*.scss',['sass'])
})