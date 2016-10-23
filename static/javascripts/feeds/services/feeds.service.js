/**
* Feeds
* @namespace breastfeeding.feeds.services
*/
(function () {
  'use strict';

  angular
    .module('breastfeeding.feeds.services')
    .factory('Feeds', Feeds);

  Feeds.$inject = ['$http'];

  /**
  * @namespace Feeds
  * @returns {Factory}
  */
  function Feeds($http) {
    var Feeds = {
      childAll: childAll,
      all: all,
      create: create,
      update: update,
      get: get,
      remove: remove,
      startFeed: startFeed,
      endFeed: endFeed
    };

    return Feeds;

    ////////////////////

    /**
    * @name childAll
    * @desc Get all Feeds for a child
    * @returns {Promise}
    * @memberOf breastfeeding.feeds.services.Feeds
    */
    function childAll(child_id) {
      return $http.get('/api/v1/children/' + child_id + '/feeds/');
    }

    /**
    * @name all
    * @desc Get all Feeds
    * @returns {Promise}
    * @memberOf breastfeeding.feeds.services.Feeds
    */
    function all() {
      return $http.get('/api/v1/feeds/');
    }


    /**
    * @name create
    * @desc Create a new Feed
    * @param {number} child_id The id of the associated child
    * @param {date} start_time Start time of the Feed
    * @param {date} end_time End time of the Feed
    * @returns {Promise}
    * @memberOf breastfeeding.feeds.services.Feeds
    */
    function create(child_id, start_time, end_time, right_side) {
      return $http.post('/api/v1/feeds/', {
        child_id: child_id,
        start_time: start_time,
        end_time: end_time,
        right_side: right_side,
      });
    }


    /**
    * @name create
    * @desc Update a Feed
    * @param {number} id The id of the Feed
    * @param {date} start_time Start time of the Feed
    * @param {date} end_time End time of the Feed
    * @returns {Promise}
    * @memberOf breastfeeding.feeds.services.Feeds
    */
    function update(id, start_time, end_time, right_side) {
      return $http.put('/api/v1/feeds/' + id + '/', {
        id: id,
        start_time: start_time,
        end_time: end_time,
        right_side: right_side,
      });
    }

    /**
     * @name get
     * @desc Get a specific Feed
     * @param {number} id The id of the Feed
     * @returns {Promise}
     * @memberOf breastfeeding.feeds.services.Feeds
     */
    function get(id) {
      return $http.get('/api/v1/feeds/' + id + '/');
    }

    /**
     * @name remove
     * @desc Remove a specific Feed
     * @param {number} id The id of the Feed
     * @returns {Promise}
     * @memberOf breastfeeding.feeds.services.Feeds
     */
    function remove(id) {
      return $http.delete('/api/v1/feeds/' + id + '/');
    }

    /**
     * @name startFeed
     * @desc Start a new Feed
     * @param {number} child_id The id of the Child the feed should be started for
     * @returns {Promise}
     * @memberOf breastfeeding.feeds.services.Feeds
     */
    function startFeed(child_id, right_side) {
      return $http.post('/api/v1/feed/start/', {
        child_id: child_id,
        right_side: right_side,
      });
    }


    /**
     * @name endFeed
     * @desc End a Feed
     * @param {number} feed_id The id of the Feed that should be ended
     * @returns {Promise}
     * @memberOf breastfeeding.feeds.services.Feeds
     */
    function endFeed(feed_id) {
      return $http.post('/api/v1/feed/end/', {
        feed_id: feed_id
      });
    }
  }
})();