import request from 'umi-request';

export interface LoginParamsType {
  userName: string;
  password: string;
  mobile: string;
  captcha: string;
  autoLogin: Boolean;
  validateCode: String;
}

export async function fakeAccountLogin(params: LoginParamsType) {
  const tmp = {
    username: params.userName,
    password: params.password,
    rememberMe: params.autoLogin,
    validateCode: params.validateCode,
  };
  return request('/api/login', {
    method: 'POST',
    params: tmp,
  });
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
