'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PasswordForgetLink = exports.PasswordForgetForm = undefined;

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _defineProperty2 = require('next/node_modules/babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = require('../src/store');

var _store2 = _interopRequireDefault(_store);

var _App = require('../src/components/App');

var _routes = require('../src/constants/routes');

var routes = _interopRequireWildcard(_routes);

var _firebase = require('../src/firebase');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mydspr/Developer/Repos/nextjs-redux-firebase-authentication/pages/pw-forget.js';


var PasswordForgetPage = function PasswordForgetPage() {
  return _react2.default.createElement(_App.AppWithAuthentication, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, 'PasswordForget'), _react2.default.createElement(PasswordForgetForm, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }));
};

var updateByPropertyName = function updateByPropertyName(propertyName, value) {
  return function () {
    return (0, _defineProperty3.default)({}, propertyName, value);
  };
};

var INITIAL_STATE = {
  email: '',
  error: null
};

var PasswordForgetForm = function (_Component) {
  (0, _inherits3.default)(PasswordForgetForm, _Component);

  function PasswordForgetForm(props) {
    (0, _classCallCheck3.default)(this, PasswordForgetForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PasswordForgetForm.__proto__ || (0, _getPrototypeOf2.default)(PasswordForgetForm)).call(this, props));

    _this.onSubmit = function (event) {
      var email = _this.state.email;

      _firebase.auth.doPasswordReset(email).then(function () {
        _this.setState(function () {
          return (0, _extends3.default)({}, INITIAL_STATE);
        });
      }).catch(function (error) {
        _this.setState(updateByPropertyName('error', error));
      });

      event.preventDefault();
    };

    _this.state = (0, _extends3.default)({}, INITIAL_STATE);
    return _this;
  }

  (0, _createClass3.default)(PasswordForgetForm, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          email = _state.email,
          error = _state.error;

      var isInvalid = email === '';

      return _react2.default.createElement('form', { onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement('input', {
        value: this.state.email,
        onChange: function onChange(event) {
          return _this2.setState(updateByPropertyName('email', event.target.value));
        },
        type: 'text',
        placeholder: 'Email Address',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), _react2.default.createElement('button', { disabled: isInvalid, type: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'Reset My Password'), error && _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, error.message));
    }
  }]);

  return PasswordForgetForm;
}(_react.Component);

var PasswordForgetLink = function PasswordForgetLink() {
  return _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, _react2.default.createElement(_link2.default, { href: routes.PASSWORD_FORGET, __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, 'Forgot Password?')));
};

