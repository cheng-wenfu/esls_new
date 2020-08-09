import React, { useEffect } from 'react';
import { connect, Dispatch } from 'umi';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Row, Card, Table, Menu, Dropdown } from 'antd';
import { ConnectState, ShopsModelState, UserModelState } from '@/models/connect';
import { DownOutlined } from '@ant-design/icons';

import { ShopDataItem } from '@/models/shopData'

import SettingCard from './components/SettingCard'




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
      payload: 1
    });
    dispatch({
      type: 'shops/getShopsData',
      payload: {
        page: 0,
      }
    })
  },[])


  return (
    <PageHeaderWrapper>
      <Row>
        <SettingCard dispatch={dispatch} shopsData={shopsData} />
      </Row>
    </PageHeaderWrapper >
  )
}

export default connect(({user, shops}: ConnectState) =>({
  user: user,
  shops: shops,
}))(SystemSetting)
