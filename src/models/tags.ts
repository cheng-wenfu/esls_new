import { Effect, Reducer } from 'umi';

import { TagDataItem, TagStatisticData } from './tagData';

import { getTagsData, getTagStatisticData, getOvertimeTagsData } from '@/services/tags';


export interface TagsModelState {
  tagsData?: Array<TagDataItem>;
  tagStatisticData?: TagStatisticData;
}

interface TagsModelType {
  namespace: string;
  state: TagsModelState;
  effects: {
    getTagsData: Effect;
    getTagStatisticData: Effect;
    getOvertimeTagsData: Effect;
  }
  reducers: {
    saveTagsData: Reducer<TagsModelState>;
    saveTagStatisticData: Reducer<TagsModelState>;
  }
}

const Model: TagsModelType = {
  namespace: 'tags',
  state: {
    tagsData: [{
      id: 0,
      power: "",
      tagRssi: "",
      apRssi: "",
      forbidState: 0,
      waitUpdate: 0,
      execTime: "",
      screenType: "",
      routerBarCodeAndChannelId: "",
    }]
  },

  effects: {
    *getTagsData({ payload }, { call, put}) {
      const response = yield call(getTagsData, payload);
      yield put({
        type: 'saveTagsData',
        payload: response,
      })
    },

    *getTagStatisticData(_, { call, put }) {
      const response = yield call(getTagStatisticData);
      yield put({
        type: 'saveTagStatisticData',
        payload: response,
      })
    },

    *getOvertimeTagsData({ payload }, { call, put }) {
      const response = yield call(getOvertimeTagsData, payload);
      yield put({
        type: 'saveTagsData',
        payload: response,
      })
    }
  },

  reducers: {
    saveTagsData(state, { payload }) {
      return {
        ...state,
        tagsData: payload.data,
      }
    },
    saveTagStatisticData(state, { payload }) {
      return {
        ...state,
        tagStatisticData: payload.data,
      }
    }
  }
}

export default Model;

