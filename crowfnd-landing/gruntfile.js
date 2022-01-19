module.exports = function (grunt) {
    const sass = require('node-sass');
    // This is the configuration.
    grunt.initConfig({
        concat: {
            dist: {
                src: [
                    'assets/js/src/global-functions.js',
                    'assets/js/src/nav.js',
                    'assets/js/src/bookmark.js', 
                    'assets/js/src/progressbar.js'
                ],
                dest: 'assets/js/crowfnd.min.js'
            },
        },
        uglify: {
            options: {
                compress: true
            },
            applib: { 
                src: [
                    'assets/js/src/global-functions.js',
                    'assets/js/src/nav.js',
                    'assets/js/src/bookmark.js', 
                    'assets/js/src/progressbar.js'
                ],
                dest: 'assets/js/crowfnd.min.js'
            },
        },
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
                /* outputStyle: 'compressed' */
            },
            dist: {
                files: {
                    'assets/css/styles.css': 'assets/scss/styles.scss'
                }
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');

    // Default task(s).
    grunt.registerTask('default', ['concat', /* 'uglify', */ 'sass']);
};