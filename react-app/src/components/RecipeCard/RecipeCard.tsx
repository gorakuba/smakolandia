import { Recipe } from '../../types'
import './styles.css'

export const RecipeCard = ({
  name,
  description,
  ingredients,
  preparation_steps,
  preparation_time,
}: Omit<Recipe, 'servings' | 'category'>) => {
  return (
    <div className='recipe-card' key={name}>
      <h3>{`${name} (${preparation_time})`}</h3>
      <p>{description}</p>

      <h4>Składniki: </h4>
      {ingredients?.map(({ name, quantity }) => (
        <p key={name}>
          {name}: {quantity}
        </p>
      ))}

      <h4>Preparation Steps:</h4>
      {preparation_steps?.map((step, index) => (
        <p key={index}>{step}</p>
      ))}
    </div>
  )
}
