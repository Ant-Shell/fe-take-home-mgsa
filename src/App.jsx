import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import fetchFood from './utilities/apiCalls'

function App() {
  const [foodItem, setFoodItem] = useState([])

  const getFoodItem = (e) => {
    e.preventDefault()
    fetchFood()
    .then(data => setFoodItem(data))
  }

  return (
    <main>
      <Header />
      <Home />
      {/* <SearchResults /> */}
      {/* <Footer /> */}
    </main>
  )
}

export default App
