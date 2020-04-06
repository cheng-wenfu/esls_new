import { Effect, Reducer } from 'umi';

import { HomeStatisticData, UserOperationLogItem, UserDateItem } from './userData';

import {
  queryCurrent,
  query as queryUsers,

  getHomeStatisticData,
  getUserOperationLogs,
  getUsersData,
} from '@/services/user';


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
  homeStatisticData?: HomeStatisticData;
  currentUser?: CurrentUser;
  userOperationLogs?: UserOperationLogItem[];
  usersData?: UserDateItem[];
}

export interface UserModelType {
  namespace: 'user';
  state: UserModelState;
  effects: {
    fetch: Effect;
    fetchCurrent: Effect;
    getHomeStatisticData: Effect; //
    getUserOperationLogs: Effect; //
    getUsersData: Effect;
  };
  reducers: {
    saveCurrentUser: Reducer<UserModelState>;
    changeNotifyCount: Reducer<UserModelState>;
    saveHomeStatisticData: Reducer<UserModelState>;
    saveUserOperationLogs: Reducer<UserModelState>;
    saveUsersData: Reducer<UserModelState>
  };
}

const UserModel: UserModelType = {
  namespace: 'user',

  state: {
    currentUser: {},
    homeStatisticData: {
      goodSize: 0,
      tagSize: 0,
      routerSize: 0,
      styleSzie: 0,
      shopSize: 0,
      userSize: 0,
      normalTagSize: 0,
      noBindTagSize: 0,
      noIsWorkingTagSize: 0,
      forbiddenTagSize: 0,
      normalRouterSize: 0,
      forbiddenRouterSize: 0,
      noIsWorkingRouterSize: 0,
    },
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
    },

    *getUsersData({ payload }, { call, put }) {
      const response = yield call(getUsersData, payload);
      yield put({
        type: 'saveUsersData',
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
    },
    saveUsersData(state, { payload }) {
      return {
        ...state,
        usersData: payload.data,
      }
    }
  },
};

export default UserModel;
