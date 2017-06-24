/**
 * @ngdoc function
 * @name ryanapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */

(function () {

  'use strict';

  angular.module('ryanapp.home')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope'];

  function MainCtrl($scope){

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  }

})();


