(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {
    this.toBuyList = ShoppingListCheckOffService.getToBuyList();

    console.log(this.toBuyList);
    this.addItem = (index) => ShoppingListCheckOffService.addBoughtItem(index);

  }

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    this.alreadyBoughtList = ShoppingListCheckOffService.alreadyBoughtList();
    console.log(this.alreadyBoughtList);


  }

  function ShoppingListCheckOffService() {
    let toBuyList = [
      { name: 'cookies', quantity: 10 },
      { name: 'donuts', quantity: 6 },
      { name: 'apples', quantity: 12 },
      { name: 'oranges', quantity: 8 },
      { name: 'coffee', quantity: 1 }
    ];
    let alreadyBoughtList = [];


    this.getToBuyList = () => toBuyList;

    this.alreadyBoughtList = () => alreadyBoughtList;

    this.addBoughtItem = (index) => alreadyBoughtList.push(toBuyList.splice(index, 1)[0]);



  }

})()