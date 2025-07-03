const {add} = require('../lib/stringCalc');

test('Output for Empty string', ()=>{
    expect(add('')).toBe(0);
});

test('Output for String itself is Number', ()=>{
    expect(add('1')).toBe(1);
});