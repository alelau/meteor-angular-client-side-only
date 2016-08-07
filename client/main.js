import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
Meteor.disconnect();

angular.module('socially', [
  angularMeteor
]);