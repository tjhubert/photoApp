'use strict';

/**
 * @ngdoc overview
 * @name photoApp
 * @description
 * # photoApp
 *
 * Main module of the application.
 */
var photoApp = angular
  .module('photoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])

  .config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('/');
  //
  // Now set up the states
  $stateProvider
    .state('welcome', {
      url: '/',
      templateUrl: 'views/welcome.html'
    })

    .state('root', {
      url: '/main',
      templateUrl: 'views/root.html'
    })
      .state('root.about', {
        url: "/about",
        templateUrl: "views/about.html",
        controller: "AboutCtrl"
      })
      .state('root.gallery', {
        url: "/gallery",
        templateUrl: "views/gallery.html",
        controller: "GalleryCtrl"
      })
      .state('root.contact', {
        url: "/contact",
        templateUrl: "views/contact.html",
        controller: "ContactCtrl"
      })
      .state('main.gallery', {
        url: "/gallery",
        templateUrl: "views/gallery.html",
        controller: "GalleryCtrl"
      });
});

  // .config(function ($routeProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: 'views/main.html',
  //       controller: 'MainCtrl'
  //     })
  //     .when('/about', {
  //       templateUrl: 'views/about.html',
  //       controller: 'AboutCtrl'
  //     })
  //     .when('/gallery', {
  //       templateUrl: 'views/gallery.html',
  //       controller: 'GalleryCtrl'
  //     })
  //     .when('/contact', {
  //       templateUrl: 'views/contact.html',
  //       controller: 'ContactCtrl'
  //     })
  //     .when('/about', {
  //       templateUrl: 'views/about.html',
  //       controller: 'AboutCtrl'
  //     })
  //     .otherwise({
  //       redirectTo: '/'
  //     });
  // });
