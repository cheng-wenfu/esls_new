import { MenuDataItem } from '@ant-design/pro-layout';
import { GlobalModelState } from './global';
import { DefaultSettings as SettingModelState } from '../../config/defaultSettings';
import { UserModelState } from './user';
import { StateType } from './login';
import { GoodsModelState } from './goods';
import { TagsModelState } from './tags'

export {
  GlobalModelState,
  SettingModelState,
  UserModelState,
  GoodsModelState,
  TagsModelState,
};

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    global?: boolean;
    menu?: boolean;
    setting?: boolean;
    user?: boolean;
    login?: boolean;
  };
}

export interface ConnectState {
  global: GlobalModelState;
  loading: Loading;
  settings: SettingModelState;
  user: UserModelState;
  login: StateType;
  goods: GoodsModelState;
  tags: TagsModelState;
}

export interface Route extends MenuDataItem {
  routes?: Route[];
}
