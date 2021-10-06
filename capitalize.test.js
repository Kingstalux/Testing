const capitalize = require('./capitalize')

test('returns the given string with the first character capitalized.', () => {
    expect(capitalize('yess')).toBe('Yess')
})
