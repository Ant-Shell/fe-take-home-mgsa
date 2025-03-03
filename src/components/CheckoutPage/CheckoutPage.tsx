import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './CheckoutPage.css'

type Setter = (value: string) => void;

interface Food {
  foodId: string;
  label: string;
  image: string;
  quantity?: number;
}

interface CheckoutPageProps {
  addToPurchasedItems: () => void;
  hideModal: () => void;
  cart: Food[];
}

const CheckoutPage = ({ addToPurchasedItems, hideModal, cart }: CheckoutPageProps) => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [contactNumber, setContactNumber] = useState<string>('')
  const [paymentMethod, setPaymentMethod] = useState<string>('')
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> |
      React.ChangeEvent<HTMLSelectElement>, setter: Setter) => {
    setter(e.target.value)
  }

  const placeOrder = (e: React.SyntheticEvent) => {
    e.preventDefault()
    addToPurchasedItems()
    hideModal()
    navigate("/confirmation")
  }

  return (
    <section className='checkout-page'>
      { !cart.length ?
      <h2>No Items to Purchase</h2>
      :
      <>
        <h2>Order Information</h2>
        <div className='checkout-page-container'>
          <form className="checkout-page-form" onSubmit={(e) => placeOrder(e)}>
            <div className="checkout-page-inputs">
              <div className='checkout-page-input-container'>
                <label className='checkout-page-input-label'>First Name</label>
                <input
                className='checkout-page-input'
                type='text'
                value={firstName}
                onChange={(e) => handleChange(e, setFirstName)}
                required={true}
                />
                </div>
              <div className='checkout-page-input-container'>
                <label className='checkout-page-input-label'>Last Name</label>
                <input
                className='checkout-page-input'
                type='text'
                value={lastName}
                onChange={(e) => handleChange(e, setLastName)}
                required={true}
                />
              </div>
              <div className='checkout-page-input-container'>
                <label className='checkout-page-input-label'>Email</label>
                <input
                className='checkout-page-input'
                type='email'
                value={email}
                onChange={(e) => handleChange(e, setEmail)}
                required={true}
                />
              </div>
              <div className='checkout-page-input-container'>
                <label className='checkout-page-input-label'>Contact Number</label>
                <input
                className='checkout-page-input'
                type='text'
                value={contactNumber}
                onChange={(e) => handleChange(e, setContactNumber)}
                required={true}
                />
              </div>
            </div>
            <div className="checkout-page-payment-selection">
              <label>
                Payment Method:
              </label>
              <select className="checkout-page-select"
                value={paymentMethod}
                onChange={(e) => handleChange(e, setPaymentMethod)}>
                <option value="">Select</option>
                <option value="visa">Visa</option>
                <option value="mastercard">MasterCard</option>
                <option value="amex">Amex</option>
                <option value="discover">Discover</option>
              </select>
            </div>
            <button className='checkout-page-order-button'
            onClick={(e) => placeOrder(e)}>
              Place Order
            </button>
          </form>
        </div>
      </> }
    </section>
  )
}

export default CheckoutPage

