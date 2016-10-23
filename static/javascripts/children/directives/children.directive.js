/**
* Children
* @namespace breastfeeding.children.directives
*/
(function () {
  'use strict';

  angular
    .module('breastfeeding.children.directives')
    .directive('children', children);

  /**
  * @namespace Children
  */
  function children() {
    /**
    * @name directive
    * @desc The directive to be returned
    * @memberOf breastfeeding.children.directives.Children
    */
    var directive = {
      restrict: 'E',
      scope: {
        children: '='
      },
      templateUrl: '/static/templates/children/children.html'
    };

    return directive;
  }
})();