exports.default = (0, _nextReduxWrapper2.default)(_store2.default)(PasswordForgetPage);
exports.PasswordForgetForm = PasswordForgetForm;
exports.PasswordForgetLink = PasswordForgetLink;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3B3LWZvcmdldC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxpbmsiLCJ3aXRoUmVkdXgiLCJpbml0U3RvcmUiLCJBcHBXaXRoQXV0aGVudGljYXRpb24iLCJyb3V0ZXMiLCJhdXRoIiwiUGFzc3dvcmRGb3JnZXRQYWdlIiwidXBkYXRlQnlQcm9wZXJ0eU5hbWUiLCJwcm9wZXJ0eU5hbWUiLCJ2YWx1ZSIsIklOSVRJQUxfU1RBVEUiLCJlbWFpbCIsImVycm9yIiwiUGFzc3dvcmRGb3JnZXRGb3JtIiwicHJvcHMiLCJvblN1Ym1pdCIsImV2ZW50Iiwic3RhdGUiLCJkb1Bhc3N3b3JkUmVzZXQiLCJ0aGVuIiwic2V0U3RhdGUiLCJjYXRjaCIsInByZXZlbnREZWZhdWx0IiwiaXNJbnZhbGlkIiwidGFyZ2V0IiwibWVzc2FnZSIsIlBhc3N3b3JkRm9yZ2V0TGluayIsIlBBU1NXT1JEX0ZPUkdFVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFFUCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFPOztJQUFQLEFBQVk7O0FBQ1osQUFBUzs7Ozs7Ozs7O0FBRVQsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIscUJBQUE7eUJBQ3pCLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBREYsQUFDRSxBQUNBLGlEQUFBLEFBQUM7O2dCQUFEO2tCQUh1QixBQUN6QixBQUVFO0FBQUE7QUFBQTtBQUhKOztBQU1BLElBQU0sdUJBQXVCLFNBQXZCLEFBQXVCLHFCQUFBLEFBQUMsY0FBRCxBQUFlLE9BQWY7U0FBeUIsWUFBQTs2Q0FBQSxBQUNuRCxjQURtRCxBQUNwQztBQURXO0FBQTdCOztBQUlBLElBQU07U0FBZ0IsQUFDYixBQUNQO1NBRkYsQUFBc0IsQUFFYjtBQUZhLEFBQ3BCOztJLEFBSUk7OENBQ0o7OzhCQUFBLEFBQVksT0FBTzt3Q0FBQTs7OEpBQUEsQUFDWDs7VUFEVyxBQU1uQixXQUFXLFVBQUEsQUFBQyxPQUFVO1VBQUEsQUFDWixRQUFVLE1BREUsQUFDRyxNQURILEFBQ1osQUFFUjs7cUJBQUEsQUFBSyxnQkFBTCxBQUFxQixPQUFyQixBQUNHLEtBQUssWUFBTSxBQUNWO2NBQUEsQUFBSyxTQUFTLFlBQUE7NENBQUEsQUFBWTtBQUExQixBQUNEO0FBSEgsU0FBQSxBQUlHLE1BQU0saUJBQVMsQUFDZDtjQUFBLEFBQUssU0FBUyxxQkFBQSxBQUFxQixTQUFuQyxBQUFjLEFBQThCLEFBQzdDO0FBTkgsQUFRQTs7WUFBQSxBQUFNLEFBQ1A7QUFsQmtCLEFBR2pCOztVQUFBLEFBQUssbUNBSFksQUFHakIsQUFBa0I7V0FDbkI7Ozs7OzZCQWdCUTttQkFBQTs7bUJBSUgsS0FKRyxBQUlFO1VBSkYsQUFFTCxlQUZLLEFBRUw7VUFGSyxBQUdMLGVBSEssQUFHTCxBQUdGOztVQUFNLFlBQVksVUFBbEIsQUFBNEIsQUFFNUI7OzZCQUNFLGNBQUEsVUFBTSxVQUFVLEtBQWhCLEFBQXFCO29CQUFyQjtzQkFBQSxBQUNFO0FBREY7T0FBQTtlQUVXLEtBQUEsQUFBSyxNQURkLEFBQ29CLEFBQ2xCO2tCQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxTQUFTLHFCQUFBLEFBQXFCLFNBQVMsTUFBQSxBQUFNLE9BQTNELEFBQVMsQUFBYyxBQUEyQztBQUY5RSxBQUdFO2NBSEYsQUFHTyxBQUNMO3FCQUpGLEFBSWM7O29CQUpkO3NCQURGLEFBQ0UsQUFNQTtBQU5BO0FBQ0UsMEJBS0YsY0FBQSxZQUFRLFVBQVIsQUFBa0IsV0FBVyxNQUE3QixBQUFrQztvQkFBbEM7c0JBQUE7QUFBQTtTQVBGLEFBT0UsQUFJRSwrQ0FBUyxjQUFBOztvQkFBQTtzQkFBQSxBQUFJO0FBQUo7QUFBQSxPQUFBLFFBWmYsQUFDRSxBQVdhLEFBQVUsQUFHMUI7Ozs7O0EsQUE1QzhCOztBQStDakMsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIscUJBQUE7eUJBQ3pCLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQyxnQ0FBSyxNQUFNLE9BQVosQUFBbUI7Z0JBQW5CO2tCQUFBLEFBQW9DO0FBQXBDO3FCQUFvQyxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FGYixBQUN6QixBQUNFLEFBQW9DO0FBRnhDLEFBS0E7O2tCQUFlLEFBQVUsaURBQXpCLEFBQWUsQUFBcUIsQUFFcEM7UUFBQSxBQUNFO1FBREYsQUFFRSIsImZpbGUiOiJwdy1mb3JnZXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL215ZHNwci9EZXZlbG9wZXIvUmVwb3MvbmV4dGpzLXJlZHV4LWZpcmViYXNlLWF1dGhlbnRpY2F0aW9uIn0=