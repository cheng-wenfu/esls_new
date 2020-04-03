import request from '@/utils/request';

/**
 * 获取首页统计数据
 */
export async function getHomeStatisticData() {
  return request('/server/api/common/index', {
    method: 'GET',
  });
}

/**
 * 获取用户操作日志
 *
 */
export async function getUserOperationLogs(page: number, count = 7) {
  const url = `/server/api/operationLogs/?page=${page}&count=${count}`;

  return request(url, {
    method: 'GET',
  })
}



//以下不需要
export async function query(): Promise<any> {
  return request('/api/users');
}

export async function queryCurrent(): Promise<any> {
  return request('/api/currentUser');
}

export async function queryNotices(): Promise<any> {
  return request('/api/notices');
}
