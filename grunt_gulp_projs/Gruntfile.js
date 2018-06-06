module.exports = function(grunt) {

  //Configuration
  grunt.initConfig({
    concat:{
      js: {
        src : ['js/main.js','js/items.js'],
        dest: 'build/script.js'
      }
    },
    uglify: {
      build: {
        src : 'scripts.js',
        dest : 'script.js'
      }
    } 
  });

  //load plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  //register tasks
  grunt.registerTask('concat-js', ['concat:js']);

};