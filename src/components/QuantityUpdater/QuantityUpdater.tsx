import { PiPlusThin, PiMinusThin } from "react-icons/pi";
import PropTypes from 'prop-types'
import './QuantityUpdater.css'

const QuantityUpdater = ({ id, quantity, removeFromCart,
increaseItemQuantity, decreaseItemQuantity }) => {

  const increaseQuantity = (e) => {
    e.preventDefault()
    increaseItemQuantity(id)
  }

  const decreaseQuantity = (e) => {
    e.preventDefault()
    decreaseItemQuantity(id)
  }

   const removeSelectionFromCart = (e) => {
    e.preventDefault()
    removeFromCart(id)
  }

  return (
    <section className='quantity-updater'>
      <button className='quantity-updater-decrease-button' onClick={(e) => {
       quantity <= 1 ? 
       removeSelectionFromCart(e)
       :
       decreaseQuantity(e)
      }}>
        <PiMinusThin size={20}/>
      </button>
      <p className='quantity-updater-item-quantity'>{quantity}</p>
      <button className='quantity-updater-increase-button' onClick={(e) => increaseQuantity(e)}>
        <PiPlusThin size={20} />
      </button>
    </section>
  )
}

export default QuantityUpdater

QuantityUpdater.propTypes = {
  id: PropTypes.string,
  quantity: PropTypes.number,
  removeFromCart: PropTypes.func,
  increaseItemQuantity: PropTypes.func,
  decreaseItemQuantity: PropTypes.func,
}