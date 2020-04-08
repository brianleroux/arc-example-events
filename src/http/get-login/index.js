let arc = require('@architect/functions')
let pin = require('@architect/views/pin')
let login = require('@architect/views/login')

exports.handler = arc.http.async(handler)

async function handler(req) {
  return {
    html: req.query.pin? pin(req.query.pin) : login()
  }
}
