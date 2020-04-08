import request from '@/utils/request';


export async function getLicenseData() {
  return request('/server/api/license', {
    method: 'GET',
  })
};
