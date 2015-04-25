/**
 * Created by tanmoybanerjee on 4/19/15.
 */
'use strict';
angular.module('cameraworks').config(function($stateProvider) {
  $stateProvider.state('facebook', {
    url: '/facebook',
    templateUrl: 'views/dashboard/facebook.html',
    controller:'FacebookController',
    controllerAs:'fbCtrl',
    data: {pageTitle: 'Facebook  - Cameraworks'}
  }).state('fb-callback', {
    url:'/facebook/callback',
    templateUrl:'views/dashboard/facebook-callback.html'
  })
});
