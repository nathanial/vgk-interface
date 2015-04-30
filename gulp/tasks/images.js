var gulp = require('gulp');

gulp.task('images', function(){
  return gulp.src('./images/**/*.png').pipe(gulp.dest('./build/images'));
});
