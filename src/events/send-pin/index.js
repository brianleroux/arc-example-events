const arc = require('@architect/functions')
const data = require('@begin/data')
const twilio = require('twilio')

async function send({ phone }) {

  console.time('background-task')

  // create a token that expires in 5 minutes
  let nonce = await data.set({ 
    table: 'tokens', 
    ttl: (Date.now() / 1000) + (60 * 5), 
    phone
  })

  // send the pin
  let sid = process.env.TWILIO_SID
  let token = process.env.TWILIO_TOKEN
  let num = process.env.TWILIO_PHONE
  let client = twilio(sid, token)

  await client.messages.create({
    body: `here is your pin code: ${ nonce.key }`, 
    from: num, 
    to: phone,
  })

  console.timeEnd('background-task')
}

exports.handler = arc.events.subscribe(send)
