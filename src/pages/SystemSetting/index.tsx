import React, { useEffect } from 'react';
import { connect, Dispatch } from 'umi';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Row, Card, Table, Menu, Dropdown } from 'antd';
import { ConnectState, ShopsModelState, UserModelState } from '@/models/connect';
import { DownOutlined } from '@ant-design/icons';

import { ShopDataItem } from '@/models/shopData'




interface SystemSettingProps {
  dispatch: Dispatch;
  shops: ShopsModelState;
  user: UserModelState;
}

const SystemSetting: React.FC<SystemSettingProps> = (props) => {
  const { dispatch, shops, user } = props;
  const { shopsData = [] } = shops;
  useEffect(() => {
    dispatch({
      type: 'user/getLoginUserInfo',
      payload: {
        id: 1 //TODO:用户ID
      }
    });
    dispatch({
      type: 'shops/getShopsData',
      payload: {
        page: 0,
      }
    })
  },[])

  const menu = (shopsData: ShopDataItem[]) => {
    return (
      <Menu>
        {
          shopsData.map((value) => {
            <Menu.Item key={value.id}>
              {value.name}
            </Menu.Item>
          })
        }
      </Menu>
    )
  }

  return (
    <PageHeaderWrapper>
      <Row>
        <Dropdown overlay={menu(shopsData)}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Hover me <DownOutlined />
          </a>
        </Dropdown>,
      </Row>
    </PageHeaderWrapper >
  )
}

export default connect(({user, shops}: ConnectState) =>({
  user: user,
  shops: shops,
}))(SystemSetting)
