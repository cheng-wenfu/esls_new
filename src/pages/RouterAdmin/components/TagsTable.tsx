import React, { useState } from 'react';
import { Table, Card } from 'antd';
import { Dispatch } from 'umi';

import { TagDataItem } from '@/models/tagData';

interface TagsTableProps {
  tagsData: TagDataItem[] | undefined;
  dispatch: Dispatch;
}

const TagsTable: React.FC<TagsTableProps> = ({ tagsData, dispatch }) => {
  const pagination = {
    total: 200,
    onChange: (page: number) => {
      dispatch({
        type: 'tags/getTagsData',
        payload: {
          page: page - 1,
        },
      });
    },
  };
  const colums = [
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
      title: '店铺',
      dataIndex: 'shopNameAndShopNumber',
      key: 'shopNameAndShopNumber',
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
      title: '等待变价',
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
    <Card title="标签数据管理">
      <Table
        rowKey="id"
        dataSource={tagsData}
        columns={colums}
        pagination={pagination}
      />
    </Card>
  );
};

export default TagsTable;
