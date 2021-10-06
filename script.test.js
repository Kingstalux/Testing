const stringLength = require('./script')

test('give the number of characters in the string', () => {
    expect(stringLength('yess')).toBe(4)
    expect(stringLength('')).toBe(undefined)
    expect(stringLength('yesnoyesnoyes')).toBe(undefined)
})