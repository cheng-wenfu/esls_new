import React, { useState } from 'react';
import { Form, Input, Row, Col } from 'antd';

import styles from './AddGoodsForm.less'



interface AddGoodsFromProps {

}


const AddGoodsForm: React.FC<AddGoodsFromProps> = () => {
  const onFinish = values => {
    console.log(values)
  }

  return (
    <Form
      className={styles.addGoodsForm}
      onFinish={onFinish}
      name="添加商品"
    >
      <Row gutter={8}>
        <Col span={12}>
          <Form.Item
            className={styles.addGoodsFormItem}
            name="name"
            label="名称"
            rules={[
              {
                type: undefined,
                message: ''
              },
              {
                required: true,
                message: '',
              }
            ]}>
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            className={styles.addGoodsFormItem}
            name="origin"
            label="产地"
            rules={[
              {
                type: undefined,
                message: ''
              },
              {
                required: true,
                message: '',
              }
            ]}>
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={12}>
          <Form.Item
            className={styles.addGoodsFormItem}
            name="spec"
            label="规格"
            rules={[
              {
                type: undefined,
                message: '',
              },
              {
                required: true,
                message: '',
              }
            ]}>
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            className={styles.addGoodsFormItem}
            name="category"
            label="种类"
            rules={[
              {
                type: undefined,
                message: '',
              },
              {
                required: true,
                message: '',
              },
            ]}
          >
            <Input />
          </Form.Item>

        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={12}>
          <Form.Item
            className={styles.addGoodsFormItem}
            name="provider"
            label="供应商"
            rules={[
              {
                type: undefined,
                message: '',
              },
              {
                required: true,
                message: '',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            className={styles.addGoodsFormItem}
            name="unit"
            label="单位"
            rules={[
              {
                type: undefined,
                message: '',
              },
              {
                required: true,
                message: '',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={12}>
          <Form.Item
            className={styles.addGoodsFormItem}
            name="operator"
            label="操作员"
            rules={[
              {
                type: undefined,
                message: '',
              },
              {
                required: true,
                message: '',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            className={styles.addGoodsFormItem}
            name="shelfNumber"
            label="货号"
            rules={[
              {
                type: undefined,
                message: '',
              },
              {
                required: true,
                message: '',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={12}>
          <Form.Item
            className={styles.addGoodsFormItem}
            name="price"
            label="价格"
            rules={[
              {
                type: undefined,
                message: '',
              },
              {
                required: true,
                message: '',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            className={styles.addGoodsFormItem}
            name="promotePrice"
            label="促销价格"
            rules={[
              {
                type: undefined,
                message: '',
              },
              {
                required: true,
                message: '',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={12}>
          <Form.Item
            className={styles.addGoodsFormItem}
            name="barCode"
            label="条形码"
            rules={[
              {
                type: undefined,
                message: '',
              },
              {
                required: true,
                message: '',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            className={styles.addGoodsFormItem}
            name="qrCode"
            label="二维码"
            rules={[
              {
                type: undefined,
                message: '',
              },
              {
                required: true,
                message: '',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={12}>
          <Form.Item
            className={styles.addGoodsFormItem}
            name="promotionReason"
            label="促销理由"
            rules={[
              {
                type: undefined,
                message: '',
              },
              {
                required: true,
                message: '',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            className={styles.addGoodsFormItem}
            name="shopNumber"
            label="店铺号"
            rules={[
              {
                type: undefined,
                message: '',
              },
              {
                required: true,
                message: '',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={12}>
          <Form.Item
            className={styles.addGoodsFormItem}
            name="isComputeOpen"
            label="是否开启计件"
            rules={[
              {
                type: undefined,
                message: '',
              },
              {
                required: true,
                message: '',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            className={styles.addGoodsFormItem}
            name="imageUrl"
            label="图片链接"
            rules={[
              {
                type: undefined,
                message: '',
              },
              {
                required: true,
                message: '',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={12}>
          <Form.Item
            className={styles.addGoodsFormItem}
            name="weightSpec"
            label="种类规格"
            rules={[
              {
                type: undefined,
                message: '',
              },
              {
                required: true,
                message: '',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            className={styles.addGoodsFormItem}
            name="replenishNumber"
            label="预警门限"
            rules={[
              {
                type: undefined,
                message: '',
              },
              {
                required: true,
                message: '',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={12}>
          <Form.Item
            className={styles.addGoodsFormItem}
            name="rfu01"
            label="自定义字段1"
            rules={[
              {
                type: undefined,
                message: '',
              },
              {
                required: true,
                message: '',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            className={styles.addGoodsFormItem}
            name="rfu02"
            label="自定义字段2"
            rules={[
              {
                type: undefined,
                message: '',
              },
              {
                required: true,
                message: '',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={12}>
          <Form.Item
            className={styles.addGoodsFormItem}
            name="rfus01"
            label="自定义字段3"
            rules={[
              {
                type: undefined,
                message: '',
              },
              {
                required: true,
                message: '',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            className={styles.addGoodsFormItem}
            name="rfus02"
            label="自定义字段4"
            rules={[
              {
                type: undefined,
                message: '',
              },
              {
                required: true,
                message: '',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}


export default AddGoodsForm;
