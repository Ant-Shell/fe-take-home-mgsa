import PropTypes from 'prop-types'
import './FoodCard.css'

const FoodCard = ({ cart, food, addToCart, removeFromCart }) => {
  const {foodId, label, image} = food

  const addSelectionToCart = (e) => {
    e.preventDefault()
    addToCart(food)
  }

  const removeSelectionFromCart = (e) => {
    e.preventDefault()
    removeFromCart(foodId)
  }

  const showButtonType = (id) => {
    const foundFood = cart.find(({foodId}) => foodId === id)
    if (foundFood) {
      return (
        <button className='food-card-button-remove-item' onClick={(e) => removeSelectionFromCart(e)}>
          Remove from Cart
        </button>
      )
    } else {
      return (
        <button className='food-card-button-add-item' onClick={(e) => addSelectionToCart(e)}>
          Add to Cart
        </button>
      )
    }
  }

  return (
    <section className='food-card'>
        <img className='food-card-image' src={image} alt={label}/>
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
}
