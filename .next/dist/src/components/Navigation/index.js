'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactRedux = require('react-redux');

var _routes = require('../../constants/routes');

var routes = _interopRequireWildcard(_routes);

var _SignOut = require('../SignOut');

var _SignOut2 = _interopRequireDefault(_SignOut);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mydspr/Developer/Repos/nextjs-redux-firebase-authentication/src/components/Navigation/index.js';


var Navigation = function Navigation(_ref) {
  var authUser = _ref.authUser;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, authUser ? _react2.default.createElement(NavigationAuth, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }) : _react2.default.createElement(NavigationNonAuth, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }));
};

var NavigationAuth = function NavigationAuth() {
  return _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement(_link2.default, { href: routes.LANDING, __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, 'Landing'))), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement(_link2.default, { href: routes.HOME, __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, 'Home'))), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement(_link2.default, { href: routes.ACCOUNT, __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, 'Account'))), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement(_SignOut2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  })));
};

var NavigationNonAuth = function NavigationNonAuth() {
  return _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement(_link2.default, { href: routes.LANDING, __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, 'Landing'))), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement(_link2.default, { href: routes.SIGN_IN, __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, 'Sign In'))));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    authUser: state.sessionState.authUser
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Navigation);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL05hdmlnYXRpb24vaW5kZXguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiY29ubmVjdCIsInJvdXRlcyIsIlNpZ25PdXRCdXR0b24iLCJOYXZpZ2F0aW9uIiwiYXV0aFVzZXIiLCJOYXZpZ2F0aW9uQXV0aCIsIkxBTkRJTkciLCJIT01FIiwiQUNDT1VOVCIsIk5hdmlnYXRpb25Ob25BdXRoIiwiU0lHTl9JTiIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwic2Vzc2lvblN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVM7O0FBRVQsQUFBTzs7SUFBUCxBQUFZOztBQUNaLEFBQU87Ozs7Ozs7Ozs7O0FBRVAsSUFBTSxhQUFhLFNBQWIsQUFBYSxpQkFBQTtNQUFBLEFBQUcsZ0JBQUgsQUFBRzt5QkFDcEIsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDSTtBQURKO0FBQUEsR0FBQSwyQ0FFUSxBQUFDOztnQkFBRDtrQkFESixBQUNJO0FBQUE7QUFBQSxHQUFBLGtDQUNBLEFBQUM7O2dCQUFEO2tCQUpTLEFBQ2pCLEFBR1E7QUFBQTtBQUFBLEdBQUE7QUFKVjs7QUFRQSxJQUFNLGlCQUFpQixTQUFqQixBQUFpQixpQkFBQTt5QkFDckIsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUFJO0FBQUo7QUFBQSxxQkFBSSxBQUFDLGdDQUFLLE1BQU0sT0FBWixBQUFtQjtnQkFBbkI7a0JBQUEsQUFBNEI7QUFBNUI7cUJBQTRCLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURsQyxBQUNFLEFBQUksQUFBNEIsQUFDaEMsOEJBQUEsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBSTtBQUFKO0FBQUEscUJBQUksQUFBQyxnQ0FBSyxNQUFNLE9BQVosQUFBbUI7Z0JBQW5CO2tCQUFBLEFBQXlCO0FBQXpCO3FCQUF5QixjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FGL0IsQUFFRSxBQUFJLEFBQXlCLEFBQzdCLDJCQUFBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQUk7QUFBSjtBQUFBLHFCQUFJLEFBQUMsZ0NBQUssTUFBTSxPQUFaLEFBQW1CO2dCQUFuQjtrQkFBQSxBQUE0QjtBQUE1QjtxQkFBNEIsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBSGxDLEFBR0UsQUFBSSxBQUE0QixBQUNoQyw4QkFBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUFJO0FBQUo7QUFBQSxxQkFBSSxBQUFDOztnQkFBRDtrQkFMZSxBQUNyQixBQUlFLEFBQUk7QUFBQTtBQUFBO0FBTFI7O0FBUUEsSUFBTSxvQkFBb0IsU0FBcEIsQUFBb0Isb0JBQUE7eUJBQ3hCLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBSTtBQUFKO0FBQUEscUJBQUksQUFBQyxnQ0FBSyxNQUFNLE9BQVosQUFBbUI7Z0JBQW5CO2tCQUFBLEFBQTRCO0FBQTVCO3FCQUE0QixjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FEbEMsQUFDRSxBQUFJLEFBQTRCLEFBQ2hDLDhCQUFBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQUk7QUFBSjtBQUFBLHFCQUFJLEFBQUMsZ0NBQUssTUFBTSxPQUFaLEFBQW1CO2dCQUFuQjtrQkFBQSxBQUE0QjtBQUE1QjtxQkFBNEIsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBSFYsQUFDeEIsQUFFRSxBQUFJLEFBQTRCO0FBSHBDOztBQU1BLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLGdCQUFBLEFBQUMsT0FBRDs7Y0FDWixNQUFBLEFBQU0sYUFETSxBQUFZLEFBQ0w7QUFESyxBQUNsQztBQURGLEFBSUE7O2tCQUFlLHlCQUFBLEFBQVEsaUJBQXZCLEFBQWUsQUFBeUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL215ZHNwci9EZXZlbG9wZXIvUmVwb3MvbmV4dGpzLXJlZHV4LWZpcmViYXNlLWF1dGhlbnRpY2F0aW9uIn0=