import notAvailable from '../../assets/img-not-found.svg'
import "./ConfirmationPage.css"

interface Food {
  foodId: string;
  label: string;
  image: string;
  quantity?: number;
}

interface ConfirmationPageProps {
  purchasedItems: Food[];
}

const ConfirmationPage = ({ purchasedItems }: ConfirmationPageProps) => {
  const purchasedItemsList = purchasedItems?.map((item, index) => {
    const {image, label, quantity} = item
    return (
      <div className='confirmation-item' key={index}>
        <img className='confirmation-image' src={image ? image : notAvailable} alt={label}/>
        <p>{label} x <span className='confirmation-item-quantity'>{quantity}</span></p>
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

