import request from '@/utils/request'


export function listUmsUser(params) {
  return request({
    url: '/v1/manager/umsManager/listUmsUser',
    method: 'post',
    data: params
  })
}

export function getUmsUser(params) {
  return request({
    url: '/v1/manager/umsManager/getUmsUser/' + params,
    method: 'get'
  })
}

export function saveMemberInfo(params) {
  return request({
    url: '/v1/manager/umsManager/saveMemberInfo',
    method: 'post',
    data: params
  })
}



