'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // TODO: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.initAboutPage = function() {
    $('.tab-content').hide();
    $('#about').fadeIn(150);
  }
  module.aboutController = aboutController;
})(app);
