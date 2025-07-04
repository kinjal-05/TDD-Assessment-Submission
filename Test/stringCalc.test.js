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
  ['1\n2,3', 6],
  ['11\n2\n,66,88', 167],
  ['//;\n1;2', 3],
  ['//\n\n1\n2',3],
  ['//\t\n1\t2\t3',6],
  ['//\\\n1\\2', 3],
  ['//\"\n1\"2\"3\"4', 10],
  ['//\t\n1\t2\t3', 6],
  ['//\n\n1\n2', 3]
];


describe('String Calculator', () => {
  cases.forEach(([input, expected]) => {
    it(`returns ${expected} for "${input}"`, () => {
      assert.strictEqual(add(input), expected);
    });
  });
});
