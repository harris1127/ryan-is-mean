

/**
 * @ngdoc overview
 * @name ryanapp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */

(function(){

  'use strict';

  angular
    .module('ryanapp', [
      'ui.router',
      'ngResource',
      'restangular',
      'ryanapp.core',
      'ryanapp.home',
      'ryanapp.about'
    ])
    .factory('UserRest', function (Restangular) {

      return Restangular.withConfig(function(RestangularConfigurer){

        RestangularConfigurer.setRestangularFields({

            id: '_ids' //allows us to read the rest api id

        });
      });

  })
    .factory('User', function (UserRest) {

      return UserRest.service('user'); //this points to the url in the user api

    });


})();
