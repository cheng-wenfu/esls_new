import React, { useState } from 'react';
import { Form, Input, Row, Col } from 'antd';


interface AddUserFormProps {

}

const AddUsersForm: React.FC<AddUserFormProps> = () => {
  const onFinish = values => {
    console.log(values);
  }

  return (
    <Form onFinish={onFinish} name="添加店铺">
      <Form.Item
        name="name"
        label="用户名"
        rules={[
          {
            required: true,
            message: '请输入用户名',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='realName'
        label="姓名"
        rules={[
          {
            required: true,
            message: '请输入姓名',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='gender'
        label="性别"
        rules={[
          {
            type: 'number',
            message: ''
          },
          {
            required: true,
            message: '请输入性别'
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='address'
        label='地址'
        rules={[
          {
            required: true,
            message: '请输入地址'
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="department"
        label="部门"
        rules={[
          {
            required: true,
            message: '请输入部门'
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="mail"
        label="邮箱"
        rules={[
          {
            required: true,
            message: '请输入邮箱'
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="telephone"
        label="电话"
        rules={[
          {
            required: true,
            message: '请输入电话'
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="shopId"
        label="店铺"
        rules={[
          {
            required: true,
            message: ''
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="roleList"
        label="角色"
        rules={[
          {
            required: true,
            message: ''
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="passwd"
        label="密码"
        rules={[
          {
            required: true,
            message: ''
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="passwd"
        label="重复密码"
        rules={[
          {
            required: true,
            message: ''
          }
        ]}
      >
        <Input />
      </Form.Item>
    </Form >
  )
}

export default AddUsersForm;
