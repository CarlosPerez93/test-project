import './Products.scss'

export const Products = ({ product, cart, setCart, lisProducts }) => {
  const { name, price, id, image } = product

  const addProduct = (id) => {
    const product = lisProducts.payload.results.filter(
      (value) => value.id === id
    )
    setCart([...cart, ...product])
  }

  const deleteProduct = (id) => {
    const product = cart.filter((product) => product.id !== id)
    setCart(product)
  }

  return (
    <div className="products">
      <img src={image} />
      <ul>
        <li id="name">{name}</li>
        <li id="price">${price}</li>
        {lisProducts ? (
          <button type="button" onClick={() => addProduct(id)}>
            Add Car +
          </button>
        ) : (
          <>
            <button type="button" onClick={() => addProduct(id)}>
              Confirm
            </button>
            <button
              className="products__buttonDel"
              type="button"
              onClick={() => deleteProduct(id)}
            >
              Delete
            </button>
          </>
        )}
      </ul>
    </div>
  )
}
