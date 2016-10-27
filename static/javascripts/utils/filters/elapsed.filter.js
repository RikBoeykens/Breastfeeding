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
    return function(date, format){
      if (!date) return;

      if(format==='short')
        return shortElapsed(date);

      return longElapsed(date);
    };
    function shortElapsed(date){
      var toDate = new Date();

      var time = Date.parse(date),
          difference = toDate - time;

      // Seconds (e.g. 32s)
      difference /= 1000;
      if (difference < 60) return 'just now';

      // Minutes (e.g. 12m)
      difference /= 60;
      if (difference < 60) return Math.floor(difference)+'m ago';

      // Hours (e.g. 5h)
      difference /= 60;
      if (difference < 24) return Math.floor(difference)+'h ago';

      // Date (e.g. Dec 2)
      return $filter('date')(time, 'MMM d');
    }

    function longElapsed(date){
      var toDate = new Date();

      var time = Date.parse(date),
          difference = toDate - time;

      // Seconds (e.g. 32s)
      difference /= 1000;
      // Minutes (e.g. 12m)
      difference /= 60;
      // Hours (e.g. 5h)
      difference /= 60;
      if (difference < 1) return 'Less than one hour ago';
      if (difference < 6) return 'Less than six hours ago';

      // today
      var dayDiff = new Date().setHours(0,0,0);
      if(time > dayDiff) return 'Today';
      // yesterday
      dayDiff = addDays(dayDiff, -1);
      if(time > dayDiff) return 'Yesterday';
      // last seven days
      dayDiff = addDays(dayDiff, -6);
      if(time > dayDiff) return 'Last seven days';

      // this month
      var monthDiff = new Date();
      monthDiff.setFullYear(monthDiff.getFullYear(), monthDiff.getMonth(), 0);
      if (time > monthDiff) return 'This month';
      // last month
      monthDiff = addMonths(monthDiff, -1);
      if(time > monthDiff) return 'Previous month';
      // more than 2 months
      return '+ 2 months ago';
    }
  }
  function addDays(date, days){
    var dat = new Date(date);
    dat.setDate(dat.getDate() + days);
    return dat;
  }
  function addMonths(date, months){
    var dat = new Date(date);
    dat.setMonth(dat.getDate() + months);
    return dat;
  }
})($);