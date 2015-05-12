GlobalEventService = require '../GlobalEventService'

bind = ->
  Mousetrap.bind 'i', ->
    GlobalEventService.emitEvent('open-inventory')
  Mousetrap.bind 'esc', ->
    GlobalEventService.emitEvent('exit')
  i = 0
  while i < 10
    do (i) ->
      Mousetrap.bind i.toString(), ->
        GlobalEventService.emitEvent('toolbox-select', [i])
    i += 1


module.exports =
  bind: bind
