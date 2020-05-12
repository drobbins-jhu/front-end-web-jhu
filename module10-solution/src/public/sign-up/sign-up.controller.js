(function () {
  "use strict";

  angular.module('public')
    .controller('SignUpController', SignUpController);

  function SignUpController() {
    var reg = this;
    console.log("fhdslk")
    reg.submit = function () {
      reg.completed = true;
    };
  }

})();