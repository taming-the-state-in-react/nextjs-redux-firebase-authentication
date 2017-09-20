webpackHotUpdate(8,{

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = exports.db = undefined;

var _firebase = __webpack_require__(705);

var firebase = _interopRequireWildcard(_firebase);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var prodConfig = {
  apiKey: YOUR_API_KEY,
  authDomain: YOUR_AUTH_DOMAIN,
  databaseURL: YOUR_DATABASE_URL,
  projectId: YOUR_PROJECT_ID,
  storageBucket: '',
  messagingSenderId: YOUR_MESSAGING_SENDER_ID
};

var devConfig = {
  apiKey: YOUR_API_KEY,
  authDomain: YOUR_AUTH_DOMAIN,
  databaseURL: YOUR_DATABASE_URL,
  projectId: YOUR_PROJECT_ID,
  storageBucket: '',
  messagingSenderId: YOUR_MESSAGING_SENDER_ID
};

var config =  false ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

var db = firebase.database();
var auth = firebase.auth();

exports.db = db;
exports.auth = auth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9maXJlYmFzZS9maXJlYmFzZS5qcyJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsInByb2RDb25maWciLCJhcGlLZXkiLCJZT1VSX0FQSV9LRVkiLCJhdXRoRG9tYWluIiwiWU9VUl9BVVRIX0RPTUFJTiIsImRhdGFiYXNlVVJMIiwiWU9VUl9EQVRBQkFTRV9VUkwiLCJwcm9qZWN0SWQiLCJZT1VSX1BST0pFQ1RfSUQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJZT1VSX01FU1NBR0lOR19TRU5ERVJfSUQiLCJkZXZDb25maWciLCJjb25maWciLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImRiIiwiZGF0YWJhc2UiLCJhdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsQUFBTzs7SUFBUCxBQUFZOzs7O0FBRVosSUFBTTtVQUFhLEFBQ1QsQUFDUjtjQUZpQixBQUVMLEFBQ1o7ZUFIaUIsQUFHSixBQUNiO2FBSmlCLEFBSU4sQUFDWDtpQkFMaUIsQUFLRixBQUNmO3FCQU5GLEFBQW1CLEFBTUU7QUFORixBQUNqQjs7QUFRRixJQUFNO1VBQVksQUFDUixBQUNSO2NBRmdCLEFBRUosQUFDWjtlQUhnQixBQUdILEFBQ2I7YUFKZ0IsQUFJTCxBQUNYO2lCQUxnQixBQUtELEFBQ2Y7cUJBTkYsQUFBa0IsQUFNRztBQU5ILEFBQ2hCOztBQVFGLElBQU0sU0FBUyxRQUFBLEFBQVEsSUFBUixBQUFZLGFBQVosQUFBeUIsZUFBekIsQUFDWCxhQURKLEFBRUk7O0FBRUosSUFBSSxDQUFDLFNBQUEsQUFBUyxLQUFkLEFBQW1CLFFBQVEsQUFDekI7V0FBQSxBQUFTLGNBQVQsQUFBdUIsQUFDeEI7OztBQUVELElBQU0sS0FBSyxTQUFYLEFBQVcsQUFBUztBQUNwQixJQUFNLE9BQU8sU0FBYixBQUFhLEFBQVMsQUFFdEI7O1FBQUEsQUFDRTtRQURGLEFBRUUiLCJmaWxlIjoiZmlyZWJhc2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL215ZHNwci9EZXZlbG9wZXIvUmVwb3MvbmV4dGpzLXJlZHV4LWZpcmViYXNlLWF1dGhlbnRpY2F0aW9uIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mydspr/Developer/Repos/nextjs-redux-firebase-authentication/src/firebase/firebase.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mydspr/Developer/Repos/nextjs-redux-firebase-authentication/src/firebase/firebase.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC4xNmM1NjgwMzNjMGVmMjAzY2E2OS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2ZpcmViYXNlL2ZpcmViYXNlLmpzP2ZhNzBhYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xuXG5jb25zdCBwcm9kQ29uZmlnID0ge1xuICBhcGlLZXk6IFlPVVJfQVBJX0tFWSxcbiAgYXV0aERvbWFpbjogWU9VUl9BVVRIX0RPTUFJTixcbiAgZGF0YWJhc2VVUkw6IFlPVVJfREFUQUJBU0VfVVJMLFxuICBwcm9qZWN0SWQ6IFlPVVJfUFJPSkVDVF9JRCxcbiAgc3RvcmFnZUJ1Y2tldDogJycsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBZT1VSX01FU1NBR0lOR19TRU5ERVJfSUQsXG59O1xuXG5jb25zdCBkZXZDb25maWcgPSB7XG4gIGFwaUtleTogWU9VUl9BUElfS0VZLFxuICBhdXRoRG9tYWluOiBZT1VSX0FVVEhfRE9NQUlOLFxuICBkYXRhYmFzZVVSTDogWU9VUl9EQVRBQkFTRV9VUkwsXG4gIHByb2plY3RJZDogWU9VUl9QUk9KRUNUX0lELFxuICBzdG9yYWdlQnVja2V0OiAnJyxcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFlPVVJfTUVTU0FHSU5HX1NFTkRFUl9JRCxcbn07XG5cbmNvbnN0IGNvbmZpZyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcbiAgPyBwcm9kQ29uZmlnXG4gIDogZGV2Q29uZmlnO1xuXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcbn1cblxuY29uc3QgZGIgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xuY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcblxuZXhwb3J0IHtcbiAgZGIsXG4gIGF1dGgsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZpcmViYXNlL2ZpcmViYXNlLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQURBO0FBQ0E7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTEE7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTEE7QUFDQTtBQU9BO0FBQ0E7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=