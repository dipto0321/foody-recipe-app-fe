import React, { useState } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Typography, Divider, notification } from 'antd';
import { MailTwoTone, LockTwoTone } from '@ant-design/icons';
import { SignIn } from '../configs/types/auth';
import { signIn } from '../services/auth';
import { login } from '../store/auth';

import '../styles/SignIn.less';

const initialValues: SignIn = {
  email: '',
  password: '',
};

const Signin = (): JSX.Element => {
  const [loading, setloading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state: RootStateOrAny) => state.entities.auth);
  const { Title } = Typography;

  const onFinish = async (values: SignIn) => {
    try {
      dispatch(login(values));
      notification.success({
        message: 'Welcome to foody Recipe App!',
        description: "You've logged in successfully",
        placement: 'bottomRight',
      });
    } catch (error) {
      notification.error({
        message: 'Opps! Something is wrong!',
        description: error.message,
        placement: 'bottomRight',
      });
    }
  };

  return (
    <div className="signin">
      <Title className="signin__title">Enter In</Title>
      <Divider />
      <Form
        className="signin__form"
        name="login"
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
          <Button
            className="signin__form--btn"
            type="primary"
            htmlType="submit"
            loading={user.loading}
            size="large"
          >
            Enter
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signin;
