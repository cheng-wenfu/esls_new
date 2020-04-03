import React, { useEffect } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect, Dispatch } from 'umi';
import { Row, Col } from 'antd';
import { ConnectState, UserModelState } from '@/models/connect';
import { HomeOutlined } from '@ant-design/icons'


import HomeStatisticDataCard from './components/HomeStatisticDataCard';
import OperationLogsTable from './components/OperationLogsTable';
import HomeStatisticDataPie from './components/HomeStatisticDataPie';

interface HomeProps {
  dispatch: Dispatch;
  user: UserModelState;
}

const Home: React.FC<HomeProps> = (props) => {
  const { user, dispatch } = props;

  const { normalTagSize, noBindTagSize, noIsWorkingTagSize, forbiddenTagSize } = user.homeStatisticData;
  const tagData = {
    value: [
      {
        type: '正常',
        value: normalTagSize,
      },
      {
        type: '未绑定',
        value: noBindTagSize,
      },
      {
        type: '离线',
        value: noIsWorkingTagSize,
      },
      {
        type: '禁用',
        value: forbiddenTagSize,
      },
    ],
    title: '价签信息',
    elementId: 'canvas1',
    description: '所有价签的统计信息'
  };
  const { normalRouterSize, forbiddenRouterSize, noIsWorkingRouterSize } = user.homeStatisticData;
      const routerData = {
        value: [
          {
            type: '正常',
            value: normalRouterSize,
          },
          {
            type: '离线',
            value: noIsWorkingRouterSize,
          },
          {
            type: '禁用',
            value: forbiddenRouterSize,
          },
        ],
        title: '路由器信息',
        elementId: 'canvas2',
        description: '所有路由器的统计信息'
      };

  useEffect(() => {
    console.log(user)
    dispatch({
      type: 'user/getHomeStatisticData',
    })
    dispatch({
      type: 'user/getUserOperationLogs',
      payload: 0,
    })
  }, []);

  return (
    <PageHeaderWrapper>
      <Row gutter={[8,24]}>
        <Col span={4}>
          <HomeStatisticDataCard
            icon={<HomeOutlined />}
            title="商品数量"
            value={user.homeStatisticData.goodSize} />
        </Col>
        <Col span={4}>
          <HomeStatisticDataCard
            icon={<HomeOutlined />}
            title="价签数量"
            value={user.homeStatisticData.tagSize} />
        </Col>
        <Col span={4}>
          <HomeStatisticDataCard
            icon={<HomeOutlined />}
            title="样式数量"
            value={user.homeStatisticData.styleSize} />
        </Col>
        <Col span={4}>
          <HomeStatisticDataCard
            icon={<HomeOutlined />}
            title="店铺数量"
            value={user.homeStatisticData.shopSize} />
        </Col>
        <Col span={4}>
          <HomeStatisticDataCard
            icon={<HomeOutlined />}
            title="路由器数量"
            value={user.homeStatisticData.routerSize} />
        </Col>
        <Col span={4}>
          <HomeStatisticDataCard
            icon={<HomeOutlined />}
            title="用户数量"
            value={user.homeStatisticData.userSize} />
        </Col>
      </Row>
      <Row gutter={[8,24]}>
        <Col span={12}>
          <HomeStatisticDataPie {...tagData} />
        </Col>
        <Col span={12}>
          <HomeStatisticDataPie {...routerData} />
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={24}>
          <OperationLogsTable dispatch={dispatch} userOperationLogs={user.userOperationLogs} />
        </Col>
      </Row>
    </PageHeaderWrapper>
  )
}


export default connect(({ user }: ConnectState) => ({
  user: user,
}))(Home);
