'use strict';

var versionStable = '0.12.2';

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    clean: [
      './www/templates/stable/'
    ],
    //ionic version
    ionic: {
      'stable': {
        options: {
          title: 'Stable',
          version: versionStable,
          dest: './www/templates/stable/',
          template: {
            src: './node_modules/grunt-node-api-docs-responsive/template/ionic/',
            index: 'index.html'
          }
        }
      }
    }
  });
  // task
  grunt.loadNpmTasks('grunt-node-api-docs-responsive');
  grunt.loadNpmTasks('grunt-contrib-clean');
  // By default, lint and run all tests.
  grunt.registerTask('default', ['clean', 'ionic']);
};
