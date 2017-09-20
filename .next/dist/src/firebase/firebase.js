'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = exports.db = undefined;

var _firebase = require('firebase');

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

var config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

var db = firebase.database();
var auth = firebase.auth();

exports.db = db;
exports.auth = auth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9maXJlYmFzZS9maXJlYmFzZS5qcyJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsInByb2RDb25maWciLCJhcGlLZXkiLCJZT1VSX0FQSV9LRVkiLCJhdXRoRG9tYWluIiwiWU9VUl9BVVRIX0RPTUFJTiIsImRhdGFiYXNlVVJMIiwiWU9VUl9EQVRBQkFTRV9VUkwiLCJwcm9qZWN0SWQiLCJZT1VSX1BST0pFQ1RfSUQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJZT1VSX01FU1NBR0lOR19TRU5ERVJfSUQiLCJkZXZDb25maWciLCJjb25maWciLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImRiIiwiZGF0YWJhc2UiLCJhdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsQUFBTzs7SUFBUCxBQUFZOzs7O0FBRVosSUFBTTtVQUFhLEFBQ1QsQUFDUjtjQUZpQixBQUVMLEFBQ1o7ZUFIaUIsQUFHSixBQUNiO2FBSmlCLEFBSU4sQUFDWDtpQkFMaUIsQUFLRixBQUNmO3FCQU5GLEFBQW1CLEFBTUU7QUFORixBQUNqQjs7QUFRRixJQUFNO1VBQVksQUFDUixBQUNSO2NBRmdCLEFBRUosQUFDWjtlQUhnQixBQUdILEFBQ2I7YUFKZ0IsQUFJTCxBQUNYO2lCQUxnQixBQUtELEFBQ2Y7cUJBTkYsQUFBa0IsQUFNRztBQU5ILEFBQ2hCOztBQVFGLElBQU0sU0FBUyxRQUFBLEFBQVEsSUFBUixBQUFZLGFBQVosQUFBeUIsZUFBekIsQUFDWCxhQURKLEFBRUk7O0FBRUosSUFBSSxDQUFDLFNBQUEsQUFBUyxLQUFkLEFBQW1CLFFBQVEsQUFDekI7V0FBQSxBQUFTLGNBQVQsQUFBdUIsQUFDeEI7OztBQUVELElBQU0sS0FBSyxTQUFYLEFBQVcsQUFBUztBQUNwQixJQUFNLE9BQU8sU0FBYixBQUFhLEFBQVMsQUFFdEI7O1FBQUEsQUFDRTtRQURGLEFBRUUiLCJmaWxlIjoiZmlyZWJhc2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL215ZHNwci9EZXZlbG9wZXIvUmVwb3MvbmV4dGpzLXJlZHV4LWZpcmViYXNlLWF1dGhlbnRpY2F0aW9uIn0=