import express, { NextFunction, Request, Response } from 'express'
import path from 'path'

const app = express()

// This code makes sure that any request that does not matches a static file
// in the build folder, will just serve index.html. Client side routing is
// going to make sure that the correct content will be loaded.
app.use((req: Request, res: Response, next: NextFunction) => {
  if (/(.ico|.js|.css|.jpg|.png|.map)$/i.test(req.path)) {
    next()
  } else {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
    res.header('Expires', '-1')
    res.header('Pragma', 'no-cache')
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  }
})

app.use(express.static(path.join(__dirname, 'build')))

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
})

/**
 * Webpack HMR Activation
 */

type ModuleId = string | number

interface WebpackHotModule {
  hot?: {
    data: any
    accept(
      dependencies: string[],
      callback?: (updatedDependencies: ModuleId[]) => void
    ): void
    accept(dependency: string, callback?: () => void): void
    accept(errHandler?: (err: Error) => void): void
    dispose(callback: (data: any) => void): void
  }
}

declare const module: WebpackHotModule

if (module.hot) {
  module.hot.accept()
  module.hot.dispose(() => server.close())
}
