module.exports = function(grunt) {
    var config, name, nodeArgs, pkg, taskArray, taskName, tasks;
    pkg = grunt.file.readJSON('package.json');
    nodeArgs = [];
    if (grunt.option("verbose")) {
        nodeArgs.push("--verbose");
    }
    config = {
        nodemon: {
            dev: {
                options: {
                    args: nodeArgs,
                    env: {
                        PORT: process.env.PORT || 3000
                    },
                    ext: 'js,html'
                },
                script: 'app.js'
            }
        },
        watch:{
            options:{livereload:true},
            files:['public/**'],
            tasks:[]
        },
    };
    tasks = {
        "default": ['nodemon','watch']
    };
    grunt.initConfig(config);
    for (name in pkg.devDependencies) {
        if (name.slice(0, 6) === 'grunt-') {

            grunt.loadNpmTasks(name);
        }
    }
    for (taskName in tasks) {
        taskArray = tasks[taskName];
        grunt.registerTask(taskName, taskArray);
    }
    return console.log(">>>>>>>>>>>>>>>>>>>>>>> gruntfile");
};
