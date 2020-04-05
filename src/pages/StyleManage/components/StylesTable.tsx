import React from 'react';
import { Dispatch } from 'umi';
import { Card, Table, Button } from 'antd';

import { StyleDataItem } from '@/models/styleData';

interface StylesTableProps {
  dispatch: Dispatch;
  stylesData: StyleDataItem[] | undefined;
}

const StylesTable: React.FC<StylesTableProps> = ({ dispatch, stylesData }) => {

  const pagination = {
    total: 50,
    onChange: (page: number) => {
      dispatch({
        type: 'styles/getStylesData',
        payload: {
          page: page - 1,
        }
      });
    }
  }

  const columns = [
    {
      title: '样式ID',
      dataIndex: 'styleNumber',
    },
    {
      title: '样式名称',
      dataIndex: 'styleType',
    },
    {
      title: '宽度',
      dataIndex: 'width',
    },
    {
      title: '高度',
      dataIndex: 'height',
    },
    {
      title: '促销',
      dataIndex: 'isPromote',
    },
    {
      title: '操作',
      dataIndex:'opeations',
    },
  ]


  return (
    <Card
      title='样式信息'
      extra={
        <div>
          <Button type='primary' onClick={(e) => { }}>新建样式</Button>
          <Button onClick={(e) => { }}>导入样式</Button>
        </div>
      }
    >
      <Table dataSource={stylesData} columns={columns} pagination={pagination} />
    </Card>
  )

}

export default StylesTable;


