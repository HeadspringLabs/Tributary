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
    }

  });

  grunt.registerTask('default', ['sass']);

  grunt.loadNpmTasks('grunt-contrib-sass');

};