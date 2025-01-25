export type Ingredient = {
  name: string
  quantity: string
}

export type Recipe = {
  name: string
  description: string
  ingredients: Ingredient[]
  preparation_steps: string[]
  preparation_time: string
  servings: number
  category: string
}
