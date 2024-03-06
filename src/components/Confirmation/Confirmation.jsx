import PropTypes from 'prop-types'
import "./Confirmation.css"

const Confirmation = ({ purchasedItems }) => {

  const purchasedItemsList = purchasedItems.map((item, index) => {
    const {image, label} = item
    return (
      <div className='cart-modal-item' key={index}>
        <img className='cart-modal-image' src={image} alt={label}/>
        <p>{label}</p>
      </div>
    )
  })

  return (
    <section className='confirmation'>
      { purchasedItemsList.length ?
      <div className='confirmation-container'>
        <h2>Thank you!</h2>
        <p>Your Items Have Been Purchased!<br/></p>
        <p>Your purchased items:</p>
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

export default Confirmation

Confirmation.propTypes = {
  purchasedItems: PropTypes.array,
}