import { LoginOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'
import axios from 'axios'

import { redirect } from 'react-router-dom'

import './Login.scss'

const { Item } = Form

export let token
const Login = () => {
  const onFinish = async (values) => {
    try {
      await axios
        .post('http://localhost:4000/login/login', values)
        .then((res) => {
          token = res.data.token
          localStorage.setItem('token', token)
          if (!token) {
            return redirect('/login')
          }

          return redirect('/home')
        })
    } catch (error) {
      console.log(error)
    }
  }

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
              label="E-mail"
              name="emailUser"
              rules={[
                {
                  type: 'email',
                  required: true,
                  message: 'Please input your e-mail!'
                }
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
