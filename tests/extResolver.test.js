/**
 * @jest
 */

test('should return blank string', () => {
  const resolve = require('../src/extResolver').default
  expect(resolve(['foo'], 'foo')).toBe('')
})

test('should return blank string when not find', () => {
  const resolve = require('../src/extResolver').default
  expect(resolve(['foo'], 'bar')).toBe('')
})

test('should return ext name', () => {
  const resolve = require('../src/extResolver').default
  expect(resolve([['foo', 'bar']], 'foo')).toBe('.bar')
})

test('should return ext name when start with dot', () => {
  const resolve = require('../src/extResolver').default
  expect(resolve([['foo', '.bar']], 'foo')).toBe('.bar')
})
