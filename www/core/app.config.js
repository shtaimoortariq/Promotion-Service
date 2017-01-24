(function() {
  'use strict';

  angular
    .module('app')
    .config(configure);

  configure.$inject = [

    '$ionicConfigProvider'
  ];

  function configure ($ionicConfigProvider) {
    // Add your configuration here
    $ionicConfigProvider.tabs.position('bottom');
  }

})();
