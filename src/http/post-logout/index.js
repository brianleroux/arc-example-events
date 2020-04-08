const arc = require('@architect/functions')

/** architect/functions bakes in session support */
async function route(req) {
  return {
    session: {},
    location: `/` 
  }
}

exports.handler = arc.http.async(route)
