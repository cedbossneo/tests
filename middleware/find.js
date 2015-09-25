'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = find;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var TestUtils = _react2['default'].addons.TestUtils;

function doFind(root, selector) {
  if (!(typeof selector === "string")) {
    return {
      elements: TestUtils.scryRenderedComponentsWithType(root, selector),
      name: selector.name.toLowerCase()
    };
  }

  if (selector.match(/\./)) {
    var className = selector.replace(/\./, '');
    return {
      elements: TestUtils.scryRenderedDOMComponentsWithClass(root, className),
      name: className
    };
  }

  return {
    elements: TestUtils.scryRenderedDOMComponentsWithTag(root, selector),
    name: selector
  };
}

function flatten(array) {
  return [].concat.apply([], array);
}

function findSingleOrMulti(root, selector) {
  if (Array.isArray(root)) {
    var matches = root.map(function (element) {
      return doFind(element, selector);
    });
    return {
      elements: flatten(matches.map(function (match) {
        return match.elements;
      })),
      name: matches[0].name
    };
  }
  return doFind(root, selector);
}

function find(selector, options) {
  var fromRoot = options && options.root;
  var multi = options && options.multi;
  var root = fromRoot ? this.instance : this.root;

  var _findSingleOrMulti = findSingleOrMulti(root, selector);

  var elements = _findSingleOrMulti.elements;
  var name = _findSingleOrMulti.name;

  if (!elements || elements.length === 0) throw new Error('Could not find element "' + selector + '"');

  if (!this.helpers.elements) {
    this.helpers.elements = [];
  }
  if (multi) {
    this.root = elements;
    this.helpers.elements[name || selector] = elements;
  } else {
    this.root = elements[0];
    this.helpers.elements[name || selector] = elements[0];
  }
}

module.exports = exports['default'];