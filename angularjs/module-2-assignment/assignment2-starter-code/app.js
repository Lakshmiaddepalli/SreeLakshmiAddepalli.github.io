(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
var toBuy = this;
 toBuy.items = ShoppingListCheckOffService.getItems();
 console.log(toBuy.items);

 toBuy.removeItem = function (itemIndex) {
 var value =  ShoppingListCheckOffService.removeItem(itemIndex);
 ShoppingListCheckOffService.addItem(value.name,value.quantity);
 console.log(toBuy.removeItem);
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.bought = ShoppingListCheckOffService.getItemsbought();
 console.log(alreadyBought.bought);
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items = [
 {
    name: "Milk",
    quantity: "2"
  },
   {
    name: "lol",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  }
  ];


  var bought = [];

  service.addItem = function (itemName, quantity) {
  var item = {
  name: itemName,
  quantity: quantity
  };
  bought.push(item);
  };

service.removeItem = function (itemIndex) {
var itemdeleted = items[itemIndex];
items.splice(itemIndex, 1);
return itemdeleted;
  };

  service.getItems = function () {
    return items;
  };

   service.getItemsbought = function () {
    return bought;
  };
}

})()