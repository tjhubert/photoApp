'use strict';

/**
 * @ngdoc function
 * @name photoApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the photoApp
 */
photoApp.controller('AboutCtrl', function ($scope, Quotes) {
      $scope.quotes = Quotes;
  });
