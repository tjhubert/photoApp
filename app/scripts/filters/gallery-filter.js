photoApp.filter('filterPhoto', function () {
    return function (album, activeTagList) {
        var filtered = [];
        if ( typeof activeTagList !== 'undefined' && ( (activeTagList.length == 1 && activeTagList[0].toLowerCase() == 'all') || activeTagList.length == 0 ) ) {
            filtered = album;
        }
        else {
            for (var j in album) {
                var photo = album[j];
                if (typeof activeTagList !== 'undefined' && activeTagList.length > 0 ) {
                    var allTags = [photo.city, photo.country, photo.year].concat(photo.tags);
                    for (var i in allTags)
                    {
                        allTags[i] = allTags[i].toLowerCase();
                    }
                    var tagMatch = false;
                    var continueLoop = true;
                    for (i=0; i<activeTagList.length && continueLoop; i++) {
                        if (allTags.indexOf(activeTagList[i].toLowerCase()) != -1 || activeTagList[i].toLowerCase() == 'all') {
                            tagMatch = true;
                        }
                        else {
                            tagMatch = false;
                            continueLoop = false;
                        }
                    }
                    if (tagMatch){
                        filtered.push(photo);
                    }
                }
            }
        }
        return filtered;
    }
});

