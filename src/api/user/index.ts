import request from '@/utils/request'

import type { loginFrom, loginResponseData, userResponseData } from './type'

enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

export const reqLogin = (data: loginFrom) => request.post<any, loginResponseData>(API.LOGIN_URL, data)

export const reqUserInfo = () => request.post<any, userResponseData>(API.USERINFO_URL)

