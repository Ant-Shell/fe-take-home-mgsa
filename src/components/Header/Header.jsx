import SearchBar from '../SearchBar/SearchBar'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-content-container'>
        <p>Logo</p>
        <nav>
          <p>Navbar placeholder</p>
        </nav>
        <p>Cart</p>
      </div>
    <SearchBar />
  </header>
  )
}

export default Header
