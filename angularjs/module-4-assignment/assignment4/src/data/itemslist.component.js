(function () {
'use strict';

angular.module('Data')
.component('itemsList', {
  templateUrl: 'src/data/templates/itemslist.template.html',
  bindings: {
    items: '<'
  }
});

})();
