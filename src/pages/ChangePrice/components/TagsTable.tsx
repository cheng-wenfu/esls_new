import React, { useState } from 'react';
import { Table, Button, Card, Tag } from 'antd';
import { Dispatch } from 'umi';

import { TagDataItem } from '@/models/tagData';
import { RequestParams } from '@/services/data';

interface TagsTableProps {
  isRequestOvertime: boolean;
  requestParams: RequestParams;
  tagsData: TagDataItem[] | undefined;
  dispatch: Dispatch;
}

const TagsTable: React.FC<TagsTableProps> = ({ isRequestOvertime, requestParams, tagsData, dispatch }) => {
  const handleChangePrice = () => {
    console.log("一键改价")
  }

  const pagination = {
    total: 200,
    onChange: (page: number) => {
      const dispatchProps = isRequestOvertime ? {
        type: 'tags/getOvertimeTagsData',
        payload: page - 1,
      } : {
          type: 'tags/getTagsData',
          payload: {
            ...requestParams,
            page: page - 1,
          }
        }
      console.log(isRequestOvertime, dispatchProps)
      dispatch(dispatchProps);
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
    // {
    //   title: '店铺',
    //   dataIndex: 'shopNameAndShopNumber',
    //   key: 'shopNameAndShopNumber',

    // },
    // {
    //   title: 'AP/信道',
    //   dataIndex: 'routerBarCodeAndChannelId',
    //   key: 'routerBarCodeAndChannelId',
    // },
    {
      title: '商品条码/名称',
      dataIndex: 'goodBarCodeAndName',
      key: 'goodBarCodeAndName',
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
        return (execTime ? <Tag color="success">正常</Tag> : <Tag color="error">超时</Tag>)
      }
    },
    {
      title: '更新状态',
      dataIndex: 'waitUpdate',
      key: 'waitUpdate',
      render: waitUpdate => {
        return (waitUpdate !== 0 ? <Tag color="success">已经更新</Tag> : <Tag color="error">等待更新</Tag>)
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
        title: '操作',
        dataIndex: 'name',
        key: 'name',
        render: rowkey => {
          return <Button type="primary">变价</Button>
        }
    },
  ];
  return (
    <Card
      title="等待变价列表"
      extra={<Button type="primary" onClick={handleChangePrice}>一键改价</Button>}
    >
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
