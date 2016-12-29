(function () {
  'use strict';
    angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject = ['$scope'];

 function LunchCheckController($scope)
 {
   $scope.OnLunchCheck = function() {
     if (!$scope.name){
       $scope.message = 'Please enter data first';
       $scope.mystyle = {"color": "red"};
       $scope.textcolor= {"border-color": "red"};
     }
     else{
       $scope.mystyle = {"color": "green"};
        $scope.textcolor= {"border-color": "green"};
       var lunchItem  = calculateLunchItem($scope.name);
       if (lunchItem <= 3)
                $scope.message ="Enjoy!";
       else
        $scope.message ="Too much!";
     }
   };
 };

 function  calculateLunchItem(string){
   var counter = 0;
   var splitvalue = string.split(',');
    for (var i = 0; i < splitvalue.length; i++) {
        if (splitvalue[i]) {
          counter+=1;
        }
    }
   return counter;
 };

})();

// !function(){"use strict";function e(e){e.OnLunchCheck=function(){if(e.name){e.mystyle={color:"green"},e.textcolor={"border-color":"green"};var r=o(e.name);3>=r?e.message="Enjoy!":e.message="Too much!"}else e.message="Please enter data first",e.mystyle={color:"red"},e.textcolor={"border-color":"red"}}}function o(e){for(var o=0,r=e.split(","),n=0;n<r.length;n++)r[n]&&(o+=1);return o}angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope"]}();
