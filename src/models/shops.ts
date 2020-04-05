import { Effect, Reducer } from 'umi';

import { ShopDataItem } from './shopData';

import { getShopsData, getHeadShopData } from '@/services/shops';


export interface ShopsModelState {
  shopsData?: ShopDataItem[],
  headShopData?: ShopDataItem[]
}

interface ShopsModelType {
  namespace: string;
  state: ShopsModelState;
  effects: {
    getShopsData: Effect;
    getHeadShopData: Effect;  //TODO:获取总店信息，暂时不要
  }
  reducers: {
    saveShopsData: Reducer<ShopsModelState>;
    saveHeadShopData: Reducer<ShopsModelState>;
  }
}


const Model: ShopsModelType = {
  namespace: 'shops',
  state: {
    shopsData: [],
    headShopData: [],
  },

  effects: {
    *getShopsData({ payload }, { call, put }) {
      const response = yield call(getShopsData, payload);
      yield put({
        type: 'saveShopsData',
        payload: response,
      })
    },

    *getHeadShopData( _, { call, put }) {
      const response = yield call(getHeadShopData);
      yield put({
        type: 'saveHeadShopData',
        payload: response,
      })
    }
  },

  reducers: {
    saveShopsData(state, { payload }) {
      return {
        ...state,
        shopsData: payload.data,
      }
    },
    saveHeadShopData(state, { payload }) {
      return {
        ...state,
        headShopData: payload.data,
      }
    }

  }

}

export default Model;
