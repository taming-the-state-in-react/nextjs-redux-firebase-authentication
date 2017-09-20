'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _firebase = require('../../firebase');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mydspr/Developer/Repos/nextjs-redux-firebase-authentication/src/components/PasswordChange/index.js';


var updateByPropertyName = function updateByPropertyName(propertyName, value) {
  return function () {
    return (0, _defineProperty3.default)({}, propertyName, value);
  };
};

var INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null
};

var PasswordChangeForm = function (_Component) {
  (0, _inherits3.default)(PasswordChangeForm, _Component);

  function PasswordChangeForm(props) {
    (0, _classCallCheck3.default)(this, PasswordChangeForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PasswordChangeForm.__proto__ || (0, _getPrototypeOf2.default)(PasswordChangeForm)).call(this, props));

    _this.onSubmit = function (event) {
      var passwordOne = _this.state.passwordOne;

      _firebase.auth.doPasswordUpdate(passwordOne).then(function () {
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

  (0, _createClass3.default)(PasswordChangeForm, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          passwordOne = _state.passwordOne,
          passwordTwo = _state.passwordTwo,
          error = _state.error;

      var isInvalid = passwordOne !== passwordTwo || passwordOne === '';

      return _react2.default.createElement('form', { onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement('input', {
        value: passwordOne,
        onChange: function onChange(event) {
          return _this2.setState(updateByPropertyName('passwordOne', event.target.value));
        },
        type: 'password',
        placeholder: 'New Password',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), _react2.default.createElement('input', {
        value: passwordTwo,
        onChange: function onChange(event) {
          return _this2.setState(updateByPropertyName('passwordTwo', event.target.value));
        },
        type: 'password',
        placeholder: 'Confirm New Password',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }), _react2.default.createElement('button', { disabled: isInvalid, type: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, 'Reset My Password'), error && _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, error.message));
    }
  }]);

  return PasswordChangeForm;
}(_react.Component);

exports.default = PasswordChangeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1Bhc3N3b3JkQ2hhbmdlL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiYXV0aCIsInVwZGF0ZUJ5UHJvcGVydHlOYW1lIiwicHJvcGVydHlOYW1lIiwidmFsdWUiLCJJTklUSUFMX1NUQVRFIiwicGFzc3dvcmRPbmUiLCJwYXNzd29yZFR3byIsImVycm9yIiwiUGFzc3dvcmRDaGFuZ2VGb3JtIiwicHJvcHMiLCJvblN1Ym1pdCIsImV2ZW50Iiwic3RhdGUiLCJkb1Bhc3N3b3JkVXBkYXRlIiwidGhlbiIsInNldFN0YXRlIiwiY2F0Y2giLCJwcmV2ZW50RGVmYXVsdCIsImlzSW52YWxpZCIsInRhcmdldCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFFaEIsQUFBUzs7Ozs7OztBQUVULElBQU0sdUJBQXVCLFNBQXZCLEFBQXVCLHFCQUFBLEFBQUMsY0FBRCxBQUFlLE9BQWY7U0FBeUIsWUFBQTs2Q0FBQSxBQUNuRCxjQURtRCxBQUNwQztBQURXO0FBQTdCOztBQUlBLElBQU07ZUFBZ0IsQUFDUCxBQUNiO2VBRm9CLEFBRVAsQUFDYjtTQUhGLEFBQXNCLEFBR2I7QUFIYSxBQUNwQjs7SUFLSSxBOzhDQUNKOzs4QkFBQSxBQUFZLE9BQU87d0NBQUE7OzhKQUFBLEFBQ1g7O1VBRFcsQUFNbkIsV0FBVyxVQUFBLEFBQUMsT0FBVTtVQUFBLEFBQ1osY0FBZ0IsTUFESixBQUNTLE1BRFQsQUFDWixBQUVSOztxQkFBQSxBQUFLLGlCQUFMLEFBQXNCLGFBQXRCLEFBQ0csS0FBSyxZQUFNLEFBQ1Y7Y0FBQSxBQUFLLFNBQVMsWUFBQTs0Q0FBQSxBQUFZO0FBQTFCLEFBQ0Q7QUFISCxTQUFBLEFBSUcsTUFBTSxpQkFBUyxBQUNkO2NBQUEsQUFBSyxTQUFTLHFCQUFBLEFBQXFCLFNBQW5DLEFBQWMsQUFBOEIsQUFDN0M7QUFOSCxBQVFBOztZQUFBLEFBQU0sQUFDUDtBQWxCa0IsQUFHakI7O1VBQUEsQUFBSyxtQ0FIWSxBQUdqQixBQUFrQjtXQUNuQjs7Ozs7NkJBZ0JRO21CQUFBOzttQkFLSCxLQUxHLEFBS0U7VUFMRixBQUVMLHFCQUZLLEFBRUw7VUFGSyxBQUdMLHFCQUhLLEFBR0w7VUFISyxBQUlMLGVBSkssQUFJTCxBQUdGOztVQUFNLFlBQ0osZ0JBQUEsQUFBZ0IsZUFDaEIsZ0JBRkYsQUFFa0IsQUFFbEI7OzZCQUNFLGNBQUEsVUFBTSxVQUFVLEtBQWhCLEFBQXFCO29CQUFyQjtzQkFBQSxBQUNFO0FBREY7T0FBQTtlQUNFLEFBQ1MsQUFDUDtrQkFBVSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssU0FBUyxxQkFBQSxBQUFxQixlQUFlLE1BQUEsQUFBTSxPQUFqRSxBQUFTLEFBQWMsQUFBaUQ7QUFGcEYsQUFHRTtjQUhGLEFBR08sQUFDTDtxQkFKRixBQUljOztvQkFKZDtzQkFERixBQUNFLEFBTUE7QUFOQTtBQUNFO2VBS0YsQUFDUyxBQUNQO2tCQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxTQUFTLHFCQUFBLEFBQXFCLGVBQWUsTUFBQSxBQUFNLE9BQWpFLEFBQVMsQUFBYyxBQUFpRDtBQUZwRixBQUdFO2NBSEYsQUFHTyxBQUNMO3FCQUpGLEFBSWM7O29CQUpkO3NCQVBGLEFBT0UsQUFNQTtBQU5BO0FBQ0UsMEJBS0YsY0FBQSxZQUFRLFVBQVIsQUFBa0IsV0FBVyxNQUE3QixBQUFrQztvQkFBbEM7c0JBQUE7QUFBQTtTQWJGLEFBYUUsQUFJRSwrQ0FBUyxjQUFBOztvQkFBQTtzQkFBQSxBQUFJO0FBQUo7QUFBQSxPQUFBLFFBbEJmLEFBQ0UsQUFpQmEsQUFBVSxBQUcxQjs7Ozs7QUFyRDhCLEEsQUF3RGpDOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9teWRzcHIvRGV2ZWxvcGVyL1JlcG9zL25leHRqcy1yZWR1eC1maXJlYmFzZS1hdXRoZW50aWNhdGlvbiJ9