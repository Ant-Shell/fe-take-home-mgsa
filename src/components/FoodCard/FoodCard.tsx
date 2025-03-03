import QuantityUpdater from '../QuantityUpdater/QuantityUpdater'
import notAvailable from '../../assets/img-not-found.svg'
import './FoodCard.css'

interface Food {
  foodId: string;
  label: string;
  image: string;
  quantity?: number;
}

interface FoodCardProps {
  cart: Food[];
  food: Food;
  addToCart: (foodItem: Food) => void;
  removeFromCart: (id: string) => void;
  increaseItemQuantity: (id: string) => void;
  decreaseItemQuantity: (id: string) => void;
}

const FoodCard = ({ cart, food, addToCart, removeFromCart,
  increaseItemQuantity, decreaseItemQuantity }: FoodCardProps) => {
  const {foodId, label, image} = food

  const addSelectionToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    addToCart(food)
  }

  const showButtonType = (id: string) => {
    const foundFood = cart.find(({ foodId }) => foodId === id)
    if (foundFood) {
      return (
        <QuantityUpdater
          removeFromCart={removeFromCart}
          increaseItemQuantity={increaseItemQuantity}
          decreaseItemQuantity={decreaseItemQuantity}
          quantity={foundFood.quantity}
          id={foundFood.foodId}
        />
      )
    } else {
      return (
        <button className='food-card-add-item-button' onClick={(e) => addSelectionToCart(e)}>
          Add to Cart
        </button>
      )
    }
  }

  return (
    <section className='food-card'>
        <img className='food-card-image' src={image ? image : notAvailable} alt={label}/>
        <p>{label}</p>
      { showButtonType(foodId) }
    </section>
  )
}

export default FoodCard

