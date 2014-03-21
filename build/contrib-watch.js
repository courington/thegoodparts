module.exports = function(grunt) {

  grunt.config.set('watch', {
    livereload: {
      options: {
        livereload: true,
      },
      files: ['src/**/*.{js,css}', 'prod/*'],
      tasks: [],
    },
    jshintrc: {
      files: ['**/.jshintrc'],
      tasks: ['jshint'],
    },
    scripts: {
      files: ['<%= jshint.app.src %>'],
      tasks: ['jshint:app'],
    },
    page: {
      files: 'src/pages/*.html',
      tasks: ['copy:app'],
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

};
