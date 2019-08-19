const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const { getNFTs } = require('./getNFTs.js')
const { getHumanity } = require('./getHumanity.js')

app.get('/', function(req, res) {
  res.send('ok')
})

app.get('/humanity/:twitterHandle', function(req, res) {
  getHumanity(req.params.twitterHandle).then((humanity) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.send(humanity)
  })
})

app.get('/nfts/:owner', function(req, res) {
  getNFTs(req.params.owner).then((nfts) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.send(nfts)
  })
})

app.listen(port, () => console.log(`listening on port ${port}!`))
