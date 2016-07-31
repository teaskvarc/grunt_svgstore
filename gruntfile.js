module.exports = function (grunt) {

    grunt.initConfig({
        svgstore: {
            options: {
                formatting : {              // for nicer formated code
                    indent_size : 2
                }
            },
            default: {                  //default will take all our svg that we have in folder
                files: {
                    'includes/defs.svg' : ['svg/*.svg'],
                },
            },
       },
    });

    //so that Grunt knows we have this file
    grunt.loadNpmTasks('grunt-svgstore');
};

//