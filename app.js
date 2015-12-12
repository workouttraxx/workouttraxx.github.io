'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  //'ngAnimate',
  'myApp.home',
  'myApp.pricing',
  'myApp.easyscheduling',
  'myApp.features',
  'myApp.faq',
  'myApp.fastsignup',
  'myApp.video',
  'myApp.contact',
  'myApp.bedankt',
  'myApp.demo',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
