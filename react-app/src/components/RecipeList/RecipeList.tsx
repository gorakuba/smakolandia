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
      {recipes.map(
        ({
          name,
          description,
          ingredients,
          preparation_time,
          preparation_steps,
        }) =>
          selectedRecipe === name ? (
            <RecipeCard
              key={name}
              name={name}
              description={description}
              ingredients={ingredients}
              preparation_time={preparation_time}
              preparation_steps={preparation_steps}
            />
          ) : null
      )}
    </div>
  )
}
