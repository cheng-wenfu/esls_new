export interface RouterDataItem {
  id: number;
  mac: string;
  ip: string;
  port: number;
  channelId: string;
  state: number;
  softVersion: string;
  frequency: string;
  hardVersion: string;
  execTime: number;
  barCode: string;
  isWorking: 0 | 1;
  completeTime: string;
  outNetIp: string;
  shopId: number;
  type: number;
  number: string;
  fatherShop: string;
  name: string;
  manager: string;
  address: string;
  account: string;
  password: string;
  phone: string;
}
