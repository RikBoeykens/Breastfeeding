/**
* Elapsed
* @namespace breastfeeding.utils.filters
*/
(function () {
  'use strict';

  angular
    .module('breastfeeding.utils.filters')
    .filter('elapsed', elapsed);

  /**
  * @namespace elapsed
  */
  function elapsed($filter) {
    return function(date, suppliedToDate){
        if (!date) return;
        var toDate = new Date();
        if(suppliedToDate){
          toDate = Date.parse(suppliedToDate);
        }
        var time = Date.parse(date),
            difference = toDate - time;

        // Seconds (e.g. 32s)
        difference /= 1000;
        if (difference < 60) return Math.floor(difference)+'s' + (suppliedToDate ? '' : ' ago');

        // Minutes (e.g. 12m)
        difference /= 60;
        if (difference < 60) return Math.floor(difference)+'m' + (suppliedToDate ? '' : ' ago');

        // Hours (e.g. 5h)
        difference /= 60;
        if (difference < 24 || suppliedToDate) return Math.floor(difference)+'h' + (suppliedToDate ? '' : ' ago');

        // Date (e.g. Dec 2)
        return $filter('date')(time, 'MMM d');
    };
  }
})($);