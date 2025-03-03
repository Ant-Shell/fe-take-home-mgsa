import { useNavigate } from 'react-router-dom'
import notAvailable from '../../assets/img-not-found.svg'
import './CartModal.css'

interface Food {
  foodId: string;
  label: string;
  image: string;
  quantity?: number;
}

interface CartModalProps {
  cart: Food[];
  hideModal: () => void;
  removeFromCart: (id: string) => void;
}

const CartModal = ({ cart, hideModal, removeFromCart }: CartModalProps) => {
  const navigate = useNavigate()

  const closeModal = (e: React.SyntheticEvent) => {
    e.preventDefault()
    hideModal()
  }

  const removeItem = (e: React.SyntheticEvent, id: string) => {
    e.preventDefault()
    removeFromCart(id)
  }

  const checkoutAction = (e: React.SyntheticEvent) => {
    e.preventDefault()
    hideModal()
    navigate("/checkout")
  }

  const cartItems = cart.map((item, index) => {
    const {image, label, foodId, quantity} = item
    return (
      <div className='cart-modal-item' key={index}>
        <img className='cart-modal-image' src={image ? image : notAvailable} alt={label}/>
        <p>{label} x <span className='cart-modal-item-quantity'>{quantity}</span></p>
        <button className='cart-modal-remove-item-button' onClick={(e) => removeItem(e, foodId)}>Remove Item</button>
      </div>
    )
  })

  return (
    <aside className='cart-modal'>
      <header className='cart-modal-header'>
        <h2 className='cart-modal-banner'>Cart</h2>
        <button className='cart-modal-close-button'
        onClick={(e) => closeModal(e)}>
          Close
        </button>
      </header>
        <button className='cart-modal-checkout-button'
        onClick={(e) => checkoutAction(e)}
        disabled={!cart.length}>
          Checkout
        </button>
      <div className='cart-modal-item-container'>
        { cartItems }
      </div>
    </aside>
  )
}

export default CartModal

