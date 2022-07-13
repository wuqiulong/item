import request from '@/utils/request.js'

export const login = (data) => {
  return request({
    url: '/app/v1_0/authorizations',
    method: 'POST',
    data
  })
}
export const sendSms = mobile => {
  return request({
    method: 'GET',
    url: `/app/v1_0/sms/codes/${mobile}`
  })
}
