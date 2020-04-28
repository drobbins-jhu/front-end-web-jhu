(function () {
  'use strict';

  angular.module('MenuApp', ['ui.router', 'Data'])
    .service('MenuDataService ', MenuDataService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


  MenuDataService.$Inject = ['$http', 'ApiBasePath'];

  function MenuDataService($http, ApiBasePath) {

    this.getAllCategories = () => $http({
      method: "GET",
      url: (`${ApiBasePath}/categories`)
    });

    this.getItemsForCategory = (categoryShortName) => $http({
      method: "GET",
      url: (`${ApiBasePath}/menu_items?category=${categoryShortName}`)
    });

  };


})();