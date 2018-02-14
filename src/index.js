/**
 * pods-webpack-plugin
 *
 * syntax:
 *
 *  @/TYPE[/NAMESPACE]/NAME
 *
 * @flow
 */

export type Prefix = string
export type Type = string
export type Ext = string
export type TypeDefine = Type | [Type, Ext]

export type Options = {
  prefix: Prefix,
  context: ?string,
  warning: boolean,
  dir: Array<TypeDefine>
}

export { default as default } from './plugin'
