exports.handler = arc.http.async(pin)

async function pin(req) {
  // get the token 
  let token = data.get({ table, key })
  if (token && req.params.phone === token.phone) {
    return {
      session: { account: { phone }},
      location: '/'
    }
  }
  else {
    location: '/login?failed'
  }
}
