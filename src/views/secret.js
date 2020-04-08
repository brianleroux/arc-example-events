let layout = require('./layout')

module.exports = function secret() {
  return layout(`big secret here`)
}

