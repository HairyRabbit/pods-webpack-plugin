/**
 * find file extname, default to blank string
 *
 * @flow
 */

import type { TypeDefine, Type } from './'

export default function resolveTypeExt(libs: Array<TypeDefine>, type: Type): string {
  const lib = libs.find(lib => {
    const define = Array.isArray(lib) ? lib[0] : lib
    return define === type
  })

  if(!lib) {
    return ''
  } else {
    return Array.isArray(lib) ? (lib[1].startsWith('.') ? lib[1] : ('.' + lib[1])) : ''
  }
}
