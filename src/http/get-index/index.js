let arc = require('@architect/functions')
let secret = require('@architect/views/secret')

exports.handler = arc.http.async(index)

async function index(req) {
  if (req.session.account) {
    return {
      html: secret()
    }
  }
  else {
    return {
      location: '/login'
    }
  }
}
