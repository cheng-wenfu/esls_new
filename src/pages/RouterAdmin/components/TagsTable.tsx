import React, { useState } from 'react';
import { Table, Card, Tag, Button } from 'antd';
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
      render: execTime => {
        return (execTime !== "" ? <Tag color="success">正常</Tag> : <Tag color="error">超时</Tag>)
      }
    },
    {
      title: '启用状态',
      dataIndex: 'forbidState',
      key: 'forbidState',
      render: forbidState => {
        return (forbidState === 1 ? <Tag color="success">启用</Tag> : <Tag color="error">禁用</Tag>)
      }
    },
    {
      title: '等待变价',
      dataIndex: 'waitUpdate',
      key: 'waitUpdate',
      render: waitUpdate => {
        return (waitUpdate === 1 ? <Tag color="success">已经更新</Tag> : <Tag color="error">等待更新</Tag>)
      }
    },
    {
        title: '操作',
        dataIndex: 'name',
        key: 'name',
        render: rowkey => {
          return <Button type="primary">操作</Button>
        }
    },
  ];
  return (
    <Card title="标签信息">
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
