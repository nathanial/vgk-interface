Block = require '../items/Block'
VoxelTypes = require '../data/VoxelTypes'

seed = 1
random = ->
  x = Math.sin(seed++) * 10000
  x - Math.floor(x)

class Player

  constructor: ->
    @backpack = {}
    row = 0
    column = 0
    for {name} in VoxelTypes
      @backpack[row+','+column] = new Block(name, (random() * 40).toFixed(0))
      column += 1
      if column > 9
        row += 1
        column = 0
    @toolbar = {}

module.exports = Player
