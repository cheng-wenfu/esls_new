import { Effect, Reducer } from 'umi';

import { RouterDataItem } from './routerData';

import { getRoutersData } from '@/services/routers';

export interface RouterModelState {
  routersData: RouterDataItem[];
}

interface RouterMOdelType {
  name: string;
  state: RouterModelState;
  effect: {
    getRoutersData: Effect;
  };
  reducers: {
    saveRoutersData: Reducer<RouterModelState>;
  }
}


const Model: RouterMOdelType = {
  name: 'routers',
  state: {
    routersData: [],
  },

  effect: {
    *getRoutersData({ payload }, {call, put}) {
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
