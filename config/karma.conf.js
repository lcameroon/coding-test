module.exports = function(config){
    config.set({

      basePath : '../',

      files : [
          'app/assets/libs/angular/angular.js',
          'app/assets/libs/angular-mocks/angular-mocks.js',
          'app/assets/libs/angular-ui-router/release/angular-ui-router.js',
          'app/app.module.js',
          'app/modules/core/core.config.js',
          'app/modules/core/core.module.js',
          'app/modules/core/core.route.js',
          'app/modules/core/router.module.js',
          'app/modules/core/router-helper.provider.js',
          'app/modules/transaction-history/transaction-history.module.js',
          'app/modules/transaction-history/transaction-history.route.js',
          'app/modules/transaction-history/transaction-history.controller.js',
          'app/modules/transaction-history/transaction-history.service.js',
          'app/modules/**/*.spec.js',
      ],

      autoWatch : true,

      frameworks: ['jasmine'],

      browsers : ['Chrome'],

      plugins : [
          'karma-chrome-launcher',
          'karma-jasmine',
          'karma-spec-reporter'
      ],

      reporters : ['spec']

    });
};
