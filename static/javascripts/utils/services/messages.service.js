/**
* Messages
* @namespace breastfeeding.utils.services
*/
(function ($) {
  'use strict';

  angular
    .module('breastfeeding.utils.services')
    .factory('Messages', Messages);

  /**
  * @namespace Messages
  */
  function Messages() {
    /**
    * @name Messages
    * @desc The factory to be returned
    */
    var Messages = {
      error: error,
      show: show
    };

    return Messages;

    ////////////////////

    /**
    * @name _message
    * @desc Display a message
    * @param {string} content The content of the message
    * @param {Object} options Options for displaying the snackbar
    */
    function _message(content, options) {
      options = $.extend({ timeout: 3000 }, options);

      Materialize.toast(content, options.timeout, options.class, options.callback);
    }


    /**
    * @name error
    * @desc Display an error message
    * @param {string} content The content of the message
    * @memberOf breastfeeding.utils.services.Messages
    */
    function error(content) {
      var options = {
        class: 'red'
      };
      _message(content, options);
    }


    /**
    * @name show
    * @desc Display a standard message
    * @param {string} content The content of the message
    * @param {Object} options Options for displaying the message
    * @memberOf breastfeeding.utils.services.Messages
    */
    function show(content, options) {
      _message(content, options);
    }
  }
})($);