import React, { useEffect } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect, Dispatch } from 'umi';
import { Row, Col } from 'antd';
import { ConnectState, RoutersModelState, TagsModelState } from '@/models/connect'

import RoutersTable from './components/RoutersTable';
import TagsTable from './components/TagsTable';


interface RouterAdminProps {
  dispatch: Dispatch;
  routers: RoutersModelState;
  tags: TagsModelState;
}

const RouterAdmin: React.FC<RouterAdminProps> = (props) => {
  const { dispatch, routers, tags } = props;

  useEffect(() => {
    console.log('request routers1')
    dispatch({
      type: 'routers/getRoutersData',
      payload: {
        page: 0,
      }
    });
    dispatch({
      type: 'tags/getTagsData',
      payload: {
        page: 0,
      }
    })
    console.log('request routers2')
  }, []);

  return (
    <PageHeaderWrapper>
      <Row gutter={[8, 24]}>
        <RoutersTable dispatch={dispatch} routersData={routers.routersData} />
      </Row>
      <Row gutter={8}>
        <TagsTable tagsData={tags.tagsData} dispatch={dispatch} />
      </Row>
    </PageHeaderWrapper>
  )
}


export default connect(({ routers, tags }: ConnectState) => ({
  routers: routers,
  tags: tags,
}))(RouterAdmin);
