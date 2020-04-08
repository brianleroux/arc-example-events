let layout = require('./layout')

module.exports = function secret(phone) {
  return layout(`

    big secret here ! 

    <form action=/logout method=post>
      <button>Logout ${ phone }</button>
    </form>

  `)
}
