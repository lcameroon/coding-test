describe('TRANSACTION HISTORY MODULE', function() {

    var TransactionHistoryService, $httpBackend, mockView;
    var mockTransactionHistory = {
        date: '2016-04-16T13:04:56.006Z',
        currentBalance: 1231212213,
        availableBalance: 123213213,
        transactions: [
            {
                date: '2016-04-16T13:04:56.006Z',
                description: 'Lorem ipsum dolor',
                transaction: -123,
                balance: 2312.30
            }
        ]
    };
    var mockAccountDetails = {
        accountType: 'savings',
        accountName: 'Savings Account',
        accountNumber: 10101021,
    };

    beforeEach(function() {
        module('app.transactionHistory');
        inject(function(_TransactionHistoryService_, _$httpBackend_) {
            TransactionHistoryService = _TransactionHistoryService_;
            httpBackend = _$httpBackend_;
        });
        httpBackend
            .whenGET('modules/transaction-history/transaction-history.view.html')
            .respond(mockView);
    });

    afterEach(function() {
        // httpBackend.verifyNoOutstandingExpectation();
        // httpBackend.verifyNoOutstandingRequest();
    });

    describe('Transaction History Service', function() {
        it('should be defined', function() {
            expect(TransactionHistoryService).toBeDefined();
        });

        it('should have 2 services', function() {
            expect(TransactionHistoryService.getTransactionHistory).toBeDefined();
            expect(TransactionHistoryService.getAccountDetails).toBeDefined();
        });

        it('when call getTransactionHistory() should return some data', function() {
            httpBackend.whenGET('data/transaction-history.json').respond(mockTransactionHistory);

            TransactionHistoryService.getTransactionHistory().then((data) => {
                expect(data.date).toBe('2016-04-16T13:04:56.006Z');
                expect(data.currentBalance).toBe(1231212213);
                expect(data.availableBalance).toBe(123213213);
                expect(data.transactions[0].date).toBe('2016-04-16T13:04:56.006Z');
                expect(data.transactions[0].description).toBe('Lorem ipsum dolor');
                expect(data.transactions[0].transaction).toBe(-123);
                expect(data.transactions[0].balance).toBe(2312.30);
            });

            httpBackend.flush();
        });

        it('when call getAccountDetails() should return some data', function() {
           httpBackend.whenGET('data/account-details.json').respond(mockAccountDetails);

            TransactionHistoryService.getAccountDetails().then((data) => {
                expect(data.accountType).toBe('savings');
                expect(data.accountName).toBe('Savings Account');
                expect(data.accountNumber).toBe(10101021);
            });

            httpBackend.flush(); 
        });

    });
});
