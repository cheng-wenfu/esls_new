import request from '@/utils/request';

import { RequestParams } from './data';

interface RoutersDataRequestParams extends RequestParams {

}


export async function getRoutersData({page, query = "", queryString = "",  count = 6}: GoodsDataRequestParams) {
  const url = `/server/api/routers/?query=${query}&queryString=${queryString}&page=${page}&count=${count}`;
  console.log(url)
  return request(url, {
    method: 'GET',
  })
}
