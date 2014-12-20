var gulp = require('gulp'),
gutil = require('gulp-util'),
webpack = require('webpack'),
WebpackDevServer = require('webpack-dev-server'),
path = require('path'),

webpackBaseCfg = require(path.join(process.cwd() + '/webpack.config.js'));

gulp.task('default', function (callback) {

    var cfg = Object.create(webpackBaseCfg);

    // Todo: Broken?

    // Start a webpack-dev-server
    var compiler = webpack(cfg);

    new WebpackDevServer(compiler, {}).listen(8080, 'localhost', function(err) {
        if(err) throw new gutil.PluginError('webpack-dev-server', err);
        // Server listening
        gutil.log('[webpack-dev-server]', 'http://localhost:8080/index.html');

        // keep the server alive or continue?
        callback();
    });

});
