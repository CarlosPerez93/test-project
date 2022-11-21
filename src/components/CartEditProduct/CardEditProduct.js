import axios from 'axios'

import { Divider, Modal, Button, Form, Input } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { useJwt } from 'react-jwt'

import './CardEditProduct.scss'
const { Item } = Form

export const CardEditProduct = ({
  productEditVisible,
  setProductEditVisible,
  nombreProducto,
  precioProducto,
  idProduct,
  putProduct
}) => {
  const token = localStorage.getItem('token')
  const { decodedToken } = useJwt(token)
  let idUser

  localStorage.setItem('idUser', idUser)
  if (decodedToken) idUser = decodedToken.data.idUser

  const onFinish = ({ nombreProducto, precioProducto }) => {
    putProduct(nombreProducto, precioProducto, idProduct)
    setProductEditVisible(!productEditVisible)
  }

  return (
    <Modal
      okButtonProps={{ hidden: true }}
      cancelButtonProps={{ hidden: true }}
      open={!productEditVisible}
      onCancel={setProductEditVisible}
      className="modal .ant-modal-body"
      closable={false}
    >
      <div className="modal__cartEditProduct">
        <div className="modal__cartEditProduct__header">
          <h2>Edit Product</h2>
          <EditOutlined />
        </div>
        <Divider />
        <div className="modal__cartEditProduct__body">
          <Form name="basic" onFinish={onFinish} autoComplete="off">
            <Item
              initialValue={nombreProducto}
              name="nombreProducto"
              label="Product Price"
            >
              <Input />
            </Item>
            <Item
              initialValue={precioProducto}
              name="precioProducto"
              label="Product Price"
            >
              <Input />
            </Item>

            <Item>
              <Button
                type="primary"
                htmlType="submit"
                className="modal__cartEditProduct__body__button"
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
