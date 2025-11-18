import express from 'express'
import * as Path from 'node:path'
import * as fs from 'node:fs'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yaml'

import spamRoutes from './routes/spams.ts'
import ratings from './routes/ratings.ts'
import quiz from './routes/quiz.ts'
import comments from './routes/comments.ts'
import about from './routes/about.ts'
import users from './routes/users.ts'

const server = express()

server.use(express.json())

// Load OpenAPI documentation
const openApiPath = Path.resolve('./openapi.yaml')
const openApiFile = fs.readFileSync(openApiPath, 'utf8')
const openApiDocument = YAML.parse(openApiFile)

// Swagger UI documentation route
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocument))

server.use('/api/v1/spams', spamRoutes)
server.use('/api/v1/ratings', ratings)
server.use('/api/v1/quiz', quiz)
server.use('/api/v1/comments', comments)
server.use('/api/v1/about', about)
server.use('/api/v1/users', users)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
