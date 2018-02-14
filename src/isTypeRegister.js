/**
 * test is type was defined
 *
 * @flow
 */

import type { TypeDefine, Type } from './'

export default function isTypeRegister(libs: Array<TypeDefine>, type: Type): boolean {
  for(let i = 0; i < libs.length; i++) {
    const item = libs[i]
    const define = Array.isArray(item) ? item[0] : item
    if(define === type) {
      return true
    }
  }

  return false
}
