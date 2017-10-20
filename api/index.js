const express = require('express')

const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
var app = express()

router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

router.post('/login', (req, res) => {
  if (req.body.username === 'demo' && req.body.password === 'demo') {
    req.session.authUser = { username: 'demo' }

    return res.json({ username: 'demo' })
  }

  res.status(401).json({ message: 'Bad credentials' })
})

router.post('/logout', (req, res) => {
  delete req.session.authUser
  res.json({ ok: true })
})

module.exports = {
  path: '/api',
  handler: router
}
