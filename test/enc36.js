const test = require('node:test');
const { encode, decode } = require('../');

const data = [
  -118.4799, 33.7973, -113.5231, 37.0159, 113.9094, -37.0159, 113.4587,
  -87.0803, 0, 0, -180, 180
];

const str = '3nux6cq8pe3yhe2cx51yhhy708igq2hgzf25j5qaapsw0apsw000000lfls0';

test('must encode empty Array', t => {
  t.assert.equal(encode([]), '');
});

test('must decode empty String', t => {
  t.assert.deepEqual(decode(''), []);
});

test('must encode Array of numbers', t => {
  t.assert.equal(encode(data), str);
});

test('must decode String', t => {
  const d = decode(str);

  t.assert.equal(d.length, data.length);

  d.forEach((elem, i) => {
    t.assert.ok(
      Math.abs(elem - data[i]) < 0.000001,
      `${elem} should be approximately ${data[i]}`
    );
  });
});
