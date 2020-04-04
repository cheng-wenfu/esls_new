import React, { useState } from 'react';
import { Card, Table, Button } from 'antd';
import { Dispatch } from 'umi';

import { GoodDataItem } from '@/models/goodData';

interface GoodsTableProps {
  dispatch: Dispatch;
  goodsData: GoodDataItem[] | undefined;
}

const GoodsTable: React.FC<GoodsTableProps> = ({dispatch, goodsData}) => {
  const [current, setCurrent] = useState<number>(1)

  const pagination = {
    total: 200,
    current: current,
    onChange: (page: number) => {
      setCurrent(page);
      dispatch({
        type: 'goods/getGoodsData',
        payload: {
          page: page - 1,
          count: 5,
        }
      })
    }
  }

  const handleRefresh = () => {
    dispatch({
      type: 'goods/getGoodsData',
      payload: {
        page: 0,
        count: 5,
      }
    })
  }

  const columns = [
    {
      title: '商品名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '商品条码',
      dataIndex: 'barCode',
      key: 'barCode',
    },
    {
      title: '原价',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '促销价格',
      dataIndex: 'promotePrice',
      key: 'promotePrice',
    },
    {
      title: '促销原因',
      dataIndex: 'promotionReasion',
      key: 'promotionReasion',
    },
    {
      title: '货号',
      dataIndex: 'shelfNumber',
      key: 'shelfNumber',
    },
    {
      title: '价签数量',
      dataIndex: 'tagIdlist',
      key: 'tagIdlist',
    },
  ];

  return (
    <Card title="商品信息" extra={<Button type="primary" onClick={handleRefresh}>刷新</Button>}>
      <Table rowKey="id" dataSource={goodsData} columns={columns} pagination={pagination} />
    </Card>
  )
}

export default GoodsTable;
