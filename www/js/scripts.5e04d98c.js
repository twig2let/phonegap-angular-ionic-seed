"use strict";
angular.module("wrongmoveApp", ["ngAnimate", "ngCookies", "ngRoute", "ngTouch"]).config(["$routeProvider", function (a) {
    a.when("/", {templateUrl: "views/main.html", controller: "MainCtrl"}).when("/about", {templateUrl: "views/about.html", controller: "AboutCtrl"}).otherwise({redirectTo: "/"})
}]), angular.module("wrongmoveApp").controller("HomeCtrl", ["$scope", function (a) {
    a.message = "Big floppy cock!"
}]);