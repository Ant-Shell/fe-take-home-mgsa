import SearchBar from '../SearchBar/SearchBar'
import PropTypes from 'prop-types'
import './Header.css'

const Header = ({ getFoodItem }) => {
  return (
    <header className='header'>
      <div className='header-content-container'>
        <p>Logo</p>
        <nav>
          <p>Navbar placeholder</p>
        </nav>
        <p>Cart</p>
      </div>
    <SearchBar getFoodItem={getFoodItem} />
  </header>
  )
}

export default Header

Header.propTypes = {
  getFoodItem: PropTypes.func
}
