/**
* Dashboard controller
* @namespace breastfeeding.dashboard.controllers
*/
(function () {
  'use strict';

  angular
    .module('breastfeeding.dashboard.controllers')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$scope', '$filter', '$location', 'Children', 'Messages', 'Authentication'];

  /**
  * @namespace DashboardController
  */
  function DashboardController($scope, $filter, $location, Children, Messages, Authentication) {
    var vm = this;

    vm.children = [];

    activate();

    /**
     * @name activate
     * @desc Actions to be performed when this controller is instantiated
     * @memberOf breastfeeding.dashboard.controllers.DashboardController
     */
    function activate() {
      // If the user is authenticated, they should not be here.
      if (!Authentication.isAuthenticated()) {
        $location.url('/login');
      }
      Children.all().then(childrenSuccessFn, childrenErrorFn);

            /**
      * @name childrenSuccessFn
      * @desc Update children array on view
      */
      function childrenSuccessFn(data, status, headers, config) {
        vm.children = $filter('filter')(data.data, {is_active: true});
      }


      /**
      * @name childrenErrorFn
      * @desc Show message with error
      */
      function childrenErrorFn(data, status, headers, config) {
        Messages.error(data.error);
      }
    }
  }
})();