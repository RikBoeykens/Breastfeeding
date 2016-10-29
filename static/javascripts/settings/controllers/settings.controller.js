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

    vm.remove = remove;

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

    /**
     * @name remove
     * @desc Removes a child
     * @memberOf breastfeeding.children.controllers.SettingsController
     */
    function remove(child){
      Children.remove(child.id).then(removeSuccessFn, removeErrorFn);
      vm.children.splice(vm.children.indexOf(child), 1);

      function removeSuccessFn(data){
        Messages.show("Successfully removed child.");
      }

      function removeErrorFn(data){
        Messages.error(data.error);
      }
    }
  }
})();