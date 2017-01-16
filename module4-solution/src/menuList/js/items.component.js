(function() {
    'use strict';
    angular.module('MenuApp')
        .component('itemDetail', {
            templateUrl: 'src/menulist/templates/items.template.html',
            bindings: {
                items: '<'
            }
        });
})();
