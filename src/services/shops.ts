import request from '@/utils/request';

import { RequestParams } from './data';

interface ShopDataRequestParams extends RequestParams {

}

export async function getShopsData({page, query = "", queryString = "",  count = 6}: ShopDataRequestParams) {
  const url = `/server/api/shops/?query=${query}&queryString=${queryString}&page=${page}&count=${count}`;
  return request(url, {
    method: 'GET'
  })
};

/**
 * 获取总店信息
 */
export async function getHeadShopData() {
  const url = '/server/api/shops/?query=type&queryString=1';
  return request(url, {
    method: 'GET'
  })
}
