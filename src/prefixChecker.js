/**
 * check '@' was defined in resolve.alias
 *
 * @flow
 */

import type { Prefix } from './'

export default function checkPrefix(options: Object, prefix: Prefix): boolean {
  const alias = options.resolve.alias || {}
  if(alias[prefix]) {
    return false
  }

  return true
}
