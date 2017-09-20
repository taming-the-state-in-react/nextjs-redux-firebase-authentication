'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = {
  authUser: null
};

var applySetAuthUser = function applySetAuthUser(state, action) {
  return (0, _extends3.default)({}, state, {
    authUser: action.authUser
  });
};

function sessionReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case 'AUTH_USER_SET':
      {
        return applySetAuthUser(state, action);
      }
    default:
      return state;
  }
}

exports.default = sessionReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZWR1Y2Vycy9zZXNzaW9uLmpzIl0sIm5hbWVzIjpbIklOSVRJQUxfU1RBVEUiLCJhdXRoVXNlciIsImFwcGx5U2V0QXV0aFVzZXIiLCJzdGF0ZSIsImFjdGlvbiIsInNlc3Npb25SZWR1Y2VyIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTTtZQUFOLEFBQXNCLEFBQ1Y7QUFEVSxBQUNwQjs7QUFHRixJQUFNLG1CQUFtQixTQUFuQixBQUFtQixpQkFBQSxBQUFDLE9BQUQsQUFBUSxRQUFSO29DQUFBLEFBQ3BCO2NBQ08sT0FGYSxBQUVOO0FBQWpCO0FBRkY7O0FBS0EsU0FBQSxBQUFTLGlCQUE4QztNQUEvQixBQUErQiw0RUFBdkIsQUFBdUI7TUFBUixBQUFRLG1CQUNyRDs7VUFBTyxPQUFQLEFBQWMsQUFDWjtTQUFBLEFBQUssQUFBa0I7QUFDckI7ZUFBTyxpQkFBQSxBQUFpQixPQUF4QixBQUFPLEFBQXdCLEFBQ2hDO0FBQ0Q7QUFBVTthQUpaLEFBSVksQUFBTyxBQUVwQjs7QUFFRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJzZXNzaW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9teWRzcHIvRGV2ZWxvcGVyL1JlcG9zL25leHRqcy1yZWR1eC1maXJlYmFzZS1hdXRoZW50aWNhdGlvbiJ9