'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppWithAuthorization = exports.AppWithAuthentication = undefined;

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _Navigation = require('../Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

var _withAuthentication = require('../Session/withAuthentication');

var _withAuthentication2 = _interopRequireDefault(_withAuthentication);

var _withAuthorization = require('../Session/withAuthorization');

var _withAuthorization2 = _interopRequireDefault(_withAuthorization);

var _routes = require('../../constants/routes');

var routes = _interopRequireWildcard(_routes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mydspr/Developer/Repos/nextjs-redux-firebase-authentication/src/components/App/index.js';


var App = function App(_ref) {
  var children = _ref.children;
  return _react2.default.createElement('div', { className: 'app', 'data-jsx': 3384430809,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_Navigation2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('hr', {
    'data-jsx': 3384430809,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), children, _react2.default.createElement('hr', {
    'data-jsx': 3384430809,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), _react2.default.createElement('span', {
    'data-jsx': 3384430809,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, 'Found in ', _react2.default.createElement('a', { href: 'https://roadtoreact.com/course-details?courseId=TAMING_THE_STATE', 'data-jsx': 3384430809,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, 'Taming the State in React')), ' | ', _react2.default.createElement('span', {
    'data-jsx': 3384430809,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, 'Star the ', _react2.default.createElement('a', { href: 'https://github.com/rwieruch/nextjs-redux-firebase-authentication', 'data-jsx': 3384430809,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, 'Repository')), ' | ', _react2.default.createElement('span', {
    'data-jsx': 3384430809,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, 'Receive a ', _react2.default.createElement('a', { href: 'https://www.getrevue.co/profile/rwieruch', 'data-jsx': 3384430809,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, 'Developer\'s Newsletter')), _react2.default.createElement(_style2.default, {
    styleId: 3384430809,
    css: '.app[data-jsx="3384430809"]{margin:20px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0FwcC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmdCLEFBR3FCLFlBQ2QiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvQXBwL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9teWRzcHIvRGV2ZWxvcGVyL1JlcG9zL25leHRqcy1yZWR1eC1maXJlYmFzZS1hdXRoZW50aWNhdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAncmVjb21wb3NlJztcblxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vTmF2aWdhdGlvbic7XG5pbXBvcnQgd2l0aEF1dGhlbnRpY2F0aW9uIGZyb20gJy4uL1Nlc3Npb24vd2l0aEF1dGhlbnRpY2F0aW9uJztcbmltcG9ydCB3aXRoQXV0aG9yaXphdGlvbiBmcm9tICcuLi9TZXNzaW9uL3dpdGhBdXRob3JpemF0aW9uJztcbmltcG9ydCAqIGFzIHJvdXRlcyBmcm9tICcuLi8uLi9jb25zdGFudHMvcm91dGVzJztcblxuY29uc3QgQXBwID0gKHsgY2hpbGRyZW4gfSkgPT5cbiAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cbiAgICA8TmF2aWdhdGlvbiAvPlxuXG4gICAgPGhyLz5cblxuICAgIHtjaGlsZHJlbn1cblxuICAgIDxoci8+XG5cbiAgICA8c3Bhbj5Gb3VuZCBpbiA8YSBocmVmPVwiaHR0cHM6Ly9yb2FkdG9yZWFjdC5jb20vY291cnNlLWRldGFpbHM/Y291cnNlSWQ9VEFNSU5HX1RIRV9TVEFURVwiPlRhbWluZyB0aGUgU3RhdGUgaW4gUmVhY3Q8L2E+PC9zcGFuPiB8IDxzcGFuPlN0YXIgdGhlIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcndpZXJ1Y2gvbmV4dGpzLXJlZHV4LWZpcmViYXNlLWF1dGhlbnRpY2F0aW9uXCI+UmVwb3NpdG9yeTwvYT48L3NwYW4+IHwgPHNwYW4+UmVjZWl2ZSBhIDxhIGhyZWY9XCJodHRwczovL3d3dy5nZXRyZXZ1ZS5jby9wcm9maWxlL3J3aWVydWNoXCI+RGV2ZWxvcGVyJ3MgTmV3c2xldHRlcjwvYT48L3NwYW4+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuYXBwIHtcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG5cbmNvbnN0IEFwcFdpdGhBdXRoZW50aWNhdGlvbiA9IGNvbXBvc2UoXG4gIHdpdGhBdXRoZW50aWNhdGlvbixcbiAgd2l0aEF1dGhvcml6YXRpb24oZmFsc2UpLFxuKShBcHApO1xuXG5jb25zdCBBcHBXaXRoQXV0aG9yaXphdGlvbiA9IGNvbXBvc2UoXG4gIHdpdGhBdXRoZW50aWNhdGlvbixcbiAgd2l0aEF1dGhvcml6YXRpb24odHJ1ZSksXG4pKEFwcCk7XG5cbmV4cG9ydCB7XG4gIEFwcFdpdGhBdXRoZW50aWNhdGlvbixcbiAgQXBwV2l0aEF1dGhvcml6YXRpb24sXG59O1xuIl19 */\n/*@ sourceURL=src/components/App/index.js */'
  }));
};

var AppWithAuthentication = (0, _recompose.compose)(_withAuthentication2.default, (0, _withAuthorization2.default)(false))(App);

var AppWithAuthorization = (0, _recompose.compose)(_withAuthentication2.default, (0, _withAuthorization2.default)(true))(App);

exports.AppWithAuthentication = AppWithAuthentication;
exports.AppWithAuthorization = AppWithAuthorization;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0FwcC9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbXBvc2UiLCJOYXZpZ2F0aW9uIiwid2l0aEF1dGhlbnRpY2F0aW9uIiwid2l0aEF1dGhvcml6YXRpb24iLCJyb3V0ZXMiLCJBcHAiLCJjaGlsZHJlbiIsIkFwcFdpdGhBdXRoZW50aWNhdGlvbiIsIkFwcFdpdGhBdXRob3JpemF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTOztBQUVULEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87O0lBQVAsQUFBWTs7Ozs7Ozs7O0FBRVosSUFBTSxNQUFNLFNBQU4sQUFBTSxVQUFBO01BQUEsQUFBRyxnQkFBSCxBQUFHO3lCQUNiLGNBQUEsU0FBSyxXQUFMLEFBQWUsbUJBQWY7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQURGLEFBQ0UsQUFFQTtBQUZBO0FBQUE7Z0JBRUE7O2dCQUFBO2tCQUhGLEFBR0UsQUFFQztBQUZEO0FBQUEsTUFIRixBQU9FO2dCQUFBOztnQkFBQTtrQkFQRixBQU9FLEFBRUE7QUFGQTtBQUFBLHNCQUVBLGNBQUE7Z0JBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUFlLDZCQUFBLGNBQUEsT0FBRyxNQUFILEFBQVEsZ0ZBQVI7O2dCQUFBO2tCQUFBO0FBQUE7S0FUakIsQUFTRSxBQUFlLCtCQUFrSCx1QkFBQSxjQUFBO2dCQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FBZSw2QkFBQSxjQUFBLE9BQUcsTUFBSCxBQUFRLGdGQUFSOztnQkFBQTtrQkFBQTtBQUFBO0tBVGxKLEFBU21JLEFBQWUsZ0JBQW1HLHVCQUFBLGNBQUE7Z0JBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUFnQiw4QkFBQSxjQUFBLE9BQUcsTUFBSCxBQUFRLHdEQUFSOztnQkFBQTtrQkFBQTtBQUFBO0tBVHJRLEFBU3FQLEFBQWdCO2FBVHJRO1NBRFUsQUFDVjtBQUFBO0FBREY7O0FBbUJBLElBQU0sd0JBQXdCLEFBQzVCLHNEQUNBLGlDQUY0QixBQUU1QixBQUFrQixRQUZwQixBQUE4QixBQUc1Qjs7QUFFRixJQUFNLHVCQUF1QixBQUMzQixzREFDQSxpQ0FGMkIsQUFFM0IsQUFBa0IsT0FGcEIsQUFBNkIsQUFHM0IsQUFFRjs7UUFBQSxBQUNFO1FBREYsQUFFRSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbXlkc3ByL0RldmVsb3Blci9SZXBvcy9uZXh0anMtcmVkdXgtZmlyZWJhc2UtYXV0aGVudGljYXRpb24ifQ==