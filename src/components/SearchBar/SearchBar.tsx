import { useState } from 'react'
import './SearchBar.css'
import { useNavigate } from 'react-router-dom'

interface SearchBarProps {
  getFoodItem: (foodItem: string) => void;
}

const SearchBar = ({ getFoodItem }: SearchBarProps) => {
  const [searchInput, setSearchInput] = useState<string>("")
  const navigate = useNavigate()

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchInput(e.target.value)
}

const searchItems: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
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

