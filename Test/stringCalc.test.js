const {add} = require('../lib/stringCalc');

test('Output for Empty string', ()=>{
    expect(add('')).toBe(0);
});

test('Output for String itself is Number', ()=>{
    expect(add('1')).toBe(1);
});

test('Output for String itself is Number', ()=>{
    expect(add('2')).toBe(2);
});

test('Output for String itself is Number', ()=>{
    expect(add('12')).toBe(12);
});

test('Output for String itself is Number', ()=>{
    expect(add('257')).toBe(257);
});