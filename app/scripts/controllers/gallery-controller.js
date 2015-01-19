'use strict';

/**
 * @ngdoc function
 * @name photoApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the photoApp
 */
photoApp.controller('GalleryCtrl', function ($scope, Album) {
      $scope.album = Album;
  });
