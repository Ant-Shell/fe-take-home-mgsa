import PropTypes from 'prop-types'
import './CartModal.css'

const CartModal = ({ cart, hideModal }) => {

  const closeModal = (e) => {
    e.preventDefault()
    hideModal()
  }

  const cartItems = cart.map((item, index) => {
    const {image, label} = item
    return (
      <div className='cart-modal-item' key={index}>
        <img className='cart-modal-image' src={image} alt={label}/>
        <p>{label}</p>
      </div>
    )
  })

  return (
    <section className='cart-modal'>
      <header className='cart-modal-header'>
        <p>Cart</p>
        <button className='cart-modal-button' onClick={(e) => closeModal(e)}>Close</button>
      </header>
      <div className='cart-modal-item-container'>
        {cartItems}
      </div>
    </section>
  )
}

export default CartModal

CartModal.propTypes = {
  cart: PropTypes.array,
  hideModal: PropTypes.func
}