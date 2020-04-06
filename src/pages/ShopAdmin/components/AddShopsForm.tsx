import React, { useState } from 'react';
import { Form, Input, Row, Col } from 'antd';


interface AddShopsFormProps {

}

const AddShopsForm: React.FC<AddShopsFormProps> = () => {
  const onFinish = values => {
    console.log(values);
  }

  return (
    <Form onFinish={onFinish} name="添加店铺">
      <Form.Item
        name="number"
        label="店铺编码"
        rules={[
          {
            required: true,
            message: '请输入店铺编码',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='name'
        label="店铺名称"
        rules={[
          {
            required: true,
            message: '请输入店铺名称',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='phone'
        label="店铺电话"
        rules={[
          {
            type: 'number',
            message: ''
          },
          {
            required: true,
            message: '请输入店铺电话'
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='manager'
        label='店长姓名'
        rules={[
          {
            required: true,
            message: '请输入店长姓名'
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="address"
        label="店铺地址"
        rules={[
          {
            required: true,
            message: '请输入店铺地址'
          }
        ]}
      >
        <Input />
      </Form.Item>
    </Form >
  )
}

export default AddShopsForm;
