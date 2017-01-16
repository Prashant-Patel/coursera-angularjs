(function() {
    'use strict';
    angular.module('MenuApp')
        .component('itemDetail', {
            templateUrl: 'src/templates/items.template.html',
            bindings: {
                items: '<'
            }
        });
})();
