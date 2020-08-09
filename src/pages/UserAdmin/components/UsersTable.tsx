import React, { useState } from 'react';
import {Card, Table, Modal, Button, Switch } from 'antd';
import { Dispatch } from 'umi';

import { UserDateItem } from '@/models/userData';
import AddUserForm from './AddUserForm';

interface UsersTableProps {
  dispatch: Dispatch;
  usersData: UserDateItem[] | undefined;
}

const UsersTable: React.FC<UsersTableProps> = ({dispatch, usersData}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const onAddUser = values => {
    console.log("user Value", values);
    setVisible(false);
  }

  const pagination = {
    total: 50,
    onChange: (page: number) => {
      dispatch({
        type: 'goods/getGoodsData',
        payload: {
          page: page - 1,
        }
      });
    },
  };

  const columns = [
    {
      title: '用户名',
      dataIndex: 'name',
    },
    {
      title: '姓名',
      dataIndex: 'realName',
    },
    {
      title: '电话',
      dataIndex: 'telephone',
    },
    {
      title: '地址',
      dataIndex: 'address',
    },
    {
      title: '部门',
      dataIndex: 'department',
    },
    // {
    //   title: '角色', //字段值是哪个
    //   dataIndex: 'id'
    // },
    {
      title: '店铺',
      dataIndex: 'shopNameAndShopNumber',
    },
    {
      title: '状态',
      dataIndex: 'status',
      render: status => {
        return status === 0 ? <Switch /> : <Switch defaultChecked />
      }
    },
    {
      title: '操作',
      dataIndex: 'Operations',
      render: rowKey => {
        return (
        <div style={{display: "flex"}}>
          <Button type="primary" style={{margin: "5px"}}>修改密码</Button>
          <Button type="danger" style={{margin: "5px"}}>删除</Button>
        </div>)
      }
    }
  ]

  return (
    <div>
      <Card
        title="用户列表"
        extra={
          <Button type="primary" onClick={() => {setVisible(true)}}>添加用户</Button>
        }
      >
        <Table
          rowKey="id"
          dataSource={usersData}
          columns={columns}
          pagination={pagination}
        />
          <AddUserForm visible={visible} onAddUser={onAddUser} onCancle={() => {setVisible(false)}} />
      </Card>
    </div>
  )
}

export default UsersTable;
