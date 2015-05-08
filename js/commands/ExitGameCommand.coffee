Command = require './Command'

class ExitGameCommand extends Command

  invoke: ->
    console.log("Exit Game")

module.exports = ExitGameCommand
