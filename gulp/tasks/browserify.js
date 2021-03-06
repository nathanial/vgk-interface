var _ = require('lodash');
var browserify = require('browserify');
var watchify = require('watchify');
var bundleLogger = require('../util/bundleLogger');
var gulp = require('gulp');
var handleErrors = require('../util/handleErrors');
var source = require('vinyl-source-stream');
var babelify = require('babelify');

var config = {
  debug: true,
  extensions: ['.jsx','.coffee'],

  bundleConfigs: [{
    entries: './js/main.js',
    dest: './build/',
    outputName: 'bundle.js'
  }]
};

gulp.task('browserify', function(callback){
  var bundleQueue = config.bundleConfigs.length;
  _.each(config.bundleConfigs, function(bundleConfig){
    var bundler = browserify({
      cache: {}, packageCache: {}, fullPaths: true,
      entries: bundleConfig.entries,
      extensions: config.extensions,
      debug: config.debug
    });

    bundler.transform(babelify.configure({
      stage: 0,
      optional: ['runtime'],
      ignore: /(node_modules)/
    }))

    var bundle = function(){
      bundleLogger.start(bundleConfig.outputName);

      return (
        bundler.bundle()
        .on('error', handleErrors)
        .pipe(source(bundleConfig.outputName))
        .pipe(gulp.dest(bundleConfig.dest))
        .on('end', reportFinished)
      );
    };

    if(global.isWatching){
      bundler = watchify(bundler);
      bundler.on('update', bundle);
    }

    var reportFinished = function(){
      bundleLogger.end(bundleConfig.outputName);
      if(bundleQueue){
        bundleQueue--;
        if(bundleQueue === 0){
          callback();
        }
      }
    };

    return bundle();
  });
});
