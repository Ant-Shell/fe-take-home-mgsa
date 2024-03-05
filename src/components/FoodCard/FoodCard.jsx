import PropTypes from 'prop-types'
import './FoodCard.css'

const FoodCard = ({id, label, image, measures}) => {
  return (
    <section className='food-card'>
      <p>{label}</p>
      <img src={image} alt={label}/>
    </section>
  )
}

export default FoodCard

FoodCard.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  image: PropTypes.string,
  measures: PropTypes.array
}