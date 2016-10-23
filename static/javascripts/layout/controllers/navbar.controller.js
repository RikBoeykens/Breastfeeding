/**
* NavbarController
* @namespace breastfeeding.layout.controllers
*/
(function () {
  'use strict';

  angular
    .module('breastfeeding.layout.controllers')
    .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$scope', 'Authentication'];

  /**
  * @namespace NavbarController
  */
  function NavbarController($scope, Authentication) {
    var vm = this;

    vm.logout = logout;

    /**
    * @name logout
    * @desc Log the user out
    * @memberOf breastfeeding.layout.controllers.NavbarController
    */
    function logout() {
      Authentication.logout();
    }
  }
})();