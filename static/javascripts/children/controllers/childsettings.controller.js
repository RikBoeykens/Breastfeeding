/**
* Child Settings controller
* @namespace breastfeeding.children.controllers
*/
(function () {
  'use strict';

  angular
    .module('breastfeeding.children.controllers')
    .controller('ChildSettingsController', ChildSettingsController);

  ChildSettingsController.$inject = ['$scope', '$location', '$routeParams', 'Children', 'Messages'];

  /**
  * @namespace ChildSettingsController
  */
  function ChildSettingsController($scope, $location, $routeParams, Children, Messages) {
    var vm = this;

    activate();

    vm.remove = remove;

    /**
     * @name activate
     * @desc Actions to be performed when this controller is instantiated
     * @memberOf breastfeeding.children.controllers.ChildSettingsController
     */
    function activate() {

      getChild();

    }


    /**
     * @name getChild
     * @desc Retrieves child details from the Children service
     * @memberOf breastfeeding.children.controllers.ChildSettingsController
     */
    function getChild(){
      Children.get($routeParams.id).then(getSuccessFn, getErrorFn);

      function getSuccessFn(data){
        vm.child = data.data;
      }

      function getErrorFn(data){
        Messages.error(data.error);
      }
    }


    /**
     * @name remove
     * @desc Removes a child
     * @memberOf breastfeeding.children.controllers.ChildSettingsController
     */
    function remove(){
      Children.remove(vm.child.id).then(removeSuccessFn, removeErrorFn);

      function removeSuccessFn(data){
        $location.url('/settings');
      }

      function removeErrorFn(data){
        Messages.error(data.error);
      }
    }

  }
})();