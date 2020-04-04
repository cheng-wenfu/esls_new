import { Effect, Reducer} from 'umi';

import { StyleDataItem, DispmDataItem }  from './styleData';

import { getStylesData, getDispmsData} from '@/services/styles'

export interface StylesModelState {
  stylesData?: StyleDataItem[];
  dispmsData?: DispmDataItem[];
}

interface StylesModelType {
  namespace: string;
  state: StylesModelState;
  effects: {
    getStylesData: Effect;
    getDispmsData: Effect;
  }
  reducers: {
    saveStylesData: Reducer<StylesModelState>;
    saveDispmsData: Reducer<StylesModelState>;
  }
}

const Model: StylesModelType = {
  namespace: 'styles',
  state: {
    stylesData: [],
    dispmsData: [],
  },
  effects: {
    *getStylesData({ payload }, { call, put }) {
      const response = yield call(getStylesData, payload);
      yield put({
        type: 'saveStylesData',
        payload: response,
      })
    },

    *getDispmsData({ payload }, { call, put }) {
      const response = yield call(getDispmsData, payload);
      yield put({
        type: 'saveDispmsData',
        payload: response,
      })
    },
  },

  reducers: {
    saveStylesData(state, { payload }) {
      return {
        ...state,
        stylesData: payload.data,
      }
    },

    saveDispmsData(state, { payload }) {
      return {
        ...state,
        dispmsData: payload.data,
      }
    },
  }
}

export default Model;
