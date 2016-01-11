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

        }

        // Open Event Modal
        $scope.open = function (size) {
            $scope.bill = { active: true };

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
            console.log($scope.bill);
            debugger;
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
