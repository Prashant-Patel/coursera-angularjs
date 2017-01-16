(function() {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider

            // Home page
            .state('home', {
                url: '/',
                templateUrl: 'src/templates/home.template.html'
            })

            // Premade list page
            .state('mainMenu', {
                url: '/main-menu',
                templateUrl: 'src/templates/main-CategoryList.template.html',
                controller: 'CategoryListController as mainMenu',
                resolve: {
                    items: ['MenuDataService', function(MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            // Item detail
            .state('menuDetail', {
                url: '/item-detail/{itemId}',
                templateUrl: 'src/templates/main-ItemList.template.html',
                controller: 'MenuDetailController as menuDetail',
                resolve: {
                    items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
                        return MenuDataService.getItemsForCategory($stateParams.itemId);
                    }]
                }
            });

    }

})();
