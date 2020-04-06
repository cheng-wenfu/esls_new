import React, { useEffect } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect, Dispatch } from 'umi';
import { Row, Col } from 'antd';
import { ConnectState, UserModelState } from '@/models/connect';

import UsersTable from './components/UsersTable';

interface UserAdminProps {
  dispatch: Dispatch;
  users: UserModelState;
}

const UserAdmin: React.FC<UserAdminProps> = (props) => {
  const { dispatch, users } = props;

  useEffect(() => {
    dispatch({
      type: 'user/getUsersData',
      payload: {
        page: 0,
      }
    })
  });

  return (
    <PageHeaderWrapper>
      <Row gutter={[8, 24]}>
        <UsersTable dispatch={dispatch} usersData={users.usersData} />
      </Row>
    </PageHeaderWrapper>
  )
}

export default connect(({ user }: ConnectState) => ({
  users: user,
}))(UserAdmin)
