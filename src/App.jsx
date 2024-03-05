import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import SearchResults from './components/SearchResults/SearchResults'
import fetchFood from './utilities/apiCalls'
import { Routes, Route, useParams } from 'react-router-dom'

function App() {
  const [foodItemResult, setFoodItemResult] = useState({})
  const [cart, setCart] = useState([])
  const [cartNotif, setCartNotif] = useState("")

  const getFoodItem = (foodItem) => {
    fetchFood(foodItem)
    .then(data => setFoodItemResult(data))
  }

  const addToCart = (foodItem) => {
    const foundFood = cart.find(({foodId}) => foodId === foodItem.foodId)

    if (!foundFood) {
      setCart([...cart, foodItem])
    } else (
      setCartNotif("This item is already in the cart.")
    )
  }

  // const removeFromCart = () => {

  // }

  const Results = () => {
    let params = useParams()

    return (
      <SearchResults
        foodItemResult={foodItemResult}
        item={params.item}
        getFoodItem={getFoodItem}
        addToCart={addToCart}
      />
    )
  }

  return (
    <main>
      <Header getFoodItem={getFoodItem} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/:item"
          element={<Results />}
        />
      </Routes>
      {/* <Footer /> */}
    </main>
  )
}

export default App
