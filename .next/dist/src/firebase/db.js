'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onceGetUsers = exports.doCreateUser = undefined;

var _firebase = require('./firebase');

// User API

var doCreateUser = exports.doCreateUser = function doCreateUser(id, username, email) {
  return _firebase.db.ref('users/' + id).set({
    username: username,
    email: email
  });
};

var onceGetUsers = exports.onceGetUsers = function onceGetUsers() {
  return _firebase.db.ref('users').once('value');
};

// Other db APIs ...
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9maXJlYmFzZS9kYi5qcyJdLCJuYW1lcyI6WyJkYiIsImRvQ3JlYXRlVXNlciIsImlkIiwidXNlcm5hbWUiLCJlbWFpbCIsInJlZiIsInNldCIsIm9uY2VHZXRVc2VycyIsIm9uY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxBQUFTOztBQUVULEFBRUE7O0FBQU8sSUFBTSxzQ0FBZSxTQUFmLEFBQWUsYUFBQSxBQUFDLElBQUQsQUFBSyxVQUFMLEFBQWUsT0FBZjtzQkFDMUIsQUFBRyxlQUFILEFBQWdCLElBQWhCLEFBQXNCO2NBQUksQUFFeEI7V0FId0IsQUFDMUIsQUFBMEI7QUFBQSxBQUN4QixHQURGO0FBREssQUFNUDs7QUFBTyxJQUFNLHNDQUFlLFNBQWYsQUFBZSxlQUFBO1NBQzFCLGFBQUEsQUFBRyxJQUFILEFBQU8sU0FBUCxBQUFnQixLQURVLEFBQzFCLEFBQXFCO0FBRGhCOztBQUdQIiwiZmlsZSI6ImRiLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9teWRzcHIvRGV2ZWxvcGVyL1JlcG9zL25leHRqcy1yZWR1eC1maXJlYmFzZS1hdXRoZW50aWNhdGlvbiJ9