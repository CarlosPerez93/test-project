import { UserAddOutlined } from '@ant-design/icons'
import { Button, Form, Input, DatePicker, Divider } from 'antd'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import './register.scss'

const { Item } = Form

const Register = () => {
  let navigate = useNavigate()

  const onChange = (date, dateString) => console.log(date, dateString)

  const onFinish = (values) => {
    console.log('Success:', values)
    axios.post('http://localhost:4000/user/postUser', values)
    navigate('/login')
  }

  const onFinishFailed = (errorInfo) => console.log('Failed:', errorInfo)

  const initialValues = { remember: true }
  const wrapperCol = { offset: 8, span: 16 }

  return (
    <div className="register">
      <div className="register__container">
        <div className="register__container--img"></div>
        <div className="register__container--form">
          <Form
            /// Form={Form}
            name="basic"
            initialValues={initialValues}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <h2>Register</h2>
            <UserAddOutlined className="icon" />

            <Item
              className="item"
              label="First Name"
              name="nombreUser"
              rules={[
                { required: true, message: 'Please input your First Name!' }
              ]}
            >
              <Input />
            </Item>
            <Item
              className="item"
              label="Second Name"
              name="SecondName"
              rules={[{ message: 'Please input your Second Name!' }]}
            >
              <Input />
            </Item>
            <Item
              className="item"
              label="Last Name"
              name="LastName"
              rules={[
                {
                  required: true,
                  message: 'Please input your Last Name!'
                }
              ]}
            >
              <Input />
            </Item>
            <Item
              className="item"
              label="Date Birth"
              name="DateBirth"
              rules={[
                { required: true, message: 'Please input your Date Birth!' }
              ]}
            >
              <DatePicker className="item__date" onChange={onChange} />
            </Item>
            <Divider />

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
              label="Username"
              name="Username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Second Last name!'
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
                {
                  required: true,
                  message: 'Please input your Second Last name!'
                }
              ]}
            >
              <Input.Password />
            </Item>
            <Item className="item" wrapperCol={wrapperCol}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Register
