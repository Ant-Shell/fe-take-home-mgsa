const APP_ID = import.meta.env.VITE_APP_API_ID
const API_KEY = import.meta.env.VITE_APP_API_KEY

const fetchFood = async (foodItem) => {
  const foodItemUrl = `https://api.edamam.com/api/food-database/v2/parser?app_id=${APP_ID}&app_key=${API_KEY}&ingr=${foodItem}&nutrition-type=cooking`

  try {
    const response = await fetch(foodItemUrl)
    if (!response.ok) {
      throw new Error(response.status)
    }
    const data = await response.json()
    return data
  }

  catch(error) {
    console.log(error.message)
  }
}

export default fetchFood