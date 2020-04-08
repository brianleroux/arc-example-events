const arc = require('@architect/functions')
const data = require('@begin/data')

async function pin(req) {

  // get the token 
  let token = await data.get({ 
    table: 'tokens', 
    key: req.body.pin 
  })

  let valid = token && token.phone === req.body.phone
  if (valid) {
    return {
      session: { phone: token.phone },
      location: '/'
    }
  }
  else {
    location: '/login?failed=true'
  }
}

exports.handler = arc.http.async(pin)
