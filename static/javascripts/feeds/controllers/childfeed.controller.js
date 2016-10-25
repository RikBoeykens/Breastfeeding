/**
* Childfeed controller
* @namespace breastfeeding.feeds.controllers
*/
(function () {
  'use strict';

  angular
    .module('breastfeeding.feeds.controllers')
    .controller('ChildFeedController', ChildFeedController);

  ChildFeedController.$inject = ['$scope', '$filter', 'Feeds', 'Messages'];

  /**
  * @namespace ChildFeedController
  */
  function ChildFeedController($scope, $filter, Feeds, Messages) {
    var vm = this;

    vm.lastFeed = $filter('orderBy')($scope.child.feeds, 'start_time', true)[0];

    activate();

    vm.startFeed = startFeed;
    vm.endFeed = endFeed;

    /**
     * @name activate
     * @desc Actions to be performed when this controller is instantiated
     * @memberOf breastfeeding.feeds.controllers.ChildFeedController
     */
    function activate() {

    }

        /**
     * @name startFeed
     * @desc Used to start a feed
     * @memberOf breastfeeding.feeds.controllers.ChildFeedController
     */
    function startFeed() {
      Feeds.startFeed($scope.child.id, (vm.right_side ? true : false)).then(startFeedSuccessFn, startFeedErrorFn);

      /**
      * @name startFeedSuccessFn
      * @desc Update feed on view
      */
      function startFeedSuccessFn(data, status, headers, config) {
        vm.lastFeed = data.data;
      }


      /**
      * @name startFeedErrorFn
      * @desc Show message with error
      */
      function startFeedErrorFn(data, status, headers, config) {
        Messages.error(data.error);
      }
    }

     /**
     * @name endFeed
     * @desc Used to end a feed
     * @memberOf breastfeeding.feeds.controllers.ChildFeedController
     */
    function endFeed() {
      Feeds.endFeed(vm.lastFeed.id).then(endFeedSuccessFn, endFeedErrorFn);

      /**
      * @name endFeedSuccessFn
      * @desc Update feed on view
      */
      function endFeedSuccessFn(data, status, headers, config) {
        vm.lastFeed = data.data;
      }


      /**
      * @name endFeedErrorFn
      * @desc Show message with error
      */
      function endFeedErrorFn(data, status, headers, config) {
        Messages.error(data.error);
      }
    }
  }
})();