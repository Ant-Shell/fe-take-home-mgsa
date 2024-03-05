import PropTypes from 'prop-types'
import './SearchResults.css'

const SearchResults = ({ foodItemResult }) => {

  const {text, hints} = foodItemResult

  const resultsList = hints.map(hint => {
    return (
      <p key={hint.food.foodId}>{hint.food.label}</p>
    )
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
  foodItemResult: PropTypes.object
}
