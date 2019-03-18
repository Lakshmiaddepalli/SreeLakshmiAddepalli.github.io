(function () {
'use strict';

angular.module('Data')
.component('categoriesList', {
  templateUrl: 'src/data/templates/categorieslist.template.html',
  bindings: {
    items: '<'
  }
});

})();
