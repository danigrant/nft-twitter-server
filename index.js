const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const {getNFTs} = require('./getNFTs.js')

app.get('/', function(req, res) {
  res.send('ok')
})

app.get('/nfts/:owner', function(req, res) {
  getNFTs(req.params.owner).then((nfts) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.send(nfts)
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
