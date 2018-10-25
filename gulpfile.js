//先导入需要的插件
const gulp = require('gulp'),//gulp 插件
concat = require('gulp-concat'),//合并js
rename = require('gulp-rename'),//重命名js
uglify = require('gulp-uglify'),//合并js
imagemin = require('gulp-imagemin'),
sass = require('gulp-sass'),
cssnano =require('gulp-cssnano');

//创建并发布任务
gulp.task('js',function(){
	return gulp.src('./src/js/*.js').pipe(concat('main.js')).pipe(rename({'suffix':'.min'})).pipe(uglify()).pipe(gulp.dest('dist'));
})
//压缩图片
gulp.task('img',function(){
	return gulp.src('./src/img/*').pipe(imagemin()).pipe(gulp.dest('dist/img'));
})
//压缩css
gulp.task('sass',function(){
	return gulp.src('./src/sass/*.scss').pipe(sass()).pipe(rename({'suffix':'.min'})).pipe(cssnano()).pipe(gulp.dest('dist/css'));
})
//发布监听任务
gulp.task('default',function(){
	gulp.watch('./src/js/*.js',['js']);
	gulp.watch('./src/img/*',['img']);
	gulp.watch('./src/sass/*.scss',['sass']);
})
