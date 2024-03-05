import { useState } from 'react'
import PropTypes from 'prop-types'
import './SearchBar.css'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({ getFoodItem }) => {
  const [searchInput, setSearchInput] = useState("")
  const navigate = useNavigate()

  const handleInput = (e) => {
    setSearchInput(e.target.value)
}

const searchItems = (e) => {
  if (e.key === "Enter") {
    getFoodItem(searchInput)
    setSearchInput("")
    navigate(`/${searchInput}`)
  }
}

  return (
    <div className='input'>
      <input
        type="text"
        placeholder="Search Products"
        value={searchInput}
        onChange={(e) => handleInput(e)}
        onKeyDown={(e) => searchItems(e)}
        maxLength={250}
      />
    </div>
  )
}

export default SearchBar

SearchBar.propTypes = {
  getFoodItem: PropTypes.func
}
