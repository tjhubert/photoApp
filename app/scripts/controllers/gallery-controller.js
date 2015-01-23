'use strict';

/**
 * @ngdoc function
 * @name photoApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the photoApp
 */
photoApp.controller('GalleryCtrl', function ($scope, $filter, Album, ActiveTagsButton) {
      $scope.album = Album;
      $scope.tagButtons = ActiveTagsButton;

});
