(function () {
  'use strict';

  angular
    .module('breastfeeding.children', [
      'breastfeeding.children.controllers',
      'breastfeeding.children.directives',
      'breastfeeding.children.services'
    ]);

  angular
    .module('breastfeeding.children.controllers', []);

  angular
    .module('breastfeeding.children.directives', ['ngDialog']);

  angular
    .module('breastfeeding.children.services', []);
})();