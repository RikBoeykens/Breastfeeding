(function () {
  'use strict';

  angular
    .module('breastfeeding.routes')
    .config(config);

  config.$inject = ['$routeProvider'];

  /**
  * @name config
  * @desc Define valid application routes
  */
  function config($routeProvider) {
    $routeProvider.when('/register', {
      controller: 'RegisterController', 
      controllerAs: 'vm',
      templateUrl: '/static/templates/authentication/register.html'
    }).when('/login', {
      controller: 'LoginController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/authentication/login.html'
    }).when('/firstsetup', {
      controller: 'FirstSetupController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/settings/firstsetup.html'
    }).when('/settings', {
      controller: 'SettingsController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/settings/settings.html'
    }).when('/addchild', {
      controller: 'AddChildController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/children/addchild.html'
    }).when('/editchild/:id', {
      controller: 'EditChildController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/children/editchild.html'
    }).when('/feeds', {
      controller: 'FeedsController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/feeds/feeds.html'
    }).when('/addfeed', {
      controller: 'AddFeedController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/feeds/addfeed.html'
    }).when('/', {
      controller: 'DashboardController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/dashboard/index.html'
    }).otherwise('/');
  }
})();