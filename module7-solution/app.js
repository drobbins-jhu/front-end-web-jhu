(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
    .filter('total', Total);

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
      { name: 'cookies', quantity: 13, pricePerItem: 1 },
      { name: 'donuts', quantity: 6, pricePerItem: 1.50 },
      { name: 'apples', quantity: 12, pricePerItem: .5 },
      { name: 'oranges', quantity: 7, pricePerItem: .75 },
      { name: 'coffee', quantity: 1, pricePerItem: 1 }
    ];
    let alreadyBoughtList = [];


    this.getToBuyList = () => toBuyList;

    this.alreadyBoughtList = () => alreadyBoughtList;

    this.addBoughtItem = (index) => alreadyBoughtList.push(toBuyList.splice(index, 1)[0]);


  }

  function Total() {
    return (item) => `$$$${(item.quantity * item.pricePerItem).toFixed(2)}`;

  }

})()