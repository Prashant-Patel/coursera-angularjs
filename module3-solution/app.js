(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json")
  .directive('foundItems', FoundItems);

  function FoundItems() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
      list: '<',
      onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'menulist',
      bindToController: true
      };
       return ddo;
     }

   function FoundItemsDirectiveController () {
     var foundCtrl = this;
   }
  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var menu = this;
   menu.foundItems = [];
    menu.getMenuCategories = function(searchTerm) {
      if (!searchTerm || searchTerm.length == 0 || searchTerm.trim().length == 0) {
        menu.foundItems = [];
        menu.errorMessage = "Nothing found";
      }
      else
      {
        var promise = MenuSearchService.getMenuCategories(searchTerm);
        promise.then(function (data) {
          if (data.length == 0) {
            menu.errorMessage = "Nothing found";
            menu.foundItems = [];
          }
          else
          {
            menu.foundItems = data;
            menu.errorMessage = "";
          }
        })
        .catch(function (error) {
          console.log("Something went wrong.");
        });
      }
    };
    menu.removeItem = function (index) {
      menu.foundItems.splice(index,1);
    };
  }

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;
    var items = [];
    service.getMenuCategories = function (searchTerm) {
    return  $http({
        method: "GET",
        url: (ApiBasePath)
      })
      .then(function (response) {
       items = [];
      var menu_items = response.data.menu_items;
      for (var nIndex = 0; nIndex < menu_items.length; nIndex++) {
           if (menu_items[nIndex].description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
          items.push(menu_items[nIndex]);
          }
        }
        return items;
      });
    };
  }
})();
