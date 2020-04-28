(function () {
  'use strict';

  angular.module('Data')
    .controller('CategoriesComponentController', CategoriesComponentController);


  CategoriesComponentController.$Inject = ['categories'];

  function CategoriesComponentController(categories) {
    console.log(categories);
    this.categories = categories.data;
    // this.categories = MenuDataService.getAllCategories();
  };


})();