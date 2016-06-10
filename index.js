'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = ionicSelector;
function ionicSelector(selector) {
  var app = document.querySelector(selector || 'app');
  var ionApp = document.createElement('ion-app');

  for (var x = 0; x < app.attributes.length; x++) {
    ionApp.setAttribute(app.attributes[x].name, app.attributes[x].value);
  }

  document.body.replaceChild(ionApp, app);
}
