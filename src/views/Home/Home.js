import axios from 'axios'
import { useEffect, useState } from 'react'
import { Carousel, Button, Space } from 'antd'
import {
  MenuFoldOutlined,
  ShoppingCartOutlined,
  PlusOutlined
} from '@ant-design/icons'

import { Cart } from '../../components/Cart/Cart'
import { Products } from '../../components/Products/Products'
import { CartAddProduct } from '../../components/CartAddProduct/CartAddProduct'

import './Home.scss'

const Home = () => {
  let token = localStorage.getItem('token')

  const [visible, setVisible] = useState(false)
  const [productVisible, setProductVisible] = useState(false)
  const [cart, setCart] = useState([])
  const [cartAdd, setCartAdd] = useState([])
  const [lisProducts, setListProducts] = useState()

  const handleShowCard = () => setVisible(!visible)
  const handleShowCardAdd = () => {
    setProductVisible(!productVisible)
  }
  useEffect(() => {
    axios
      .get('http://localhost:4000/product/getProduct', {
        headers: { authorization: `Bearer ${token}` }
      })
      .then((response) => {
        setListProducts(response.data)
      })
  }, [lisProducts])

  return (
    <>
      <div className="home">
        <div className="home__header">
          <MenuFoldOutlined />
          <h1>Products</h1>
          <div className="home__header__countCard" onClick={handleShowCard}>
            <p>{cart.length}</p>
            <ShoppingCartOutlined />
          </div>
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
      />
    </>
  )
}

export default Home
