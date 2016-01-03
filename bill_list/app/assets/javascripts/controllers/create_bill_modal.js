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

    var BillController = function ($location, $filter, $window, $timeout, $scope, $routeParams, $modal, $http) {

        function init() {
          console.log("modal init");
          console.log($scope.bills);
        }

        // Open Event Modal
        $scope.open = function (size) {
            $scope.newBill = {};

            var modalInstance = $modal.open({
                animation: true,
                templateUrl: "/bills/partials/create",
                controller: 'ModalCreateBillInstanceCtrl',
                size: size,
                resolve: {
                    newBill: function () {
                        return $scope.newBill;
                    }
                }
            });

            // Create Event
            modalInstance.result.then(function () {
              $http.post("/bills/create", { bill: $scope.newBill }).then(function (results) {
                $scope.bills.data = results.data
              });

            });
        };

        init();
    };


    // Add this controller
    BillController.$inject = injectParams;
    angular.module('billList').controller('BillController', BillController);

    /*
     * Create Event Modal
     */
    var createBillParams = ['$scope', '$modalInstance', 'newBill'];
    var ModalCreateBillInstanceCtrl = function ($scope, $modalInstance, newBill) {
        $scope.bill = newBill;

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
    angular.module('billList').controller('ModalCreateBillInstanceCtrl', ModalCreateBillInstanceCtrl);
}());
