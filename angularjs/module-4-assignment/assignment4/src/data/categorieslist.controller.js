(function () {
'use strict';

angular.module('Data')
.controller('CategoriesListController', CategoriesListController);


CategoriesListController.$inject = ['MenuDataService', 'items'];
function CategoriesListController(MenuDataService, items) {
  var categoriesList = this;
  categoriesList.items = items;
  //console.log("********" + categoriesList.items);
  
}

})();
