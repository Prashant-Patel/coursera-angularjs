(function() {
    "use strict";

    angular.module('public')
        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['MenuService'];

    function RegistrationController(MenuService) {
        var reg = this;
        reg.response = '';
        reg.Message = '';
        reg.favoriteFound = false;

        reg.callService = function() {
            MenuService.getItem(reg.user.favorite.toUpperCase()).then(function(response) {
                if (response === false) {
                    reg.Message = 'No Such menu item exists';
                } else {
                    reg.favoriteFound = true;
                    reg.Message = 'Menu Item Found';
                    reg.user.favorite = reg.user.favorite.toUpperCase();
                    reg.user.name = response.name;
                    reg.user.description = response.description;

                }
            })

        };

        reg.submit = function() {
            reg.response = "Your information has been saved";
            reg.user.response = "Your information has been saved";
            MenuService.setuser(reg.user);
        };

    }

})();
