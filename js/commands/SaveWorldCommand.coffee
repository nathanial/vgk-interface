Command = require './Command'

class SaveWorldCommand extends Command

  invoke: ->
    console.log("Save World")

module.exports = SaveWorldCommand
