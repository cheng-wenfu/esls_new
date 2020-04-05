import React, { useEffect } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import {connect, Dispatch } from 'umi';
import { Row, Col } from 'antd';
import { ConnectState, StylesModelState } from '@/models/connect';

import StylesTable from './components/StylesTable';
import DispmCard from './components/DispmCard';


interface StylesManageProps {
  dispatch: Dispatch;
  styles: StylesModelState
}

const StyleManage: React.FC<StylesManageProps> = (props) => {
  const { styles, dispatch } = props;
  useEffect(() => {
    dispatch({
      type: 'styles/getStylesData',
      payload: {
        page: 0,
        count: 20,
      }
    });
  },[]);


  return (
    <PageHeaderWrapper>
      <Row gutter={8}>
        <Col span={16}>
          <StylesTable dispatch={dispatch} stylesData={styles.stylesData} />
        </Col>
        <Col span={8}>
          <DispmCard dispmData={styles.dispmsData} />
        </Col>
      </Row>
    </PageHeaderWrapper>
  )
}

export default connect(({ styles }: ConnectState) => ({
  styles: styles,
}))(StyleManage)
