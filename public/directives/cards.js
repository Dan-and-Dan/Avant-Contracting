angular.module("avant")

.controller("cards", ["$scope", function($scope){
    $scope.cards = [ {
        projectName: "Donna Drive",
        description: "",
        coverImage: "./images/avantimages/donna/completedfireplace.JPG",
        images: ["./images/avantimages/donna/cabinets.JPG", "./images/avantimages/donna/completedfireplace.JPG", "./images/avantimages/completedkitchen.JPG", "./images/avantimages/donna/drywallhall.JPG", "./images/avantimages/donna/finishedupstairs.JPG", "./images/avantimages/donna/inprogress.JPG", "./images/avantimages/donna/tiling.JPG", "./images/avantimages/donna/upstairsdone.JPG"]
    }
    ]
}]);