import React, { useState, useEffect } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect, Dispatch } from 'umi';
import { Row, Col, Card, Button } from 'antd';

import { ConnectState, TagsModelState } from '@/models/connect';

import TagsTable from './components/TagsTable';

interface RequestParams {
  query: string;
  queryString: number | string;
}

interface ChangePriceProps {
  dispatch: Dispatch;
  tags: TagsModelState;
}

const ChangePrice: React.FC<ChangePriceProps> = (props) => {
  const [requestParams, setRequestParams] = useState<RequestParams>(
    {
      query: "waitUpdate",
      queryString: 0,
    }
  );
  const [isRequestOvertime, setIsRequestOvertime] = useState<boolean>(false)
  const { dispatch, tags } = props;
  useEffect(() => {
    dispatch({
      type: 'tags/getTagStatisticData'
    });
    dispatch({
      type: 'tags/getTagsData',
      payload: {
        ...requestParams,
        page: 0,
      }
    })
  }, []);

  const requestTagsData = ({ query, queryString }: RequestParams) => {
    setRequestParams({
      query,
      queryString,
    })
    dispatch({
      type: 'tags/getTagsData',
      payload: {
        query,
        queryString,
        page: 0,
      }
    })
  }

  const requestOvertimeTagsData = () => {
    setIsRequestOvertime(true);
    dispatch({
      type: 'tags/getOvertimeTagsData',
      payload: 0,
    })
  }




  return (
    <PageHeaderWrapper>
      <Row gutter={[8, 24]}>
        <Col span={24}>
          <Card title="变价监控信息" extra={<Button type="primary">导出变价超时数据</Button>}>
            <Row gutter={[8, 24]}>
              <Col span={8}>
                所有价签：{tags.tagStatisticData?.allSize}
                <Button
                  type="primary"
                  size="small"
                  style={{marginLeft: "10px"}}
                  onClick={(e) => { requestTagsData({ query: "", queryString: "" }) }}>查看</Button>
              </Col>
              <Col span={8}>
                启用价签：{tags.tagStatisticData?.normalTagSize}
                <Button
                  type="primary"
                  size="small"
                  style={{marginLeft: "10px"}}
                  onClick={(e) => { requestTagsData({ query: "forbidState", queryString: 1 }) }}>查看</Button>
              </Col>
              <Col span={8}>
                禁用：{tags.tagStatisticData?.forbidTagSize}
                <Button
                  type="primary"
                  size="small"
                  style={{marginLeft: "10px"}}
                  onClick={(e) => { requestTagsData({ query: "forbidState", queryString: 0 }) }}>查看</Button>
              </Col>
            </Row>
            <Row gutter={[8, 24]}>
              <Col span={8}>
                已经变价/变价总数：{tags.tagStatisticData?.waitUpdateTagSize - tags.tagStatisticData?.overTimeTagSize}/{tags.tagStatisticData?.waitUpdateTagSize}
                <Button
                  type="primary"
                  size="small"
                  style={{marginLeft: "10px"}}
                  onClick={(e) => { requestTagsData({ query: "waitUpdate", queryString: 0 }) }}>查看</Button>
              </Col>
              <Col span={8}>
                变价超时：{tags.tagStatisticData?.overTimeTagSize}
                <Button type="primary" size="small" style={{marginLeft: "10px"}} onClick={(e) => { requestOvertimeTagsData }}>查看</Button>
              </Col>
              <Col span={8}>
                成功率：{(tags.tagStatisticData?.waitUpdateTagSize - tags.tagStatisticData?.overTimeTagSize) / (tags.tagStatisticData?.waitUpdateTagSize)}%
            </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row gutter={[8, 24]}>
        <Col span={24}>
          <TagsTable dispatch={dispatch} tagsData={tags.tagsData} isRequestOvertime={isRequestOvertime} requestParams={requestParams} />
        </Col>
      </Row>
    </PageHeaderWrapper>
  )
}

export default connect(({ tags }: ConnectState) => ({
  tags: tags
}))(ChangePrice);
