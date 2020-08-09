import React, { useState } from 'react';
import { Table, Button, Card, Tag } from 'antd';
import { Dispatch } from 'umi';

import { TagDataItem } from '@/models/tagData';

interface TagsTableProps {
  tagsData: TagDataItem[] | undefined;
  dispatch: Dispatch;
}

const TagsTable: React.FC<TagsTableProps> = ({ tagsData, dispatch }) => {
  const [current, setCurrent] = useState(1);

  const handleRefresh = () => {
    dispatch({
      type: 'tags/getTagsData',
      payload: {
        page: current - 1
      },
    });
  }
  const pagination = {
    total: 200,
    current: current,
    onChange: (page: number) => {
      setCurrent(page);
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
    {
      title: '通讯状态',
      dataIndex: 'execTime',
      key: 'execTime',
      render: execTime => {
        return (execTime ? <Tag color="success">正常</Tag> : <Tag color="error">超时</Tag>)
      }
    },
    {
      title: '启用状态',
      dataIndex: 'forbidState',
      key: 'forbidState',
      render: forbidState => {
        return forbidState === 1 ? <Tag color="success">启用</Tag> : <Tag color="error">禁用</Tag>
      }
    },
    {
      title: '等待变价',
      dataIndex: 'waitUpdate',
      key: 'waitUpdate',
      render: waitUpdata => {
        return (waitUpdata !== 0 ? <Tag color="success">已经更新</Tag> : <Tag color="error">等待更新</Tag>)
      }
    },
    {
        title: '操作',
        dataIndex: 'operations',
        key: 'operations',
        render: () => {
          return (
            <div>
              <Button type="primary">操作</Button>
            </div>
          )
        }
    },
  ];
  return (
    <Card
      title="标签数据管理"
      extra={<Button type="primary" onClick={handleRefresh}>刷新</Button>}
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
