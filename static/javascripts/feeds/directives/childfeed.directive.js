/**
* childfeed
* @namespace breastfeeding.feedds.directives
*/
(function () {
  'use strict';

  angular
    .module('breastfeeding.feeds.directives')
    .directive('childfeed', childfeed);

  /**
  * @namespace childfeed
  */
  function childfeed() {
    /**
    * @name directive
    * @desc The directive to be returned
    * @memberOf breastfeeding.feeds.directives.childfeed
    */
    var directive = {
      restrict: 'E',
      scope: {
        child: '='
      },
      controller: 'ChildFeedController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/feeds/childfeed.html'
    };

    return directive;
  }
})();