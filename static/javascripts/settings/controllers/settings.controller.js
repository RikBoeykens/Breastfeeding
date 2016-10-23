/**
* Settings controller
* @namespace breastfeeding.settings.controllers
*/
(function () {
  'use strict';

  angular
    .module('breastfeeding.settings.controllers')
    .controller('SettingsController', SettingsController);

  SettingsController.$inject = ['$scope', 'Children', 'Messages'];

  /**
  * @namespace SettingsController
  */
  function SettingsController($scope, Children, Messages) {
    var vm = this;

    vm.children = [];

    activate();

    /**
     * @name activate
     * @desc Actions to be performed when this controller is instantiated
     * @memberOf breastfeeding.settings.controllers.SettingsController
     */
    function activate() {
      Children.all().then(childrenSuccessFn, childrenErrorFn);

            /**
      * @name childrenSuccessFn
      * @desc Update children array on view
      */
      function childrenSuccessFn(data, status, headers, config) {
        vm.children = data.data;
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