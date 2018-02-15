/**
 * test the path was the patch load path, such as 'style-loader'
 *
 * @flow
 */

export default function sliceLoaderPathPrefix(request: string): [string, string] {
  const idx = request.lastIndexOf('!')
  if(~idx) {
    return [request.substr(0, idx + 1), request.substr(idx + 1)]
  } else {
    return ['', request]
  }
}
