/**
 * Created by tanmoybanerjee on 3/24/15.
 */
'use strict';

angular.module('cameraworks').controller('facebookLoginController',
  ['$rootScope', '$scope', 'Facebook', function($rootScope, $scope, Facebook){

    $rootScope.authentication = ''

    // Defining user logged status
    $scope.logged = false;

    // And some fancy flags to display messages upon user status change
    $scope.byebye = false;
    $scope.salutation = false;

    /**
     * Watch for Facebook to be ready.
     * There's also the event that could be used
     */
    $scope.$watch(
      function() {
        return Facebook.isReady();
      },
      function(newVal) {
        if (newVal)
          $scope.facebookReady = true;
      }
    );

    var userIsConnected = false;

    Facebook.getLoginStatus(function(response) {
      if (response.status == 'connected') {
        userIsConnected = true;
      }
    });

    /**
     * IntentLogin
     */
    $scope.IntentLogin = function() {
      if(!userIsConnected) {
        $scope.login();
      }
    };

    /**
     * Login
     */
    $scope.login = function() {
      Facebook.login(function(response) {
        if (response.status == 'connected') {
          $scope.logged = true;
          $scope.me();
        }

      });
    };

    /**
     * me
     */
    $scope.me = function() {
      Facebook.api('/me', function(response) {
        /**
         * Using $scope.$apply since this happens outside angular framework.
         */
        $scope.$apply(function() {
          $scope.user = response;
        });

      });
    };

    /**
     * Logout
     */
    $scope.logout = function() {
      Facebook.logout(function() {
        $scope.$apply(function() {
          $scope.user   = {};
          $scope.logged = false;
        });
      });
    }

    /**
     * Taking approach of Events :D
     */
    $scope.$on('Facebook:statusChange', function(ev, data) {
      console.log('Status: ', data);
      if (data.status == 'connected') {
        $scope.$apply(function() {
          $scope.salutation = true;
          $scope.byebye     = false;
        });
      } else {
        $scope.$apply(function() {
          $scope.salutation = false;
          $scope.byebye     = true;
        });
      }

    });

  }]);
