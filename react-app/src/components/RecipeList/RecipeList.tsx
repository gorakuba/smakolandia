import { Recipe } from '../../types'
import { RecipeCard } from '../RecipeCard'
import './styles.css'

type Props = {
  recipes: Recipe[]
  selectedRecipe: Recipe['name']
}

export const RecipeList = ({ recipes, selectedRecipe }: Props) => {
  return (
    <div className='recipe-list'>
      {recipes.map(({ name, ingredients }) =>
        selectedRecipe === name ? (
          <RecipeCard key={name} name={name} ingredients={ingredients} />
        ) : null
      )}
    </div>
  )
}
