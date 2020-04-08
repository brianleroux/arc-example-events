const arc = require('@architect/functions')

async function login(req) {
  // publish the request payload directly to sns
  await arc.events.publish({
    name: 'send-pin',
    payload: { req },
  })
  // redirect to the pin screen
  return {
    location: `/login?pin=${ Buffer.from(req.body.phone).toString('base64') }` 
  }
}

exports.handler = arc.http.async(login)
