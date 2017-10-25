'use strict';

function define(value) {
  return {
    value,
    enumerable: true,
    configurable: false
  };
};

module.exports = function (exports, ns, prefix, terms) {
  const props = {
    ns: define(ns),
    prefix: define(prefix),
  };
  for (let term of terms)
    props[term] = define(ns + term);
  Object.defineProperties(exports, props);
};
