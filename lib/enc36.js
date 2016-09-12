module.exports = {
  encode: encode,
  decode: decode
};

var BASE = 180;
var PRECISION = 100000;
var RADIX = 36;
var LEN = 5;
var MASK = '';

function init() {
  var i = 0;
  for(i = 0; i < LEN; i++) {
    MASK += '0';
  }
}

init();

function split(str, n) {
  var res = [], i;
  for(i = 0; i < str.length; i += n) {
    res.push(str.slice(i, i + n));
  }
  return res;
}

function decode(str) {
  return split(str, LEN).map(function(s) {
    s = parseInt(s, RADIX);
    s /= PRECISION;
    s -= BASE;
    return s;
  });
}

function encode(arr) {
  return arr.map(function(c) {
    c += BASE;
    c *= PRECISION;
    c = Math.round(c);
    c = c.toString(RADIX);
    // 5 to five digits
    return MASK.slice(c.length) + c;
  }).join('');
}
