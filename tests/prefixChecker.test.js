/**
 * @jest
 */

test('should return false', () => {
  const check = require('../src/prefixChecker').default
  expect(check({ resolve: { alias: { '@': 'foo' }}}, '@')).toBe(false)
})

test('should return true when not conflict', () => {
  const check = require('../src/prefixChecker').default
  expect(check({ resolve: { alias: { '@': 'foo' }}}, '@')).toBe(false)
})

test('should return true', () => {
  const check = require('../src/prefixChecker').default
  expect(check({ resolve: { alias: {}}}, '@')).toBe(true)
})
