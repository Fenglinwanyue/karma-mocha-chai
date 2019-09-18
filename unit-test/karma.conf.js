// Karma configuration
// Generated on Wed Sep 18 2019 10:29:49 GMT+0800 (GMT+08:00)
const webpackConfig = require('./config/webpack.test.config.js')
const webpack = require('webpack')
module.exports = function (config) {
  config.set({
    // 基础路径，用在files，exclude属性上
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // 测试框架
    // 可用的框架：https://npmjs.org/browse/keyword/karma-adapter
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai'],


    // 需要加载到浏览器的文件列表
    // list of files / patterns to load in the browser
    files: [
      './test/**/*.spec.js'
    ],

    // 排除的文件列表
    // list of files / patterns to exclude
    exclude: [
    ],
    //webpack配置
    webpack: webpackConfig,

    // 在浏览器使用之前处理匹配的文件
    // 可用的预处理: https://npmjs.org/browse/keyword/karma-preprocessor
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './test/**/*.spec.js': ['webpack']
    },

    //  使用测试结果报告者
    //  可能的值: "dots", "progress"
    //  可用的报告者：https://npmjs.org/browse/keyword/karma-reporter
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'], // progress

    //  服务端口号
    // web server port
    port: 9876,

    // 启用或禁用输出报告或者日志中的颜色
    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // 日志等级
    // 可能的值: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    //启用或禁用自动检测文件变化进行测试
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // 测试启动的浏览器
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'], // PhantomJS or Chrome

    // 开启或禁用持续集成模式
    // 设置为true, Karma将打开浏览器，执行测试并最后退出
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
    // 并发级别（启动的浏览器数）
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
    webpackMiddleware: { // 如果使用了webpack-dev-server则可以传入一些参数
      stats: 'errors-only'
    }
  })
}
