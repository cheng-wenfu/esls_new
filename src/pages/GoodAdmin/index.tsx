import React, { useEffect } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect, Dispatch } from 'umi';
import { Row } from 'antd';
import { ConnectState, GoodsModelState, TagsModelState } from '@/models/connect';

import GoodsTable from './components/GoodsTable';
import TagsTable from './components/TagsTable';


interface GoodAdminProps {
  dispatch: Dispatch;
  goods: GoodsModelState;
  tags: TagsModelState;
}

const GoodAdmin: React.FC<GoodAdminProps> = (props) => {
  const { goods, tags, dispatch } = props;
  useEffect(() => {
    console.log(tags)
    dispatch({
      type: 'goods/getGoodsData',
      payload: {
        page: 0,
      }
    }),
      dispatch({
        type: 'tags/getTagsData',
        payload: {
          page: 0,
        }
      })
  }, [])

  return (
    <PageHeaderWrapper>
      <Row gutter={8}>
        <GoodsTable goodsData={goods.goodsData} dispatch={dispatch} />
      </Row>
      <Row gutter={8}>
        <TagsTable tagsData={tags.tagsData} dispatch={dispatch} />
      </Row>
    </PageHeaderWrapper>
  );
};

export default connect(({ goods, tags }: ConnectState) => ({
  goods: goods,
  tags: tags,
}))(GoodAdmin);
