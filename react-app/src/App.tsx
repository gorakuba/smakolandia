import { hot } from 'react-hot-loader/root'
import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

type Recipe = {
  id: number
  name: string
  ingredients: string[]
}

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  useEffect(() => {
    axios
      .get('/api/recipes')
      .then((response) => {
        setRecipes(response.data)
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error)
      })
  }, [])

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h2>{recipe.name}</h2>
            <p>Ingredients: {recipe.ingredients.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default hot(App)
