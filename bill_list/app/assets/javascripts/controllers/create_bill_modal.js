(function () {
    var injectParams = ['$location', '$filter', '$window', '$timeout', '$scope', '$routeParams', '$modal', 'requestService'];

    var BillController = function ($location, $filter, $window, $timeout, $scope, $routeParams, $modal, requestService) {

        function init() {
          console.log("modal init");
        }

        // Open Event Modal
        $scope.open = function (size) {
            $scope.newEvent = {};

            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'views/bills/_create.html',
                controller: 'ModalCreateBillInstanceCtrl',
                size: size,
                resolve: {
                    newEvent: function () {
                        return $scope.newEvent;
                    }
                }
            });

            // Create Event
            modalInstance.result.then(function () {
              console.log("Results");
            }, function () {
                // Cancelled modal
            })['finally'](function () {
                // Fixes page bug when closing modal
            });

        };


        // Open Rsvp Modal
        $scope.openRsvpModal = function (event, size) {
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'app/connectApp/partials/group/_groupRsvpResponses.html',
                controller: 'ModalRsvpResponsesInstanceCtrl',
                resolve: {
                    currentEvent: function () {
                        return event;
                    }
                }
            });

            // Create Event
            modalInstance.result.then(function () {
               // after close
            }, function () {
                // Cancelled modal
            })['finally'](function () {
                // Fixes page bug when closing modal
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
    var createBillParams = ['$scope', '$modalInstance', 'newEvent'];
    var ModalCreateBillInstanceCtrl = function ($scope, $modalInstance, newEvent) {
        // Create and close
        $scope.ok = function () {
          console.log("OK PRESSED");
        };

        // Dismiss window
        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };
    ModalCreateBillInstanceCtrl.$inject = createBillParams;
    angular.module('billList').controller('ModalCreateBillInstanceCtrl', ModalCreateBillInstanceCtrl);
}());
