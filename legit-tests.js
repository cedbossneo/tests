/* globals global */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = TestWrapper;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('./dom');

var _tests = require('./tests');

var _tests2 = _interopRequireDefault(_tests);

function TestWrapper(component, config) {
  return new _tests2['default'](component, config);
}

module.exports = exports['default'];