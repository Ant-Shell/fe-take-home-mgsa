import { useNavigate } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import PropTypes from 'prop-types'
import cartImage from '../../assets/cart.svg'
import logo from '../../assets/logo.svg'
import './Header.css'

const Header = ({ getFoodItem, toggleModal, removeFromPurchasedItems,
hideModal, cart , showModal}) => {
  const navigate = useNavigate()

  const modalToggle = (e) => {
    e.preventDefault()
    toggleModal()
  }

  const returnHome = (e) => {
    e.preventDefault()
    navigate("/")
    removeFromPurchasedItems()
    hideModal()
  }

  return (
    <header className='header'>
      <div className='header-content-container'>
        <img className='header-cart-logo' src={logo} alt='logo' onClick={(e) => returnHome(e)}/>
        <div className={`header-cart-img-container ${(cart.length && !showModal) ? "header-cart-img-container-pulse" : ""}`}>
          <img className='header-cart-img' src={cartImage} alt='cart' onClick={(e) => modalToggle(e)}/>
        </div>
      </div>
    <SearchBar getFoodItem={getFoodItem} />
  </header>
  )
}

export default Header

Header.propTypes = {
  getFoodItem: PropTypes.func,
  removeFromPurchasedItems: PropTypes.func,
  toggleModal: PropTypes.func,
  hideModal: PropTypes.func, 
  cart: PropTypes.array,
  showModal: PropTypes.bool,
}
