var React = require('react');
var _ = require('lodash');
var HUD = require('./hud/HUD');
var $ = require('jquery');

window.engine = require('./engine/coherent');
var Mousetrap = require('mousetrap');
var Commands = require('./commands');

Commands.bind();

window.engine.on('Ready', function(){
  //window.engine.call("RegisterVoxelTypes", JSON.stringify(VoxelTypes));
});

$(function(){
  React.render(
    React.createElement(HUD, null),
    document.body
  );
});
