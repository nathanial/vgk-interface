Command = require './Command'

class NewWorldCommand extends Command

  invoke: ->
    console.log("New World")

module.exports = NewWorldCommand
