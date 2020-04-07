import React, { useState } from 'react';
import { Table, Button, Modal, Card } from 'antd';
import { Dispatch } from 'umi';

import AddGoodsForm from './AddGoodsFrom';

import { GoodDataItem } from '@/models/goodData';

import styles from './GoodsTable.less';

interface GoodsTableProps {
  goodsData: Array<GoodDataItem> | undefined;
  dispatch: Dispatch;
}

const GoodsTable: React.FC<GoodsTableProps> = ({ goodsData, dispatch }) => {
  const [current, setCurrent] = useState(1);
  const [visible, setVisible] = useState(false);

  const onAddGood = values => {
    console.log('Received values of form: ', values);
    setVisible(false);
  }

  const onCancel = () => {
    setVisible(false)
  }

  const handleRefresh = () => {
    dispatch({
      type: 'goods/getGoodsData',
      payload: {
        page: current - 1
      },
    });
  }

  // const showModal = () => {
  //   setVisible(true);
  // };

  // const handleModalOk = () => {
  //   setVisible(false);
  // };

  // const handleModalCancel = () => {
  //   setVisible(false);
  // };

  const pagination = {
    total: 200,
    current: current,
    onChange: (page: number) => {
      setCurrent(page);
      dispatch({
        type: 'goods/getGoodsData',
        payload: {
          page: page - 1
        }
      });
    },
  };
  const columns = [
    {
      title: '商品名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '原价',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '库存',
      dataIndex: 'stock',
      key: 'stock',
    },
    {
      title: '促销价格',
      dataIndex: 'promotePrice',
      key: 'promotePrice',
    },
    {
      title: '是否促销',
      dataIndex: 'isPromote',
      key: 'isPromote',
    },
    {
      title: '店铺',
      dataIndex: 'shopNumber',
      key: 'shopNumber',
    },
    {
      title: '货号',
      dataIndex: 'shelfNumber',
      key: 'shelfNumber',
    },
    {
      title: '是否绑定',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '更新状态',
      dataIndex: 'waitUpdate',
      key: 'waitUpdate',
    },
    {
      title: '操作',
      dataIndex: 'name',
      key: 'name',
    },
  ];

  return (
    <div>
      <Card
        title="商品数据管理"
        extra={
          <div className={styles.buttonContainer}>
            <Button className={styles.operationButton}  type="primary"  onClick={handleRefresh}>刷新</Button>
            <Button className={styles.operationButton} type="primary" >筛选预警商品</Button>
            <Button className={styles.operationButton}  type="primary" onClick={() => {setVisible(true)}}>添加商品</Button>
          </div>
        }>
        <Table
          rowKey="id"
          dataSource={goodsData}
          columns={columns}
          pagination={pagination}
        />
      </Card>
      <AddGoodsForm visible={visible} onAddGoods={onAddGood} onCancle={onCancel} />
    </div>
  );
};

export default GoodsTable;
