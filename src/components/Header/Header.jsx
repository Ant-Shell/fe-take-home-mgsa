import { useNavigate } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import PropTypes from 'prop-types'
import cart from '../../assets/cart.svg'
import logo from '../../assets/logo.svg'
import './Header.css'

const Header = ({ getFoodItem, toggleModal, removeFromPurchasedItems }) => {
  const navigate = useNavigate()

  const modalToggle = (e) => {
    e.preventDefault()
    toggleModal()
  }

  const returnHome = (e) => {
    e.preventDefault()
    navigate("/")
    removeFromPurchasedItems()
  }

  return (
    <header className='header'>
      <div className='header-content-container'>
        <img className='header-cart-logo' src={logo} alt='logo' onClick={(e) => returnHome(e)}/>
        <img className='header-cart-img' src={cart} alt='cart' onClick={(e) => modalToggle(e)}/>
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
}
