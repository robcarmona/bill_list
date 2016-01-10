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
            $scope.bill = {};

            var modalInstance = $modal.open({
                animation: true,
                templateUrl: "/bills/partials/create",
                controller: 'ModalCreateBillInstanceCtrl',
                size: size,
                resolve: {
                    bill: function () {
                        return $scope.bill;
                    }
                }
            });

            // Create Event
            modalInstance.result.then(function () {
              $http.post("/bills/create", { bill: $scope.bill }).then(function (results) {
                $scope.bills.data = results.data
              });
            });
        };

        $scope.openEdit = function(size, bill) {
          console.log(bill);
          $scope.bill = bill;

          var modalInstance = $modal.open({
              animation: true,
              templateUrl: "/bills/partials/create",
              controller: 'ModalCreateBillInstanceCtrl',
              size: size,
              resolve: {
                  bill: function () {
                      return $scope.bill;
                  }
              }
          });

          // Create Event
          modalInstance.result.then(function () {
            $http.patch("/bills/"+ $scope.bill.id, { bill: $scope.bill }).then(function (results) {
              $scope.bills.data = results.data
            });
          });
        }

        init();
    };


    // Add this controller
    BillController.$inject = injectParams;
    angular.module('billList').controller('BillController', BillController);

    /*
     * Create Event Modal
     */
    var createBillParams = ['$scope', '$modalInstance', 'bill'];
    var ModalCreateBillInstanceCtrl = function ($scope, $modalInstance, bill) {
        $scope.bill = bill;
        // Set default 0 if not defined
        $scope.bill.active = ($scope.bill.active === 0 ? 0 : 1);

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
