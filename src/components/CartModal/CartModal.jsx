import PropTypes from 'prop-types'
import './CartModal.css'

const CartModal = ({ hideModal }) => {

  const closeModal = (e) => {
    e.preventDefault()
    hideModal()
  }

  return (
    <section className='cart-modal'>
      <div className='cart-modal-container'>
        <header className='cart-modal-header'>
          <p>Cart</p>
          <button className='cart-modal-button' onClick={(e) => closeModal(e)}>Close</button>
        </header>
        {/* List of cart items */}
      </div>
    </section>
  )
}

export default CartModal

CartModal.propTypes = {
  hideModal: PropTypes.func
}