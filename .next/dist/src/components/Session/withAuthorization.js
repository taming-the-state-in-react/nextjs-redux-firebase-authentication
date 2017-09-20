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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _firebase = require('../../firebase');

var _routes = require('../../constants/routes');

var routes = _interopRequireWildcard(_routes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mydspr/Developer/Repos/nextjs-redux-firebase-authentication/src/components/Session/withAuthorization.js';


var withAuthorization = function withAuthorization(needsAuthorization) {
  return function (Component) {
    var WithAuthorization = function (_React$Component) {
      (0, _inherits3.default)(WithAuthorization, _React$Component);

      function WithAuthorization() {
        (0, _classCallCheck3.default)(this, WithAuthorization);

        return (0, _possibleConstructorReturn3.default)(this, (WithAuthorization.__proto__ || (0, _getPrototypeOf2.default)(WithAuthorization)).apply(this, arguments));
      }

      (0, _createClass3.default)(WithAuthorization, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          _firebase.firebase.auth.onAuthStateChanged(function (authUser) {
            if (!authUser && needsAuthorization) {
              _index2.default.push(routes.SIGN_IN);
            }
          });
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(Component, (0, _extends3.default)({}, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          }));
        }
      }]);

      return WithAuthorization;
    }(_react2.default.Component);

    return WithAuthorization;
  };
};

exports.default = withAuthorization;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1Nlc3Npb24vd2l0aEF1dGhvcml6YXRpb24uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJSb3V0ZXIiLCJmaXJlYmFzZSIsInJvdXRlcyIsIndpdGhBdXRob3JpemF0aW9uIiwibmVlZHNBdXRob3JpemF0aW9uIiwiQ29tcG9uZW50IiwiV2l0aEF1dGhvcml6YXRpb24iLCJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiYXV0aFVzZXIiLCJwdXNoIiwiU0lHTl9JTiIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUVQLEFBQVM7O0FBQ1QsQUFBTzs7SUFBUCxBQUFZOzs7Ozs7Ozs7QUFFWixJQUFNLG9CQUFvQixTQUFwQixBQUFvQixrQkFBQSxBQUFDLG9CQUFEO1NBQXdCLFVBQUEsQUFBQyxXQUFjO1FBQUEsQUFDekQsZ0RBRHlEO2lEQUFBOzttQ0FBQTs0Q0FBQTs7NEpBQUE7QUFBQTs7O2FBQUE7NENBRXpDLEFBQ2xCOzZCQUFBLEFBQVMsS0FBVCxBQUFjLG1CQUFtQixvQkFBWSxBQUMzQztnQkFBSSxDQUFBLEFBQUMsWUFBTCxBQUFpQixvQkFBb0IsQUFDbkM7OEJBQUEsQUFBTyxLQUFLLE9BQVosQUFBbUIsQUFDcEI7QUFDRjtBQUpELEFBS0Q7QUFSNEQ7QUFBQTthQUFBO2lDQVVwRCxBQUNQOytDQUNFLEFBQUMsc0NBQWUsS0FBaEIsQUFBcUI7O3dCQUFyQjswQkFERixBQUNFLEFBRUg7QUFGRztBQUFBLFlBQUE7QUFaeUQ7QUFBQTs7YUFBQTtNQUMvQixnQkFEK0IsQUFDekIsQUFnQnRDOztXQUFBLEFBQU8sQUFDUjtBQWxCeUI7QUFBMUIsQUFvQkE7O2tCQUFBLEFBQWUiLCJmaWxlIjoid2l0aEF1dGhvcml6YXRpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL215ZHNwci9EZXZlbG9wZXIvUmVwb3MvbmV4dGpzLXJlZHV4LWZpcmViYXNlLWF1dGhlbnRpY2F0aW9uIn0=