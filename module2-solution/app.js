(function() {

 angular.module('ShoppingListCheckOff',[])
 .controller('ToBuyController',ToBuyController)
 .controller('AlreadyBoughtController',AlreadyBoughtController)
 .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

 ToBuyController.$inject = ['ShoppingListCheckOffService'];

 function ToBuyController(ShoppingListCheckOffService) {

   var itemList = this;
   itemList.items = ShoppingListCheckOffService.getBuyItems();

   itemList.removeItem = function (itemIndex) {
   ShoppingListCheckOffService.removeItem(itemIndex);
  };
 }

 AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

 function AlreadyBoughtController(ShoppingListCheckOffService) {

   var itemList = this;
   itemList.items = ShoppingListCheckOffService.getBoughtItems();
 }


function ShoppingListCheckOffService() {

  var service = this;
  var boughtItems = [];
  var buyItems = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    },
    {
      name: "Peanut Butter",
      quantity: "3"
    }
];

service.getBuyItems = function () {
  return buyItems;
};


service.getBoughtItems = function () {
  return boughtItems;
};

service.removeItem = function (itemIndex) {
    var item = buyItems[itemIndex];
    boughtItems.push(item);
    buyItems.splice(itemIndex, 1);
  };

}


}
)();

// !function(){function t(t){var e=this;e.items=t.getBuyItems(),e.removeItem=function(e){t.removeItem(e)}}function e(t){var e=this;e.items=t.getBoughtItems()}function n(){var t=this,e=[],n=[{name:"Milk",quantity:"2"},{name:"Donuts",quantity:"200"},{name:"Cookies",quantity:"300"},{name:"Chocolate",quantity:"5"},{name:"Chocolate",quantity:"5"}];t.getBuyItems=function(){return n},t.getBoughtItems=function(){return e},t.removeItem=function(t){var i=n[t];e.push(i),n.splice(t,1)}}angular.module("ShoppingListCheckOff",[]).controller("ToBuyController",t).controller("AlreadyBoughtController",e).service("ShoppingListCheckOffService",n),t.$inject=["ShoppingListCheckOffService"],e.$inject=["ShoppingListCheckOffService"]}();
