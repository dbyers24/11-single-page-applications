'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // TODO: Define a function that hides all main section elements, and then reveals just the #about section:
  app.aboutController.initAboutPage = function() {
    app.Article.all.forEach(a => $('#articles').append(a.toHtml()));
  }
  module.aboutController = aboutController;
})(app);
