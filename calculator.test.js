const Calculate = require('./calculator')

let output = new Calculate

describe('the sum of numbers', () => {
    test('sum of positive numbers', () => {
        expect(output.add(1,2,6)).toBe(9)
    })
    test('sum of positive and negative numbers', () => {
        expect(output.add(1,-2,4)).toBe(3)
    })
    test('sum of negative numbers', () => {
        expect(output.add(-1,-2,-3)).toBe(-6)
    })
})

describe('the difference of numbers', () => {
    test('difference of positive numbers', () => {
        expect(output.subtract(1,2,6)).toBe(-7)
    })
    test('difference of positive and negative numbers', () => {
        expect(output.subtract(1,-2,4)).toBe(-1)
    })
    test('difference of negative numbers', () => {
        expect(output.subtract(-1,-2,-3)).toBe(4)
    })
})

describe('the product of numbers', () => {
    test('product of positive numbers', () => {
        expect(output.multiply(1,2,6)).toBe(12)
    })
    test('product of positive and negative numbers', () => {
        expect(output.multiply(1,-2,4)).toBe(-8)
    })
    test('product of negative numbers', () => {
        expect(output.multiply(-1,-2,-3)).toBe(-6)
    })
})

describe('the quotient of numbers', () => {
    test('quotient of positive numbers', () => {
        expect(output.divide(6,1,2)).toBe(3)
    })
    test('quotient of positive and negative numbers', () => {
        expect(output.divide(4,1,-2)).toBe(-2)
    })
    test('quotient of negative numbers', () => {
        expect(output.divide(-1,-2,-10)).toBe(-0.05)
    })
})
