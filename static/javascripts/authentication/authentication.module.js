(function () {
  'use strict';

  angular
    .module('breastfeeding.authentication', [
      'breastfeeding.authentication.controllers',
      'breastfeeding.authentication.services'
    ]);

  angular
    .module('breastfeeding.authentication.controllers', []);

  angular
    .module('breastfeeding.authentication.services', ['ngCookies']);
})();