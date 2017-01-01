(function() {

 angular.module('ShoppingListCheckOff',[])
 .controller('ToBuyController',ToBuyController)
 .controller('AlreadyBoughtController')
 .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

 ToBuyController.$inject = ['ShoppingListCheckOffService'];

 function ToBuyController(ShoppingListCheckOffService) {

   var buyItems = this;


 }

function ShoppingListCheckOffService() {

  var service = this;
  var buyItems = [
{

}
]

}


}
)();
