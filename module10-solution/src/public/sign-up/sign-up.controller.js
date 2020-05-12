(function () {
  "use strict";

  angular.module('public')
    .controller('SignUpController', SignUpController);

  // SignUpController.$inject = ['menuItem'];

  function SignUpController() {
    var reg = this;
    console.log("fhdslk")
    reg.submit = function () {
      reg.completed = true;
    };
  }

})();