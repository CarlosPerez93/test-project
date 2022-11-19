import { Modal } from 'antd'

import { Products } from '../Products/Products'

import './Cart.scss'

export const Cart = ({ cart, setCart, visible, setVisible }) => {
  return (
    <Modal
      okButtonProps={{ hidden: true }}
      cancelButtonProps={{ hidden: true }}
      open={!visible}
      onCancel={setVisible}
      className="modal .ant-modal-body"
      closable={false}
    >
      <div className="modal__cart">
        <h3>Car</h3>

        {cart.length === 0 ? (
          <p>There's nothing around here...</p>
        ) : (
          cart.map((product, key) => (
            <Products
              key={key}
              product={product}
              cart={cart}
              setCart={setCart}
            />
          ))
        )}
      </div>
    </Modal>
  )
}
