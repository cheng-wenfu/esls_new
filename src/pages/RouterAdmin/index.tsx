import React, { useEffect } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect, Dispatch } from 'umi';
import { Row, Col } from 'antd';
import { ConnectState, RouterModelState, TagsModelState } from '@/models/connect'

import RoutersTable from './components/RoutersTable';


interface RouterAdminProps {
  dispatch: Dispatch;
  routers: RouterModelState;
  tags: TagsModelState;
}

const RouterAdmin: React.FC<RouterAdminProps> = (props) => {
  const { dispatch, routers, tags } = props;

  useEffect(() => {
    dispatch({
      type: 'routers/getRoutersData',
      payload: {
        page: 0,
      }
    })
  },[])

  return (
    <PageHeaderWrapper>
      <Row gutter={[8, 24]}>
        <RoutersTable dispatch={dispatch} routersData={routers.routersData} />
      </Row>
      <Row gutter={8}>

      </Row>
    </PageHeaderWrapper>
  )
}


export default connect(({routers, tags}: ConnectState) => ({
  routers: routers,
  tags: tags,
}))(RouterAdmin);
