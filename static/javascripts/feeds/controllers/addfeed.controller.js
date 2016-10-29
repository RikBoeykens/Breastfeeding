/**
* Add Feed controller
* @namespace breastfeeding.feeds.controllers
*/
(function () {
  'use strict';

  angular
    .module('breastfeeding.feeds.controllers')
    .controller('AddFeedController', AddFeedController);

  AddFeedController.$inject = ['$scope', '$location', 'Feeds', 'Children', 'Messages'];

  /**
  * @namespace AddFeedController
  */
  function AddFeedController($scope, $location, Feeds, Children, Messages) {
    var vm = this;

    vm.children = [];
    vm.right_side=false;

    activate();

    vm.addFeed = addFeed;

    /**
     * @name activate
     * @desc Actions to be performed when this controller is instantiated
     * @memberOf breastfeeding.feeds.controllers.AddChildController
     */
    function activate() {
      Children.all().then(childrenSuccessFn, childrenErrorFn);

            /**
      * @name childrenSuccessFn
      * @desc Update children array on view
      */
      function childrenSuccessFn(data, status, headers, config) {
        vm.children = data.data;
        vm.selectedchild = vm.children[0];
      }


      /**
      * @name childrenErrorFn
      * @desc Show message with error
      */
      function childrenErrorFn(data, status, headers, config) {
        Messages.error(data.error);
      }
    }

    /**
     * @name addFeed
     * @desc Adds a child to the user
     * @memberOf breastfeeding.feeds.controllers.AddFeedController
     */
    function addFeed(){

      Feeds.create(vm.selectedchild.id, getDateTimeString(vm.start_date, vm.start_time), getDateTimeString(vm.end_date, vm.end_time), (vm.right_side ? true : false)).then(addSuccessFn, addErrorFn);

      /**
       * Send back to feeds view
       */
      function addSuccessFn(){
        $location.url('/feeds');
      }

      /**
       * Show error
       */
      function addErrorFn(data){
        Messages.error(data.error);
      }

      function getDateTimeString(date_value, time_value){
        var newDate = new Date(date_value);
        var parsedTime = time_value.split(":");
        newDate.setHours(parsedTime[0]);
        newDate.setMinutes(parsedTime[1]);
        return newDate.toISOString();
      }
    }
  }
})();