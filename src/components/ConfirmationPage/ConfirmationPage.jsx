import PropTypes from 'prop-types'
import "./ConfirmationPage.css"

const ConfirmationPage = ({ purchasedItems }) => {

  const purchasedItemsList = purchasedItems.map((item, index) => {
    const {image, label} = item
    return (
      <div className='confirmation-item' key={index}>
        <img className='confirmation-image' src={image} alt={label}/>
        <p>{label}</p>
      </div>
    )
  })

  return (
    <section className='confirmation'>
      { purchasedItemsList.length ?
      <div className='confirmation-container'>
        <h2>Thank you!</h2>
        <p>The following items have been purchased:</p>
        <div className='confirmation-items-list-container'>
          { purchasedItemsList }
        </div>
      </div>
       : 
      <div className='confirmation-no-items-message'>
        <p>No items purchased</p>
      </div>
      }
    </section>
  )
}

export default ConfirmationPage

ConfirmationPage.propTypes = {
  purchasedItems: PropTypes.array,
}