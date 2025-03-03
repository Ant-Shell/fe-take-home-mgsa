import { useEffect } from 'react';
import FoodCard from '../FoodCard/FoodCard'
import './SearchResultsPage.css'

interface Food {
  foodId: string;
  label: string;
  image: string;
  quantity?: number;
}

interface FoodResult {
  food: Food;
}

interface SearchResultsPageProps {
  cart: Food[];
  item: string | undefined;
  errorMessage: string;
  getFoodItem: (foodItem: string) => void;
  addToCart: (foodItem: Food) => void;
  removeFromCart: (id: string) => void;
  foodResults: FoodResult[];
  increaseItemQuantity: (id: string) => void;
  decreaseItemQuantity: (id: string) => void;
}

const SearchResultsPage = ({ cart, item, errorMessage,
  getFoodItem, addToCart, removeFromCart, foodResults,
  increaseItemQuantity, decreaseItemQuantity }: SearchResultsPageProps) => {

  // itemizedResults functions gets rid of duplicate items
  const itemizedResults = foodResults.reduce<FoodResult[]>((acc, curr) => {
    let foundFood = acc.find(({ food }) => food.foodId === curr.food.foodId)
    if (!foundFood) {
      acc.push(curr)
    }
    return acc
  }, [])

  const resultsList = itemizedResults?.map((foodResult, index) => {
    const { food } = foodResult

    return (
      <FoodCard
        cart={cart}
        food={food}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        increaseItemQuantity={increaseItemQuantity}
        decreaseItemQuantity={decreaseItemQuantity}
        key={index}
      />
    )
  })

  useEffect(() => {
    if (!foodResults.length && !errorMessage) {
      if (item !== undefined) {
        getFoodItem(item)
      }
    }
  })

  return (
    <section className='search-results'>
      {( errorMessage ?
        <p>Error: {errorMessage}<br/>Please try again.</p>
        :
      <>
        <h2 className='search-results-banner'>
          Your results for <span className='search-results__text'>{item}</span>
        </h2>
        <div className='search-results-list-container'>
          {resultsList}
        </div>
      </>
      )}
    </section>
  )
}

export default SearchResultsPage

