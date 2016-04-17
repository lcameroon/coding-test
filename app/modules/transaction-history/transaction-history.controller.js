(function () {
    'use strict';

    angular
        .module('app.transactionHistory')
        .controller('TransactionHistoryController', TransactionHistoryController);

    TransactionHistoryController.$inject = ['$filter', 'TransactionHistoryService'];

    function TransactionHistoryController($filter, TransactionHistoryService) {

        var vm = this;
        vm.transactionHistory;
        vm.accountDetails;
        vm.searchArg;
        vm.transactions = [];
        vm.recordsLimit = 8;
        vm.searchDescription = searchDescription;

        activate();

        function activate() {
            getAccountDetails().then(function(){
                getTransactionHistory();
            });
        }

        function getTransactionHistory() {
            return TransactionHistoryService.getTransactionHistory({
                accountNumber: vm.accountDetails.accountNumber
            }).then(function(data) {
                vm.transactionHistory = data;
                vm.transactions = data.transactions;
                vm.cloneTransactions = data.transactions;
                return vm.transactionHistory;
            });
        }

        function getAccountDetails() {
            return TransactionHistoryService.getAccountDetails()
            .then(function(data) {
                vm.accountDetails = data;
                return vm.accountDetails;
            });
        }

        function searchDescription() {
            var data = vm.transactionHistory.transactions;
            vm.transactions = $filter('filter')(data, vm.searchArg);
        }
    }

})();
