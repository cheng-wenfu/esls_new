import React from 'react';
import { Modal, Form, Input, Row, Col } from 'antd';


interface AddUserFormProps {
  visible: boolean;
  onCancle: () => void;
  onAddUser: (values: any) => void;
}

const AddUsersForm: React.FC<AddUserFormProps> = ({visible, onAddUser, onCancle}) => {
  const [form] = Form.useForm();
  return (
    <Modal
    visible={visible}
    title="添加用户"
    okText="添加"
    cancelText="取消"
    onCancel={onCancle}
    onOk={() => {
      form
        .validateFields()
        .then(values => {
          form.resetFields();
          onAddUser(values);
        })
        .catch(info => {
          console.log('Validate Failed:', info);
        });
    }}
  >
    <Form form={form} name="添加用户">
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
    </Modal>
  )
}

export default AddUsersForm;
