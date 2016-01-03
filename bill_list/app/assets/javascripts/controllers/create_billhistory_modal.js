(function () {
    var injectParams = [
      '$location',
      '$filter',
      '$window',
      '$timeout',
      '$scope',
      '$routeParams',
      '$modal',
      '$http'];

    var BillHistoryController = function ($location, $filter, $window, $timeout, $scope, $routeParams, $modal, $http) {

        function init() {
          console.log("modal init");
          console.log($scope.bills);
        }

        // Open Event Modal
        $scope.open = function (size, bill, index) {
            $scope.billHistory = {};
            console.log(bill);
            $scope.currentBill = bill;
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: "/bill_histories/partials/create",
                controller: 'ModalCreateBillHistoryInstanceCtrl',
                size: size,
                resolve: {
                    billHistory: function () {
                        return $scope.billHistory;
                    }
                }
            });

            // Create Event
            modalInstance.result.then(function () {
              $http.post("/bills/"+bill.id+"/bill_histories", { bill_history: $scope.billHistory }).then(function (results) {
                $scope.bills.data[index] = results.data;
              });

            });
        };

        init();
    };


    // Add this controller
    BillHistoryController.$inject = injectParams;
    angular.module('billList').controller('BillHistoryController', BillHistoryController);

    /*
     * Create Event Modal
     */
    var createBillParams = ['$scope', '$modalInstance', 'billHistory'];
    var ModalCreateBillInstanceCtrl = function ($scope, $modalInstance, billHistory) {
        $scope.billHistory = billHistory;

        // Create and close
        $scope.ok = function () {
          $modalInstance.close();
        };

        // Dismiss window
        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };
    ModalCreateBillInstanceCtrl.$inject = createBillParams;
    angular.module('billList').controller('ModalCreateBillHistoryInstanceCtrl', ModalCreateBillInstanceCtrl);
}());
