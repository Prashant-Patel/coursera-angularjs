(function() {
    'use strict';
    angular.module('MenuApp')
        .component('categoryList', {
            templateUrl: 'src/templates/categorylist.html',
            bindings: {
                items: '<'
            }
        });
})();
