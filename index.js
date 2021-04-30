const express = require('express')

const app = express()

const router = express.Router()

router.get('/api/:id', (req, res) => {
  res.end(req.params.id)
})

router.post('/api/:id', (req, res) => {
  res.send(req.body)
})

app
  .use(require('cors')())
  .use(express.json())
  .use(router)
  .listen(5102, () => {
    console.log(`http://localhost:5102`)
  })
