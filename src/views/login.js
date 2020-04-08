let layout = require('./layout')

module.exports = function login() {
  return layout(`
    <h1>Please login</h1>
    <form action=/login method=post>
      <input type=tel name=phone required>
      <button>Send pin</button>
    </form>
  `)
}
