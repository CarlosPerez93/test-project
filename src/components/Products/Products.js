import { Button } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { useState } from 'react'

import { CardEditProduct } from '../CartEditProduct/CardEditProduct'
import './Products.scss'

export const Products = ({
  product,
  cart,
  setCart,
  lisProducts,
  deleteProduct,
  putProduct
}) => {
  const { nombreProducto, precioProducto, idProduct } = product
  const [productEditVisible, setProductEditVisible] = useState(false)

  const addProduct = (id) => {
    const product = lisProducts.filter((value) => value.idProduct === id)
    setCart([...cart, ...product])
  }

  const deleteProductCart = (id) => {
    const product = cart.filter((product) => product.idProduct !== id)
    setCart(product)
  }
  const handleShowCardEditProduct = () => {
    setProductEditVisible(!productEditVisible)
  }

  return (
    <div className="products">
      <Button
        type="dashed"
        className="products__btn"
        onClick={handleShowCardEditProduct}
      >
        <EditOutlined />
      </Button>
      <img
        src={
          'https://images.pexels.com/photos/5872348/pexels-photo-5872348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
        alt="img"
      />
      <ul>
        <li id="nombreProducto">{nombreProducto}</li>
        <li id="precioProducto">${precioProducto}</li>
        {lisProducts ? (
          <>
            <button type="button" onClick={() => addProduct(idProduct)}>
              Add Car +
            </button>
            <button
              className="products__buttonDel"
              type="button"
              onClick={() => deleteProduct(idProduct)}
            >
              Delete
            </button>
          </>
        ) : (
          <>
            <button type="button" onClick={() => addProduct(idProduct)}>
              Confirm
            </button>
            <button
              className="products__buttonDel"
              type="button"
              onClick={() => deleteProductCart(idProduct)}
            >
              Delete
            </button>
          </>
        )}
      </ul>
      <CardEditProduct
        productEditVisible={!productEditVisible}
        setProductEditVisible={handleShowCardEditProduct}
        idProduct={idProduct}
        nombreProducto={nombreProducto}
        precioProducto={precioProducto}
        putProduct={putProduct}
      />
    </div>
  )
}
