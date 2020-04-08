import React, { useState } from 'react';
import { Dispatch } from 'umi';
import { Card, Table, Button } from 'antd';

import { CycleJobDataItem } from '@/models/cycleJobData';
import { Pagination } from 'antd';

interface CycleJobTableProps {
  dispatch: Dispatch;
  cycleJobData: CycleJobDataItem[];
}

const CycleJobTable: React.FC<CycleJobTableProps> = ({dispatch, cycleJobData}) => {
  const [current, setCurrent] = useState()
  const pagination = {
    total: 100,
    current: current,
    onChange: (page: number) => {
      setCurrent(page),
      dispatch({
        type: 'cycleJob/getCycleJobsData',
        payload: {
          page: page - 1,
        }
      })
    }
  };

  const columns = [
    {
      title: '任务描述',
      dataIndex: 'description',
    },
    {
      title: '参数',
      dataIndex: 'args',
    },
    {
      title: 'cron表达式',
      dataIndex: 'cron'
    },
    {
      title: '状态',
      dataIndex: 'state',
    },
    {
      title: '操作',
      dataIndex: 'oreation',
    },
  ];

  const handleClick = () => {
    dispatch({
      type: 'cycleJob/getCycleJobsData',
      payload: {
        page: current - 1,
      }
    })
  }
  return(
    <Card
      title="定期任务信息"
      extra={<Button type="primary" onClick={handleClick} />}
    >
      <Table dataSource={cycleJobData} columns={columns} pagination={pagination} />
    </Card>
  )
}


export default CycleJobTable;
