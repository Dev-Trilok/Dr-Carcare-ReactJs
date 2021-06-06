"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseConfig = {
  apiKey: "AIzaSyAa0l9-PkJRZiw9vv6KhaCxC8-rakT6SRk",
  authDomain: "dr-carcare.firebaseapp.com",
  projectId: "dr-carcare",
  storageBucket: "dr-carcare.appspot.com",
  messagingSenderId: "1049793109313",
  appId: "1:1049793109313:web:bae5042a88190fafce55c0"
}; // Initialize Firebase

var FirebaseApp = _firebase["default"].initializeApp(firebaseConfig);

var _default = FirebaseApp;
exports["default"] = _default;