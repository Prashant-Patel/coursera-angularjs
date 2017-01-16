(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuDetailController', MenuDetailController);

// Version with resolving to 1 item based on $stateParams in route config
MenuDetailController.$inject = ['items'];
function MenuDetailController(items) {
  var menuDetail = this;
  menuDetail.items = items;
}

})();
