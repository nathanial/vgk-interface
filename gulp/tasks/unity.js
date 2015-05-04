var gulp = require('gulp');
var rimraf = require('rimraf');

gulp.task('unity', ['build'], function(){
  function writeFiles(){
    gulp.src('./build/**/*.*')
        .pipe(gulp.dest('../voxel-god-king/assets/WebPlayerTemplates/uiresources/hud'));
  }
  writeFiles();
  gulp.watch('js/**/*.*', ['browserify']);
  gulp.watch('css/**/*.*', ['css']);
  gulp.watch('images/**/*.*', ['images']);
  gulp.watch('./build/**/*.*').on('change', writeFiles);
  gulp.watch('scss/**/*.*', ['sass']);
  gulp.watch('assets/**/*.*', ['assets', 'browserify']);
});
