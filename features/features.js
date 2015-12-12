'use strict';

angular.module('myApp.features', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/features', {
    templateUrl: 'features/features.html',
    controller: 'featuresCtrl'
  });
}])

.controller('featuresCtrl', [function() {
        stButtons.makeButtons();
}]);