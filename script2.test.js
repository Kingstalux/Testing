const reverseString = require('./script2')

test('returns the reverse of a string', () => {
    expect(reverseString('yess')).toBe('ssey')
})