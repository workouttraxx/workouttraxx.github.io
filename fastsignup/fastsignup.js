'use strict';

angular.module('myApp.fastsignup', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/fastsignup', {
    templateUrl: 'fastsignup/fastsignup.html',
    controller: 'fastsignupCtrl'
  });
}])

.controller('fastsignupCtrl', [function() {
    stButtons.makeButtons();
}]);