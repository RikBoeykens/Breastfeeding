/**
* Add Child controller
* @namespace breastfeeding.children.controllers
*/
(function () {
  'use strict';

  angular
    .module('breastfeeding.children.controllers')
    .controller('EditChildController', EditChildController);

  EditChildController.$inject = ['$scope', '$location', '$routeParams', 'Children', 'Messages'];

  /**
  * @namespace EditChildController
  */
  function EditChildController($scope, $location, $routeParams, Children, Messages) {
    var vm = this;

    activate();

    vm.updateChild = updateChild;

    /**
     * @name activate
     * @desc Actions to be performed when this controller is instantiated
     * @memberOf breastfeeding.children.controllers.EditChildController
     */
    function activate() {

      getChild();

    }

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
     * @name updateChild
     * @desc Updates a child
     * @memberOf breastfeeding.children.controllers.EditChildController
     */
    function updateChild(){
      var newBirthDate = new Date(vm.child.birth_date);
      var dateString = newBirthDate.getFullYear()+'-'+(newBirthDate.getMonth()+1)+'-'+newBirthDate.getDate();
      Children.update(vm.child.id, vm.child.name, dateString, vm.child.is_active).then(updateSuccessFn, updateErrorFn);

      /**
       * Send back to settings view
       */
      function updateSuccessFn(){
        $location.url('/settings/');
      }

      /**
       * Show error
       */
      function updateErrorFn(data){
        Messages.error(data.error);
        getChild();
      }
    }
  }
})();