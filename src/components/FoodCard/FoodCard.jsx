import PropTypes from 'prop-types'
import './FoodCard.css'

const FoodCard = ({ cart, food, measures, addToCart, removeFromCart }) => {
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
        <button onClick={(e) => removeSelectionFromCart(e)}>
          Remove from Cart
        </button>
      )
    } else {
      return (
        <button onClick={(e) => addSelectionToCart(e)}>
          Add to Cart
        </button>
      )
    }
  }

  const measurementOunce = measures.find(measure => measure.label === "Ounce")

  return (
    <section className='food-card'>
        <img className='food-card-image' src={image} alt={label}/>
        <p>{label}<br/>{measurementOunce.weight.toFixed(1)}&nbsp;{measurementOunce.label}s</p>
      { showButtonType(foodId) }
    </section>
  )
}

export default FoodCard

FoodCard.propTypes = {
  cart: PropTypes.array,
  food: PropTypes.object,
  measures: PropTypes.array,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
}
