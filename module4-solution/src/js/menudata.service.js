(function() {
    'use strict';
  angular.module('data')
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$q', '$http'];

    function MenuDataService($q, $http) {

      var menuService = this;
        var items = [];
        menuService.getAllCategories = function() {
             var deferred = $q.defer();
              $http({
                method: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/categories.json'
            }).success(function(data) {
                deferred.resolve(data);
            }).error(function() {
                deferred.reject(error);
            });

            return deferred.promise;
        };

        menuService.getItemsForCategory = function(categoryShortName) {
          var deferred = $q.defer();
           $http({
             method: 'GET',
             url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName
         }).success(function(data) {
             deferred.resolve(data.menu_items);
         }).error(function() {
             deferred.reject(error);
         });
         return deferred.promise;
        };
    }

})();
