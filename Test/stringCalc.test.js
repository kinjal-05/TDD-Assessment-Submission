const {add , getSum} = require('../lib/stringCalc');
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
  ['//\n\n1\n2', 3],
  ['10009,3',3],
  ['//[***]\n1***2', 3],
  ['//[***]\n1***2***4***1', 8]
];

const sumCases = [
  [[], 0],
  [[5], 5],
  [[1, 2, 3], 6],
  [[-2, -3], -5],
  [[1, -2, 3], 2],
  [[100, 200, 300], 600],
  [[1.5, 2.5, -4], 0]
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

negativeCases.forEach(([input, negatives]) => {
    it(`throws "negative numbers not allowed ${negatives}" for "${input}"`, () => {
      assert.throws(
        () => add(input),
        new RegExp(`^negative numbers not allowed ${negatives}$`)
      );
    });
  });

describe('Utility – getSum()', () => {
  sumCases.forEach(([arr, expected]) => {
    it(`returns ${expected} for [${arr}]`, () => {
      assert.strictEqual(getSum(arr), expected);
    });
  });
});