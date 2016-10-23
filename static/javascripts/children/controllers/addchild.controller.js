/**
* Add Child controller
* @namespace breastfeeding.children.controllers
*/
(function () {
  'use strict';

  angular
    .module('breastfeeding.children.controllers')
    .controller('AddChildController', AddChildController);

  AddChildController.$inject = ['$scope', '$location', 'Children', 'Messages'];

  /**
  * @namespace AddChildController
  */
  function AddChildController($scope, $location, Children, Messages) {
    var vm = this;

    activate();

    vm.addChild = addChild;

    /**
     * @name activate
     * @desc Actions to be performed when this controller is instantiated
     * @memberOf breastfeeding.children.controllers.AddChildController
     */
    function activate() {
    }

    /**
     * @name addChild
     * @desc Adds a child to the user
     * @memberOf breastfeeding.children.controllers.AddChildController
     */
    function addChild(){
      var newBirthDate = new Date(vm.birth_date);
      var dateString = newBirthDate.getFullYear()+'-'+(newBirthDate.getMonth()+1)+'-'+newBirthDate.getDate();
      Children.create(vm.name, dateString).then(addSuccessFn, addErrorFn);

      /**
       * Send back to settings view
       */
      function addSuccessFn(){
        $location.url('/settings');
      }

      /**
       * Show error
       */
      function addErrorFn(data){
        Messages.error(data.error);
      }
    }
  }
})();