describe('TRANSACTION HISTORY MODULE', function() {
    var controller;

    beforeEach(function() {
        module('app.transactionHistory');
        inject(function(_$controller_, _$rootScope_){
            $rootScope = _$rootScope_;
            $scope = $rootScope.$new();
            $controller = _$controller_;

            controller = $controller('TransactionHistoryController');
        });

    });

    describe('Transaction History Controller', function() {
        it('should be created successfully', function () {
            expect(controller).toBeDefined();
        });

        describe('after activate', function() {
            it('should have transactions', function() {
                expect(controller.transactions).toEqual([]);
            });
        });
    });
});
