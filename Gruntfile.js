module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          sourcemap: true,
          style: 'expanded'
        },
        files: {
          'dist/style.css': 'css/style.scss'
        }
      }
    },

    watch: {
      html: {
        files: ['**/*.html'],
        options: {
          livereload: true
        }
      },
      styles: {
        files: ['css/**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true
        }
      }
    },

  });

  grunt.registerTask('default', ['watch']);

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

};