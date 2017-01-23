(function () {
"use strict";

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['MenuService'];
function RegistrationController(MenuService) {
  var reg = this;
  reg.response = '';


  reg.submit = function () {
  MenuService.getItem(reg.user.favorite.toUpperCase()).then(function(response) {
      if (response === false) {
        reg.response = 'No Such menu item exists';
      }
      else {
          reg.response = "Your information has been saved";
          reg.user.favorite = reg.user.favorite.toUpperCase();
          reg.user.name = response.name;
          reg.user.description = response.description;
          reg.user.response = "Your information has been saved";
          MenuService.setuser(reg.user);
      }
    })
  };

}

})();
