import { LoginOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'

import './Login.scss'

const { Item } = Form

const Login = () => {
  const onFinish = (values) => console.log('Success:', values)

  const onFinishFailed = (errorInfo) => console.log('Failed:', errorInfo)

  const initialValues = { remember: true }
  const wrapperCol = { offset: 8, span: 16 }

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__container--img"></div>
        <div className="login__container--form">
          <Form
            name="basic"
            initialValues={initialValues}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <h2>Login</h2>
            <LoginOutlined className="icon" />
            <Item
              className="item"
              label="Username"
              name="username"
              rules={[
                { required: true, message: 'Please input your username!' }
              ]}
            >
              <Input />
            </Item>

            <Item
              className="item"
              label="Password"
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' }
              ]}
            >
              <Input.Password />
            </Item>

            <Item
              name="remember"
              valuePropName="checked"
              wrapperCol={wrapperCol}
            >
              <Checkbox>Remember me</Checkbox>
            </Item>

            <Item className="item" wrapperCol={wrapperCol}>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login
