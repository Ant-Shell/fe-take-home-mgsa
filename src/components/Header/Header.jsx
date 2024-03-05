import SearchBar from '../SearchBar/SearchBar'
import PropTypes from 'prop-types'
import './Header.css'

const Header = ({ getFoodItem, toggleModal }) => {

  const modalToggle = (e) => {
    e.preventDefault()
    toggleModal()
  }

  return (
    <header className='header'>
      <div className='header-content-container'>
        <p>Logo</p>
        <nav>
          <p>Navbar placeholder</p>
        </nav>
        <p className='header-cart-img' onClick={(e) => modalToggle(e)}>Cart</p>
      </div>
    <SearchBar getFoodItem={getFoodItem} />
  </header>
  )
}

export default Header

Header.propTypes = {
  getFoodItem: PropTypes.func,
  toggleModal: PropTypes.func,
}
