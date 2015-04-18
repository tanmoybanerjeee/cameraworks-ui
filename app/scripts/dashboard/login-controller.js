'use strict';
/**
 * Created by tanmoybanerjee on 3/1/15.
 */
angular.module('cameraworks').controller('loginController', ['$rootScope','$scope','$modal','$log',
  function($rootScope,$scope,$modal,$log){

$rootScope.authentication = '';

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'views/dashboard/login-modal.html',
      controller: 'modalController',
      size: size,
      resolve: {
        items: function () {
          return $scope.principal;
        }
      }
    });

    modalInstance.result.then(function (data) {
      $rootScope.authentication = data.email;
      $log.info('Authenticated by : '+ $rootScope.authentication + ' at :'+ new Date());
    }, function () {
      $log.info('Dismissed at :' + new Date());
    });
  };
}
]);
