/**
* Time difference
* @namespace breastfeeding.utils.filters
*/
(function () {
  'use strict';

  angular
    .module('breastfeeding.utils.filters')
    .filter('timediff', timediff);

  /**
  * @namespace timediff
  */
  function timediff($filter) {
    return function(date, suppliedToDate){
        if (!date || !suppliedToDate) return;

        var toDate = Date.parse(suppliedToDate);

        var time = Date.parse(date),
            difference = toDate - time;

        // Seconds (e.g. 32s)
        difference /= 1000;
        if (difference < 60) return Math.floor(difference)+'s';

        // Minutes (e.g. 12m)
        difference /= 60;
        if (difference < 60) return Math.floor(difference)+'m';

        // Hours (e.g. 5h)
        difference /= 60;
        if (difference < 24 || suppliedToDate) return Math.floor(difference)+'h';

        // Days
        difference /= 24;
        return Math.floor(difference)+'d';
    };
  }
})($);