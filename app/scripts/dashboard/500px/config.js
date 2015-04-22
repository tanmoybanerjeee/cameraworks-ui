/**
 * Created by tanmoybanerjee on 4/19/15.
 */
'use strict';
angular.module('cameraworks').config(function($stateProvider) {
  $stateProvider.state('500px', {
    url: '/500px',
    templateUrl: 'views/dashboard/500px.html',
    controller:'PxController',
    controllerAs:'pxCtrl',
    data: {pageTitle: 'Home - 500px'}
  }).state('callback', {
    url:'/500px/callback',
    templateUrl:'views/dashboard/500px-callback.html'
  })
});
