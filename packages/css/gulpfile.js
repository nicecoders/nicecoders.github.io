//Gulp plugin
var gulp = require("gulp"),
  //gulp打包日志或者警告。其实可以不用的
  concat = require('gulp-concat'),
  //将多个文件合并成一个文件
  uglifycss = require('gulp-uglifycss'),
  //css代码压缩
  sass = require("gulp-sass"),
  //sass 转 css
  autoprefixer = require('gulp-autoprefixer'),
  //浏览器兼容性自动补齐前缀
  cssmin = require('gulp-clean-css'),
  // css代码压缩 -- 配合 gulp-make-css-url-version完成url后面添加MD5版本很高避免缓存
  cssver = require('gulp-make-css-url-version');
  //添加版本号  与 gulp-clean-css 配合使用
  rename = require('gulp-rename'),
  //重新命名文件或者文件夹
  del = require('del'),


// 样式文件打包成 一个sgm-ng-comm.min.css?v=HJi9y08JBKGH392IHKJFH98UHO9DFDSO
gulp.task("sass-all", gulp.series(() => {
    return  gulp.src('./src/index.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
        .pipe(concat('nicecode.css'))
        .pipe(gulp.dest("./dist"))
        .pipe(rename('nicecode.min.css'))
        .pipe(cssver())
        .pipe(cssmin())
        .pipe(gulp.dest('./dist'));
}));

gulp.task("sass-module", gulp.series(() => {
  return  gulp.src('./src/**.scss')
      .pipe(sass({ style: 'expanded' }))
      .pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
      .pipe(gulp.dest("./lib"))
}));

gulp.task("watch", (done) =>　{
  //   log("Watching scss files for modifications");
    gulp.watch('src/**/*.scss', gulp.series("sass-all"));
    done()
  });

//删除生成的
gulp.task('clean', gulp.series((done) => {
    del(['dist']);
    del(['lib']);
    done()
}));

gulp.task("default", gulp.series('clean','sass-all'));
