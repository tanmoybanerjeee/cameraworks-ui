'use strict';

/**
 * @ngdoc overview
 * @name cameraworksUiApp
 * @description
 * # cameraworksUiApp
 *
 * Main module of the application.
 */
angular
  .module('cameraworks', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'facebook'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).
config(function(FacebookProvider){

  // You can set appId with setApp method
  // FacebookProvider.setAppId('myAppId');
  var myAppId = '189101997907498';

  /**
   * After setting appId you need to initialize the module.
   * You can pass the appId on the init method as a shortcut too.
   */
  FacebookProvider.init(myAppId);

});
