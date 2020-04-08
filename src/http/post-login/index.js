let arc = require('@architect/functions')

exports.handler = arc.http.async(route)

async function route(req) {
  await arc.events.publish({
    name: 'send-pin',
    payload: { req },
  })
  return {
    location: `/login?pin=${ Buffer.from(req.body.phone).toString('base64') }` 
  }
}
