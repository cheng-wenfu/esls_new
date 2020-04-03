export interface TagDataItem {
  id: number;
  power: string;
  tagRssi: string;
  apRssi: string;
  state?: 0 | 1  //是否绑定 0否 1是
  hardwareVersion?: string;
  softwareVersion?: string;
  forbidState: 1 | 0; // 使用状态 1禁用
  waitUpdate: 1 | 0; //0 等待  1 变价完成
  execTime: "" | number;  //空字符串表示超时
  completeTime?: string;
  barCode?: string;
  tagAddress?: string;
  screenType: string;
  resolutionWidth?: string;
  resolutionHeight?: string;
  isWorking?: 1 | 0; //通讯状态 1可用
  goodId?: number; //指向指定ID商品
  styleId?: number;
  routerId?: number;
  goodNumber?: string;
  computeTime?: string;
  totalWeight?: string;
  measurePower?: string;
  isReplenish?: number;  //补货预警
  goodIsComputeOpen?: string;
  goodBarCodeAndName?: string;
  routerBarCodeAndChannelId: string;  //AP信道
  shopNameAndShopNumber?: string;
  styleIsPromote?: number;
  styles?: [{}];
  style?: {};
}

export interface TagStatisticData {
  overTimeTagSize: number;
  allSize: number;
  forbidTagSize: number;
  waitUpdateTagSize: number;
  normalTagSize: number;
}
