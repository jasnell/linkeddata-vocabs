'use strict';

function define(root, name, value) {
  Object.defineProperty(root, name, {
    value: value,
    enumerable: true,
    configurable: false
  });
};

module.exports = function (exports, ns, prefix, terms) {
  define(exports, 'ns', ns);
  define(exports, 'prefix', prefix);
  for (let term of terms)
    define(exports, term, ns + term);
};
