import { useState } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import Header from './components/Header/Header'
import CartModal from './components/CartModal/CartModal'
import HomePage from './components/HomePage/HomePage'
import SearchResultsPage from './components/SearchResultsPage/SearchResultsPage'
import CheckoutPage from './components/CheckoutPage/CheckoutPage'
import ConfirmationPage from './components/ConfirmationPage/ConfirmationPage'
import fetchFood from './utilities/apiCalls'
import './App.css'

interface Food {
  foodId: string;
  label: string;
  image: string;
}

interface FoundFood {
  foodId: string;
  label: string;
  image: string;
  quantity: number;
}

interface FoodResult {
  food: Food;
}

function App() {
  const [cart, setCart] = useState<FoundFood[]>([])
  const [purchasedItems, setPurchasedItems] = useState<FoundFood[]>([])
  const [foodResults, setFoodResults] = useState<FoodResult[]>([])
  const [showModal, setShowModal] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>("")

  const getFoodItem = (foodItem: string) => {
    fetchFood(foodItem, setErrorMessage)
    .then(data => {
      setFoodResults(data.hints)
    })
  }

  const addToCart = (foodItem: FoundFood) => {
    const foundFood = cart.find(({foodId}) => foodId === foodItem.foodId)

    if (!foundFood) {
      foodItem.quantity = 1
      setCart([...cart, foodItem])
    }
  }

  const removeFromCart = (id: string) => {
    const filteredCart = cart.filter(({ foodId }) => foodId !== id)
    setCart(filteredCart)
  }

  const increaseItemQuantity = (id: string) => {
    const foundFood = cart.find(({ foodId }) => foodId === id)
    if (foundFood !== undefined) {
      foundFood.quantity++
      const foundFoodIndexNum = cart.indexOf(foundFood)
      const updatedCart = cart.toSpliced(foundFoodIndexNum, 1, foundFood)
      setCart(updatedCart)
    }
  }

  const decreaseItemQuantity = (id: string) => {
    const foundFood = cart.find(({ foodId }) => foodId === id)
    if (foundFood !== undefined) {
      foundFood.quantity--
      const foundFoodIndexNum = cart.indexOf(foundFood)
      const updatedCart = cart.toSpliced(foundFoodIndexNum, 1, foundFood)
      setCart(updatedCart)
    }
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
      <SearchResultsPage
        item={params.item}
        cart={cart}
        foodResults={foodResults}
        errorMessage={errorMessage}
        getFoodItem={getFoodItem}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        increaseItemQuantity={increaseItemQuantity}
        decreaseItemQuantity={decreaseItemQuantity}
      />
    )
  }

  return (
    <main className='main'>
      <Header
        getFoodItem={getFoodItem}
        removeFromPurchasedItems={removeFromPurchasedItems}
        toggleModal={toggleModal}
        hideModal={hideModal}
        cart={cart}
        showModal={showModal}
      />
      { showModal &&
        <CartModal cart={cart}
          hideModal={hideModal}
          removeFromCart={removeFromCart}
        />
      }
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/:item"
          element={<Results />}
        />
        <Route
          path="/checkout"
          element={<CheckoutPage
          addToPurchasedItems={addToPurchasedItems}
          hideModal={hideModal}
          cart={cart}
          />
        }
        />
        < Route
          path="/confirmation"
          element={<ConfirmationPage purchasedItems={purchasedItems} />}
        />
      </Routes>
    </main>
  )
}

export default App
