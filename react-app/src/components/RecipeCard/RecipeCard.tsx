import { Ingredient } from '../../types'
import './styles.css'

type Props = {
  name: string
  ingredients: Ingredient[]
}

export const RecipeCard = ({ name, ingredients }: Props) => {
  return (
    <div className='recipe-card' key={name}>
      <h2>{name}</h2>
      <h3>Składniki: </h3>

      {ingredients?.map(({ name, quantity }) => (
        <p key={name}>
          {name}: {quantity}
        </p>
      ))}
    </div>
  )
}
