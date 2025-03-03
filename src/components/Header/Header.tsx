import { useNavigate } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import cartImage from '../../assets/cart.svg'
import logo from '../../assets/logo.svg'
import './Header.css'

interface Food {
  foodId: string;
  label: string;
  image: string;
  quantity?: number;
}

interface HeaderProps {
  getFoodItem: (foodItem: string) => void;
  toggleModal: () => void;
  removeFromPurchasedItems: () => void;
  hideModal: () => void;
  cart: Food[];
  showModal: boolean;
}

const Header = ({ getFoodItem, toggleModal, removeFromPurchasedItems,
  hideModal, cart , showModal }: HeaderProps) => {
  const navigate = useNavigate()

  const modalToggle = (e: React.SyntheticEvent) => {
    e.preventDefault()
    toggleModal()
  }

  const returnHome = (e: React.SyntheticEvent) => {
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

