import React, { useState } from 'react';
import { Card, Table, Button, Tag, Switch } from 'antd';
import { Dispatch } from 'umi';

import { RouterDataItem } from '@/models/routerData'


interface RoutersTableProps {
  dispatch: Dispatch;
  routersData: RouterDataItem[] | undefined;
}

const RoutersTable: React.FC<RoutersTableProps> = ({dispatch, routersData}) => {
  const [current, setCurrent] = useState<number>(1);
  const handleRefresh = () => {
    dispatch({
      type: 'routers/getRoutersData',
      payload: current - 1,
    })
  }

  const pagination = {
    total: 50,
    onChange: (page: number) => {
      setCurrent(page),
      dispatch({
        type: 'routers/getRoutersData',
        payload: page - 1,
      })
    }
  };

  const columns = [
    {
      title: 'AP条码',
      dataIndex: 'barCode',
    },
    {
      title: 'MAC地址',
      dataIndex: 'mac',
    },
    {
      title: 'IP地址',
      dataIndex: 'ip',
    },
    {
      title: '端口号',
      dataIndex: 'port'
    },
    {
      title: '信道',
      dataIndex: 'channelId',
    },
    {
      title: '店铺', //这个需要根据有店铺的地方
      dataIndex: 'name'
    },
    {
      title: '状态',
      dataIndex: 'isWorking',
      render: isWorking => {
        return (isWorking !== 0 ? <Tag color="success">正常</Tag> : <Tag color="error">离线</Tag>)
      }
    },
    {
      title: '是否启用', //这个可以通过按钮转换状态
      dataIndex: 'state',
      render: (state : number) => {
        return (state === 0 ? <Switch /> : <Switch defaultChecked />)
      }
    },
    {
      title: '操作',
      dataIndex: 'operations',
      render: rowkey => {
        return <Button type="primary">操作</Button>
      }
    }
  ];

  return (
    <Card title="路由器信息" extra={<Button type="primary" onClick={handleRefresh}>刷新</Button>}>
      <Table dataSource={routersData} columns={columns} pagination={pagination} />
    </Card>

  )
}

export default RoutersTable;
