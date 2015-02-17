'use strict';
/**
 * @ngdoc function
 * @name photoApp.directive:photoSlider, photoActiveTag
 */
 
photoApp.directive('photoSlider', function () {
    return {
        restrict : 'E',
        replace : true,
        //TODO : use local scope variables instead of polluting the global scope
        link: function(scope) {
            scope.currentIndex = 0;

            //move to next photo, or first photo if it's the last photo
            scope.next = function () {
                scope.currentIndex = scope.currentIndex < scope.filtered.length - 1 ? scope.currentIndex + 1 : 0;
            };
            //move to previous photo, or last photo if it's the first photo
            scope.prev = function () {
                scope.currentIndex = scope.currentIndex > 0 ? scope.currentIndex - 1  : scope.filtered.length - 1;
            };

            //update index (if it goes out of bounds) after the filtered array modified
            scope.updateCurrentIndexAfterSearch = function () {
                if (scope.currentIndex > scope.filtered.length - 1)
                {
                    scope.currentIndex = scope.filtered.length - 1;
                }
            };

            //set other images visibilty to false (so that it the ng-show property is false), only set the image of the 
            // current index true
            scope.updateSlide = function () {
                if (typeof scope.filtered !== 'undefined' && scope.filtered.length > 0 )
                {
                    angular.forEach(scope.filtered, function(image) {
                    image.visible = false; // make every image invisible
                    });
                    scope.filtered[scope.currentIndex].visible = true; // make the current image visible
                }
            };

            //used in the welcome page to link between the dots and the images
            scope.setCurrentIndex = function (index) {
                scope.currentIndex = index;
            };
            //used in the welcome page to link between the dots and the images
            scope.isCurrentIndex = function (index) {
                return scope.currentIndex === index;
            };

            //update the slide if there is any changes to the currentIndex
            scope.$watch('currentIndex', function() {
                scope.updateSlide();
            });

            //update the slide if there is any changes to the array filtered
            scope.$watchCollection('filtered', function(newVal, oldVal) {

                //if the old filtered array is empty, then set the current index to 0
                if (typeof oldVal === 'undefined' || oldVal.length <= 0)
                {   
                    scope.currentIndex = 0 ;
                    scope.updateSlide();
                }
                //if the current photo displayed is not included in the new array filtered
                else if (newVal.indexOf(oldVal[scope.currentIndex]) === -1)
                {  
                    angular.forEach(oldVal, function(image) {
                        image.visible = false; // make every image invisible
                    });
                    scope.currentIndex = 0;
                    scope.updateSlide();
                }
            });
        }
    };
});

//TODO: set timer to change photos automatically
// photoApp.directive('autoPhotoSlider', function () {
//     return {
//         restrict:'A',
//         link: function (scope, timeout) {
//             scope.slidesTimeIntervalInMs = 3000; 
              
//             scope.slideTimer =
//                 timeout(function interval() {
//                   scope.next();
//                   scope.slideTimer = $timeout(interval, scope.slidesTimeIntervalInMs);
//                 }, scope.slidesTimeIntervalInMs);
//         }
//     }
// });

//tags to filter photos
photoApp.directive('photoActiveTag', function () {
    return {
        restrict : 'EA',
        link : function(scope) {
            scope.activeTagList = ['top']; //set default tag to top

            scope.addActiveTag = function (activeTag) {
                if (scope.activeTagList.length === 1 && scope.activeTagList[0] === 'top') //set default tag to top if array is empty
                {
                    scope.activeTagList = [];
                }
                if (activeTag){ //if tag is valid
                    var tempListSplitComma = activeTag.split(","); //split tags by comma
                    for (var i = 0; i < tempListSplitComma.length; i++)
                    {
                        if (tempListSplitComma[i] && scope.activeTagList.indexOf(tempListSplitComma[i]) === -1) //check if the tag already existed in the array
                        {
                            scope.activeTagList.push(tempListSplitComma[i].trim()); //trim all the spaces
                        }
                    }
                    scope.activeTag = ''; //set the active tag to empty again
                }
            };

            scope.removeActiveTag = function(index) {
                scope.activeTagList.splice(index, 1); //remove the active tag at the index specified
            }

            scope.clearActiveTagList = function () {
                scope.activeTagList = ['top']; //clear the activeTagList and set to default, which is top
            };
        }
    };
});

