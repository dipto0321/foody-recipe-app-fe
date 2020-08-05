import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card, Space, Typography, notification } from 'antd';
import serverAPI from '../apis/baseApi';
import {
  configData,
  endPointPaths,
  menuNames,
  rootPath,
} from '../utils/configs';
import { removeItem } from '../utils/sessionStorage';
import { SignOutProps } from '../interfaces/signout';

const Signout = ({
  accessData,
  handleAccessData,
}: SignOutProps): JSX.Element => {
  const { Text } = Typography;
  const { refresh } = accessData;
  const history = useHistory();
  const handleYesClick = async () => {
    try {
      await serverAPI.post(endPointPaths.refreshTokenPath, { refresh });
      removeItem(configData.accessTokenKeyName);
      handleAccessData();
      notification.success({
        message: `Sign out Success!`,
        description: 'Bye Bye, See u again!',
        placement: 'bottomRight',
      });
      history.push(rootPath);
    } catch (error) {
      notification.error({
        message: `Opps! Something is wrong!`,
        description: error.message,
        placement: 'bottomRight',
      });
    }
  };

  const handleNoClick = () => {
    history.push(`/${menuNames.dash}`);
  };

  return (
    <Card title="Leave" style={{ width: 300, margin: '10px auto' }}>
      <Text>Are you want to leave?</Text>
      <Space>
        <Button type="primary" danger onClick={handleYesClick}>
          Yes
        </Button>
        <Button type="primary" onClick={handleNoClick}>
          No
        </Button>
      </Space>
    </Card>
  );
};

export default Signout;
