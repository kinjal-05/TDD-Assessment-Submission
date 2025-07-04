const {add} = require('../lib/stringCalc');
const assert = require('assert'); 

const cases = [
  ['', 0],
  ['1', 1],
  ['2', 2],
  ['12', 12],
  ['257', 257],
  ['1,2', 3],
  ['1,5', 6],
  ['1,5,6', 12],
  ['1, 67, 999', 1067],
];


describe('String Calculator', () => {
  cases.forEach(([input, expected]) => {
    it(`returns ${expected} for "${input}"`, () => {
      assert.strictEqual(add(input), expected);
    });
  });
});
