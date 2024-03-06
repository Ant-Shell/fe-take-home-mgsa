import { useState } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import Header from './components/Header/Header'
import CartModal from './components/CartModal/CartModal'
import Home from './components/Home/Home'
import SearchResults from './components/SearchResults/SearchResults'
import Confirmation from './components/Confirmation/Confirmation'
import fetchFood from './utilities/apiCalls'
import './App.css'

function App() {
  const [foodItemResult, setFoodItemResult] = useState({})
  const [cart, setCart] = useState([])
  const [cartNotif, setCartNotif] = useState("")
  const [purchasedItems, setPurchasedItems] = useState([])
  const [showModal, setShowModal] = useState(false)

  const getFoodItem = (foodItem) => {
    fetchFood(foodItem)
    .then(data => setFoodItemResult(data))
  }

  const addToCart = (foodItem) => {
    const foundFood = cart.find(({foodId}) => foodId === foodItem.foodId)

    if (!foundFood) {
      setCart([...cart, foodItem])
      setCartNotif("")
    } else (
      setCartNotif("This item is already in the cart.")
    )
  }

  const removeFromCart = (id) => {
    const filteredCart = cart.filter(({foodId}) => foodId !== id)
    setCart(filteredCart)
  }

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  const hideModal = () => {
    setShowModal(false)
  }

  const addToPurchasedItems = () => {
    setPurchasedItems([...cart])
    setCart([])
  }

  const removeFromPurchasedItems = () => {
    setPurchasedItems([])
  }

  const Results = () => {
    let params = useParams()

    return (
      <SearchResults
        item={params.item}
        cart={cart}
        foodItemResult={foodItemResult}
        getFoodItem={getFoodItem}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    )
  }

  return (
    <main>
      <Header
        getFoodItem={getFoodItem}
        removeFromPurchasedItems={removeFromPurchasedItems}
        toggleModal={toggleModal}
      />
      { showModal &&
        <CartModal cart={cart}
          addToPurchasedItems={addToPurchasedItems}
          hideModal={hideModal}
          removeFromCart={removeFromCart}
        />
      }
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/:item"
          element={<Results />}
        />
        < Route
          path="/confirmation"
          element={<Confirmation purchasedItems={purchasedItems} />}
        />
      </Routes>
      {/* <Footer /> */}
    </main>
  )
}

export default App
