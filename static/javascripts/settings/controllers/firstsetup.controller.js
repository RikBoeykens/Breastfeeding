/**
* Add Child controller
* @namespace breastfeeding.settings.controllers
*/
(function () {
  'use strict';

  angular
    .module('breastfeeding.settings.controllers')
    .controller('FirstSetupController', FirstSetupController);

  FirstSetupController.$inject = ['$scope', '$location', 'Children', 'Messages'];

  /**
  * @namespace FirstSetupController
  */
  function FirstSetupController($scope, $location, Children, Messages) {
    var vm = this;

    activate();

    vm.addChild = addChild;

    /**
     * @name activate
     * @desc Actions to be performed when this controller is instantiated
     * @memberOf breastfeeding.settings.controllers.FirstSetupController
     */
    function activate() {
    }

    /**
     * @name addChild
     * @desc Adds a child to the user
     * @memberOf breastfeeding.settings.controllers.FirstSetupController
     */
    function addChild(){
      var newBirthDate = new Date(vm.birth_date);
      var dateString = newBirthDate.getFullYear()+'-'+(newBirthDate.getMonth()+1)+'-'+newBirthDate.getDate();
      Children.create(vm.name, dateString).then(addSuccessFn, addErrorFn);

      /**
       * Send to dashboard view
       */
      function addSuccessFn(){
        $location.url('/');
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