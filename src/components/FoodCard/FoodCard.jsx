import PropTypes from 'prop-types'
import QuantityUpdater from '../QuantityUpdater/QuantityUpdater'
import notAvailable from '../../assets/img-not-found.svg'
import './FoodCard.css'

const FoodCard = ({ cart, food, addToCart, removeFromCart,
  increaseItemQuantity, decreaseItemQuantity }) => {
  const {foodId, label, image} = food

  const addSelectionToCart = (e) => {
    e.preventDefault()
    addToCart(food)
  }

  const showButtonType = (id) => {
    const foundFood = cart.find(({foodId}) => foodId === id)
    if (foundFood) {
      return (
        <QuantityUpdater
          removeFromCart={removeFromCart}
          increaseItemQuantity={increaseItemQuantity}
          decreaseItemQuantity={decreaseItemQuantity}
          quantity={foundFood.quantity}
          id={foundFood.foodId}
        />
      )
    } else {
      return (
        <button className='food-card-add-item-button' onClick={(e) => addSelectionToCart(e)}>
          Add to Cart
        </button>
      )
    }
  }

  return (
    <section className='food-card'>
        <img className='food-card-image' src={image ? image : notAvailable} alt={label}/>
        <p>{label}</p>
      { showButtonType(foodId) }
    </section>
  )
}

export default FoodCard

FoodCard.propTypes = {
  cart: PropTypes.array,
  food: PropTypes.object,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
  increaseItemQuantity: PropTypes.func,
  decreaseItemQuantity: PropTypes.func,
}
