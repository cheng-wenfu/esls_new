import { Reducer, Effect } from 'umi';

import { LicenseData } from './license_backData';

import { getLicenseData } from '@/services/licen_backup';

export interface LicenseBackupModelState {
  license?: LicenseData;
}

interface LicenseBackupModelType {
  namespace: string;
  state: LicenseBackupModelState;
  effects: {
    getLicenseData: Effect;
  };
  reducers: {
    saveLicenseData: Reducer<LicenseBackupModelState>;
  }
}

const Model: LicenseBackupModelType = {
  namespace: 'licenseBackup',
  state: {
    license: {}
  },
  effects: {
    *getLicenseData(_, { call, put }) {
      const response = yield call(getLicenseData)
      yield put({
        type: 'saveLicense',
        payload: response,
      })

    },
  },

  reducers: {
    saveLicenseData(state, { payload }) {
      return {
        ...state,
        license: payload.data
      }
    },
  },
}

export default Model;
