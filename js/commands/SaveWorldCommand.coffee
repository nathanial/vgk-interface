Command = require './Command'

class SaveWorldCommand extends Command

  invoke: ->
    console.log("Started Save World")
    window.engine.call('SaveWorld').then =>
      console.log("Finished Save World")

module.exports = SaveWorldCommand
