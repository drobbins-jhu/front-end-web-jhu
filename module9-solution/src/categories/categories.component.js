(function () {
  'use strict';

  angular.module('Data')
    .component('categories', {
      templateUrl: 'src/categories/categories.template.html',
      controller: 'CategoriesComponentController',
      bindings: {
        categories: '<',
        // myTitle: '@title',
        // onRemove: '&'
      }
    });


})();