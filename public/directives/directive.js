angular.module("avant")

.directive("galleryCards", function() {
    return{
        restrict: "E",
        scope: {
            projects: "="
        },
        templateUrl: 'directives/gallerycards.html', 
        controller: "cards"
    };
});