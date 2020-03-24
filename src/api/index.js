import http from '@/http/index'

export function httpGet(query) {
  console.log('获取后端接口');
  return http({
    url: '/',
    method: 'get',
    params: query
  })
}

export function httpPost(query) {
    return http({
      url: '',
      method: 'post',
      data: query
    })
  }