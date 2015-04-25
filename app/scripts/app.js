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
    'ui.router',
    'facebook'
  ]).
  config(function (FacebookProvider, APP_CONSTANTS) {
    var myAppId = APP_CONSTANTS.FACEBOOK_APP_ID;
    FacebookProvider.init(myAppId);
  })
  .config(function ($stateProvider) {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'views/dashboard/home.html',
      data: {pageTitle: 'Home - Cameraworks'}
    }).state('gallery', {
      url: '/gallery',
      templateUrl: 'views/dashboard/gallery.html',
      data: {pageTitle: 'Gallery - Cameraworks'}
    }).state('flickr', {
        url: '/flickr',
        templateUrl: 'views/dashboard/flickr.html',
        data: {pageTitle: 'Flickr - Cameraworks'}
      })
      .state('instagram', {
        url: '/instagram',
        templateUrl: 'views/dashboard/gallery.html',
        data: {pageTitle: 'Instagram - Cameraworks'}
      })
      .state('google', {
        url: '/google',
        templateUrl: 'views/dashboard/gallery.html',
        data: {pageTitle: 'Google - Cameraworks'}
      });
  });
