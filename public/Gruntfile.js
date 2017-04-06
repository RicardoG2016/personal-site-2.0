module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      js: {
        src: ['js/custom.js'],
        dest: 'build/js/built.js',
      },
      css: {
        src: ['css/style.css'],
        dest: 'build/css/built.css',
      },
    },
    watch: {
      js: {
        files: ['js/**/*.js'],
        tasks: ['concat:js'],
      },
      css: {
        files: ['css/**/*.css'],
        tasks: ['concat:css'],
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['concat', 'watch']);
};