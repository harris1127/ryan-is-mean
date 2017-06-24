/**
 * @ngdoc function
 * @name ryanapp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientApp
 */

(function(){

  'use strict';

  angular.module('ryanapp.about')
    .controller('AboutCtrl', AboutCtrl);


  AboutCtrl.$inject = ['$scope'];

  function AboutCtrl($scope){

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  }

})();

