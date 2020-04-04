import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Dispatch, connect } from 'umi';

import TagsTable from './components/TagsTable';
import GoodsTable from './components/GoodsTable';

import { ConnectState, TagsModelState, GoodsModelState } from '@/models/connect';

interface TagManageProps {
  dispatch: Dispatch;
  tags: TagsModelState;
  goods: GoodsModelState;
}

const TagManage: React.FC<TagManageProps> = (props) => {
  const { tags, goods, dispatch } = props;

  useEffect(() => {
    dispatch({
      type: 'tags/getTagsData',
      payload: {
        page: 0,
        count: 5,
      }
    });
    dispatch({
      type: 'goods/getGoodsData',
      payload: {
        page: 0,
        count: 5,
      }
    })
  }, [])


  //
  return (
    <PageHeaderWrapper>
      <Row gutter={[8, 24]}>
        <TagsTable dispatch={dispatch} tagsData={tags.tagsData} />
      </Row>
      <Row gutter={8}>
        <Col span={24}>
          <GoodsTable dispatch={dispatch} goodsData={goods.goodsData} />
        </Col>
      </Row>
    </PageHeaderWrapper>
  )
}


export default connect(({ tags, goods }: ConnectState) => ({
  tags: tags,
  goods: goods,
}))(TagManage);
