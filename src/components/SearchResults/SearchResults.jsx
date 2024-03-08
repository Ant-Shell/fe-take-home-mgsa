import { useEffect } from 'react';
import PropTypes from 'prop-types'
import FoodCard from '../FoodCard/FoodCard'
import './SearchResults.css'

const SearchResults = ({ cart, foodItemName, item, errorMessage,
  getFoodItem, addToCart, removeFromCart, foodResults }) => {

  const resultsList = foodResults?.map((foodResult, index) => {
    const {food, measures} = foodResult

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
    if (!foodResults.length && !errorMessage) {
      getFoodItem(item)
    }
  })

  return (
    <section className='search-results'>
      {( errorMessage ?
        <p>Error: {errorMessage}<br/>Please try again.</p>
        :
      <>
        <h2 className='search-results-banner'>
          Your results for <span className='search-results__text'>{foodItemName}</span>
        </h2>
        <div className='search-results-list'>
          {resultsList}
        </div>
      </>
      )}
    </section>
  )
}

export default SearchResults

SearchResults.propTypes = {
  cart: PropTypes.array,
  foodItemName: PropTypes.string,
  foodResults: PropTypes.array,
  item: PropTypes.string,
  errorMessage: PropTypes.string,
  getFoodItem: PropTypes.func,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
}
