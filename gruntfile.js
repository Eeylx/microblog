/**
 * @Author: lyx
 * @Date: 2017/5/14
 */
'use strict';

module.exports = function (grunt) {

    grunt.initConfig({

        watch: {
            options: {
                livereload: true    // 实时重新载入
            },
            ejs: {
                files: ['views/**']
            },
            js: {
                files: [
                    'controller/**',
                    'middlewares/**',
                    'routes/**'
                ]
            },
            tast: [
                // 文件变化后执行的任务
            ]
        },

        nodemon: {
            dev: {
                script: './bin/www',
                options: {
                    args: [],
                    watch: ['.'],
                    ext: 'js',
                    ignoredFiles: [
                        './node_modules/**'
                    ],
                    debug: true,
                    delayTime: 100,
                    env: {
                        PORT: 3000
                    },
                    cwd: __dirname
                }
            }
        },

        concurrent: {
            task: ['nodemon', 'watch'],

            options: {
                logConcurrentOutput: true
            }
        }
    });

    // 加载所需的 grunt 插件
    grunt.loadNpmTasks('grunt-concurrent');     // grunt task 并发
    grunt.loadNpmTasks('grunt-nodemon');        // 文件变化后自动重启服务
    grunt.loadNpmTasks('grunt-contrib-watch');  // 监视文件变化

    grunt.option('force', true); //避免编译的时候出现错误而中断服务
    grunt.registerTask('default', ['nodemon']);
};
