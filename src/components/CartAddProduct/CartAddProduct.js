import axios from 'axios'
import { Divider, Modal, Button, Form, Input, Space } from 'antd'
import {
  AppstoreAddOutlined,
  MinusCircleOutlined,
  PlusOutlined
} from '@ant-design/icons'
import { useJwt } from 'react-jwt'
import './CartAddProduct.scss'

const { List, Item } = Form

export const CartAddProduct = ({ productVisible, setProductVisible }) => {
  const token = localStorage.getItem('token')
  const { decodedToken, isExpired } = useJwt(token)
  let idUser
  localStorage.setItem('idUser', idUser)
  if (decodedToken) idUser = decodedToken.data.idUser

  const onFinish = (values) => {
    if (values.producto.length > 0) {
      values.producto.map((res, index) =>
        postProduct(res.nombreProducto, res.precioProducto, idUser)
      )
    }

    setProductVisible(!productVisible)
  }

  const postProduct = (nombreProducto, precioProducto, idUser) => {
    axios.post(
      'http://localhost:4000/product/postProduct',
      {
        nombreProducto,
        precioProducto,
        idUser
      },
      {
        headers: { authorization: `Bearer ${token}` }
      }
    )
  }
  return (
    <Modal
      okButtonProps={{ hidden: true }}
      cancelButtonProps={{ hidden: true }}
      open={!productVisible}
      onCancel={setProductVisible}
      className="modal .ant-modal-body"
      closable={false}
    >
      <div className="modal__cartAddProduct">
        <div className="modal__cartAddProduct__header">
          <h2>Add Product</h2>
          <AppstoreAddOutlined />
        </div>
        <Divider />
        <div className="modal__cartAddProduct__body">
          <Form
            name="dynamic_form_nest_item"
            onFinish={onFinish}
            autoComplete="off"
          >
            <List name="producto">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space
                      key={key}
                      style={{
                        display: 'flex',
                        marginBottom: 8
                      }}
                      align="baseline"
                    >
                      <Item
                        {...restField}
                        name={[name, 'nombreProducto']}
                        rules={[
                          {
                            required: true,
                            message: 'Missing product name'
                          }
                        ]}
                      >
                        <Input placeholder="Product Name" />
                      </Item>
                      <Item
                        {...restField}
                        name={[name, 'precioProducto']}
                        rules={[
                          {
                            required: true,
                            message: 'Missing product price'
                          }
                        ]}
                      >
                        <Input placeholder="Price" />
                      </Item>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Space>
                  ))}
                  <Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add Product
                    </Button>
                  </Item>
                </>
              )}
            </List>
            <Item>
              <Button
                type="primary"
                htmlType="submit"
                className="modal__cartAddProduct__body__button"
              >
                Send
              </Button>
            </Item>
          </Form>
        </div>
      </div>
    </Modal>
  )
}
