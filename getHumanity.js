let fetch = require('node-fetch')

async function getHumanity(twitterHandle) {
  let query = `
  query {
    humans(where: {username: "${twitterHandle}"}) {
      applicant
      username
    }
  }`

  let res = await fetch('https://api.thegraph.com/subgraphs/name/danigrant/humanity-dao', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
  })

  if (res.status === 200) {
    let json = await res.json()
    console.log(json);
    return json
  } else {
    return false
  }
}

module.exports = { getHumanity }
