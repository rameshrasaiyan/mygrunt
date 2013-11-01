module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/*.js',
        dest: '<%= pkg.name %>.min.js'
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'js/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      all: [ 'css/*.css' ]
    },
    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'css',
          config: 'config.rb'
        }
      }
    },
    watch: {
      all: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']        
      },
      sass: {
        files: ['sass/*.scss'],
        tasks: ['compass:dist']
      },
      css: {
        files: ['*.css'],
        tasks: ['csslint']
      },
      html: {
         files: ['*.html']
      },
      livereload: {
        files: ['css/*.css', '*.html', '<%= jshint.files %>'],
        options: { livereload: true }
       }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Default task(s).
  // grunt.registerTask('default', ['uglify']);
  // grunt.registerTask('watch', ['uglify'], ['compass:dist']);
  
};
