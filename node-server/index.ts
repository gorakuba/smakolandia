import express, { Request, Response } from 'express'
import cors from 'cors'
import path from 'path'
import fs from 'fs/promises'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/recipes', async (req: Request, res: Response) => {
  const files = [
    'deser1.json',
    'deser2.json',
    'deser3.json',
    'deser4.json',
    'deser5.json',
    'kolacja1.json',
    'kolacja2.json',
    'kolacja3.json',
    'obiad1.json',
    'obiad2.json',
    'obiad3.json',
    'obiad4.json',
    'obiad5.json',
    'obiad6.json',
    'obiad7.json',
    'sniadanie1.json',
    'sniadanie2.json',
    'sniadanie3.json',
    'sniadanie4.json',
    'sniadanie5.json',
  ]

  const allData = []
  const folderPath = path.join(__dirname, 'data')

  for (const file of files) {
    if (path.extname(file) === '.json') {
      const filePath = path.join(folderPath, file)
      const content = await fs.readFile(filePath, 'utf-8')
      const data = JSON.parse(content)

      allData.push(data)
    }
  }

  res.json(allData)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
})
