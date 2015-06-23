Block = require '../items/Block'
EventEmitter = require 'wolfy87-eventemitter'

seed = 1
random = ->
  x = Math.sin(seed++) * 10000
  x - Math.floor(x)

class Player extends EventEmitter

  constructor: ->
    super()
    @backpack = {}
    row = 0
    column = 0
    VoxelTypes = []
    for {name} in VoxelTypes
      @backpack[row+','+column] = new Block(name, (random() * 40).toFixed(0))
      column += 1
      if column > 19
        row += 1
        column = 0
    @toolbox = {}

module.exports = Player
