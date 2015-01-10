'use strict';

/**
 * @ngdoc function
 * @name photoApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the photoApp
 */
angular.module('photoApp')
  .controller('GalleryCtrl', function ($scope, Album) {
      $scope.album = Album;
  });
