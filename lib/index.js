"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.channels = void 0;

var _socketIO = _interopRequireDefault(require("socketIO"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// utils
var getCurrentPlatform = function getCurrentPlatform() {
  return "web";
};

var createQuery = function createQuery(info) {
  return Object.keys(info).map(function (key) {
    return "".concat(key, "=").concat(info[key]);
  }).join("&");
};

var channels = {};
exports.channels = channels;

var _default = function _default(_ref) {
  var connections = _ref.channels,
      userId = _ref.userId,
      _ref$platform = _ref.platform,
      platform = _ref$platform === void 0 ? getCurrentPlatform() : _ref$platform;
  connections.forEach(function (channel) {
    channels[channel] = (0, _socketIO.default)("/".concat(channel), {
      query: createQuery({
        userId: userId,
        platform: platform
      })
    });
  });
};

exports.default = _default;