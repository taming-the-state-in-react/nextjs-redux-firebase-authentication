'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = {
  users: []
};

var applySetUsers = function applySetUsers(state, action) {
  return (0, _extends3.default)({}, state, {
    users: action.users
  });
};

function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case 'USERS_SET':
      {
        return applySetUsers(state, action);
      }
    default:
      return state;
  }
}

exports.default = userReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZWR1Y2Vycy91c2VyLmpzIl0sIm5hbWVzIjpbIklOSVRJQUxfU1RBVEUiLCJ1c2VycyIsImFwcGx5U2V0VXNlcnMiLCJzdGF0ZSIsImFjdGlvbiIsInVzZXJSZWR1Y2VyIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTTtTQUFOLEFBQXNCLEFBQ2I7QUFEYSxBQUNwQjs7QUFHRixJQUFNLGdCQUFnQixTQUFoQixBQUFnQixjQUFBLEFBQUMsT0FBRCxBQUFRLFFBQVI7b0NBQUEsQUFDakI7V0FDSSxPQUZhLEFBRU47QUFBZDtBQUZGOztBQUtBLFNBQUEsQUFBUyxjQUEyQztNQUEvQixBQUErQiw0RUFBdkIsQUFBdUI7TUFBUixBQUFRLG1CQUNsRDs7VUFBTyxPQUFQLEFBQWMsQUFDWjtTQUFBLEFBQUssQUFBYztBQUNqQjtlQUFPLGNBQUEsQUFBYyxPQUFyQixBQUFPLEFBQXFCLEFBQzdCO0FBQ0Q7QUFBVTthQUpaLEFBSVksQUFBTyxBQUVwQjs7QUFFRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJ1c2VyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9teWRzcHIvRGV2ZWxvcGVyL1JlcG9zL25leHRqcy1yZWR1eC1maXJlYmFzZS1hdXRoZW50aWNhdGlvbiJ9