import React, { useState } from 'react';

import { Form, Input, Button, Typography, Divider, notification } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { SignIn, SignInProps } from '../interfaces/signin';
import serverAPI from '../apis/baseApi';
import { setItem } from '../utils/sessionStorage';
import { configData, endPointPaths, menuNames } from '../utils/configs';

const initialValues: SignIn = {
  email: '',
  password: '',
};

const Signin = ({ handleAccessData }: SignInProps): JSX.Element => {
  const [loading, setloading] = useState(false);
  const history = useHistory();
  const { Title } = Typography;

  const onFinish = async (values: any) => {
    try {
      setloading(true);
      const response = await serverAPI.post(endPointPaths.signInPath, values);
      const { data } = response;
      setItem(configData.accessTokenKeyName, { ...data });
      notification.success({
        message: 'Welcome to foody Recipe App!',
        description: "You've logged in successfully",
        placement: 'bottomLeft',
      });
      handleAccessData();
      history.push(`/${menuNames.dash}`);
    } catch (error) {
      notification.error({
        message: 'Opps! Something is wrong!',
        description: error.message,
        placement: 'bottomLeft',
      });
      setloading(false);
    }
  };

  return (
    <div style={{ maxWidth: '50%', margin: '0 auto' }}>
      <Title style={{ textAlign: 'center' }}>Sign in</Title>
      <Divider />
      <Form
        name="normal_login"
        initialValues={initialValues}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Sign in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signin;
