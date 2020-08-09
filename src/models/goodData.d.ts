
//单件商品数据类型
export interface GoodDataItem {
  id: number;  //商品ID
  name: string;  //商品名称
  origin?: string;  //商品产地
  provider?: string; //商品供应商
  unit?: string;  //商品单位
  barCode?: string;  //商品条码
  qrCode?: string;  //商品二维码
  operator?: string; //操作员
  importTime?: string;  //导入时间
  promotionReason: string;  //促销理由
  price: string;  //商品原价
  promotePrice: string;  //商品促销价
  imageUrl?: string;  //图片链接
  waitUpdate: 0 | 1; //等待更新 0等待 1已经更新
  shelfNumber: string; //商品货号
  spec?: string;  //商品规格
  category?: string; //商品种类
  regionNames?: string; // 需要修改的区域名
  stock: sting; //商品库存
  isPromote: 0 | 1; //是否促销 0 不促销 1促销
  promoteTimeGap?: string; //TODO?: 未知字段
  shopNumber: string;  //所属店铺号码
  computeNumber?: number; //统计数目
  isComputeOpen?: number; //是否开启计件功能 TODO?: 字段值？
  totalWeight?: string;  //总重  TODO?:字段意思
  weightSpec?: number;  //重量规格
  replenishNumber?: number;  //补货门限
  isReplenish?: number;  //是否补货预警  TODO?: 字段值？
  shopNameAndShopNumber?: string; //店铺名和店铺号
  rfu01?: string;   //自定义字段
  rfu02?: string;
  rfus01?: string;
  rfus02?: string;
  tagIdList?: Array<number>;  //对应价签ID表, 为空表示未绑定
}


