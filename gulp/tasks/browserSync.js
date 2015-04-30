var browserSync = require('browser-sync');
var gulp = require('gulp');
var reload = browserSync.reload;

gulp.task('browserSync', ['build'], function(){
  browserSync.init({
    server: {
      baseDir: "build/"
    }
  });
  gulp.watch('js/**/*.*', ['browserify']);
  gulp.watch('css/**/*.*', ['css']);
  gulp.watch('images/**/*.*', ['images']);
  gulp.watch('./build/**/*.*').on('change', reload);
});
