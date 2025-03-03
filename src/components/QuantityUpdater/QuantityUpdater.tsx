import { PiPlusThin, PiMinusThin } from "react-icons/pi";
import './QuantityUpdater.css'

interface QuantityUpdaterProps {
  id: string;
  quantity?: number;
  removeFromCart: (id: string) => void;
  increaseItemQuantity: (id: string) => void;
  decreaseItemQuantity: (id: string) => void;
}

const QuantityUpdater = ({ id, quantity, removeFromCart,
increaseItemQuantity, decreaseItemQuantity }: QuantityUpdaterProps) => {

  const increaseQuantity = (e: React.SyntheticEvent) => {
    e.preventDefault()
    increaseItemQuantity(id)
  }

  const decreaseQuantity = (e: React.SyntheticEvent) => {
    e.preventDefault()
    decreaseItemQuantity(id)
  }

   const removeSelectionFromCart = (e: React.SyntheticEvent) => {
    e.preventDefault()
    removeFromCart(id)
  }

  const buttonDisplay = (e: React.SyntheticEvent) => {
    if (quantity !== undefined) {
      return quantity <= 1 ?
       removeSelectionFromCart(e)
       :
       decreaseQuantity(e)
    }
  }

  return (
    <section className='quantity-updater'>
      <button className='quantity-updater-decrease-button' onClick={(e) => buttonDisplay(e)}>
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
