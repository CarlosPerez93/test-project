import { Link } from 'react-router-dom'
import { LoginOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'
import AuthContext from '../../context/AuthContext'
import './Login.scss'
import { useContext } from 'react'

const { Item } = Form

const Login = () => {
  const { handleAuth, logIn, onFinishFailed } = useContext(AuthContext)

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
            onFinish={logIn}
            onFinishFailed={{ onFinishFailed }}
            autoComplete="off"
          >
            <h2>Login</h2>
            <Link to={'/register'}>
              <LoginOutlined className="icon" />
            </Link>
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
