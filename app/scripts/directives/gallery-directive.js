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
            scope.$watch('currentIndex', function() {
                angular.forEach(scope.filtered, function(image) {
                      image.visible = false; // make every image invisible
                });
                scope.filtered[scope.currentIndex].visible = true; // make the current image visible
            });
        }
    };
});

photoApp.directive('photoActiveTag', function () {
    return {
        restrict : 'EA',
        link : function(scope) {
            scope.activeTagList = [];
            scope.addActiveTag = function () {
                if (scope.activeTag){
                    tempListSplitSpace = scope.activeTag.split(" ");
                    for (i=0; i<tempListSplitSpace.length; i++)
                    {
                        tempListSplitComma = tempListSplitSpace[i].split(",");
                        for (j=0; j<tempListSplitComma.length; j++)
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

