'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _session = require('./session');

var _session2 = _interopRequireDefault(_session);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  sessionState: _session2.default,
  userState: _user2.default
});

exports.default = rootReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZWR1Y2Vycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb21iaW5lUmVkdWNlcnMiLCJzZXNzaW9uUmVkdWNlciIsInVzZXJSZWR1Y2VyIiwicm9vdFJlZHVjZXIiLCJzZXNzaW9uU3RhdGUiLCJ1c2VyU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQU87Ozs7OztBQUVQLElBQU07QUFBOEIsQUFDcEIsQUFDZDtBQUZGLEFBQW9CLEFBQWdCLEFBRXZCLEFBR2I7QUFMb0MsQUFDbEMsQ0FEa0I7O2tCQUtwQixBQUFlIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9teWRzcHIvRGV2ZWxvcGVyL1JlcG9zL25leHRqcy1yZWR1eC1maXJlYmFzZS1hdXRoZW50aWNhdGlvbiJ9