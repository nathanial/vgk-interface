var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  gulp.src('./scss/*.sass')
      .pipe(sass({indentedSyntax: true}))
      .pipe(gulp.dest('./build/css'));
});
