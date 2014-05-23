module.exports = function(grunt) {
 
  // configure the tasks
grunt.initConfig({

	copy: {
		build: {
			cwd: 'source/public/',
			src: [ '**', '!**/*.styl', '!**/*.jade' ],
			dest: 'build/',
			expand: true,
		},
	},
	clean: {
		build: {
			src: [ 'build' ],
		},
	},
	stylus: {
		build: {
			options: {
				linenos: true,
				compress: false
			},
		files: [{
			expand: true,
			cwd: 'source/stylus/',
			src: [ '**/*.styl' ],
			dest: 'build/css/',
			ext: '.css',
		}]
	}
},
	autoprefixer: {
		build: {
			expand: true,
			cwd: 'css',
			src: [ '**/*.css' ],
			dest: 'css'
		}
	},
	jade: {
		compile: {
			options: {
				client: false,
				pretty: true
		},
		files: [{

			cwd: 'source/jade/',
			src: [ '**/*.jade' ],
			dest: 'build/',
			ext: '.html',
			expand: true,

		}]
	}
},
	watch: {
		options: {
		livereload: true
	},
		stylesheets: {
			files: 'source/**/*.styl',
			tasks: [ 'stylesheets' ]
		},
		jade: {
			files: 'source/**/*.jade',
			tasks: [ 'jade' ]
		},
		copy: {
			files: [ 'source/**', '!source/**/*.styl', '!source/**/*.jade' ],
			tasks: [ 'copy' ]
		}
	},
	connect: {
		server: {
			options: {
				port: 9001,
				base: 'build',
				hostname: '*'
			}
		}
	}

});
 
  // load the tasks
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
 
  // define the tasks
grunt.registerTask(
  'stylesheets',
  'Compiles the stylesheets.',
  [ 'stylus', 'autoprefixer' ]
  );
grunt.registerTask(
	'build',
	'Compiles all of the assets and copies the files to the build directory.',
	[ 'clean:build', 'copy', 'stylesheets', 'jade' ]
	);
grunt.registerTask(
	'default',
	'Watches the project for changes, automatically builds them and runs a server.',
	[ 'build', 'connect', 'watch' ]
	);
};
