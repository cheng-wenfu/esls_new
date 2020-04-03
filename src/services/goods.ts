import request from '@/utils/request';

import { RequestParams } from './data';

interface GoodsDataRequestParams extends RequestParams {

}

/**
 *根据条件获取商品信息
 *
 * @param query string 查询条件 可为所有字段 分隔符为单个空格
 * @param queryString string | number 查询条件的字符串
 * @param page number  页码
 * @param count number 数量
 */

export async function getGoodsData({page, query = "", queryString = "",  count = 10}: GoodsDataRequestParams) {
  const url = `/server/api/goods/?query=${query}&queryString=${queryString}&page=${page}&count=${count}`;
  console.log(url)
  return request(url, {
    method: 'GET',
  })
}

/**
 * 获取指定ID商品信息
 * @param id number 商品ID
 */
export async function getGoodIdData(id :number)  {
  const url = `/server/api/goods/${id}`;
  return request(url, {
    method: 'GET',
  })
}
