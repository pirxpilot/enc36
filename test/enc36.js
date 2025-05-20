const { describe, it } = require('node:test');
const { encode, decode } = require('../');

const data = [
  -118.4799, 33.7973, -113.5231, 37.0159, 113.9094, -37.0159, 113.4587,
  -87.0803, 0, 0, -180, 180
];

const str = '3nux6cq8pe3yhe2cx51yhhy708igq2hgzf25j5qaapsw0apsw000000lfls0';

describe('enc36', () => {
  it('must encode empty Array', () => {
    encode([]).should.eql('');
  });

  it('must decode empty String', () => {
    decode('').should.eql([]);
  });

  it('must encode Array of numbers', () => {
    encode(data).should.eql(str);
  });

  it('must decode String', () => {
    const d = decode(str);

    d.should.have.length(data.length);

    d.forEach((elem, i) => {
      elem.should.approximately(data[i], 0.000001);
    });
  });
});
