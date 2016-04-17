(function () {
    'use strict';

    angular
        .module('app.transactionHistory')
        .factory('TransactionHistoryService', TransactionHistoryService);

    TransactionHistoryService.$inject = ['$http', '$q'];

    function TransactionHistoryService($http, $q) {
        var service = {
            getTransactionHistory: getTransactionHistory,
            getAccountDetails: getAccountDetails
        };

        return service;

        function getTransactionHistory() {
            return $http.get('data/transaction-history.json')
                .then(success)
                .catch(fail);
        }

        function getAccountDetails() {
            return $http.get('data/account-details.json')
                .then(success)
                .catch(fail);
        }

        ////////////////

        function success(response) {
            return response.data;
        }

        function fail(error) {
            var msg = 'Query failed! ' + error.data.description;
            return $q.reject(msg);
        }
    }
})();
