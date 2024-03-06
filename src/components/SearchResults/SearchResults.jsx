import { useEffect } from 'react';
import PropTypes from 'prop-types'
import FoodCard from '../FoodCard/FoodCard'
import './SearchResults.css'

const SearchResults = ({ foodItemResult, item, getFoodItem, addToCart }) => {

  const {text, hints} = foodItemResult

  const resultsList = hints?.map((hint, index) => {
    const {food, measures} = hint

    return (
      <FoodCard
        food={food}
        measures={measures}
        addToCart={addToCart}
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
  foodItemResult: PropTypes.object,
  item: PropTypes.string,
  getFoodItem: PropTypes.func,
  addToCart: PropTypes.func
}
