'use strict';
const methods = (iface) => {
  const names = [];
  for (const key in iface) {
    if (typeof iface[key] === 'function') {
      names.push([key, iface[key].length]);
    }
  }
  return names;
};

console.log(
  methods({
    m1: (x) => [x],
    m2:  function(x, y) {
      return [x, y];
    },
    m3(x, y, z) {
      return [x, y, z];
    }
  })
);

module.exports = { methods };
