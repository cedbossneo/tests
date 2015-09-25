'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = simulate;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var TestUtils = _react2['default'].addons.TestUtils;

function simulate(method, options) {
  TestUtils.Simulate[method].call(this, this.root, options || null);
}

module.exports = exports['default'];