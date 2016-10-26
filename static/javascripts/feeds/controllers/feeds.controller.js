/**
* Feeds controller
* @namespace breastfeeding.feeds.controllers
*/
(function () {
  'use strict';

  angular
    .module('breastfeeding.feeds.controllers')
    .controller('FeedsController', FeedsController);

  FeedsController.$inject = ['$scope', '$filter', '$location', 'Feeds', 'Children', 'Messages', 'Authentication'];

  /**
  * @namespace FeedsController
  */
  function FeedsController($scope, $filter, $location, Feeds, Children, Messages, Authentication) {
    var vm = this;

    vm.feeds = [];
    vm.children = [];

    activate();

    /**
     * @name activate
     * @desc Actions to be performed when this controller is instantiated
     * @memberOf breastfeeding.feeds.controllers.FeedsController
     */
    function activate() {
      // If the user is authenticated, they should not be here.
      if (!Authentication.isAuthenticated()) {
        $location.url('/login');
      }
      Feeds.all().then(feedsSuccessFn, feedsErrorFn);
      Children.all().then(childrenSuccessFn, childrenErrorFn);

      /**
      * @name feedsSuccessFn
      * @desc Update feeds array on view
      */
      function feedsSuccessFn(data, status, headers, config) {
        vm.feeds = data.data;
      }


      /**
      * @name feedsErrorFn
      * @desc Show message with error
      */
      function feedsErrorFn(data, status, headers, config) {
        Messages.error(data.error);
      }


      /**
      * @name childrenSuccessFn
      * @desc Update children array on view
      */
      function childrenSuccessFn(data, status, headers, config) {
        vm.children = data.data;
        vm.selectedchildren = data.data;
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