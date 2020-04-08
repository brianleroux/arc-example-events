const arc = require('@architect/functions')
const secret = require('@architect/views/secret')

async function index(req) {

  console.log(req)

  if (req.session.phone) {
    return {
      html: secret(req.session.phone)
    }
  }
  else {
    return {
      location: '/login'
    }
  }
}

exports.handler = arc.http.async(index)
