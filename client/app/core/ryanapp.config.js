/**
 * Created by 23rharris on 6/28/17.
 */
(function(){

  'use strict';

  angular.module('ryanapp.core')
    .config(Config);

  Config.$inject = ['RestangularProvider'];

  function Config(RestangularProvider) {

    RestangularProvider.setBaseUrl('http://localhost:9080');

  }


})();
