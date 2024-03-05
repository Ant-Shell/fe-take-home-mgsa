import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import fetchFood from './utilities/apiCalls'

function App() {
  const [foodItemResult, setFoodItemResult] = useState([])

  const getFoodItem = (foodItem) => {
    fetchFood(foodItem)
    .then(data => setFoodItemResult(data))
  }

  return (
    <main>
      <Header getFoodItem={getFoodItem} />
      <Home />
      {/* <SearchResults /> */}
      {/* <Footer /> */}
    </main>
  )
}

export default App
