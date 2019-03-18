(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);



MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };


service.getMenuItem = function(shortName) {
  service.menuitemvalues = [];
    return $http.get(ApiPath + '/menu_items/' + shortName + '.json')
    .then(function(response) {
      console.log(response.data);
      service.menuitemvalues = response.data;
      console.log(service.menuitemvalues);
      console.log(service.menuitemvalues.short_name);
      return response.data;
    });
  };



  

  service.sendData = function(data){
       service.data = data;

  };

  service.getData = function(){
    return service.data;
  };


}

})();
