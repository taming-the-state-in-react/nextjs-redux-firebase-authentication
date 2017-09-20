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

var _reactRedux = require('react-redux');

var _firebase = require('../../firebase');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mydspr/Developer/Repos/nextjs-redux-firebase-authentication/src/components/Session/withAuthentication.js';


var withAuthentication = function withAuthentication(Component) {
  var WithAuthentication = function (_React$Component) {
    (0, _inherits3.default)(WithAuthentication, _React$Component);

    function WithAuthentication() {
      (0, _classCallCheck3.default)(this, WithAuthentication);

      return (0, _possibleConstructorReturn3.default)(this, (WithAuthentication.__proto__ || (0, _getPrototypeOf2.default)(WithAuthentication)).apply(this, arguments));
    }

    (0, _createClass3.default)(WithAuthentication, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var onSetAuthUser = this.props.onSetAuthUser;

        _firebase.firebase.auth.onAuthStateChanged(function (authUser) {
          authUser ? onSetAuthUser(authUser) : onSetAuthUser(null);
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Component, (0, _extends3.default)({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }));
      }
    }]);

    return WithAuthentication;
  }(_react2.default.Component);

  var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
      onSetAuthUser: function onSetAuthUser(authUser) {
        return dispatch({ type: 'AUTH_USER_SET', authUser: authUser });
      }
    };
  };

  return (0, _reactRedux.connect)(null, mapDispatchToProps)(WithAuthentication);
};

exports.default = withAuthentication;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1Nlc3Npb24vd2l0aEF1dGhlbnRpY2F0aW9uLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiY29ubmVjdCIsImZpcmViYXNlIiwid2l0aEF1dGhlbnRpY2F0aW9uIiwiQ29tcG9uZW50IiwiV2l0aEF1dGhlbnRpY2F0aW9uIiwib25TZXRBdXRoVXNlciIsInByb3BzIiwiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImF1dGhVc2VyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFFVCxBQUFTOzs7Ozs7O0FBRVQsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsbUJBQUEsQUFBQyxXQUFjO01BQUEsQUFDbEMsaURBRGtDO2dEQUFBOztrQ0FBQTswQ0FBQTs7NEpBQUE7QUFBQTs7O1dBQUE7MENBRWxCO1lBQUEsQUFDVixnQkFBa0IsS0FEUixBQUNhLE1BRGIsQUFDVixBQUVSOzsyQkFBQSxBQUFTLEtBQVQsQUFBYyxtQkFBbUIsb0JBQVksQUFDM0M7cUJBQ0ksY0FESixBQUNJLEFBQWMsWUFDZCxjQUZKLEFBRUksQUFBYyxBQUNuQjtBQUpELEFBS0Q7QUFWcUM7QUFBQTtXQUFBOytCQVk3QixBQUNQOzZDQUNFLEFBQUMsc0NBQWUsS0FBaEIsQUFBcUI7O3NCQUFyQjt3QkFERixBQUNFLEFBRUg7QUFGRztBQUFBLFVBQUE7QUFka0M7QUFBQTs7V0FBQTtJQUNQLGdCQURPLEFBQ0QsQUFrQnZDOztNQUFNLHFCQUFxQixTQUFyQixBQUFxQixtQkFBQSxBQUFDLFVBQUQ7O3FCQUNWLHVCQUFBLEFBQUMsVUFBRDtlQUFjLFNBQVMsRUFBRSxNQUFGLEFBQVEsaUJBQWlCLFVBQWhELEFBQWMsQUFBUztBQURiLEFBQWU7QUFBQSxBQUN4QztBQURGLEFBSUE7O1NBQU8seUJBQUEsQUFBUSxNQUFSLEFBQWMsb0JBQXJCLEFBQU8sQUFBa0MsQUFDMUM7QUF4QkQsQUEwQkE7O2tCQUFBLEFBQWUiLCJmaWxlIjoid2l0aEF1dGhlbnRpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9teWRzcHIvRGV2ZWxvcGVyL1JlcG9zL25leHRqcy1yZWR1eC1maXJlYmFzZS1hdXRoZW50aWNhdGlvbiJ9