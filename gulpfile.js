var gulp = require('gulp');
var mustache = require("gulp-mustache");
var rename = require("gulp-rename");

gulp.task('mustache', function(){
  return gulp.src("./templates/pages/*.mustache")
      .pipe(mustache())
      .pipe(rename(function (path) {
        path.extname = ".html"
      }))
      .pipe(gulp.dest("./dist"));
});
