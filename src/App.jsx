import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import SearchResults from './components/SearchResults/SearchResults'
import fetchFood from './utilities/apiCalls'
import { Routes, Route, useParams } from 'react-router-dom'

function App() {
  const [foodItemResult, setFoodItemResult] = useState({})

  const getFoodItem = (foodItem) => {
    fetchFood(foodItem)
    .then(data => setFoodItemResult(data))
  }

  const Results = () => {
    let params = useParams()

    return (
      <SearchResults
        foodItemResult={foodItemResult}
        item={params.item}
        getFoodItem={getFoodItem}
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
