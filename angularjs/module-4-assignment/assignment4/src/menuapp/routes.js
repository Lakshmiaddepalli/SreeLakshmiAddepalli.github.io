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
    templateUrl: 'src/data/templates/home.template.html'
  })

  // Premade list page
  .state('categoriesList', {
    url: '/categories-list',
    templateUrl: 'src/data/templates/main-categorieslist.template.html',
    controller: 'CategoriesListController as categoriesList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        //console.log("%%"+ MenuDataService.getAllCategories());
        return MenuDataService.getAllCategories();
      }]
    }
  })


  .state('itemsList', {
    url: '/items-list/{itemId}',
    templateUrl: 'src/data/templates/main-itemslist.template.html',
    controller: 'ItemsListController as itemsList',
     resolve: {
      item: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getAllCategories()
                .then(function (items) {
                //  console.log($stateParams);
                //  console.log(items[$stateParams.itemId]);
                  var short_name = items[$stateParams.itemId].short_name;
                //  console.log(short_name);
                // console.log("jli" + MenuDataService.getItemsForCategory(short_name));
                return MenuDataService.getItemsForCategory(short_name);
                });
            }]
    }
  });

}

})();
