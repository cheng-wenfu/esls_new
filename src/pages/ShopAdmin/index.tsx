import React, { useEffect } from 'react';
import { connect, Dispatch } from 'umi';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Row, Card, Table, Col } from 'antd';
import { ConnectState, ShopsModelState } from '@/models/connect';

import ShopTable from './components/ShopTable'



interface ShopAdminProps {
  dispatch: Dispatch;
  shops: ShopsModelState;
}


const ShopAdmin: React.FC<ShopAdminProps> = (props) => {
  const { dispatch, shops } = props;
  useEffect(() => {
    dispatch({
      type: 'shops/getShopsData',
      payload: {
        page: 0,
      }
    })
    dispatch({
      type: 'shops/getHeadShopData',
    })
  }, []);

  const columns = [
    {
      title: '店铺编码',
      dataIndex: 'number'
    },
    {
      title: '店铺名称',
      dataIndex: 'name',
    },
    {
      title: '店长姓名',
      dataIndex: 'manager',
    },
    {
      title: '地址',
      dataIndex: 'address',
    },
    {
      title: '电话',
      dataIndex: 'phone'
    },
    {
      title: '路由器',  //TODO: 索引错误
      dataIndex: 'type',
    }
  ]

  return (
    <PageHeaderWrapper>
      <Row gutter={[8, 24]}>
        <Col span={24}>
          <Card title="总店信息">
            <Table rowKey="id" dataSource={shops.headShopData} columns={columns} pagination={false}/>
          </Card>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={24}>
          <ShopTable dispatch={dispatch} shopsData={shops.shopsData} />
        </Col>
      </Row>
    </PageHeaderWrapper>
  )
}

export default connect(({ shops }: ConnectState) => ({
  shops: shops
}))(ShopAdmin);
