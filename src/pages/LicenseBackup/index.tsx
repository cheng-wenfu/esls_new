import React, { useEffect } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect, Dispatch } from 'umi';
import { Row, Col, Card, Tabs, Button, Upload } from 'antd';

import { ConnectState, LicenseBackupModelState } from '@/models/connect';

import FileUpload from './components/FileUpload';

interface LicenseBackupProps {
  dispatch: Dispatch;
  licenseBackup: LicenseBackupModelState;
}

const LicenseBackup: React.FC<LicenseBackupProps> = (props) => {
  const { dispatch, licenseBackup: {
    license
  } } = props;
  const { TabPane } = Tabs;
  //TODO: 数据备份和证书上传文件地址
  const dataAction = "https://www.test.com";
  const licenseAction = "https://www.test.com";

  useEffect(() => {
    dispatch({
      type: 'licenseBackup/getLicenseData',
    })
  },[]);

  return (
    <PageHeaderWrapper>
      <Row gutter={[8,24]}>
        <Card>
          <Tabs>
            <TabPane tab="导出数据表" key="1">
              <Button>备份数据库</Button>
            </TabPane>
            <TabPane tab="导入数据表" key="2">
              <FileUpload action={dataAction} />
            </TabPane>
            <TabPane tab="查看证书" key="3">
              <Row gutter={8}>
                <Col span={8}>
                  证书信息
                </Col>
                <Col span={8}>
                  有效起始时间
                </Col>
                <Col span={8}>
                  有效结束时间
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  {license?.info}
                </Col>
                <Col span={8}>
                  {license?.notBefore}
                </Col>
                <Col span={8}>
                  {license?.notAfter}
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="导入证书">
              <FileUpload action={licenseAction} />
            </TabPane>
          </Tabs>
        </Card>
      </Row>
    </PageHeaderWrapper>
  )
}

export default connect(({ licenseBackup }: ConnectState) => ({
  licenseBackup:licenseBackup,
}))(LicenseBackup);

