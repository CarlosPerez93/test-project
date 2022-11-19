import { UserAddOutlined } from '@ant-design/icons'
import { Button, Form, Input, DatePicker, Divider } from 'antd'
import useFetch from '../../hooks/useFetch'
import './register.scss'

const { Item } = Form

const Register = () => {
  const onChange = (date, dateString) => console.log(date, dateString)

  const onFinish = (values) => console.log('Success:', values)

  const onFinishFailed = (errorInfo) => console.log('Failed:', errorInfo)

  const initialValues = { remember: true }
  const wrapperCol = { offset: 8, span: 16 }

  const { loading, data } = useFetch('https://peticiones.online/api/products', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

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
              name="FirstName"
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
              rules={[
                { required: true, message: 'Please input your Second Name!' }
              ]}
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
              label="Second Last name"
              name="SecondLastName"
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
              label="Date Birth"
              name="DateBirth"
              rules={[
                { required: true, message: 'Please input your Date Birth!' }
              ]}
            >
              <DatePicker onChange={onChange} />
            </Item>
            <Divider />

            <Item
              className="item"
              label="e-mail"
              name="e-mail"
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
              name="Password"
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
