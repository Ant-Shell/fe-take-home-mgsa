import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import FoodCard from '../FoodCard/FoodCard'
import './SearchResults.css'

const SearchResults = ({ cart, foodItemResult, item,
  getFoodItem, addToCart, removeFromCart }) => {
  const {text, hints} = foodItemResult
  const [toggleList, setToggleList] = useState([])

    const handleChange = (e) => {
      if (toggleList.includes(e.target.value)) {
        const filteredList = toggleList.filter(item => item !== e.target.value)
        setToggleList(filteredList)
      } else {
        setToggleList([...toggleList, e.target.value])
      }
    }

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

  const checkBoxes = () => {
    const nutrients = ["High Energy", "High Protien",
     "Low Fat", "Low Carb", "High Fiber"]
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

  useEffect(() => {
    if (!Object.keys(foodItemResult).length) {
      getFoodItem(item)
    }
  })

  return (
    <section className='search-results'>
      <h2>
        Your results for <span className='search-results__text'>{text}</span>
      </h2>
      <div className='search-results-filters-container'>
        <h3>Filters: <span className='check-boxes'>{checkBoxes()}</span></h3>
      </div>
      <div className='search-results-list'>
        {resultsList}
      </div>
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
