(function() {
    'use strict';

    angular
        .module('app.transactionHistory')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'transaction-history',
                config: {
                    url: '/transaction-history',
                    templateUrl: 'modules/transaction-history/transaction-history.view.html',
                    controller: 'TransactionHistoryController',
                    controllerAs: 'vm',
                    title: 'Transaction History',
                }
            }
        ];
    }
})();
