import { useState } from 'react'
import { Carousel, Spin } from 'antd'
import { MenuFoldOutlined, ShoppingCartOutlined } from '@ant-design/icons'

import { Cart } from '../../components/Cart/Cart'
import { Products } from '../../components/Products/Products'

import useFetch from '../../hooks/useFetch'

import './Home.scss'

const Home = () => {
  const [visible, setVisible] = useState(false)
  const [cart, setCart] = useState([])

  const handleShowCard = () => setVisible(!visible)

  const { loading, data } = useFetch('https://peticiones.online/api/products')

  return (
    <Spin spinning={loading}>
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
            {data?.results?.map((product, index) => (
              <Carousel>
                <Products
                  key={index}
                  product={product}
                  cart={cart}
                  setCart={setCart}
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
    </Spin>
  )
}

export default Home
