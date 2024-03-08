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
  const [foodItemName, setFoodItemName] = useState('')
  const [cart, setCart] = useState([])
  const [purchasedItems, setPurchasedItems] = useState([])
  const [foodResults, setFoodResults] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const getFoodItem = (foodItem) => {
    fetchFood(foodItem, setErrorMessage)
    .then(data => {
      setFoodItemName(data.text)
      setFoodResults(data.hints)
    })
  }

  const addToCart = (foodItem) => {
    const foundFood = cart.find(({foodId}) => foodId === foodItem.foodId)

    if (!foundFood) {
      setCart([...cart, foodItem])
    }
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
        foodItemName={foodItemName}
        foodResults={foodResults}
        errorMessage={errorMessage}
        getFoodItem={getFoodItem}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        setFoodResults={setFoodResults}
      />
    )
  }

  return (
    <main className='main'>
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
    </main>
  )
}

export default App
