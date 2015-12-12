'use strict';

angular.module('myApp.bedankt', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bedankt', {
    templateUrl: 'bedankt/bedankt.html',
    controller: 'bedanktCtrl'
  });
}])

.controller('bedanktCtrl', [function() {
            stButtons.makeButtons();
}]);