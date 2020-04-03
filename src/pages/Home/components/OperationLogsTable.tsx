import React from 'react';
import { Table } from 'antd';

import { Dispatch } from 'umi';

import { UserOperationLogItem} from '@/models/userData'

interface OperationLogsTableProps {
  dispatch: Dispatch;
  userOperationLogs: UserOperationLogItem[] | undefined;
}

const OperationLogsTable: React.FC<OperationLogsTableProps> = ({dispatch, userOperationLogs}) => {
  const pagination = {
    total: 200,
    onChange: (page: number) => {
      console.log(page);
      //TODO: 检查所有page - 1 对应的表格对不对
      dispatch({
        type: 'user/getUserOperationLogs',
        payload: page - 1,
      });
    },
  };

  const columns = [
    {
      title: '用户名',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: '操作',
      dataIndex: 'logDescription',
      key: 'logDescription',
    },
    {
      title: 'IP',
      dataIndex: 'ip',
      key: 'ip',
    },
    {
      title: '执行时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },
  ];
  return (
    <Table  rowKey="id" dataSource={userOperationLogs} columns={columns} pagination={pagination} />
  )
}


export default OperationLogsTable;
