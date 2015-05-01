Block = require '../items/Block'
VoxelTypes = require '../data/VoxelTypes'

class Player

  constructor: ->
    @backpack = {}
    row = 0
    column = 0
    for {name} in VoxelTypes
      @backpack[row+','+column] = new Block(name, 1)
      column += 1
      if column > 9
        row += 1
        column = 0
    @toolbar = {}

module.exports = Player
