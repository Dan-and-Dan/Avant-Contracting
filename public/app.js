angular.module("avant", ['ngRoute'])

.controller("mainController", ["$scope", function ($scope) {

}])

.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when('/dashboard', {
            controller: "homeController",
            templateUrl: "views/dashboard/dashboard.html"
        })
        .when('/home', {
            controller: "homeController",
            templateUrl: "views/home/home.html"
        })
        .when('/about', {
            controller: "homeController",
            templateUrl: "views/home/home.html"
        })
        .when('/gallery', {
            controller: "homeController",
            templateUrl: "views/home/home.html"
        })
        .when('/contact', {
            controller: "homeController",
            templateUrl: "views/home/home.html"
        })
        .otherwise('/dashboard', {
            redirectTo: "/dashboard"
        });
}]);