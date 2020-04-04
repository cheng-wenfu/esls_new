//样式信息息数据类型
export interface StyleDataItem {
  id: number;
  styleNumber: string;
  styleType: string;
  name: string;
  width: number;
  height: number;
  isPromote: 1 | 0; //是否促销 0 不促销 1促销
  tagIdList: number[];
}

//单个样式结构（dispm)数据类型
export interface DispmDataItem {
  id: number;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  sourceColumn: string;
  columnType: string;
  backgroundColor: number;
  text: string;
  startText: string;
  endText: string;
  fontType: string;
  fontFamily: string;
  fontColor: number;
  fontSize: number;
  status: number;
  imageUrl: string;
  backup: string;
  regionId: number;
  styleId: number;
}
