import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './App.css';

export const SignForm = () => {
  return (
    <div className="flex-center">
      <div className="wrapper">
        <h1 style={{textAlign: 'center'}}>
          StackFindover
        </h1>
        <Form
          name="normal_login"
          className="login-form"
        >
          <h3>
            Sign in to your account
          </h3>
          <Form.Item
            name="Email"
            label="Email"
            labelAlign="left"
            rules={[
              {
                type: "email",
                message: 'Please input your Email!',
              },
            ]}
            style={{flexDirection: 'column'}}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            labelAlign="left"
            rules={[
              {
                message: 'Please input your Password!',
              },
            ]}
            style={{flexDirection: 'column'}}
          >

            <a className="login-form-forgot" href="https://www.google.com/">
              Forgot password
            </a>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <div>
            <Form.Item style={{marginBottom: 0}}>
              <Form.Item name="staySigned" valuePropName="checked" noStyle>
                <Checkbox>Stay signed in for a week</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item>
              <a href="https://www.facebook.com/">
                <Button type="primary" className="login-form-button">
                  Continue
                </Button>
              </a>
            </Form.Item>
            <div style={{textAlign: 'center'}}>
              <a href="https://www.google.fr/maps?hl=en&authuser=0" >Use single sign-on (Google) instead</a>
            </div>
          </div>
        </Form>
        <div style={{textAlign: 'center'}}>
          <p>
            Don't have an account? <a href="">Sign up</a>
          </p>
        </div>
      </div>

    </div>
  );
}
