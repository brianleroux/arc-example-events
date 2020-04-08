let layout = require('./layout')

module.exports = function pin(pin64) {
  return layout(`
    <form action=/pin method=post>
      <input type=hidden name=phone value=${ Buffer.from(pin64, 'base64').toString() }>
      <input type=text name=pin required>
      <button>Login</button>
    </form>
  `)
}

