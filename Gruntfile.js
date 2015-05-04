"use strict";

module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-simple-mocha");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks('grunt-jscs');

  grunt.initConfig({
    jshint: {
      dev: {
        src: ["*.js", "lib/**/**.js", "test/**/*.js"]
      },
      options: {
        node: true,
        globals: {
          describe: true,
          it: true,
          before: true,
          after: true,
          beforeEach: true,
          afterEach: true
        }
      }
    },

    simplemocha: {
      dev: {
        src: ["test/**/*.js"]
      },
    },

    watch: {
      app:{
        files: ["<%= jshint.dev.src %>"],
        tasks: ["jshint", "simplemocha"]
      }
    },

    jscs: {
      main: "server.js",
      controllers: {
        src: ["Gruntfile.js", "lib/**/**.js", "test/**/*.js"],
        options: {
          config: ".jscsrc"
        }
      }
    }  
  });

  grunt.registerTask("test", ["jshint:dev"]);
  grunt.registerTask("mocha", ["simplemocha:dev"]);
  grunt.registerTask("default", ["test", "jscs", "mocha", "watch"]);
};