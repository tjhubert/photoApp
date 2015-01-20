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
                    scope.next();
                    scope.updateSlide();
                }
                else if (newVal.indexOf(oldVal[scope.currentIndex]) === -1)
                {
                    oldVal[scope.currentIndex].visible = false;
                    scope.prev();
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
            scope.addActiveTag = function () {
                if (scope.activeTag){
                    var tempListSplitSpace = scope.activeTag.split(" ");
                    for (var i=0; i<tempListSplitSpace.length; i++)
                    {
                        var tempListSplitComma = tempListSplitSpace[i].split(",");
                        for (var j=0; j<tempListSplitComma.length; j++)
                        {
                            if (tempListSplitComma[j] && scope.activeTagList.indexOf(tempListSplitComma[j]) == -1)
                            {
                                scope.activeTagList.push(tempListSplitComma[j]);
                            }
                        }
                    }
                    scope.activeTag = '';
                }
            };
            scope.clearActiveTagList = function () {
                scope.activeTagList = [];
            };
        }
    };
});

