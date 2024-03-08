import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import FoodCard from '../FoodCard/FoodCard'
import './SearchResults.css'

const SearchResults = ({ cart, foodItemName, item, errorMessage,
  getFoodItem, addToCart, removeFromCart, foodResults, setFoodResults }) => {
  const [toggleList, setToggleList] = useState([])

    const handleChange = (e) => {
      if (toggleList.includes(e.target.value)) {
        const filteredList = toggleList.filter(item => item !== e.target.value)
        setToggleList(filteredList)
      } else {
        setToggleList([...toggleList, e.target.value])
      }
    }

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

  const checkBoxes = () => {
    const nutrients = ["Alphabetical", "Low Calorie", "Low Carb",
     "Low Fat", "High Fiber", "High Protein"]
    return nutrients.map((nutrient, index) => {
      return (
        <div key={index} className='checkbox'>
          <input
            type="checkbox"
            id={nutrient}
            name="nutrient"
            value={nutrient}
            checked={toggleList.includes(nutrient)}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor={nutrient}>{nutrient}</label>
        </div>
      )
    })
  }
  // console.log(filteredResults)
  // const applyFilters = () => {
  //   if (toggleList.includes("Alphabetical")) {

  //   }
  // }

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
        <div className='search-results-filters-container'>
          <h3 className='search-results-filters'>Filters: <span className='check-boxes'>{checkBoxes()}</span></h3>
        </div>
        <div className='search-results-list'>
          {resultsList} {/* Do a ternary here based on if filtered or not? Replace with applyFilters funciton instead?*/}
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
  setFoodResults: PropTypes.func,
}
