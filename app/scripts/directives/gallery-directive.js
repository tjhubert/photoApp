photoApp.directive('photoSlider', function () {
    return {
        restrict : 'E',
        replace : true,
        link: function(scope) {
            scope.currentIndex = 0;
            scope.next = function () {
                scope.currentIndex = scope.currentIndex < scope.filtered.length - 1 ? scope.currentIndex + 1 : 0;
            };
            scope.prev = function () {
                scope.currentIndex = scope.currentIndex > 0 ? scope.currentIndex - 1  : scope.filtered.length - 1;
            };
            scope.updateCurrentIndexAfterSearch = function () {
                if (scope.currentIndex > scope.filtered.length - 1)
                {
                    scope.currentIndex = scope.filtered.length - 1;
                }
            };
            scope.updateSlide = function () {
                if (typeof scope.filtered !== 'undefined' && scope.filtered.length > 0 )
                {
                    angular.forEach(scope.filtered, function(image) {
                    image.visible = false; // make every image invisible
                    });
                    scope.filtered[scope.currentIndex].visible = true; // make the current image visible
                }
            };

            scope.$watch('currentIndex', function() {
                scope.updateSlide();
            });
            scope.$watchCollection('filtered', function(newVal, oldVal) {
                if (typeof oldVal === 'undefined' || oldVal.length <= 0)
                {   
                    scope.currentIndex = 0 ;
                    scope.updateSlide();
                }
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

photoApp.directive('photoActiveTag', function () {
    return {
        restrict : 'EA',
        link : function(scope) {
            scope.activeTagList = ['top'];
            scope.addActiveTag = function (activeTag) {
                if (scope.activeTagList.length === 1 && scope.activeTagList[0] === 'top')
                {
                    scope.activeTagList = [];
                }
                if (activeTag){
                    var tempListSplitComma = activeTag.split(",");
                    for (var i = 0; i < tempListSplitComma.length; i++)
                    {
                        if (tempListSplitComma[i] && scope.activeTagList.indexOf(tempListSplitComma[i]) === -1)
                        {
                            scope.activeTagList.push(tempListSplitComma[i].trim());
                        }
                    }
                    scope.activeTag = '';
                }
            };
            scope.removeActiveTag = function(index) {
                scope.activeTagList.splice(index, 1);
            }
            scope.clearActiveTagList = function () {
                scope.activeTagList = ['top'];
            };
        }
    };
});

