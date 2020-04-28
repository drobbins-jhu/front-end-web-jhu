(function () {
  'use strict';

  angular.module('Data')
    .controller('ItemsComponentController', ItemsComponentController);


  ItemsComponentController.$Inject = ['items'];

  function ItemsComponentController(items) {
    console.log(items);
    this.items = items.data.menu_items;
    // this.categories = MenuDataService.getAllCategories();
  };


})();