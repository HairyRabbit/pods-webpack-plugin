/**
 * @jest
 */

test('should return prefix request tuple', () => {
  const resolve = require('../src/loaderPathResolver').default
  expect(resolve('foo!bar')).toEqual(['foo!', 'bar'])
})

test('should return prefix request tuple when normal request', () => {
  const resolve = require('../src/loaderPathResolver').default
  expect(resolve('bar')).toEqual(['', 'bar'])
})

test('should return prefix request tuple when multi chain', () => {
  const resolve = require('../src/loaderPathResolver').default
  expect(resolve('foo!bar!baz')).toEqual(['foo!bar!', 'baz'])
})
