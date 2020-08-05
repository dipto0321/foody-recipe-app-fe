import React, { useState } from 'react';
import { Button, Form, Input, Divider, Typography, notification } from 'antd';
import { UserOutlined, MailTwoTone, LockTwoTone } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { SignUpProps } from '../interfaces/signup';
import { endPointPaths, menuNames } from '../utils/configs';
import serverAPI from '../apis/baseApi';

const initialValues: SignUpProps = {
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

const Signup = (): JSX.Element => {
  const [loadState, setLoadState] = useState(false);
  const { Title } = Typography;
  const history = useHistory();
  const onFinish = async (values: any) => {
    try {
      setLoadState(true);
      const response = await serverAPI.post(endPointPaths.signUpPath, values);
      const { data } = response;
      notification.success({
        message: `Hola! ${data.name}`,
        description: "We've created your account for you.",
        placement: 'bottomRight',
      });
      history.push(`/${menuNames.signIn}`);
    } catch (error) {
      notification.error({
        message: `Opps! Something is wrong!`,
        description: error.message,
        placement: 'bottomRight',
      });
      setLoadState(false);
    }
  };

  return (
    <div style={{ maxWidth: '50%', margin: '0 auto' }}>
      <Title style={{ textAlign: 'center' }}>Join in</Title>
      <Divider />
      <Form name="register" initialValues={initialValues} onFinish={onFinish}>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your Name!',
              whitespace: true,
            },
          ]}
        >
          <Input
            prefix={<UserOutlined style={{ color: '#e67e22' }} />}
            placeholder="Name"
          />
        </Form.Item>
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
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockTwoTone twoToneColor="#e67e22" />}
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('The two passwords that you entered do not match!')
                );
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockTwoTone twoToneColor="#e67e22" />}
            placeholder="Confirm Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loadState}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;
