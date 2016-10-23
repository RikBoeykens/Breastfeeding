/**
* Children
* @namespace breastfeeding.children.services
*/
(function () {
  'use strict';

  angular
    .module('breastfeeding.children.services')
    .factory('Children', Children);

  Children.$inject = ['$http'];

  /**
  * @namespace Children
  * @returns {Factory}
  */
  function Children($http) {
    var Children = {
      all: all,
      create: create,
      update: update,
      get: get,
      remove: remove
    };

    return Children;

    ////////////////////

    /**
    * @name all
    * @desc Get all Children
    * @returns {Promise}
    * @memberOf breastfeeding.children.services.Children
    */
    function all() {
      return $http.get('/api/v1/children/');
    }


    /**
    * @name create
    * @desc Create a new Child
    * @param {string} name The name of the new Child
    * @param {date} birth_date The birthdate of the new Child
    * @returns {Promise}
    * @memberOf breastfeeding.children.services.Children
    */
    function create(name, birth_date) {
      return $http.post('/api/v1/children/', {
        name: name,
        birth_date: birth_date
      });
    }


    /**
    * @name create
    * @desc Update a Child
    * @param {number} id The id of the Child
    * @param {string} name The name of the Child
    * @param {date} birth_date The birthdate of the Child
    * @param {bool} is_active If the child is active
    * @returns {Promise}
    * @memberOf breastfeeding.children.services.Children
    */
    function update(id, name, birth_date, is_active) {
      return $http.put('/api/v1/children/' + id + '/', {
        id: id,
        name: name,
        birth_date: birth_date,
        is_active: is_active
      });
    }

    /**
     * @name get
     * @desc Get a specific child
     * @param {number} id The id of the Child
     * @returns {Promise}
     * @memberOf breastfeeding.children.services.Children
     */
    function get(id) {
      return $http.get('/api/v1/children/' + id + '/');
    }

    /**
     * @name remove
     * @desc Remove a specific child
     * @param {number} id The id of the Child
     * @returns {Promise}
     * @memberOf breastfeeding.children.services.Children
     */
    function remove(id) {
      return $http.delete('/api/v1/children/' + id + '/');
    }
  }
})();