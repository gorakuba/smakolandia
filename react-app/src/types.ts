export type Ingredient = {
  name: string
  quantity: string
}

export type Recipe = {
  name: string
  description: string
  ingredients: Ingredient[]
  preparationSteps: string[]
  preparationTime: string
  servings: number
  category: string
}
