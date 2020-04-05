export interface ShopDataItem {
  id: number;
  type: number;
  number: string;  //店铺号码
  fatherShop: string;  //总店编号
  name: string;
  manager: string;
  address: string;
  account: string;
  phone: string;
  routers: [];
}
