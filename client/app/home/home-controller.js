/**
 * @ngdoc function
 * @name ryanapp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the clientApp
 */

(function () {

  'use strict';

  angular.module('ryanapp.home')
    .controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ['$scope', 'User'];

  function HomeCtrl($scope, User){

    var self = this;

    /*self.users = [
      {
        firstName: 'Ryan',
        lastName: 'Harris',
        position: 'Software Developer',
        personality: 'Great'
      }
    ];*/

    self.users = User.getList().$object; //object goes to the serve fetches the list and dynamic changes the object
                                          //uses two way binding to automatically change the variable

    self.awesomeThings = [
      'Ryan app',
      'AngularJS',
      'Karma',
      'Yeoman',
      'Grunt',
      'Bootstrap'
    ];

  }

})();


