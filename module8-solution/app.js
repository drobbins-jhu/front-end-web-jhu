(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItems)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");



  NarrowItDownController.$Inject = ['MenuSearchService'];
  MenuSearchService.$Inject = ['$http', 'ApiBasePath'];

  function FoundItems() {
    return {
      scope: {
        items: '<',
        searched: '<',
        onRemove: '&'
      },
      templateUrl: 'found.html',
      controller: NarrowItDownController,
      controllerAs: 'controller',
      bindToController: true
    };
  }

  function NarrowItDownController(MenuSearchService) {
    this.searchTerm = '';
    this.searched = false;
    this.found = [];
    this.search = (searchTerm) => MenuSearchService.getMatchedMenuItems(searchTerm)
      .then(res => { this.found = res; this.searched = true; });

    this.removeItem = (index) => this.found.splice(index, 1);

  };


  function MenuSearchService($http, ApiBasePath) {

    this.getMatchedMenuItems = (searchTerm) => $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(res => searchTerm !== '' ? res.data.menu_items.filter(item => item.description.includes(searchTerm)) : []);

  };

})();