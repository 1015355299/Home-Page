const express = require('express')

const app = express()

const router = express.Router()

router.get('/api/:id', (req, res) => {
  setTimeout(() => {
    res.json({ id: req.params.id })
  }, (req.query && req.query.wait) || 10)
})

router.post('/api/:id', (req, res) => {
  setTimeout(() => {
    res.send(req.body)
  }, (req.query && req.query.wait) || 10)
})

app
  .use(require('cors')())
  .use(express.json())
  .use(router)
  .listen(5102, () => {
    console.log(`http://localhost:5102`)
  })
