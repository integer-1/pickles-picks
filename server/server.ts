import * as Path from 'node:path'

import reviewRoutes from './routes/reviews.ts'

import express from 'express'



const server = express()
server.use(express.json())

server.use('/api/v1/reviews', reviewRoutes)

server.use(express.static('public'))

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
