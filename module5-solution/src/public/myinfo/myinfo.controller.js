(function () {
"use strict";

angular.module('public')
.controller('InformationController', InformationController);

InformationController.$inject = ['user','ApiPath'];
function InformationController(user,ApiPath) {
  var infoctrl = this;
  infoctrl.show = false;
  infoctrl.userinfo = user;
  infoctrl.basePath = ApiPath;
  if (user) {
    infoctrl.show =true;
  }
}

})();
