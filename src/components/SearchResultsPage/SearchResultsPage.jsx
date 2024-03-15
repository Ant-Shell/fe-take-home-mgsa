import { useEffect } from 'react';
import PropTypes from 'prop-types'
import FoodCard from '../FoodCard/FoodCard'
import './SearchResultsPage.css'

const SearchResultsPage = ({ cart, item, errorMessage,
  getFoodItem, addToCart, removeFromCart, foodResults,
  increaseItemQuantity, decreaseItemQuantity }) => {

  const itemizedResults = foodResults.reduce((acc, curr) => {
    let foundFood = acc.find(({food}) => food.foodId === curr.food.foodId)
    if (!foundFood) {
      acc.push(curr)
    }
    return acc
  }, [])

  const resultsList = itemizedResults?.map((foodResult, index) => {
    const {food} = foodResult

    return (
      <FoodCard
        cart={cart}
        food={food}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        increaseItemQuantity={increaseItemQuantity}
        decreaseItemQuantity={decreaseItemQuantity}
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
          Your results for <span className='search-results__text'>{item}</span>
        </h2>
        <div className='search-results-list-container'>
          {resultsList}
        </div>
      </>
      )}
    </section>
  )
}

export default SearchResultsPage

SearchResultsPage.propTypes = {
  cart: PropTypes.array,
  foodResults: PropTypes.array,
  item: PropTypes.string,
  errorMessage: PropTypes.string,
  getFoodItem: PropTypes.func,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
  increaseItemQuantity: PropTypes.func,
  decreaseItemQuantity: PropTypes.func,
}
