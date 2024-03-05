import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import SearchResults from './components/SearchResults/SearchResults'
import fetchFood from './utilities/apiCalls'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [foodItemResult, setFoodItemResult] = useState({})

  const getFoodItem = (foodItem) => {
    fetchFood(foodItem)
    .then(data => setFoodItemResult(data))
  }

  return (
    <main>
      <Header getFoodItem={getFoodItem} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/:item"
          element={<SearchResults foodItemResult={foodItemResult} />} 
        />
      </Routes>
      {/* <Footer /> */}
    </main>
  )
}

export default App
