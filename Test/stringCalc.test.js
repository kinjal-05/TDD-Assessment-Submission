const {add} = require('../lib/stringCalc');

test('Output for Empty string', ()=>{
    expect(add('')).toBe(0);
});