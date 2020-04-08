import request from '@/utils/request';

interface CycleJobsDataRequestParams {
  page: number;
  count: number;
}

export async function getCycleJobsData({page, count = 6}:CycleJobsDataRequestParams ) {
  const url = `/server/api/cyclejobs/?page=${page}&count=${count}`;
  return request(url, {
    method: 'GET',
  })
}
