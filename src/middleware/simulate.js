import React from 'react';
let { TestUtils } = React.addons;

export default function simulate(method, options) {
  TestUtils.Simulate[method].call(this,
    this.root,
    options || null
  );
}
