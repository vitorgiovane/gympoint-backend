import { Router } from 'express'

const routes = Router()

routes.get('/test', (request, response) => {
  response.json({ message: 'Hello, Gympoint!' })
})

export default routes
