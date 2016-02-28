/*global module, require */

module.exports = function(grunt) {
  var srcFiles = ['Gruntfile.js', './components/*.js', './*.js'];
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
        options: {
            transform: [ require('grunt-react').browserify ]
        },
        build: {
            options: {
                standalone: 'app'
            },
            src: "app.js",
            dst: "build.js"
        }
    },
    watch: {
      dev: {
        files: srcFiles,
        tasks: ['browserify'],
        options: { spawn: false }
      }
    }
  });
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['browserify']);
  grunt.registerTask('dev', ['watch']);
};
