import request from '@/utils/request';

import { RequestParams } from './data';

interface TagsDataRequestParams extends RequestParams {

}

/**
 *根据条件获取商品信息
 *
 * @param query string 查询条件 可为所有字段 分隔符为单个空格
 * @param queryString string | number 查询条件的字符串
 * @param page number  页码
 * @param count number 数量
 */

export async function getTagsData({page, query = "", queryString = "",  count = 10}: TagsDataRequestParams) {

  const url = `/server/api/tags/?query=${query}&queryString=${queryString}&page=${page}&count=${count}`;
  console.log(url)
  return request(url, {
    method: 'GET',
  })
}

