import { hot } from 'react-hot-loader/root'
import { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { Header, RecipeCard, RecipeList } from './components'
import './common-styles.css'
import { Recipe } from './types'

export const App = hot(() => {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  const [selectedRecipe, setSelectedRecipe] = useState<Recipe['name'] | null>(
    null
  )

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

  useEffect(() => {
    setSelectedRecipe(recipes[0]?.name)
  }, [recipes])

  return (
    <div className='app'>
      <Header />

      <div className='recipe-wrapper'>
        <div className='recipe-menu'>
          <h3>Menu:</h3>

          {recipes.map(({ name }) => (
            <p key={name} onClick={() => setSelectedRecipe(name)}>
              {name}
            </p>
          ))}
        </div>

        <div className='recipe-content'>
          {recipes && selectedRecipe ? (
            <RecipeList recipes={recipes} selectedRecipe={selectedRecipe} />
          ) : null}
          {/* {selectedRecipe === name ? 
            <RecipeCard/>
            : null} */}
        </div>
      </div>
    </div>
  )
})
