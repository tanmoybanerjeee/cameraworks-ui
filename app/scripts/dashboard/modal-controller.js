'use strict';
/**
 * Created by tanmoybanerjee on 3/8/15.
 */
angular.module('cameraworks').controller('modalController', ['$scope', '$modalInstance', '$log',
    function($scope, $modalInstance, $log){

  $scope.principal = {
    email : '',
    password : ''
  };

  $scope.login = function () {
    $log.info('login : ' + $scope.principal);
    //call backend to authenticate
    $modalInstance.close($scope.principal);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

}]);
