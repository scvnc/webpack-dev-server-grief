# An error when trying to use webpack-dev-server api with gulp.

This webpack config seems to be configured correctly because running the CLI `webpack-dev-server` is successful.  However when using the [gulp example](http://webpack.github.io/docs/usage-with-gulp.html) from the webpack docs: I can't seem to successfully invoke the webpack dev server.  What is going on?

	$ npm install
	$ gulp
	[10:35:59] Using gulpfile ~/webpack-dev-server-grief/gulpfile.js
	[10:35:59] Starting 'default'...
	[10:35:59] Finished 'default' after 49 ms
	[10:35:59] [webpack-dev-server] http://localhost:8080/index.html

	/home/vincent/webpack-dev-server-grief/node_modules/webpack/node_modules/webpack-core/lib/NormalModuleMixin.js:161
				if(isError) throw e;
				                  ^
	Error: Invalid path
	    at pathToArray (/home/vincent/webpack-dev-server-grief/node_modules/webpack-dev-server/node_modules/webpack-dev-middleware/node_modules/memory-fs/lib/MemoryFileSystem.js:23:38)
	    at MemoryFileSystem.mkdirpSync (/home/vincent/webpack-dev-server-grief/node_modules/webpack-dev-server/node_modules/webpack-dev-middleware/node_modules/memory-fs/lib/MemoryFileSystem.js:107:13)
	    at MemoryFileSystem.(anonymous function) [as mkdirp] (/home/vincent/webpack-dev-server-grief/node_modules/webpack-dev-server/node_modules/webpack-dev-middleware/node_modules/memory-fs/lib/MemoryFileSystem.js:187:34)
	    at Tapable.<anonymous> (/home/vincent/webpack-dev-server-grief/node_modules/webpack/lib/Compiler.js:225:25)
	    at Tapable.applyPluginsAsync (/home/vincent/webpack-dev-server-grief/node_modules/webpack/node_modules/tapable/lib/Tapable.js:60:69)
	    at Tapable.Compiler.emitAssets (/home/vincent/webpack-dev-server-grief/node_modules/webpack/lib/Compiler.js:222:7)
	    at Watching.<anonymous> (/home/vincent/webpack-dev-server-grief/node_modules/webpack/lib/Compiler.js:53:18)
	    at /home/vincent/webpack-dev-server-grief/node_modules/webpack/lib/Compiler.js:397:12
	    at Tapable.next (/home/vincent/webpack-dev-server-grief/node_modules/webpack/node_modules/tapable/lib/Tapable.js:69:11)
	    at CachePlugin.<anonymous> (/home/vincent/webpack-dev-server-grief/node_modules/webpack/lib/CachePlugin.js:40:4)
