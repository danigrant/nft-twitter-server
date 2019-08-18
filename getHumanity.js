let fetch = require('node-fetch')

async function getHumanity(twitterHandle) {
  let query = `
  query {
    Human(username: "_Sinan_W_") {
      applicant
      username
    }
  }`

  let url = 'https://api.thegraph.com/subgraphs/name/danigrant/humanity-dao'

  let opts = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
  }

  let res = await fetch(url, ops)
  console.log(await res.json());
  if (res.status === 200) {
    return await res.json()
  } else {
    return false
  }
}

module.exports = { getHumanity }
