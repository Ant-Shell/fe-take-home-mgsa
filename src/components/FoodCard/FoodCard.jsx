import PropTypes from 'prop-types'
import './FoodCard.css'

const FoodCard = ({food, measures, addToCart}) => {
  const {foodId, label, image} = food

  const addSelectionToCart = (e) => {
    e.preventDefault()
    addToCart(food)
  }

  return (
    <section className='food-card'>
      <div>
        <img src={image} alt={label}/>
        <p>{label}</p>
      </div>
      <button onClick={(e) => addSelectionToCart(e)}>Add to Cart</button>
    </section>
  )
}

export default FoodCard

FoodCard.propTypes = {
  food: PropTypes.object,
  measures: PropTypes.array,
  addToCart: PropTypes.func
}
