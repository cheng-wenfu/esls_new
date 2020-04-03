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
