Command = require './Command'

class NewWorldCommand extends Command
  invoke: ->
    @engine.call("NewWorld")

module.exports = NewWorldCommand
