import './Products.scss'

export const Products = ({ product, cart, setCart, lisProducts }) => {
  const { nombreProducto, precioProducto, idProduct } = product

  const addProduct = (id) => {
    const product = lisProducts.filter((value) => value.idProduct === id)
    setCart([...cart, ...product])
  }

  const deleteProduct = (id) => {
    const product = cart.filter((product) => product.idProduct !== id)
    setCart(product)
  }

  return (
    <div className="products">
      <img
        src={
          'https://images.pexels.com/photos/5872348/pexels-photo-5872348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
      />
      <ul>
        <li id="nombreProducto">{nombreProducto}</li>
        <li id="precioProducto">${precioProducto}</li>
        {lisProducts ? (
          <button type="button" onClick={() => addProduct(idProduct)}>
            Add Car +
          </button>
        ) : (
          <>
            <button type="button" onClick={() => addProduct(idProduct)}>
              Confirm
            </button>
            <button
              className="products__buttonDel"
              type="button"
              onClick={() => deleteProduct(idProduct)}
            >
              Delete
            </button>
          </>
        )}
      </ul>
    </div>
  )
}
