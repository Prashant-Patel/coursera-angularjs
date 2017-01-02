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
