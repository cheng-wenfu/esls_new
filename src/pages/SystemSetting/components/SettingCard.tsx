import React from 'react';
import { Dispatch } from 'umi';
import {
  Card,
  Select,
  Row,
  Tabs,
  Switch,
  Button,
  Input,
  Form,
 } from 'antd';


import { ShopDataItem } from '@/models/shopData'

interface SettingCardProps {
  dispatch: Dispatch;
  shopsData: ShopDataItem[];

}

const SettingCard: React.FC<SettingCardProps> = (props) => {
  const { dispatch, shopsData } = props;

  const { TabPane } = Tabs;
  const { Option } = Select;

  return (
    <Card>
      <Row>
        <Select
          style={{ width: '100%' }}
        >
          {
            shopsData.map((value) =>
              <Option value={value.id}>
                {value.name}
              </Option>
            )
          }
        </Select>
      </Row>
      <Row>
        <Tabs>
          <TabPane tab="设置导出文件字段" key="1">
            字段设置：
            <Select
              mode="multiple"
              style={{ width: '100%' }}
              placeholder="Please select"
            >
              <Option value="name">商品名称</Option>
              <Option value="origin">产地</Option>
              <Option value="provider">供应商</Option>
              <Option value="unit">单位</Option>
              <Option value="barcode">商品条码</Option>
              <Option value="qrcode">二维码</Option>
              <Option value="operator">操作员</Option>
              <Option value="importTime">导入时间</Option>
              <Option value="promotionReason">促销原因</Option>
              <Option value="price">原价</Option>
              <Option value="promotePrice">促销价格</Option>
              <Option value="imageUrl">图片链接</Option>
              <Option value="waitUpdate">更新状态</Option>
              <Option value="shelfNumber">商品货号</Option>
              <Option value="spec">商品规格</Option>
              <Option value="category">种类</Option>
              <Option value="regionNames">区域名</Option>
              <Option value="stock">商品库存</Option>
              <Option value="isPromote">是否促销</Option>
              <Option value="promoteTimeGap">促销截止时间</Option>
              <Option value="shopNumber">店铺号码</Option>
              <Option value="computeNumber">统计数目</Option>
              <Option value="isComputeOpen">是否开启计件</Option>
              <Option value="totalWeight">总重</Option>
              <Option value="weightSpec">重量规格</Option>
              <Option value="replenishNumber">补货预警</Option>
              <Option value="isReplenish">是否补货预警</Option>
              <Option value="shopNameAndShopNumber">店铺名和店铺号</Option>
              <Option value="rfu01">自定义字段1</Option>
              <Option value="rfu02">自定义字段2</Option>
              <Option value="rfus01">自定义字段2</Option>
              <Option value="rfus02">自定义字段2</Option>
            </Select>
          </TabPane>
          <TabPane tab="短信验证设置" key="2">
            是否开启短信验证:
            <Switch />
          </TabPane>
          <TabPane tab="盘点" key="3">
            盘点方式:
            <Select
              style={{width: '100%'}}
            >
              <Option value="1">手动盘点</Option>
              <Option value="2">电子成盘点</Option>
            </Select>
            预警门限：
            <Input />
            <Button>确定</Button>
            <Button>盘点清零</Button>
          </TabPane>
          <TabPane tab="改价通知方式" key="4">
            改价通知方式：
            <Select
              style={{width: '100%'}}
            >
              <Option value="1">邮箱</Option>
              <Option value="2">短信</Option>
              <Option value="3">邮箱和短信</Option>
              <Option value="0">不通知</Option>
            </Select>
          </TabPane>
          <TabPane tab="短信参数设置" key="5">
            短信AccessKey:
            <Input/>
            短信AccessSecret:
            <Input/>
            短信签名:
            <Input/>
            短信通知模板ID:
            <Input/>
            短信验证模板ID:
            <Input/>
            <Button>确定</Button>
          </TabPane>
          <TabPane tab="通知邮箱设置" key="6">
            邮箱账号：
            <Input />
            邮箱密码：
            <Input />
            <Button>确定</Button>
          </TabPane>
          <TabPane tab="唤醒个数" key="7">
            唤醒个数：
            <Input />
            <Button>确定</Button>
          </TabPane>
        </Tabs>
      </Row>
    </Card>
  )
}

export default SettingCard;
