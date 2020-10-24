import React, { useState } from 'react';

import { Form, Input, Button, Typography, Divider, notification } from 'antd';
import { MailTwoTone, LockTwoTone } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { SignIn } from '../configs/types/auth';
import { signIn } from '../services/auth';

const initialValues: SignIn = {
  email: '',
  password: '',
};

const Signin = (): JSX.Element => {
  const [loading, setloading] = useState(false);
  const history = useHistory();
  const { Title } = Typography;

  const onFinish = async (values: SignIn) => {
    try {
      setloading(true);
      const { data } = await signIn(values);
      // setItem(configData.accessTokenKeyName, { ...data });
      notification.success({
        message: 'Welcome to foody Recipe App!',
        description: "You've logged in successfully",
        placement: 'bottomRight',
      });
      // handleAccessData();
      // history.push(`/${menuNames.dash}`);
    } catch (error) {
      notification.error({
        message: 'Opps! Something is wrong!',
        description: error.message,
        placement: 'bottomRight',
      });
      setloading(false);
    }
  };

  return (
    <div style={{ maxWidth: '50%', margin: '0 auto' }}>
      <Title style={{ textAlign: 'center' }}>Sign in</Title>
      <Divider />
      <Form name="login" initialValues={initialValues} onFinish={onFinish}>
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
          <Input
            prefix={<MailTwoTone twoToneColor="#e67e22" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password
            prefix={<LockTwoTone twoToneColor="#e67e22" />}
            placeholder="Password"
          />
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
