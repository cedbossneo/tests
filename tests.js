'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var _slice = Array.prototype.slice;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _middleware = require('./middleware');

var TestUtils = _reactAddons2['default'].addons.TestUtils;

global.React = _reactAddons2['default']; //expose React to tests so they can use jsx syntax when passing in components to the class
require('react/lib/ExecutionEnvironment').canUseDOM = true;

var unarray = function unarray(elems) {
  return Object.keys(elems).reduce(function (obj, key) {
    var element = elems[key];
    if (element.length === 1) obj[key] = element[0];else obj[key] = element;

    return obj;
  }, {});
};

var Test = (function () {
  function Test(component, config) {
    _classCallCheck(this, Test);

    this.component = component;

    if (config && config.shallow === true) {
      var shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(component);
      this.instance = shallowRenderer.getRenderOutput();
    } else {
      this.instance = TestUtils.renderIntoDocument(component);
    }

    this.helpers = {};
    this.root = this.instance;
    return this;
  }

  _createClass(Test, [{
    key: 'use',
    value: function use(callback, data) {
      callback.call(this, data);
      return this;
    }
  }, {
    key: 'element',
    value: function element(select, callback) {
      if (!this.helpers) return this;

      if (typeof select === 'string') {
        var elements = this.helpers.elements[select];
        callback.call(this, elements);
        return this;
      }

      select.call(this, this.root);
      return this;
    }
  }, {
    key: 'test',
    value: function test(callback) {
      var params = this.params();
      callback.call(params, params);
      return this;
    }
  }, {
    key: 'params',
    value: function params() {
      var length = Object.keys(this.helpers).length;
      if (this.helpers.elements && length === 1) {
        var elements = unarray(this.helpers.elements);
        return Object.assign({}, this, elements);
      }
      return this;
    }

    //private

  }, {
    key: 'getFirst',
    value: function getFirst(object) {
      for (var element in object) {
        return object[element];
      }
    }

    //Built in middleware

  }, {
    key: 'find',
    value: function find() {
      _middleware.Find.call.apply(_middleware.Find, [this].concat(_slice.call(arguments)));
      return this;
    }
  }, {
    key: 'index',
    value: function index() {
      _middleware.Index.call.apply(_middleware.Index, [this].concat(_slice.call(arguments)));
      return this;
    }
  }, {
    key: 'setState',
    value: function setState() {
      _middleware.SetState.call.apply(_middleware.SetState, [this].concat(_slice.call(arguments)));
      return this;
    }
  }, {
    key: 'simulate',
    value: function simulate() {
      _middleware.Simulate.call.apply(_middleware.Simulate, [this].concat(_slice.call(arguments)));
      return this;
    }
  }, {
    key: 'setValues',
    value: function setValues() {
      _middleware.SetValues.call.apply(_middleware.SetValues, [this].concat(_slice.call(arguments)));
      return this;
    }
  }, {
    key: 'renderToString',
    value: function renderToString(callback) {
      var component = _reactAddons2['default'].renderToStaticMarkup(this.component);
      callback.call(null, component);
      return this;
    }
  }]);

  return Test;
})();

exports['default'] = Test;
module.exports = exports['default'];