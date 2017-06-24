/**
 * Created by 23rharris on 6/28/17.
 */
(function(){

  'use strict';

  angular.module('ryanapp.core')
    .config(Routes);

  Routes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function Routes($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
      .state('home', {
        url: '/',
        views: {
          'content': {
            templateUrl: '../home/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'vm'
          }
        }

      })

      .state('home.about', {
        url: 'about',
        views: {
          'content@': {
            templateUrl: '../about/about.html',
            controller: 'AboutCtrl',
            controllerAs: 'vm'
          }
        }
      })

  }





})();
