module.exports = function(config) {
  //Use env variable to trigger require test
  //$ env KARMA_REQUIRE=true karma start

    
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: './',

    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-junit-reporter',
      'karma-htmlfile-reporter'
    ],

    // frameworks: ['jasmine', 'requirejs'],
    frameworks: [
            'jasmine'
            ],
    // // list of files / patterns to load in the browser
    files: [
            './src/**/*.js'
            ],
    // list of files to exclude
    exclude: [],

    // web server port
    // CLI --port 9876
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    // CLI --colors --no-colors
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    // CLI --log-level debug
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    // CLI --auto-watch --no-auto-watch
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    // CLI --browsers Chrome,Firefox,Safari
    browsers: ['PhantomJS'],

    // If browser does not capture in given timeout [ms], kill it
    // CLI --capture-timeout 5000
    captureTimeout: 5000,

    // Auto run tests on start (when browsers are captured) and exit
    // CLI --single-run --no-single-run
    singleRun: false,

    // report which specs are slower than 500ms
    // CLI --report-slower-than 500
    reportSlowerThan: 500,

    // CLI --reporters progress
    reporters : [ 'progress', 'coverage'],
    // reporters : [ 'progress', 'coverage', 'junit', 'html'],

    preprocessors: {
        './src/*/!(*.spec).js' : [ 'coverage' ]
    },

    coverageReporter : {
        type : 'html',
        dir : './docs/reports/coverage/',
        subdir: '.'
    },

    junitReporter : {
        outputDir : './docs/reports',
        outputFile : 'karma-report.xml',
        suite : ''
    },

    htmlReporter : {
        outputFile : './docs/reports/karma-report.html',
        pageTitle : 'Unit Tests',
        subPageTitle : 'Volleyz'
    }

  });
};