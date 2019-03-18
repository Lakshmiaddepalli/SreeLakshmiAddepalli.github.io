(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItems );


function FoundItems() {
 var ddo = {
   templateUrl: 'foundItems.html',
   scope: {
    items : '<',
     onRemove: '&'
   },
  };

 return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrow = this;
  narrow.val = "";
  narrow.MenuItems = function () {
  MenuSearchService.getMatchedMenuItems(narrow.val).then(function(data) {
                    narrow.found = data;
                    //console.log(menu.list.length);
                    if(narrow.found.length == 0)
                    {
                    narrow.errorMessage = "Nothing Found";
                    }
                    else{
                     narrow.errorMessage = "";   
                    }
                    return narrow.found;
                }, function(error) {
                    console.log("lolololol");
                });
}

narrow.removeItem = function (itemIndex) {
    narrow.found.splice(itemIndex, 1);
  };


}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
  return $http({
  method: "GET",
  url: (ApiBasePath + "/menu_items.json")
  }).then(function(response) {
                            var founditems = [];
                            var values = response.data.menu_items;
                            for(var j = 0; j <values.length;j++)
                            {
                                var des = values[j].description;
                                if(searchTerm.length==0)
                                {
                                    founditems = [];
                                }
                                else{
                                if(des.includes(searchTerm.toLowerCase()))
                                {
                                    founditems.push(values[j]);
                                }
                                }
                            }
                            console.log(founditems);
                            return founditems;                

                    }, function(response) {
                        // something went wrong
                        return "No Data";
                    });

}


}
})()