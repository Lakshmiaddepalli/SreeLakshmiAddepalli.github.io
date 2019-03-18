(function () {
'use strict';

angular.module('Data')
.controller('ItemsListController', ItemsListController);


ItemsListController.$inject = ['MenuDataService', 'item'];
function ItemsListController(MenuDataService, item) {
  var itemsList = this;
 // console.log("p" + item);
  itemsList.items = item;
  //console.log("*1*1*1*1*1*1*1*1" + itemsList.items);

}

})();
