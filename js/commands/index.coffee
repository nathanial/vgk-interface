GlobalEventService = require '../GlobalEventService'

bind = ->
  Mousetrap.bind 'i', ->
    GlobalEventService.emitEvent('open-inventory')
  Mousetrap.bind 'esc', ->
    GlobalEventService.emitEvent('exit')

module.exports =
  bind: bind
