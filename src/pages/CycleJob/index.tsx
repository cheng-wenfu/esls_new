import React, { useEffect } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect, Dispatch } from 'umi';
import { Row, Col } from 'antd';

import { ConnectState, CycleJobModelState } from '@/models/connect';
import CycleJobTable from './components/CycleJobsTable';

interface CycleJobProps {
  dispatch: Dispatch;
  cycleJob: CycleJobModelState
}

const CycleJob: React.FC<CycleJobProps> = (props) => {
  const { dispatch, cycleJob } = props;
  useEffect(() => {
    dispatch({
      type: 'cycleJob/getCycleJobsData',
      payload: {
        page: 0,
      }
    })
  });

  return (
    <PageHeaderWrapper>
      <Row gutter={[8,24]}>
        <Col span={24}>
          <CycleJobTable cycleJobData={cycleJob.cycleJobsData} dispatch={dispatch} />
        </Col>

      </Row>
    </PageHeaderWrapper>
  )
}

export default connect(({ cycleJob }: ConnectState) => ({
  cycleJob: cycleJob,
}))(CycleJob);
