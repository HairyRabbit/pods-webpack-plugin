/**
 * @jest
 */

test('should throw when prefix not useable', () => {
  const Plugin = require('../src/plugin').default
  const plugin = new Plugin()
  const runner = () => {
    plugin.apply({
      options: {
        resolve: {
          alias: {
            '@': 'foo'
          }
        }
      }
    })
  }
  expect(runner).toThrow()
})
