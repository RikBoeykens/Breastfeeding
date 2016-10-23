(function () {
  'use strict';

  angular
    .module('breastfeeding', [
      'breastfeeding.routes',
      'breastfeeding.config',
      'breastfeeding.authentication',
      'breastfeeding.layout',
      'breastfeeding.settings',
      'breastfeeding.children',
      'breastfeeding.feeds',
      'breastfeeding.utils',
      'breastfeeding.dashboard',
      'ui.materialize'
    ])
    .run(run);

  angular
    .module('breastfeeding.routes', ['ngRoute']);

  angular
    .module('breastfeeding.config', []);

  angular
    .module('breastfeeding')
    .run(run);

  run.$inject = ['$http'];

  /**
  * @name run
  * @desc Update xsrf $http headers to align with Django's defaults
  */
  function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
  }
})();