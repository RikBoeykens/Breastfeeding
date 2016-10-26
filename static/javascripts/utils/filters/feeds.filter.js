/**
* Feeds
* @namespace breastfeeding.utils.filters
*/
(function () {
  'use strict';

  angular
    .module('breastfeeding.utils.filters')
    .filter('feeds', feeds);

  /**
  * @namespace feeds
  */
  function feeds($filter) {
    return function(feeds, children){

      var filtered = [];
      
      angular.forEach(feeds, function(feed) {
        angular.forEach(children, function(child){
          if(feed.child.id===child.id) filtered.push(feed);
        });
      });

      return filtered;
    };
  }
})($);