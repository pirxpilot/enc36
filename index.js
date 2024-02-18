module.exports = {
  encode,
  decode
};

const BASE = 180;
const PRECISION = 100000;
const RADIX = 36;
const LEN = 5;

function split(str, n) {
  const res = [];
  for (let i = 0; i < str.length; i += n) {
    res.push(str.slice(i, i + n));
  }
  return res;
}

function decode(str) {
  return split(str, LEN).map(function (s) {
    s = parseInt(s, RADIX);
    s /= PRECISION;
    s -= BASE;
    return s;
  });
}

function encode(arr) {
  return arr.map(function (c) {
    c += BASE;
    c *= PRECISION;
    c = Math.round(c);
    return c.toString(RADIX).padStart(LEN, '0');
  }).join('');
}
