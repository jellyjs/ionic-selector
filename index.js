'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = ionicSelector;
function ionicSelector(selector) {
  var app = document.querySelector(selector || 'app');
  var ionApp = document.createElement('ion-app');

  app.attributes.map(function (attr) {
    ionApp.setAttribute(attr.name, attr.value);
  });

  document.body.replaceChild(ionApp, app);
}
