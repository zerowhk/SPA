module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                esversion: 6
            },
            common: {
                files: {
                    src: [
                        './src/**/*.js',   //检查src下面的所有js文件
                        '!./src/public/**/*.js',  //排除src/public目录下的所有文件
                        '!./src/main.js'
                    ]
                }
            }
        },
        requirejs : {
            build : {
                options : {
                    baseUrl : 'src',
                    name:'main',    // require的入口文件名字
                    optimize:'none',   //指定压缩工具类型  使用uglify工具压缩
                    mainConfigFile: './src/public/js/require.config.js',  //require 的配置文件
                    dir:'web',      //插件会自动寻找require引进的所有文件
                }
            }
        },
        babel: {
            options: {
                sourceMap: false,     
                presets: ['babel-preset-es2015']    //加载babel插件
            },
            dist: {
                files: [{
                   expand:true,
                   cwd:'web/', //源目录
                   src:['**/*.js', '!main.js','!public/jslib/*.js' ], //所有js文件
                   dest:'web/'  //目标目录
                }]
            }
        },
        uglify: {
            build: {
                files: [{
                    expand:true,
                    cwd:'web/', //js目录下
                    src:['**/*.js', '!public/jslib/*.js'], //所有js文件
                    dest:'web/'  //输出到此目录下
                }]
            }
        },
        sass: {
            build: {                            // Target
                files: [{
                    expand:true,
                    cwd:'web/', //css目录下
                    src:['**/*.scss'], //所有scss文件
                    dest:'web/',  //输出到此目录下
                    ext: '.css'
                }],
            },
            dev: {                            // Target
                files: [{
                    expand:true,
                    cwd:'src/', //css目录下
                    src:['**/*.scss'], //所有scss文件
                    dest:'src/',  //输出到此目录下
                    ext: '.css'
                }],
            }

        },
        watch: {
            // scripts: {
            //   files: ['./src/**/*.js'],
            //   tasks: ['sass:dev']
            // },
            sass: {
              files: ['./src/**/css/*.scss'],
              tasks: ['sass']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                ]
            }
        }, 
        connect: {
            options: {
                port: 9000,
                open: true,
                // keepalive: true,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost',
                base: {
                    path: 'src/',
                    options: {
                        index: 'index.html'
                    }
                }
            },
            server: {
                options: {
                    port: 9000,
                },
                proxies: [
                    {
                        context: '/p2papi',
                        host: 'ladybird.awservice.net',
                        port: 8140,
                        https: true, 
                        rewrite: {
                            '^/p2papi': '/p2papi'
                        }
                    }
                ]
            }
        }
    });

    //加载插件
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    //注册任务
    grunt.registerTask('build', ['jshint', 'requirejs:build', 'babel', 'uglify', 'sass:build']);
    grunt.registerTask('dev', ['sass:dev', 'connect', 'watch'] );
    // grunt.registerTask('build', ['jshint', 'requirejs:build', 'babel', 'uglify', 'sass:build']);
    
}