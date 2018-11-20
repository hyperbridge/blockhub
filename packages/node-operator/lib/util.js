const util = {
  debug: false,
  inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  },
  extend(dest, source = {}) {
    for(let key in source) {
      dest[key] = source[key];
    }
    return dest;
  },
  randomId() {
    return (Math.random().toString(36) + '0000000000000000000').substr(2, 16);
  },
  prettyError(msg) {
    console.log('ERROR NodeOperator: ', msg)
  }
};

module.exports = util;
