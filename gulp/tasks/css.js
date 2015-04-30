var gulp = require('gulp');

gulp.task('css', function(){
  gulp.src('./css/**/*.css').pipe(gulp.dest('./build/css'));
  gulp.src('./node_modules/bootstrap/dist/css/**/*.css').pipe(gulp.dest('./build/css'));
  gulp.src('./node_modules/font-awesome/css/**/*.css').pipe(gulp.dest('./build/css'));
  gulp.src('./node_modules/font-awesome/fonts/**/*.*').pipe(gulp.dest('./build/fonts'));
});
