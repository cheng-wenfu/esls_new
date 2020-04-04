import React, { useState } from 'react';
import { Card, Table, Button } from 'antd';
import { Dispatch } from 'umi';

import { TagDataItem } from '@/models/tagData';

interface TagsTableProps {
  dispatch: Dispatch;
  tagsData: TagDataItem[] | undefined;
}


const TagsTable: React.FC<TagsTableProps> = ({dispatch, tagsData}) => {
  const [current, setCurrent] = useState<number>(1);

  const pagination = {
    total: 200,
    current: current,
    onChange: (page: number) => {
      setCurrent(page);
      dispatch({
        type: 'tags/getTagsData',
        payload: {
          count: 5,
          page: page - 1
        },
      })
    }
  }

  const handleRefresh = () => {
    dispatch({
      type: 'tags/getTagsData',
      payload: {
        page: current - 1,
        count: 5
      }
    })
  }

  const columns = [
    {
      title: '价签条码',
      dataIndex: 'barCode',
      key: 'barCode',
    },
    {
      title: '价签类型',
      dataIndex: 'screenType',
      key: 'screenType',
    },
    {
      title: '商品条码/名称',
      dataIndex: 'goodBarCodeAndName',
      key: 'goodBarCodeAndName',
    },
    {
      title: '商品数量',
      dataIndex: 'stock',
      key: 'stock',
    },
    {
      title: 'AP/信道',
      dataIndex: 'routerBarCodeAndChannelId',
      key: 'routerBarCodeAndChannelId',
    },
    {
      title: '电量',
      dataIndex: 'power',
      key: 'power',
    },
    {
      title: 'AP Rssi',
      dataIndex: 'apRssi',
      key: 'apRssi',
    },
    {
      title: 'Tag Rssi',
      dataIndex: 'tagRssi',
      key: 'tagRssi',
    },
    // {
    //   title: '绑定样式',
    //   dataIndex: 'styles',
    //   key: 'styles',
    // },
    {
      title: '通讯状态',
      dataIndex: 'execTime',
      key: 'execTime',
    },
    {
      title: '启用状态',
      dataIndex: 'forbidState',
      key: 'forbidState',
    },
    {
        title: '操作',
        dataIndex: 'name',
        key: 'name',
    },
  ];

  return (
    <Card title="价签信息" extra={<Button type="primary" onClick={handleRefresh}>刷新</Button>}>
      <Table rowKey="id" dataSource={tagsData} columns={columns} pagination={pagination} />
    </Card>
  )
}

export default TagsTable;
