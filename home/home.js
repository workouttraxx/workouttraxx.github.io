'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', ['$window',function($window) {
        stButtons.makeButtons();
       //$('.tp-banner-container').css('width', $window.innerWidth + "px");
       //console.log($window.innerWidth);
}]);