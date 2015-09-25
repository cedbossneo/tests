'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _middlewareFind = require('./middleware/find');

var _middlewareFind2 = _interopRequireDefault(_middlewareFind);

var _middlewareSetState = require('./middleware/setState');

var _middlewareSetState2 = _interopRequireDefault(_middlewareSetState);

var _middlewareSimulate = require('./middleware/simulate');

var _middlewareSimulate2 = _interopRequireDefault(_middlewareSimulate);

var _middlewareSetValues = require('./middleware/setValues');

var _middlewareSetValues2 = _interopRequireDefault(_middlewareSetValues);

var _middlewareIndex = require('./middleware/index');

var _middlewareIndex2 = _interopRequireDefault(_middlewareIndex);

exports['default'] = {
  Find: _middlewareFind2['default'],
  SetState: _middlewareSetState2['default'],
  Simulate: _middlewareSimulate2['default'],
  SetValues: _middlewareSetValues2['default'],
  Index: _middlewareIndex2['default']
};
module.exports = exports['default'];