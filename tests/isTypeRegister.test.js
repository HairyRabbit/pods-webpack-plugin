/**
 * @jest
 */

test('should return true', () => {
  const check = require('../src/isTypeRegister').default
  expect(check(['foo'], 'foo')).toBe(true)
})

test('should return true when types was complex', () => {
  const check = require('../src/isTypeRegister').default
  expect(check([['foo']], 'foo')).toBe(true)
})

test('should return false', () => {
  const check = require('../src/isTypeRegister').default
  expect(check(['foo'], 'bar')).toBe(false)
})
