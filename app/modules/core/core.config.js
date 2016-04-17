(function() {
    'use strict';

    var core = angular.module('app.core', []);
    var config = {
        appTitle: 'aBank'
    };

    core.value('config', config);

    core.config(configure);

    configure.$inject = ['routerHelperProvider'];

    function configure(routerHelperProvider) {

        routerHelperProvider.configure({ docTitle: config.appTitle + ': ' });
        
    }

})();
