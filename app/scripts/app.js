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
  config(function (FacebookProvider) {
    // You can set appId with setApp method
    // FacebookProvider.setAppId('myAppId');
    var myAppId = '189101997907498';

    /**
     * After setting appId you need to initialize the module.
     * You can pass the appId on the init method as a shortcut too.
     */
    FacebookProvider.init(myAppId);

  }).config(function ($stateProvider) {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'views/dashboard/home.html',
      data: {pageTitle: 'Home - Cameraworks'}
    }).state('gallery', {
      url: '/gallery',
      templateUrl: 'views/dashboard/gallery.html',
      data: {pageTitle: 'Gallery - Cameraworks'}
    })
      .state('500px', {
        url: '/500px',
        templateUrl: 'views/dashboard/500px.html',
        data: {pageTitle: '500px - Cameraworks'}
      })
      .state('flickr', {
        url: '/flickr',
        templateUrl: 'views/dashboard/flickr.html',
        data: {pageTitle: 'Flickr - Cameraworks'}
      })
      .state('facebook', {
        url: '/facebook',
        templateUrl: 'views/dashboard/facebook.html',
        data: {pageTitle: 'Facebook - Cameraworks'}
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
