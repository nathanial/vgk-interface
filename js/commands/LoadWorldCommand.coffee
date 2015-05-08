Command = require './Command'

class LoadWorldCommand extends Command
  invoke: ->
    console.log("Load World")

module.exports = LoadWorldCommand
