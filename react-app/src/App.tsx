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

  const categories = useMemo(() => {
    return recipes.reduce((acc, recipe) => {
      const category = recipe.category || 'Uncategorized'
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(recipe)
      return acc
    }, {} as Record<string, Recipe[]>)
  }, [recipes])

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
          {Object.entries(categories).map(([category, recipes]) => (
            <div key={category}>
              <h4 className='category-heading'>{category}</h4>

              {recipes.map(({ name }) => (
                <p
                  key={name}
                  onClick={() => setSelectedRecipe(name)}
                  className='recipe-name'
                >
                  {name === selectedRecipe ? <strong>{name}</strong> : name}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className='recipe-content'>
          {recipes && selectedRecipe ? (
            <RecipeList recipes={recipes} selectedRecipe={selectedRecipe} />
          ) : null}
        </div>
      </div>
    </div>
  )
})
