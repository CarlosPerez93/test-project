import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Carousel, Button, Space } from 'antd'
import {
  MenuFoldOutlined,
  ShoppingCartOutlined,
  PlusOutlined,
  LogoutOutlined
} from '@ant-design/icons'

import AuthContext from '../../context/AuthContext'
import { Cart } from '../../components/Cart/Cart'
import { Products } from '../../components/Products/Products'
import { CartAddProduct } from '../../components/CartAddProduct/CartAddProduct'

import './Home.scss'

const Home = () => {
  let token = localStorage.getItem('token')
  const { logOut } = useContext(AuthContext)
  const [visible, setVisible] = useState(false)
  const [productVisible, setProductVisible] = useState(false)
  const [cart, setCart] = useState([])
  const [lisProducts, setListProducts] = useState()
  const [isDelete, setIsDelete] = useState(false)
  const [isEditProduct, setIsEditProduct] = useState(false)

  const handleShowCard = () => setVisible(!visible)
  const handleShowCardAdd = () => setProductVisible(!productVisible)

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:4000/product/deleteProduct/${id}`, {
      headers: { authorization: `Bearer ${token}` }
    })
    setIsDelete(true)
  }

  const putProduct = (nombreProducto, precioProducto, idProduct) => {
    axios.put(
      'http://localhost:4000/product/putProduct',
      {
        nombreProducto,
        precioProducto,
        idProduct
      },
      {
        headers: { authorization: `Bearer ${token}` }
      }
    )
    setIsEditProduct(true)
  }

  useEffect(() => {
    axios
      .get('http://localhost:4000/product/getProduct', {
        headers: { authorization: `Bearer ${token}` }
      })
      .then((response) => {
        setListProducts(response.data)
        setIsDelete(false)
        setIsEditProduct(false)
      })
  }, [isDelete, isEditProduct])

  return (
    <>
      <div className="home">
        <div className="home__header">
          <MenuFoldOutlined className="home__header__menu" />
          <h1>Products</h1>
          <div className="home__header__countCard" onClick={handleShowCard}>
            <p>{cart.length}</p>
            <ShoppingCartOutlined />
          </div>
          <LogoutOutlined className="home__header__logOut" onClick={logOut} />
        </div>
        <div className="home_body">
          <p>Take advantage of combos 50% off for a limited time only!</p>

          <Space>
            <Button type="dashed" onClick={handleShowCardAdd}>
              <PlusOutlined size={'200px'} />
              Add Product
            </Button>
          </Space>

          <div className="home__body__products">
            {lisProducts?.map((product, index) => (
              <Carousel key={index}>
                <Products
                  product={product}
                  cart={cart}
                  setCart={setCart}
                  lisProducts={lisProducts}
                  setListProducts={setListProducts}
                  deleteProduct={deleteProduct}
                  putProduct={putProduct}
                />
              </Carousel>
            ))}
          </div>
        </div>
      </div>
      <Cart
        cart={cart}
        setCart={setCart}
        visible={!visible}
        setVisible={handleShowCard}
      />
      <CartAddProduct
        productVisible={!productVisible}
        setProductVisible={handleShowCardAdd}
        lisProducts={lisProducts}
      />
    </>
  )
}

export default Home
