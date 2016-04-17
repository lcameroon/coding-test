(function() {
    'use strict';

    angular
        .module('app.core')
        .run(appRun);

    function appRun(routerHelper) {
        var otherwise = '/transaction-history';
        routerHelper.configureStates(getStates(), otherwise);
    }

    function getStates() {
        return [
            {
                state: '404',
                config: {
                    url: '/404',
                    templateUrl: 'modules/core/404.view.html',
                    title: '404'
                }
            }
        ];
    }
})();
