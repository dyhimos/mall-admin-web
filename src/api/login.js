import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/v1/manager/umsManager/login',
    method: 'post',
    data: {
      username,
      password
    }/*,
    headers:{
      'X-Requested-With':'XMLHttpRequest',
      'Content-Type':'application/x-www-form-urlencoded'
    }*/
  })
}

export function getInfo() {
  return request({
    url: '/v1/manager/umsManager/getManagerInfo',
    method: 'get',
  })
}

export function logout() {
  return request({
    url: '/admin/logout',
    method: 'post'
  })
}
