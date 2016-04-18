describe('TRANSACTION HISTORY MODULE', function() {

    describe('Transaction History Route', function () {

        describe('when state is \'transaction-history\'', function () {
            var controller;
            var view = 'modules/transaction-history/transaction-history.view.html';

            beforeEach(function() {
                module('app.transactionHistory');
                inject(function(_$httpBackend_, _$location_, _$rootScope_,
                                _$state_, _$templateCache_){

                    $rootScope = _$rootScope_;
                    $scope = $rootScope.$new();
                    $httpBackend = _$httpBackend_;
                    $location = _$location_;
                    $state = _$state_;
                    $templateCache = _$templateCache_;

                    $templateCache.put(view, '');
                });
            });

            it('the url should be #/transaction-history', function() {
                expect($state.href('transaction-history', {})).toEqual('#/transaction-history');
            });

            it('should load the view', function () {
                expect($state.get('transaction-history').templateUrl).toEqual(view);
            });

            it('should work with $state.go', function () {
                $state.go('transaction-history');
                $rootScope.$apply();
                expect($state.is('transaction-history')).toBe(true);
            });
        });

    });

});
