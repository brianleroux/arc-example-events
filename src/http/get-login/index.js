const arc = require('@architect/functions')
const pin = require('@architect/views/pin')
const login = require('@architect/views/login')

async function handler(req) {
  return {
    html: req.query && req.query.pin? pin(req.query.pin) : login()
  }
}

exports.handler = arc.http.async(handler)
