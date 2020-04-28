(function () {
  'use strict';

  angular.module('Data')
    .component('items', {
      templateUrl: 'src/templates/items.template.html',
      controller: 'ItemsComponentController',
      bindings: {
        items: '<',
        // myTitle: '@title',
        // onRemove: '&'
      }
    });


})();