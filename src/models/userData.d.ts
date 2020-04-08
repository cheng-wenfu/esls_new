//商品首页统计数据
export interface HomeStatisticData {
  goodSize: number;   //商品数量
  tagSize: number;    //价签数量
  routerSize: number;  //路由器数量
  styleSzie: number;   //样式数量
  shopSize: number;    //店铺数量
  userSize: number;    //用户数量
  normalTagSize: number;
  noBindTagSize: number;
  noIsWorkingTagSize: number;
  forbiddenTagSize: number;
  normalRouterSize: number;
  forbiddenRouterSize: number;
  noIsWorkingRouterSize: number;
}

//用户操作数据条
export interface UserOperationLogItem {
  id?: number;
  logDescription?: string;
  actionArgs?: string;
  userName?: string;
  className?: string;
  methodName?: string;
  ip?: string;
  createTime?: number;
  modelName?: string;
  action?: string;
  succed?: string;
  message?: string;
  execTime?: number;
}

//用户数据条目
export interface UserDateItem {
  id: number;
  name: string;
  passwd: string;
  telephone: string;
  address: string;
  department: string;
  createTime: string;
  lastLoginTime: string;
  status: number;
  activateStatus: number;
  mail: string;
  avatarUrl: string;
  loginType: string;
  shopId: number;
  salt: string;
  isShopAdmin: number;
  realName: string;
  shopNameAndShopNumber: string;
  systemVersion: {}
  roleList: string;
}

//登录用户信息
export interface LoginUserInfo {
  id?: number;
  name?: string;
  passwd?: string;
  telephone?: string;
  address?: string;
  department?: string;
  createTime?: string;
  lastLoginTime?: string;
  status?: number;
  activateStatus?: number;
  mail?: string;
  avatarUrl?: string;
  loginType?: string;
  shopId?: number;
  salt?: string;
  isShopAdmin?: number;
  realName?: string;
  shopNameAndShopNumber?: string;
  systemVersion?: {};
  roleList?: string;
}

