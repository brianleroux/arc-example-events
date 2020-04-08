let data = require('@begin/data')
let twilio = require('twilio')

exports.handler = async function subscribe(event) {

  // create a token that expires in 5 minutes
  let nonce = data.set({ 
    table: 'tokens', 
    ttl: (Date.now() / 1000) + (60 * 5), 
    phone: event.body.phone 
  })

  // send the pin
  let sid = process.env.TWILIO_SID
  let token = process.env.TWILIO_TOKEN
  let phone = process.env.TWILIO_PHONE
  let client = twilio(sid, token)

  return client.messages.create({
    body: `here is your pin code: ${ nonce.key }`, 
    from: phone, 
    to: event.body.phone
  })
}
