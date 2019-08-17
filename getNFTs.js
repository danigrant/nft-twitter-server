let fetch = require('node-fetch')

async function getNFTs(owner) {
  let res = await fetch(`https://api.opensea.io/api/v1/assets?owner=${owner}`)
  if (res.status === 200) {
    return await res.json()
  } else {
    return false
  }
}

module.exports = {getNFTs}
