var gulp = require("gulp");
var sass = require('gulp-sass');
gulp.task("sass", function () {
  return gulp.src("app/public/scss/*.scss")
  .pipe(sass())
  .pipe(gulp.dest("app/public/css/"));
});
gulp.task('watch', function(){
  gulp.watch("app/public/scss/*.scss", ["sass"]);
});
