import { Effect, Reducer } from 'umi';

import { HomeStatisticData, UserOperationLogItem } from './userData';

import { queryCurrent, query as queryUsers, getHomeStatisticData, getUserOperationLogs } from '@/services/user';


export interface CurrentUser {
  avatar?: string;
  name?: string;
  title?: string;
  group?: string;
  signature?: string;
  tags?: {
    key: string;
    label: string;
  }[];
  userid?: string;
  unreadCount?: number;
}

export interface UserModelState {
  currentUser?: CurrentUser;
  homeStatisticData?: HomeStatisticData,  //
  userOperationLogs?: UserOperationLogItem[],
}

export interface UserModelType {
  namespace: 'user';
  state: UserModelState;
  effects: {
    fetch: Effect;
    fetchCurrent: Effect;
    getHomeStatisticData: Effect; //
    getUserOperationLogs: Effect; //
  };
  reducers: {
    saveCurrentUser: Reducer<UserModelState>;
    changeNotifyCount: Reducer<UserModelState>;
    saveHomeStatisticData: Reducer<UserModelState>;
    saveUserOperationLogs: Reducer<UserModelState>;
  };
}

const UserModel: UserModelType = {
  namespace: 'user',

  state: {
    currentUser: {},
    homeStatisticData: {},
    userOperationLogs: [{}]
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryUsers);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchCurrent(_, { call, put }) {
      const response = yield call(queryCurrent);
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
    },

    //TODO:自己分隔符-----------------------------
    *getHomeStatisticData(_, { call, put }) {
      const response = yield call(getHomeStatisticData);
      yield put({
        type: 'saveHomeStatisticData',
        payload: response,
      })
    },

    *getUserOperationLogs({ payload }, { call, put }) {
      const response = yield call(getUserOperationLogs, payload);
      yield put({
        type: 'saveUserOperationLogs',
        payload: response,
      })
    }
  },

  reducers: {
    saveCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload || {},
      };
    },
    changeNotifyCount(
      state = {
        currentUser: {},
      },
      action,
    ) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload.totalCount,
          unreadCount: action.payload.unreadCount,
        },
      };
    },

    //TODO: 自己
    saveHomeStatisticData(state, { payload }) {
      return {
        ...state,
        homeStatisticData: payload.data,
      }
    },

    saveUserOperationLogs(state, { payload }) {
      return {
        ...state,
        userOperationLogs: payload.data,
      }
    }
  },
};

export default UserModel;
