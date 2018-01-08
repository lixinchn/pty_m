import fetch from '../utils/fetch'


export function GetSliceInfo() {
  return fetch({
    url: 'slice.php?from=m',
    method: 'get',
  })
}
