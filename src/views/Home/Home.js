import axios from 'axios'
import { useEffect, useState } from 'react'
import { Carousel, Spin } from 'antd'
import { MenuFoldOutlined, ShoppingCartOutlined } from '@ant-design/icons'

import { Cart } from '../../components/Cart/Cart'
import { Products } from '../../components/Products/Products'

import './Home.scss'

let token = localStorage.getItem('token')

const Home = () => {
  const [visible, setVisible] = useState(false)
  const [cart, setCart] = useState([])
  const [lisProducts, setListProducts] = useState()

  const handleShowCard = () => setVisible(!visible)

  useEffect(() => {
    axios
      .get('http://localhost:4000/product/getProduct', {
        headers: { authorization: `Bearer ${token}` }
      })
      .then((response) => {
        setListProducts(response.data)
      })
  }, [])
  console.log(lisProducts)

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
          <div className="home__body__products">
            {lisProducts?.map((product, index) => (
              <Carousel>
                <Products
                  key={index}
                  product={product}
                  cart={cart}
                  setCart={setCart}
                  lisProducts={lisProducts}
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
    </>
  )
}

export default Home
