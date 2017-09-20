'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _reactRedux = require('react-redux');

var _recompose = require('recompose');

var _store = require('../src/store');

var _store2 = _interopRequireDefault(_store);

var _pwForget = require('./pw-forget');

var _App = require('../src/components/App');

var _PasswordChange = require('../src/components/PasswordChange');

var _PasswordChange2 = _interopRequireDefault(_PasswordChange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mydspr/Developer/Repos/nextjs-redux-firebase-authentication/pages/account.js?entry';


var AccountPage = function AccountPage(_ref) {
  var authUser = _ref.authUser;
  return _react2.default.createElement(_App.AppWithAuthorization, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'Account: ', authUser.email), _react2.default.createElement(_pwForget.PasswordForgetForm, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement(_PasswordChange2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    authUser: state.sessionState.authUser
  };
};

exports.default = (0, _recompose.compose)((0, _nextReduxWrapper2.default)(_store2.default), (0, _reactRedux.connect)(mapStateToProps))(AccountPage);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FjY291bnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJ3aXRoUmVkdXgiLCJjb25uZWN0IiwiY29tcG9zZSIsImluaXRTdG9yZSIsIlBhc3N3b3JkRm9yZ2V0Rm9ybSIsIkFwcFdpdGhBdXRob3JpemF0aW9uIiwiUGFzc3dvcmRDaGFuZ2VGb3JtIiwiQWNjb3VudFBhZ2UiLCJhdXRoVXNlciIsImVtYWlsIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJzZXNzaW9uU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFTOztBQUVULEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQVM7O0FBQ1QsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxjQUFjLFNBQWQsQUFBYyxrQkFBQTtNQUFBLEFBQUcsZ0JBQUgsQUFBRzt5QkFDckIsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FBYyxzQkFEaEIsQUFDRSxBQUF1QixBQUN2Qix3QkFBQSxBQUFDOztnQkFBRDtrQkFGRixBQUVFLEFBQ0E7QUFEQTtBQUFBLHNCQUNBLEFBQUM7O2dCQUFEO2tCQUpnQixBQUNsQixBQUdFO0FBQUE7QUFBQTtBQUpKOztBQU9BLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLGdCQUFBLEFBQUMsT0FBRDs7Y0FDWixNQUFBLEFBQU0sYUFETSxBQUFZLEFBQ0w7QUFESyxBQUNsQztBQURGLEFBSUE7O2tCQUFlLHdCQUFBLEFBQ2IsQUFBVSxrREFDVix5QkFGYSxBQUViLEFBQVEsa0JBRlYsQUFBZSxBQUdiIiwiZmlsZSI6ImFjY291bnQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL215ZHNwci9EZXZlbG9wZXIvUmVwb3MvbmV4dGpzLXJlZHV4LWZpcmViYXNlLWF1dGhlbnRpY2F0aW9uIn0=