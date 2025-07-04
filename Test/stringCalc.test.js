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

const negativeCases = [
  ['-1', '-1'],
  ['2,-3,4', '-3'],
  ['//;\n-1;2;-3', '-1,-3'],
  ['1,-4,-9,5', '-4,-9']
];

describe('String Calculator', () => {
  cases.forEach(([input, expected]) => {
    it(`returns ${expected} for "${input}"`, () => {
      assert.strictEqual(add(input), expected);
    });
  });
});

describe('String Calculator', () => {
  negativeCases.forEach(([input, expected]) => {
    it(`returns ${expected} for "${input}"`, () => {
      assert.strictEqual(add(input), expected);
    });
  });
});
