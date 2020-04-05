import React, { useState } from 'react';
import { Table, Button, Modal, Card } from 'antd';
import { Dispatch } from 'umi';

import AddShopsForm from './AddShopsForm';

import { ShopDataItem } from '@/models/shopData';

interface ShopTableProps {
  dispatch: Dispatch;
  shopsData: ShopDataItem[] | undefined;
}

const ShopTable: React.FC<ShopTableProps> = ({ dispatch, shopsData }) => {
  const [current, setCurrent] = useState(1);
  const [visible, setVisible] = useState<boolean>(false);

  const handleRefresh = () => {
    dispatch({
      type: 'shops/getShopsData',
      payload: {
        page: current - 1,
      }
    })
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleModalOk = () => {
    setVisible(false);
  };

  const handleModalCancel = () => {
    setVisible(false);
  };

  const pagination = {
    total: 50,
    current: current,
    onChange: (page: number) => {
      setCurrent(page);
      dispatch({
        type: 'goods/getGoodsData',
        payload: {
          page: page - 1,
        }
      });
    },
  };

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
    <div>
      <Card
        title="分店信息"
        extra={
          <div className="buttonContainer">
            <Button type="primary" onClick={showModal}>添加店铺</Button>
            <Button type="primary" onClick={handleRefresh}>刷新</Button>
          </div>
        }
      >
        <Table
          rowKey="id"
          dataSource={shopsData}
          columns={columns}
          pagination={pagination}
        />
        <Modal
          title="添加店铺"
          visible={visible}
          onOk={handleModalOk}
          onCancel={handleModalCancel}
          width={900}
        >
          <AddShopsForm />
        </Modal>
      </Card>
    </div>
  )
}


export default ShopTable;

