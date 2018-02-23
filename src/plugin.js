/**
 * plugin
 *
 * @flow
 */

import path from 'path'
import DefaultOptions from './defaultOptions'
import checkPrefix from './prefixChecker'
import isTypeRegister from './isTypeRegister'
import resolveTypeExt from './extResolver'
import sliceLoaderPath from './loaderPathResolver'
import type { Compiler } from 'webpack'
import type { Options } from './'

export default class PodsWebpackPlugin {
  options: Options;

  constructor(options: Options) {
    this.options = {
      ...DefaultOptions,
      ...options
    }
  }

  apply(compiler: Compiler): void {
    const webpackOptions = compiler.options
    const context = this.options.context || compiler.context
    if(!checkPrefix(webpackOptions, this.options.prefix)) {
      throw new Error(`[PodsPlugin] The prefix '@' already defined in \
'options.resolve.alias', please use another one:

new PodsPlugin({
  prefix: PREFIXSTRING
------------^ define your new prefix string
})
`)
    }

    compiler.plugin('normal-module-factory', nmf => {
      nmf.plugin('before-resolve', (data, callback) => {
        const [ prefix, request ] = sliceLoaderPath(data.request)
        if(!request.startsWith('@/')) {
          callback(null, data)
          return
        }

        const [_, type, ...file] = request.split('/')
        if(!isTypeRegister(this.options.dir, type)) {
          if(this.options.warning) {
            console.warn(`The path ${data.request} matched prefix, \
but ${type} not defined in dir:

new PodsPlugin({
  lib: [
    ${type}
-----^ add to lib options
  ]
})
`)
          }
          callback(null, data)
          return
        }
        const ext = resolveTypeExt(this.options.dir, type)
        data.request = prefix + path.resolve(context, `${file.join('/')}/${type}${ext}`)
        callback(null, data)
      })
    })
  }
}
