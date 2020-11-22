import React, { useState } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Button, Form, Input, Divider, Typography, notification } from 'antd';
import { UserOutlined, MailTwoTone, LockTwoTone } from '@ant-design/icons';
import { SignUp } from '../configs/types/auth';
import { signUp } from '../store/auth';
import { menuNames } from '../configs/common';

import '../styles/SignUp.less';

const initialValues: SignUp = {
  name: '',
  email: '',
  password: '',
  confirm: '',
};

const Signup = (): JSX.Element => {
  const { Title } = Typography;
  const history = useHistory();
  const dispatch = useDispatch();
  const loading = useSelector(
    (state: RootStateOrAny) => state.entities.auth.loading
  );

  const onFinish = async (values: SignUp) => {
    try {
      dispatch(signUp(values));
      notification.success({
        message: `Hola! ${values.name}`,
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
    }
  };

  return (
    <div className="signup">
      <Title className="signup__title">Join Us</Title>
      <Divider />
      <Form
        className="signup__form"
        name="register"
        initialValues={initialValues}
        onFinish={onFinish}
      >
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
          <Button
            className="signup__form--btn"
            type="primary"
            htmlType="submit"
            loading={loading}
            size="large"
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;
