const APP_ID = import.meta.env.VITE_APP_API_ID
const API_KEY = import.meta.env.VITE_APP_API_KEY

type ErrorSetter = (message: string) => void;

interface Data {
  hints: Food[];
}

interface Food {
  foodId: string;
  label: string;
  image: string;
}

const fetchFood = async (foodItem: string, errorSetter: ErrorSetter): Promise<Data> => {
  const foodItemUrl = `https://api.edamam.com/api/food-database/v2/parser?app_id=${APP_ID}&app_key=${API_KEY}&ingr=${foodItem}&nutrition-type=cooking`

  try {
    const response = await fetch(foodItemUrl)
    if (!response.ok) {
      throw new Error(`Status ${String(response.status)}: ${response.statusText}`)
    }
    const data: Data = await response.json()

    if (!data.hints.length) {
      errorSetter("No results found.")
      throw new Error("No results found.")
    }

    return data
  }

  catch(error) {
    if (error instanceof Error) {
      console.log(error.message)
      errorSetter(error.message)
    } else {
      throw error
    }
  }
  throw new Error ("An error has occurred")
}

export default fetchFood