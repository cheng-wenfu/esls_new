import request from '@/utils/request';

export interface LoginParamsType {
  username: string;
  password: string;
  //mobile: string;
  //captcha: string;
}

export async function fakeAccountLogin(params: LoginParamsType) {
  return request('/server/api/user/login', {
    method: 'POST',
    data: params,
    getResponse: true,
  });
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
