// 商品信息Model
import { Effect, Reducer } from 'umi';

import { GoodDataItem } from './goodData';

import { getGoodsData, getGoodIdData}  from '@/services/goods'

export interface GoodsModelState {
  goodsData?: Array<GoodDataItem>;
}

interface GoodsModelType {
  namespace: string;
  state: GoodsModelState;
  effects: {
    getGoodsData: Effect;
    getGoodIdData: Effect;
  }
  reducers: {
    saveGoodsData: Reducer<GoodsModelState>;
  }
}

const Model: GoodsModelType = {
  namespace: 'goods',
  state: {
    goodsData: [{
      id: 0,
      name: "",
      promotionReason: "",
      price: "",
      promotePrice: "",
      waitUpdate: 0,
      shelfNumber: "",
      stock: "",
      isPromote: 0,
      shopNumber: "",
      tagIdList: [],
    }]
  },

  effects: {
    *getGoodsData({ payload }, { call, put }) {
      const response = yield call(getGoodsData, payload);
      yield put({
        type: 'saveGoodsData',
        payload: response,
      })
    },

    *getGoodIdData({ payload }, { call, put }) {
      const response = yield call(getGoodIdData, payload);
      yield put({
        type: 'saveGoodsData',
        payload: response,
      })
    }
  },

  reducers: {
    saveGoodsData(state, { payload }) {
      return {
        ...state,
        goodsData: payload.data,
      }
    }
  }
};

export default Model;




