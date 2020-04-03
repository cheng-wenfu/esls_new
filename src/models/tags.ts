import { Effect, Reducer } from 'umi';

import { TagDataItem } from './tagData';

import { getTagsData } from '@/services/tags';


export interface TagsModelState {
  tagsData?: Array<TagDataItem>;
}

interface TagsModelType {
  namespace: string;
  state: TagsModelState;
  effects: {
    getTagsData: Effect;
    //getGoodIdData: Effect;
  }
  reducers: {
    saveTagsData: Reducer<TagsModelState>;
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
  },

  reducers: {
    saveTagsData(state, { payload }) {
      return {
        ...state,
        tagsData: payload.data,
      }
    }
  }
}

export default Model;

