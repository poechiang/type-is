require('../lib/proto.js');
const assert = require('assert');
const is = require('../index.js');

const
  f0 = 0.,
  f1 = .0,
  f2 = 1.2,
  infinity = Infinity,
  i = 0,
  o = 1,
  e = 4,
  nan = NaN,
  regexp = /[a-z]{4}/,
  symbol = Symbol(45);

describe('#is-latest:', () => {

  describe('#is.type', () => {

    it(`f0 (0.) 's type is number`, () => {
      assert.ok(is.type(f0) === 'number')
    });
    it('f0 (0.) is not float', () => {
      assert.ok(!f0.isFloatNumber());
    });

    it(`f1 (.0) 's type is number`, () => {
      assert.ok(is.type(f1) === 'number')
    });
    it('f1 (.0) is not float', () => {
      assert.ok(!f1.isFloatNumber());
    });

    it(`f2 (1.2) 's type is number`, () => {
      assert.ok(is.type(f2) === 'number')
    });
    it('f2 (1.2) is float', () => {
      assert.ok(f2.isFloatNumber());
    });

    it(`infinity 's type is number`, () => {
      assert.ok(is.type(infinity) === 'number')
    });
    it('infinity is infinity number', () => {
      assert.ok(is.number.infinity(infinity));
    });

    it(`o (1) 's type is number`, () => {
      assert.ok(is.type(o) === 'number')
    });
    it('o (1) is odd integer', () => {
      assert.ok(is.number.odd(o));
    });

    it(`e (4) 's type is number`, () => {
      assert.ok(is.type(e) === 'number')
    });
    it('e (4) is even integer', () => {
      assert.ok(is.number.even(e));
    });

    it(`nan (NaN) 's type is Number`, () => {
      assert.ok(is.type(nan) === 'number')
    });
    it('nan (NaN) is NaN', () => {
      assert.ok(is.number.nan(nan));
    });

    it(`regexp (/[a-z]{4}/) 's type is RegExp`, () => {
      assert.ok(is.type(regexp) === 'regexp')
    });
    it('regexp (/[a-z]{4}/) is RegExp', () => {
      assert.ok(is.regexp(regexp));
    });

    it(`symbol (Symbol) 's type is Symbol`, () => {
      assert.ok(is.type(symbol) === 'symbol')
    });
    it('symbol (Symbol) is Symbol', () => {
      assert.ok(is.symbol(symbol));
    });
  });
});
