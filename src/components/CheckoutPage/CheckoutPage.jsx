import { useState } from 'react'
import './CheckoutPage.css'

const CheckoutPage = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')

  const handleChange = (e, setter) => {
    setter(e.target.value)
  }

  const placeOrder = () => {
    console.log("Your order has been placed!")
    // Need to route to the ConfirmationPage, which should display
    // more in-depth order details
    // e.preventDefault()
    // addToPurchasedItems()
    // hideModal()
    // navigate("/confirmation")
  }

  return (
    <section className='checkout-page'>
      <div className='checkout-page-container'>
        <form className="checkout-page-form" onSubmit={placeOrder}>
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
              value={paymentMethod} onChange={(e) => handleChange(e, setPaymentMethod)}>
              <option value="">Select</option>
              <option value="visa">Visa</option>
              <option value="mastercard">MasterCard</option>
              <option value="amex">Amex</option>
              <option value="discover">Discover</option>
            </select>
          </div>
          <button className='checkout-page-order-button'>
            Place Order
          </button>
        </form>
      </div>
    </section>
  )
}

export default CheckoutPage