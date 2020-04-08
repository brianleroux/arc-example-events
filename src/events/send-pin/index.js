let data = require('@begin/data')
let twilio = require('twilio')

exports.handler = async function subscribe(event) {

  // create a token that expires in 5 minutes
  let nonce = data.set({ 
    table: 'tokens', 
    ttl: (Date.now() / 1000) + (60 * 5), 
    phone: event.body.phone 
  })

  console.log('got nonce', nonce)

  // send the pin
  let sid = process.env.TWILIO_SID
  let token = process.env.TWILIO_TOKEN
  let phone = process.env.TWILIO_PHONE
  let client = twilio(sid, token)

  console.log('infos', {sid, token, phone})

  let result = await client.messages.create({
    body: `here is your pin code: ${ nonce.key }`, 
    from: phone, 
    to: event.body.phone
  })
  console.log(result)
}
