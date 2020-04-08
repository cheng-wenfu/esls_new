import { Effect, Reducer } from 'umi';

import {  CycleJobDataItem } from './cycleJobData';

import { getCycleJobsData } from '@/services/cycleJob';

export interface CycleJobModelState {
  cycleJobsData?: CycleJobDataItem[];
}

interface CycleJobModelType {
  namespace: string;
  state: CycleJobModelState;
  effects: {
    getCycleJobsData: Effect;
  };
  reducers: {
    saveCycleJobsData: Reducer;
  }
}

const Model: CycleJobModelType = {
  namespace: 'cycleJob',
  state: {
    cycleJobsData: [],
  },
  effects: {
    *getCycleJobsData({ payload }, {call, put}) {
      const response = yield call(getCycleJobsData, payload);
      yield put({
        type: 'saveCycleJobsData',
        payload: response,
      })
    }
  },
  reducers: {
    saveCycleJobsData(state, { payload }) {
      return {
        ...state,
        cycleJobsData: payload.data,
      }
    },
  }
}


export default Model;
