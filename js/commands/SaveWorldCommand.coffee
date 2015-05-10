Command = require './Command'

class SaveWorldCommand extends Command
  invoke: ->
    @engine.call('SaveWorld')

module.exports = SaveWorldCommand
