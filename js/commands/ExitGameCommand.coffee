Command = require './Command'

class ExitGameCommand extends Command
  invoke: ->
    @engine.call("ExitGame")

module.exports = ExitGameCommand
