import request from '@/utils/request';

import { RequestParams } from './data';

interface TagsDataRequestParams extends RequestParams {

}

/**
 *根据条件获取价签信息
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

/**
 * 获取价签统计数据
 */
export async function getTagStatisticData() {
  return request('/server/api/tags/index', {
    method: 'GET'
  })
}

/**
 * 获取变价超时的价签数据
 * @param page
 */
export async function getOvertimeTagsData(page: number) {
  const url = `/api/tags/overtime?page=${page}$count=10`;
  return request(url, {
    method: 'GET',
  })
}


