import request from '@/utils/request';

import { RequestParams } from './data';

interface StylesDataRequestParams extends RequestParams {

}

export async function getStylesData({page, query = "", queryString = "",  count = 10}: StylesDataRequestParams) {
  const url = `/server/api/styles/?query=${query}&queryString=${queryString}&page=${page}&count=${count}`;
  return request(url, {
    method: 'GET',
  })
};

interface isPromoteRequestParams {
  styleNumber: string;
  isPromote: 1 | 0; //
}


export async function getIsPormoteStyleData({ styleNumber, isPromote }: isPromoteRequestParams) {
  const url = `/server/api/style/promote?styleNumber=${styleNumber}&isPromote=${isPromote}`;
  return request(url, {
    method: 'GET',
  })
}



export async function getDispmsData(id:number) {
  const url = `/server/api/style/dispms/${id}`;
  return request(url, {
    method: 'GET',
  })
};
