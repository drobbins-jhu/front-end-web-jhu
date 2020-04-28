(function () {
  'use strict';

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/templates/home.html'
      })

      // categories
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/templates/categories.template.html',
        controller: 'CategoriesComponentController as ctrl',
        resolve: {
          categories: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })

      // items
      .state('items', {
        url: '/items/{shortName}',
        templateUrl: 'src/templates/items.template.html',
        controller: 'ItemsComponentController as ctrl',
        resolve: {
          items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.shortName);
          }]
        }
      });

  }

})();
