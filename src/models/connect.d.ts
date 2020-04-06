import { MenuDataItem } from '@ant-design/pro-layout';
import { GlobalModelState } from './global';
import { DefaultSettings as SettingModelState } from '../../config/defaultSettings';
import { UserModelState } from './user';
import { StateType } from './login';
import { GoodsModelState } from './goods';
import { TagsModelState } from './tags';
import { StylesModelState } from './styles';
import { ShopsModelState } from './shops';
import { RoutersModelState } from './routers';

export {
  GlobalModelState,
  SettingModelState,
  UserModelState,
  GoodsModelState,
  TagsModelState,
  StylesModelState,
  ShopsModelState,
  RoutersModelState,
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
  styles: StylesModelState;
  shops: ShopsModelState;
  routers: RoutersModelState;
}

export interface Route extends MenuDataItem {
  routes?: Route[];
}
