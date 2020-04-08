const arc = require('@architect/functions')
const data = require('@begin/data')

async function pin(req) {
  // get the token 
  let token = data.get({ table, key })
  if (token && req.body.phone === token.phone) {
    return {
      session: { phone: token.phone },
      location: '/'
    }
  }
  else {
    location: '/login?failed'
  }
}

exports.handler = arc.http.async(pin)
