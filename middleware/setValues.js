"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SetValues;

function SetValues(values) {
  var elements = Array.isArray(this.root) ? this.root : [this.root];
  elements.forEach(function (element, index) {
    element.getDOMNode().value = values[index];
  });
}

module.exports = exports["default"];