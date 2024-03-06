import { useEffect } from 'react';
import PropTypes from 'prop-types'
import FoodCard from '../FoodCard/FoodCard'
import './SearchResults.css'

const SearchResults = ({ cart, foodItemResult, item,
  getFoodItem, addToCart, removeFromCart }) => {

  const {text, hints} = foodItemResult

  const resultsList = hints?.map((hint, index) => {
    const {food, measures} = hint

    return (
      <FoodCard
        cart={cart}
        food={food}
        measures={measures}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        key={index}
      />
    )
  })

  useEffect(() => {
    if (!Object.keys(foodItemResult).length) {
      getFoodItem(item)
    }
  })

  return (
    <section className='search-results'>
      <p>
        Your results for <span className='search-results__text'>{text}</span>
      </p>
      {resultsList}
    </section>
  )
}

export default SearchResults

SearchResults.propTypes = {
  cart: PropTypes.array,
  foodItemResult: PropTypes.object,
  item: PropTypes.string,
  getFoodItem: PropTypes.func,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
}
