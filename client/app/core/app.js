

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
      'ryanapp.core',
      'ryanapp.home',
      'ryanapp.about'
    ]);


})();
