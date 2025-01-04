import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/recipes', (req: Request, res: Response) => {
  const recipes = [
    {
      id: 1,
      name: 'Spaghetti Bolognese',
      ingredients: ['spaghetti', 'meat', 'tomato sauce'],
    },
    {
      id: 2,
      name: 'Chicken Curry',
      ingredients: ['chicken', 'curry powder', 'coconut milk'],
    },
    {
      id: 3,
      name: 'Beef Tacos',
      ingredients: ['beef', 'taco shells', 'lettuce', 'cheese'],
    },
  ]

  res.json(recipes)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
})
