'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initStore = function initStore() {
  var store = (0, _redux.createStore)(_reducers2.default);

  return store;
};

exports.default = initStore;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdG9yZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsInJvb3RSZWR1Y2VyIiwiaW5pdFN0b3JlIiwic3RvcmUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQVMsQUFBVDs7QUFDQSxBQUFPLEFBQVA7Ozs7OztBQUVBLElBQU0sWUFBWSxTQUFaLEFBQVksWUFBTSxBQUN0QjtNQUFNLFFBQVEsQUFBWSxBQUFaLEFBQWQsQUFFQTs7U0FBTyxBQUFQLEFBQ0Q7QUFKRCxBQU1BOztrQkFBZSxBQUFmIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9teWRzcHIvRGV2ZWxvcGVyL1JlcG9zL25leHRqcy1yZWR1eC1maXJlYmFzZS1hdXRoZW50aWNhdGlvbiJ9