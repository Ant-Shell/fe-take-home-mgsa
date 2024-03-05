import { useEffect } from 'react';
import PropTypes from 'prop-types'
import FoodCard from '../FoodCard/FoodCard'
import './SearchResults.css'

const SearchResults = ({ foodItemResult, item, getFoodItem }) => {

  const {text, hints} = foodItemResult

  const resultsList = hints?.map((hint, index) => {
    const {food, measures} = hint
    const {foodId, label, image} = food

    return (
      <FoodCard
        id={foodId}
        label={label}
        image={image}
        measures={measures}
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
  getFoodItem: PropTypes.func
}
