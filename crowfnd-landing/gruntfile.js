module.exports = function (grunt) {

    // This is the configuration.
    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['assets/js/src/bookmark.js', 'assets/js/src/nav.js', 'assets/js/src/progressbar.js'],
                dest: 'assets/js/crowfnd.min.js',
            },
        },
        uglify: {
            options: {
                compress: true
            },
            applib: { 
                src: ['assets/js/src/bookmark.js', 'assets/js/src/nav.js', 'assets/js/src/progressbar.js'],
                dest: 'assets/js/crowfnd.min.js'
            }
        }
    });

    // Load the plugin that provides the "concat" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['concat']);
    grunt.registerTask('default', ['uglify']);
};