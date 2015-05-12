var React = require('react');
var VoxelTypes = require('./data/VoxelTypes');
var _ = require('lodash');
var HUD = require('./hud/HUD');
var $ = require('jquery');

window.engine = require('./engine/coherent');
var Mousetrap = require('mousetrap');
var Commands = require('./commands');

Commands.bind();

window.engine.on('Ready', function(){
  _.each(VoxelTypes, function(VoxelType){
    window.engine.call("RegisterVoxelType", JSON.stringify(VoxelType));
  });
  window.engine.call("RegistrationFinished");
});

$(function(){
  React.render(
    React.createElement(HUD, null),
    document.body
  );
});
