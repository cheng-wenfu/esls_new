import { Effect, Reducer } from 'umi';

import { RouterDataItem } from './routerData';

import { getRoutersData } from '@/services/routers';

export interface RoutersModelState {
  routersData: RouterDataItem[];
}

interface RouterModelType {
  name: string;
  state: RoutersModelState;
  effects: {
    getRoutersData: Effect;
  };
  reducers: {
    saveRoutersData: Reducer<RoutersModelState>;
  };
}


const Model: RouterModelType = {
  name: 'routers',
  state: {
    routersData: [],
  },

  effects: {
    *getRoutersData({ payload }, {call, put}) {
      console.log('payload', payload)
      const response = yield call(getRoutersData, payload);
      yield put({
        type: 'saveRoutersData',
        payload: response,
      })
    }
  },

  reducers: {
    saveRoutersData(state, { payload }) {
      return {
        ...state,
        routersData: payload.data,
      }
    }
  }
}

export default Model;
