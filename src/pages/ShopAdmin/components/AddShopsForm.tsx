import React from 'react';
import { Modal, Input, Form, Row, Col } from 'antd';


interface AddShopsFormProps {
  visible: boolean;
  onCancle: () => void;
  onAddShop: (values: any) => void;
}

const AddShopsForm: React.FC<AddShopsFormProps> = ({ visible, onAddShop, onCancle}) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="添加店铺"
      okText="添加"
      cancelText="取消"
      onCancel={onCancle}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onAddShop(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          })
      }}
    >
    <Form form={form} name="添加店铺">
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
    </Modal>
  )
}

export default AddShopsForm;
