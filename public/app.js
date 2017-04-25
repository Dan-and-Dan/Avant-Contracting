angular.module("avant" , ["avant.cards"])

.controller("mainController", ["$scope", "$window", function($scope, $window){
    
    $scope.sendEmail = function(email){
        var message = email.comment; 
        var subject = email.name + " (" + email.phone + ")";
        $window.open("mailto:" + "dillonbolognino@avantcontracting.com" + "?subject=" + subject + "&body=" +message, "_self");
    }
    
    
}]);